import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Home as HomeIcon, 
  User, 
  Phone, 
  Scissors, 
  Sparkles, 
  AlertCircle,
  Copy,
  Check,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Salon, ServiceItem, BookingRequest } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  salon: Salon | null;
  allSalons: Salon[];
  initialService?: ServiceItem;
  onBookingSuccess: (booking: BookingRequest) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  salon,
  allSalons,
  initialService,
  onBookingSuccess
}) => {
  const [selectedSalonId, setSelectedSalonId] = useState<string>(salon?.id || (allSalons[0]?.id ?? ''));
  const currentSalon = allSalons.find(s => s.id === selectedSalonId) || salon || allSalons[0];

  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || (currentSalon?.services[0]?.id ?? '')
  );
  const [serviceType, setServiceType] = useState<'in_salon' | 'at_home'>('in_salon');
  const [selectedStylistName, setSelectedStylistName] = useState<string>('اولین آرایشگر در دسترس');
  const [selectedDate, setSelectedDate] = useState<string>('شنبه ۱۲ آبان ۱۴۰۳');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('ساعت ۱۱:۰۰ صبح');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [addressOrNotes, setAddressOrNotes] = useState<string>('');
  const [reminderEnabled, setReminderEnabled] = useState<boolean>(true);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [createdBooking, setCreatedBooking] = useState<BookingRequest | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  useEffect(() => {
    if (salon) {
      setSelectedSalonId(salon.id);
      if (initialService) {
        setSelectedServiceId(initialService.id);
        if (initialService.supportsAtHome && salon.isAtHomeAvailable) {
          // let user choose
        }
      } else if (salon.services[0]) {
        setSelectedServiceId(salon.services[0].id);
      }
    }
  }, [salon, initialService]);

  if (!isOpen || !currentSalon) return null;

  const currentService = currentSalon.services.find(s => s.id === selectedServiceId) || currentSalon.services[0];

  const dateOptions = [
    'شنبه ۱۲ آبان ۱۴۰۳',
    'یکشنبه ۱۳ آبان ۱۴۰۳',
    'دوشنبه ۱۴ آبان ۱۴۰۳',
    'سه‌شنبه ۱۵ آبان ۱۴۰۳',
    'چهارشنبه ۱۶ آبان ۱۴۰۳',
    'پنج‌شنبه ۱۷ آبان ۱۴۰۳',
  ];

  const timeOptions = [
    'ساعت ۱۰:۰۰ صبح',
    'ساعت ۱۱:۳۰ صبح',
    'ساعت ۱۲:۴۵ ظهر',
    'ساعت ۱۶:۰۰ عصر',
    'ساعت ۱۷:۳۰ عصر',
    'ساعت ۱۹:۰۰ غروب',
    'ساعت ۲۰:۱۵ شب'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('لطفاً نام و شماره تماس خود را وارد نمایید.');
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const bookingCode = `ZB-${randomNum}`;

    const newBooking: BookingRequest = {
      id: `booking-${Date.now()}`,
      bookingCode,
      salonId: currentSalon.id,
      salonName: currentSalon.name,
      serviceId: currentService?.id || 'service-general',
      serviceName: currentService?.name || 'خدمت عمومی',
      price: currentService?.price || currentSalon.minPrice,
      serviceType,
      stylistName: selectedStylistName,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      dateStr: selectedDate,
      timeSlot: selectedTimeSlot,
      addressOrNotes: addressOrNotes.trim() || (serviceType === 'at_home' ? 'آدرس در یزد' : 'بدون توضیحات اضافی'),
      status: 'confirmed',
      createdAt: 'امروز',
      reminderEnabled
    };

    setCreatedBooking(newBooking);
    setIsSuccess(true);
    onBookingSuccess(newBooking);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleCopyCode = () => {
    if (createdBooking) {
      navigator.clipboard.writeText(createdBooking.bookingCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleResetModal = () => {
    setIsSuccess(false);
    setCreatedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                ثبت رزرو آزمایشی نوبت زیبانو
              </h2>
              <p className="text-xs text-slate-500">
                انتخاب خدمت، زمان، نوع مراجعه و دریافت کد رهگیری آنی نوبت
              </p>
            </div>
          </div>

          <button
            onClick={handleResetModal}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Success Screen OR Form */}
        {isSuccess && createdBooking ? (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-18 h-18 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                درخواست رزرو با موفقیت ثبت شد
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                نوبت شما در زیبانو قطعی شد!
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                اطلاعات رزرو در بخش «نوبت‌های من» ذخیره شد و پیامک شبیه‌سازی‌شده تایید ارسال گردید.
              </p>
            </div>

            {/* Booking Code Card */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white max-w-sm mx-auto flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-400">کد رهگیری نوبت شما:</p>
                <p className="text-xl font-black text-amber-400 tracking-wider font-mono">
                  {createdBooking.bookingCode}
                </p>
              </div>
              <button
                onClick={handleCopyCode}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'کپی شد' : 'کپی کد'}</span>
              </button>
            </div>

            {/* Details Summary Card */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-right space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">آرایشگاه انتخابی:</span>
                <span className="font-bold text-slate-900">{createdBooking.salonName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">خدمت مورد نظر:</span>
                <span className="font-bold text-rose-700">{createdBooking.serviceName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">نوع خدمت:</span>
                <span className="font-bold text-slate-900">
                  {createdBooking.serviceType === 'at_home' ? '🏡 خدمت در محل (منزل / مرکز درمانی)' : '🏢 مراجعه حضوری به سالن'}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">زمان نوبت:</span>
                <span className="font-bold text-slate-900">{createdBooking.dateStr} — {createdBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">مشتری و شماره تماس:</span>
                <span className="font-medium text-slate-800">{createdBooking.customerName} ({createdBooking.customerPhone})</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">مبلغ قابل پرداخت در محل:</span>
                <span className="font-black text-rose-700 text-base">{createdBooking.price.toLocaleString('fa-IR')} تومان</span>
              </div>
            </div>

            {/* Simulated SMS banner */}
            <div className="p-3.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs text-right leading-relaxed flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>پیامک آزمایشی زیبانو:</strong> سلام {createdBooking.customerName} عزیز، نوبت شما برای {createdBooking.serviceName} در {createdBooking.salonName} برای {createdBooking.dateStr} {createdBooking.timeSlot} تایید شد. کد رهگیری: {createdBooking.bookingCode}
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={handleResetModal}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition"
              >
                بستن و ادامه جستجو
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Salon Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-rose-600" />
                <span>انتخاب آرایشگاه:</span>
              </label>
              <select
                value={selectedSalonId}
                onChange={(e) => setSelectedSalonId(e.target.value)}
                className="w-full text-xs sm:text-sm font-bold p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-rose-500 outline-none"
              >
                {allSalons.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.city}، {s.neighborhood} - {s.typeLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-rose-600" />
                <span>انتخاب خدمت و تعرفه:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 border border-slate-100 rounded-xl">
                {currentSalon.services.map(srv => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition flex flex-col justify-between ${
                        isSelected 
                          ? 'border-rose-600 bg-rose-50/70 font-bold' 
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-slate-900">{srv.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-rose-600 shrink-0" />}
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100/80 text-[11px]">
                        <span className="text-slate-400">{srv.durationMinutes} دقیقه</span>
                        <span className="text-rose-700 font-black">{srv.price.toLocaleString('fa-IR')} تومان</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Service Location: In-Salon vs At-Home */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                مکان دریافت خدمت:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('in_salon')}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                    serviceType === 'in_salon'
                      ? 'border-rose-600 bg-rose-50 text-rose-800'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>مراجعه حضوری به سالن</span>
                </button>

                <button
                  type="button"
                  disabled={!currentSalon.isAtHomeAvailable}
                  onClick={() => setServiceType('at_home')}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 ${
                    !currentSalon.isAtHomeAvailable
                      ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed opacity-60'
                      : serviceType === 'at_home'
                      ? 'border-amber-600 bg-amber-50 text-amber-900'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer'
                  }`}
                >
                  <HomeIcon className="w-4 h-4" />
                  <span>خدمات در محل (منزل)</span>
                </button>
              </div>

              {serviceType === 'at_home' && (
                <p className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-xl border border-amber-200 mt-2 leading-relaxed">
                  ✓ این سالن دارای مجوز اعزام کادر به منزل در یزد است. لطفاً آدرس دقیق خود را در کادر توضیحات وارد نمایید.
                </p>
              )}
            </div>

            {/* Stylist Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>انتخاب آرایشگر:</span>
              </label>
              <select
                value={selectedStylistName}
                onChange={(e) => setSelectedStylistName(e.target.value)}
                className="w-full text-xs font-medium p-2.5 rounded-xl border border-slate-200 bg-slate-50"
              >
                <option value="اولین آرایشگر در دسترس">اولین آرایشگر در دسترس (سریع‌ترین نوبت)</option>
                {currentSalon.stylists.map(st => (
                  <option key={st.id} value={st.name}>
                    {st.name} ({st.role} — {st.experienceYears} سال سابقه)
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time slots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>تاریخ مراجعه:</span>
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                >
                  {dateOptions.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>ساعت نوبت:</span>
                </label>
                <select
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                >
                  {timeOptions.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Customer Information */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800">اطلاعات هماهنگی مشتری:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">نام و نام خانوادگی:</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: مریم کریمی"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">شماره تماس (جهت پیامک نوبت):</label>
                  <input
                    type="tel"
                    required
                    placeholder="مثال: ۰۹۱۳۱۲۳۴۵۶۷"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">
                  {serviceType === 'at_home' ? 'آدرس دقیق محل خدمت در یزد:' : 'توضیحات تکمیلی یا مدل درخواستی (اختیاری):'}
                </label>
                <textarea
                  rows={2}
                  placeholder={serviceType === 'at_home' ? 'یزد، محله صفائیه، خیابان...' : 'هرگونه توضیح در خصوص مدل یا حساسیت پوستی...'}
                  value={addressOrNotes}
                  onChange={(e) => setAddressOrNotes(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
                ></textarea>
              </div>

              {/* SMS Reminder checkbox */}
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={reminderEnabled}
                  onChange={(e) => setReminderEnabled(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-rose-500"
                />
                <span>ارسال پیامک یادآوری ۱ ساعت قبل از نوبت به شماره بالا</span>
              </label>
            </div>

            {/* Total and Submit */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-slate-500">مبلغ نهایی خدمت:</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-rose-700">
                    {currentService ? currentService.price.toLocaleString('fa-IR') : currentSalon.minPrice.toLocaleString('fa-IR')}
                  </span>
                  <span className="text-xs text-slate-500">تومان (پرداخت در محل)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs sm:text-sm font-black shadow-md shadow-rose-200 transition cursor-pointer"
                >
                  تأیید و ثبت نهایی رزرو
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

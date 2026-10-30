import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Home as HomeIcon, 
  Building, 
  CheckCircle2, 
  Trash2, 
  Bell, 
  Scissors, 
  ExternalLink,
  Copy
} from 'lucide-react';
import { BookingRequest } from '../types';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingRequest[];
  onCancelBooking: (id: string) => void;
  onOpenDirectory: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
  onOpenDirectory
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                نوبت‌های ثبت‌شده من در زیبانو
              </h2>
              <p className="text-xs text-slate-500">
                مشاهده وضعیت، زمان مراجعه، کد رهگیری و مدیریت رزروها
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          {bookings.length === 0 ? (
            <div className="p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                شما هنوز هیچ نوبتی رزرو نکرده‌اید
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                می‌توانید آرایشگاه مورد علاقه خود را در لیست جستجو پیدا کرده و در ۲ دقیقه نوبت رزرو کنید.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenDirectory();
                }}
                className="px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition"
              >
                جستجو و رزرو آرایشگاه
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition space-y-3 relative group"
                >
                  {/* Status & Code */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>نوبت تأیید شده</span>
                      </span>
                      {b.serviceType === 'at_home' ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 flex items-center gap-1">
                          <HomeIcon className="w-3 h-3" />
                          <span>خدمت در محل (منزل)</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          <span>مراجعه به سالن</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-slate-400 font-mono">کد:</span>
                      <span className="font-bold text-slate-900 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                        {b.bookingCode}
                      </span>
                    </div>
                  </div>

                  {/* Salon & Service */}
                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-base">
                      {b.salonName}
                    </h4>
                    <p className="text-xs text-rose-700 font-bold flex items-center gap-1">
                      <Scissors className="w-3.5 h-3.5" />
                      <span>{b.serviceName}</span>
                    </p>
                  </div>

                  {/* Date, Time, Stylist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>تاریخ: <strong>{b.dateStr}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>ساعت: <strong>{b.timeSlot}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">آرایشگر:</span>
                      <span>{b.stylistName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">مبلغ نهایی:</span>
                      <strong className="text-slate-900">{b.price.toLocaleString('fa-IR')} تومان</strong>
                    </div>
                  </div>

                  {/* Address or Notes if present */}
                  {b.addressOrNotes && (
                    <div className="text-[11px] text-slate-500 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100">
                      <strong>آدرس / توضیحات:</strong> {b.addressOrNotes}
                    </div>
                  )}

                  {/* Reminder & Actions */}
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                      <Bell className="w-3.5 h-3.5 text-amber-600" />
                      <span>یادآوری پیامکی: {b.reminderEnabled ? 'فعال (شماره ' + b.customerPhone + ')' : 'غیرفعال'}</span>
                    </div>

                    <button
                      onClick={() => onCancelBooking(b.id)}
                      className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition p-1 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>لغو این نوبت</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>اطلاعات نوبت‌ها به صورت آزمایشی در حافظه مرورگر شما ذخیره شده است.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};

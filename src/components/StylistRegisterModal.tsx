import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Building, 
  MapPin, 
  Phone, 
  FileCheck, 
  CheckCircle2, 
  Home as HomeIcon, 
  Scissors, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StylistApplication, SalonType } from '../types';

interface StylistRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplicationSubmitted: (app: StylistApplication) => void;
}

export const StylistRegisterModal: React.FC<StylistRegisterModalProps> = ({
  isOpen,
  onClose,
  onApplicationSubmitted
}) => {
  const [salonName, setSalonName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [phone, setPhone] = useState('');
  const [neighborhood, setNeighborhood] = useState('صفائیه');
  const [salonType, setSalonType] = useState<SalonType>('women');
  const [providesAtHome, setProvidesAtHome] = useState(false);
  const [licenseNumber, setLicenseNumber] = useState('');
  const [servicesSummary, setServicesSummary] = useState('');

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salonName.trim() || !managerName.trim() || !phone.trim()) {
      alert('لطفاً فیلدهای الزامی را پر نمایید.');
      return;
    }

    const application: StylistApplication = {
      id: `app-${Date.now()}`,
      salonName: salonName.trim(),
      managerName: managerName.trim(),
      phone: phone.trim(),
      city: 'یزد',
      neighborhood,
      salonType,
      providesAtHome,
      licenseNumber: licenseNumber.trim() || 'در دست اقدام',
      servicesSummary: servicesSummary.trim() || 'خدمات عمومی آرایشگری',
      submittedAt: '۱۴۰۳/۰۸/۱۲'
    };

    onApplicationSubmitted(application);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                پیوستن به زیبانو | ثبت‌نام آرایشگران و سالن‌ها
              </h2>
              <p className="text-xs text-slate-500">
                معرفی سالن، نمایش نمونه‌کارها و جذب مشتریان جدید در شهر یزد
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                درخواست با موفقیت ثبت شد
              </span>
              <h3 className="text-xl font-black text-slate-900">
                همکار گرامی، به خانواده زیبانو خوش آمدید!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                اطلاعات سالن شما در پایگاه پایلوت شهر یزد ثبت گردید. کارشناسان پشتیبانی زیبانو جهت احراز مجوز و بارگذاری آلبوم نمونه‌کارهای شما با شماره <strong>{phone}</strong> تماس خواهند گرفت.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-right text-xs space-y-2">
              <p className="font-bold text-slate-800">خلاصه درخواست شما:</p>
              <div className="flex justify-between text-slate-600">
                <span>نام سالن:</span>
                <strong className="text-slate-900">{salonName}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>مدیر سالن:</span>
                <strong className="text-slate-900">{managerName}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>ارائه خدمت در محل:</span>
                <strong className="text-slate-900">{providesAtHome ? 'بله (اعزام به منزل)' : 'خیر (فقط سالن)'}</strong>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
            >
              بستن پنجره
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900 leading-relaxed">
              <strong>مزایای پیوستن به زیبانو:</strong> تقویم دیجیتال نوبت‌ها، رهایی از دایرکت‌های تکراری قیمت، نمایش نمونه‌کارها با تفکیک مدل و دسترسی به بازار خدمات زیبایی در محل.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">نام آرایشگاه / سالن:</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: سالن زیبایی پریناز"
                  value={salonName}
                  onChange={(e) => setSalonName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">نام و نام خانوادگی مدیر:</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: پریناز افشار"
                  value={managerName}
                  onChange={(e) => setManagerName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">شماره تماس همراه:</label>
                <input
                  type="tel"
                  required
                  placeholder="مثال: ۰۹۱۳۱۲۳۴۵۶۷"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">محله استقرار در یزد:</label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:border-rose-500 outline-none"
                >
                  <option value="صفائیه">صفائیه</option>
                  <option value="قاسم‌آباد">قاسم‌آباد</option>
                  <option value="بلوار جمهوری">بلوار جمهوری</option>
                  <option value="میدان آزادی">میدان آزادی</option>
                  <option value="خیابان ملاصدرا">خیابان ملاصدرا</option>
                  <option value="بلوار شهید قندی">بلوار شهید قندی</option>
                  <option value="بلوار دانشجو">بلوار دانشجو</option>
                  <option value="سایر مناطق یزد">سایر مناطق یزد</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">نوع سالن:</label>
                <select
                  value={salonType}
                  onChange={(e) => setSalonType(e.target.value as SalonType)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  <option value="women">سالن بانوان (زنانه)</option>
                  <option value="men">پیرایشگاه آقایان (مردانه)</option>
                  <option value="both">تیم خدمات سیار بانوان و آقایان</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">شماره پروانه کسب / مجوز (اختیاری):</label>
                <input
                  type="text"
                  placeholder="مثال: اتحادیه آرایشگران یزد ۹۸۲۳"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
                />
              </div>
            </div>

            {/* At-Home toggle */}
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={providesAtHome}
                  onChange={(e) => setProvidesAtHome(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 mt-1"
                />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-amber-950 flex items-center gap-1">
                    <HomeIcon className="w-3.5 h-3.5 text-amber-700" />
                    <span>آیا امکان اعزام آرایشگر به منزل مشتریان (سالمندان، بیماران، عروس) را دارید؟</span>
                  </span>
                  <p className="text-amber-800 text-[11px] leading-relaxed">
                    با فعال‌سازی این گزینه، نشان ویژه «خدمات در محل» به سالن شما تعلق می‌گیرد و درخواست‌های اعزام به شما ارجاع خواهد شد.
                  </p>
                </div>
              </label>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">خلاصه‌ای از خدمات اصلی و تخصص‌های سالن:</label>
              <textarea
                rows={2}
                placeholder="مثلاً: کات‌های ژورنالی، رنگ و لایت با مواد بدون آمونیاک، پاکسازی تخصصی پوست..."
                value={servicesSummary}
                onChange={(e) => setServicesSummary(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-500 outline-none"
              ></textarea>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-bold shadow-md shadow-rose-200 transition"
              >
                ثبت‌نام سالن و ارسال درخواست
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

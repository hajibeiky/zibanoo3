import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Search, 
  Scale, 
  Calendar, 
  Home as HomeIcon, 
  Store, 
  UserCheck, 
  ArrowLeft,
  Sparkles,
  Info,
  ShieldCheck,
  Check
} from 'lucide-react';
import { Salon, BookingRequest } from '../types';
import { SalonDirectory } from './SalonDirectory';

interface MVPDashboardProps {
  salons: Salon[];
  bookings: BookingRequest[];
  onViewDetails: (salon: Salon) => void;
  onBook: (salon: Salon) => void;
  comparedSalons: Salon[];
  onToggleCompare: (salon: Salon) => void;
  onOpenCompareModal: () => void;
  savedSalons: string[];
  onToggleSave: (salon: Salon) => void;
  onOpenMyBookings: () => void;
  onOpenStylistRegister: () => void;
  onOpenStylistPanel: () => void;
  onOpenAISimulator: () => void;
}

export const MVPDashboard: React.FC<MVPDashboardProps> = ({
  salons,
  bookings,
  onViewDetails,
  onBook,
  comparedSalons,
  onToggleCompare,
  onOpenCompareModal,
  savedSalons,
  onToggleSave,
  onOpenMyBookings,
  onOpenStylistRegister,
  onOpenStylistPanel,
  onOpenAISimulator
}) => {
  const mvpRequirements = [
    { id: 1, title: 'حداقل ۸ سالن زنانه و مردانه', desc: '۹ آرایشگاه کامل با اطلاعات یزد، تصاویر، خدمات و قیمت‌ها', status: 'تکمیل و فعال' },
    { id: 2, title: 'جستجو بر اساس نام و نوع خدمت', desc: 'جستجوی زنده در نام سالن، خدمات، توضیحات و کلمات کلیدی', status: 'تکمیل و فعال' },
    { id: 3, title: 'فیلتر محله، نوع خدمت و قیمت', desc: 'فیلترهای صفائیه، قاسم‌آباد، جمهوری و رده‌های قیمتی', status: 'تکمیل و فعال' },
    { id: 4, title: 'صفحه جزئیات هر آرایشگاه', desc: 'مشاهده آلبوم کارها، نظرات مشتریان، پرسنل و تعرفه‌ها', status: 'تکمیل و فعال' },
    { id: 5, title: 'مقایسه همزمان چند آرایشگاه', desc: 'انتخاب تا ۴ سالن و مقایسه ستونی نرخ‌ها و خدمات', status: 'تکمیل و فعال' },
    { id: 6, title: 'ثبت رزرو آزمایشی نوبت', desc: 'انتخاب خدمت، تاریخ، ساعت، آرایشگر و تولید کد رهگیری', status: 'تکمیل و فعال' },
    { id: 7, title: 'پیام موفقیت و نوبت‌های ثبت‌شده', desc: 'پیامک شبیه‌سازی‌شده، ذخیره در LocalStorage و لغو نوبت', status: 'تکمیل و فعال' },
    { id: 8, title: 'خدمات در محل (سالمندان و بیماران)', desc: 'نشان و فیلتر اختصاصی سالن‌های اعزام‌کننده به منزل', status: 'تکمیل و فعال' },
    { id: 9, title: 'پنل مدیریت آرایشگر', desc: 'پیش‌نمایش تقویم روزانه، تایید نوبت‌ها و تنظیم خدمات', status: 'تکمیل و فعال' },
  ];

  return (
    <div className="space-y-8">
      {/* MVP Mission Header */}
      <section className="bg-gradient-to-r from-slate-900 via-rose-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>نسخه اولیه محصول قابل‌آزمایش (MVP Interactive Suite)</span>
            </span>
            <span className="text-xs text-amber-300 font-medium">
              پایلوت اولیه: شهر یزد (۹ سالن فعال زنانه و مردانه)
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-rose-100">
            نسخه اولیه سامانه زیبانو (MVP)
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            این بخش برای آزمودن سناریوی اصلی زیبانو از ابتدا تا انتها پیاده‌سازی شده است. می‌توانید یک خدمت را جستجو کنید، سالن‌های مختلف را مقایسه کنید، نوبت آزمایشی رزرو کرده و کد رهگیری نوبت دریافت کنید.
          </p>

          {/* Test Action Shortcuts */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <button
              onClick={onOpenCompareModal}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
            >
              <Scale className="w-3.5 h-3.5 text-amber-300" />
              <span>جدول مقایسه ({comparedSalons.length} سالن)</span>
            </button>

            <button
              onClick={onOpenMyBookings}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-300" />
              <span>نوبت‌های من ({bookings.length} رزرو)</span>
            </button>

            <button
              onClick={onOpenStylistPanel}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
            >
              <Store className="w-3.5 h-3.5 text-emerald-300" />
              <span>پیش‌نمایش پنل آرایشگر</span>
            </button>

            <button
              onClick={onOpenStylistRegister}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-300" />
              <span>فرم ثبت‌نام سالن جدید</span>
            </button>

            <button
              onClick={onOpenAISimulator}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>شبیه‌ساز هوشمند چهره (آزمایشی)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Checklist of 9 Required MVP Specifications */}
      <section className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-black text-slate-900 text-sm sm:text-base">
              چک‌لیست تطابق الزامات ۹ گانه MVP فاز اول
            </h3>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            ۹ از ۹ قابلیت پیاده‌سازی شده
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {mvpRequirements.map(item => (
            <div key={item.id} className="p-3 rounded-2xl bg-slate-50/70 border border-slate-200 flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900">{item.id}. {item.title}</h4>
                <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer as requested */}
        <div className="p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>نکته آزمایشی:</strong> داده‌های این نسخه نمایشی و آزمایشی هستند؛ نیازی به درگاه پرداخت یا اطلاعات بانکی نیست و تمامی رزروها در حافظه مرورگر ذخیره و اعتبارسنجی می‌شوند.
          </span>
        </div>
      </section>

      {/* Directory & Interactive Tools */}
      <section className="space-y-4">
        <SalonDirectory
          salons={salons}
          onViewDetails={onViewDetails}
          onBook={onBook}
          comparedSalons={comparedSalons}
          onToggleCompare={onToggleCompare}
          onOpenCompareModal={onOpenCompareModal}
          savedSalons={savedSalons}
          onToggleSave={onToggleSave}
        />
      </section>
    </div>
  );
};

import React from 'react';
import { 
  Search, 
  UserCheck, 
  FileText, 
  Sparkles, 
  MapPin, 
  Home as HomeIcon, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowLeft,
  Scissors,
  Star,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';

interface HeroProps {
  onSearchClick: () => void;
  onRegisterClick: () => void;
  onDossierClick: () => void;
  onSelectCategory: (cat: string) => void;
  onSelectAudienceAtHome: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchClick,
  onRegisterClick,
  onDossierClick,
  onSelectCategory,
  onSelectAudienceAtHome
}) => {
  return (
    <div className="space-y-12">
      {/* Main Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-amber-50/50 to-stone-100 border border-rose-200/60 p-6 sm:p-10 lg:p-14 shadow-sm">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-rose-800 text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>پروژه درس تجارت الکترونیکی — نسخه پایلوت فاز ۱</span>
          </div>

          {/* Slogan & Title */}
          <div className="space-y-3">
            <h2 className="text-rose-600 font-extrabold text-lg sm:text-xl tracking-tight">
              « انتخاب آگاهانه، رزرو آسان »
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              سامانه هوشمند جستجو، مقایسه و <br className="hidden sm:inline" />
              <span className="bg-gradient-to-l from-rose-700 via-rose-600 to-amber-700 bg-clip-text text-transparent">
                رزرو آنلاین آرایشگاه زیبانو
              </span>
            </h1>
          </div>

          {/* Value Proposition */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            زیبانو پلتفرمی یکپارچه برای جستجو، مقایسه و رزرو آنلاین آرایشگاه‌های زنانه و مردانه است. کاربران می‌توانند بدون صرف زمان زیاد برای جستجو در شبکه‌های اجتماعی، آرایشگاه مناسب خود را بر اساس موقعیت مکانی، قیمت، خدمات و نمونه‌کارها پیدا کنند. همچنین قابلیت معرفی آرایشگرانی که خدمات در محل ارائه می‌دهند، برای افرادی که امکان مراجعه حضوری ندارند، در نظر گرفته شده است.
          </p>

          {/* Core Action Buttons requested specifically */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onSearchClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-base shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transition flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition" />
              <span>جستجوی آرایشگاه</span>
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition" />
            </button>

            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-base shadow-xs hover:border-rose-300 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-5 h-5 text-rose-600" />
              <span>ثبت‌نام آرایشگر</span>
            </button>

            <button
              onClick={onDossierClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-100/90 hover:bg-amber-200/90 text-amber-900 border border-amber-300 font-bold text-base shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-5 h-5 text-amber-800" />
              <span>مشاهده پرونده تحلیلی کسب‌وکار</span>
            </button>
          </div>

          {/* Quick stats highlight */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-right">
            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">پایلوت اولیه</p>
                <p className="text-sm font-bold text-slate-800">۹ سالن منتخب یزد</p>
              </div>
            </div>

            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">صرفه‌جویی زمان</p>
                <p className="text-sm font-bold text-slate-800">کاهش از ۲ ساعت به ۹ دقیقه</p>
              </div>
            </div>

            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <HomeIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">سرویس ویژه</p>
                <p className="text-sm font-bold text-slate-800">خدمات در محل (منزل)</p>
              </div>
            </div>

            <div className="bg-white/80 p-3.5 rounded-2xl border border-rose-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">شفافیت ۱۰۰٪</p>
                <p className="text-sm font-bold text-slate-800">قیمت و نمونه‌کار دقیق</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences Section (مخاطبان) */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-800">
            جامعه هدف زیبانو
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            زیبانو برای چه کسانی طراحی شده است؟
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            پاسخگویی به نیازهای واقعی مشتریان، افراد دارای شرایط خاص و صاحبان سالن‌های زیبایی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Audience 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-rose-300 hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              ۱. مشتریان عمومی و جویای سالن مناسب
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              مشتریانی که به دنبال پیدا کردن آرایشگاه مناسب، مقایسه قیمت‌ها، مشاهده نمونه‌کارها بدون اتلاف وقت در اینستاگرام و رزرو قطعی بدون نیاز به تماس‌های مکرر هستند.
            </p>
            <div className="pt-2">
              <button
                onClick={onSearchClick}
                className="text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1 group"
              >
                <span>مشاهده آرایشگاه‌ها و مقایسه</span>
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Audience 2 */}
          <div className="bg-gradient-to-br from-amber-50/60 to-white rounded-3xl p-6 border border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <HomeIcon className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                ۲. افراد نیازمند خدمات در محل
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">
                نیاز مبرم
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              بیماران، سالمندان، مصدومان، مادران دارای نوزاد و افرادی که به هر دلیلی امکان مراجعه حضوری به سالن را ندارند و نیازمند آرایشگر متعهد و ماهر در منزل یا بیمارستان هستند.
            </p>
            <div className="pt-2">
              <button
                onClick={onSelectAudienceAtHome}
                className="text-xs font-bold text-amber-800 hover:text-amber-900 flex items-center gap-1 group"
              >
                <span>فیلتر آرایشگاه‌های خدمات در محل</span>
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Audience 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-rose-300 hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              ۳. آرایشگران و صاحبان آرایشگاه
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              آرایشگران و صاحبان سالن که می‌خواهند خدمات، قیمت‌ها و آلبوم نمونه‌کارهای خود را بدون دغدغه فیلترینگ معرفی کرده و تقویم نوبت‌دهی خود را منظم و دیجیتال مدیریت کنند.
            </p>
            <div className="pt-2">
              <button
                onClick={onRegisterClick}
                className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 group"
              >
                <span>ثبت‌نام سالن و دریافت پنل</span>
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Discovery */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              دسته‌بندی خدمات زیبایی و آرایشی
            </h3>
            <p className="text-xs text-slate-500">
              سریع‌ترین راه برای پیدا کردن خدمت مورد نظر در شهر یزد
            </p>
          </div>
          <button
            onClick={onSearchClick}
            className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
          >
            <span>مشاهده همه در جستجو</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { id: 'haircut', name: 'کوتاهی و براشینگ', count: '۹ آرایشگاه', icon: '✂️' },
            { id: 'color', name: 'رنگ، مش و هایلایت', count: '۶ سالن', icon: '🎨' },
            { id: 'makeup', name: 'میکاپ و گریم', count: '۵ سالن', icon: '💄' },
            { id: 'skincare', name: 'پاکسازی و پوست', count: '۴ کلینیک', icon: '✨' },
            { id: 'nail', name: 'خدمات ناخن و اسپا', count: '۴ سالن', icon: '💅' },
            { id: 'at_home', name: 'خدمات در محل', count: '۴ مرکز مجاز', icon: '🏡' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="p-4 rounded-2xl border border-slate-200 hover:border-rose-400 bg-slate-50/60 hover:bg-rose-50/50 transition text-right group cursor-pointer"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition">{cat.icon}</div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-rose-700">
                {cat.name}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">{cat.count}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

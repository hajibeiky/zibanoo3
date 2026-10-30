import React, { useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  TrendingDown, 
  Users, 
  User, 
  Layers, 
  Compass, 
  Sparkles, 
  Printer, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MapPin,
  Home as HomeIcon,
  PhoneCall,
  DollarSign,
  BarChart3,
  Calendar,
  Smile,
  Frown,
  Check
} from 'lucide-react';

interface BusinessDossierProps {
  onGoToMVP: () => void;
}

export const BusinessDossier: React.FC<BusinessDossierProps> = ({ onGoToMVP }) => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const sections = [
    { id: 1, title: '۱. تبیین مسئله و اصطکاک‌ها', short: 'تبیین مسئله' },
    { id: 2, title: '۲. ارزیابی ایده با هشت پرسش', short: 'ارزیابی ۸ پرسش' },
    { id: 3, title: '۳. دسته‌بندی و مرزبندی فرایندها', short: 'مرزبندی فرایندها' },
    { id: 4, title: '۴. مدل اتلاف زمان و هزینه', short: 'تحلیل اتلاف زمان' },
    { id: 5, title: '۵. اعتبارسنجی و مصاحبه‌های میدانی', short: 'مصاحبه‌ها در یزد' },
    { id: 6, title: '۶. نقشه سفر مشتری (Journey Map)', short: 'سفر مشتری' },
  ];

  const questions = [
    {
      id: 1,
      q: 'آیا اکنون افرادی منتظر چنین ایده‌ای در بازار هستند؟',
      a: 'بله؛ نیاز به خدمات آرایشگری از قبل وجود دارد، اما راه‌حل‌های فعلی مانند جستجو در اینستاگرام و پرس‌وجو از آشنایان ناکارآمد و زمان‌بر هستند. نیاز به خدمات در محل نیز برای بیماران، سالمندان و افراد دارای محدودیت وجود دارد.',
      keyTakeaway: 'وجود تقاضای واقعی و ملموس در میان عموم شهروندان و گروه‌های با نیاز ویژه در شهر پایلوت.'
    },
    {
      id: 2,
      q: 'آیا ایده صرفاً حاصل علاقه شخصی است یا می‌تواند زندگی و کسب‌وکار افراد را بهتر کند؟',
      a: 'زیبانو می‌تواند با کاهش زمان جستجو و ریسک انتخاب، زندگی مشتریان را آسان‌تر کند؛ به آرایشگران در جذب مشتری و مدیریت نوبت‌ها کمک کند و امکان دسترسی افراد دارای محدودیت به خدمات زیبایی را افزایش دهد.',
      keyTakeaway: 'خلق ارزش دوطرفه پایدار برای سمت تقاضا (مشتریان) و سمت عرضه (صاحبان سالن و آرایشگران).'
    },
    {
      id: 3,
      q: 'ایده در کدام دسته‌بندی قرار می‌گیرد؟',
      a: 'ایده ترکیبی (Combined Idea) است؛ زیرا پلتفرم رزرو آنلاین، مقایسه قیمت و نمونه‌کار، خدمات در محل و قابلیت‌های هوش مصنوعی برای پیش‌نمایش مدل‌ها را ترکیب می‌کند.',
      keyTakeaway: 'نوآوری در یکپارچه‌سازی چند خدمت مکمل در یک بستر متمرکز و راست‌چین.'
    },
    {
      id: 4,
      q: 'ظرفیت رشد و مقیاس‌پذیری کسب‌وکار چقدر است؟',
      a: 'شروع فعالیت در یک شهر مانند یزد و جذب حدود ۵۰ تا ۱۰۰ آرایشگاه فعال به‌عنوان هدف پیشنهادی اولیه در نظر گرفته شده است. در صورت موفقیت، امکان گسترش به شهرهای دیگر وجود دارد. چالش اصلی جذب آرایشگران، به‌روزرسانی اطلاعات و هزینه‌های بازاریابی است.',
      keyTakeaway: 'استراتژی ورود به بازار شهری (Local Niche) با قابلیت توسعه استانی و ملی.'
    },
    {
      id: 5,
      q: 'آیا مشتریان حاضرند برای محصول نهایی پول پرداخت کنند؟',
      a: 'استفاده مشتریان از جستجو و مقایسه می‌تواند رایگان باشد. منبع اصلی درآمد در مرحله اول می‌تواند آرایشگران باشند؛ از طریق کمیسیون رزرو موفق (مثلاً ۵ تا ۱۰ درصد)، اشتراک ماهانه امکانات پیشرفته و کارمزد خدمات در محل.',
      keyTakeaway: 'مدل درآمدی متوازن مبتنی بر کارمزد موفقیت (Success Fee) و خدمات ارزش‌افزوده بدون ایجاد مانع ورود برای مشتری نهایی.'
    },
    {
      id: 6,
      q: 'آیا امکان ارزیابی میدانی و دریافت بازخورد وجود دارد؟',
      a: 'در گزارش اولیه، گفت‌وگو با ۳ مشتری و ۲ آرایشگر در شهر یزد ذکر شده است. یافته‌های گزارش شامل نارضایتی مشتریان از پراکندگی اطلاعات، نارضایتی آرایشگران از مدیریت دستی نوبت‌ها و شناسایی نیاز به خدمات در محل است. در ادامه، MVP باید در اختیار کاربران قرار گیرد تا قابلیت استفاده و فرآیند رزرو آزمایش شود.',
      keyTakeaway: 'تأیید اولیه از طریق مصاحبه‌های کیفی عمیق در یزد و ضرورت آزمون فرآیندها روی نسخه MVP.'
    },
    {
      id: 7,
      q: 'در صورت بروز مانع در مدل عملیاتی چه راهکاری وجود دارد؟',
      a: 'برای مشکل جذب آرایشگران، شروع فعالیت با تعداد محدودی آرایشگاه منتخب در یک محله پیشنهاد شده است. برای محدودیت‌های فنی شبیه‌ساز هوشمند، می‌توان از نسخه آزمایشی Mock و گالری مدل‌های ثابت استفاده کرد و اتصال واقعی به API هوش مصنوعی را به مراحل بعد موکول کرد.',
      keyTakeaway: 'مدیریت ریسک‌های عملیاتی و فنی با اتکا به پایلوت محلی متمرکز و لانچ مرحله‌به‌مرحله.'
    },
    {
      id: 8,
      q: 'کاربران در حال حاضر چگونه نیاز خود را برطرف می‌کنند؟',
      a: 'جستجو در اینستاگرام، پرس‌وجو از دوستان و آشنایان، تماس تلفنی با آرایشگاه‌ها و استفاده از نقشه‌های آنلاین. مشکل مشترک این روش‌ها، پراکندگی اطلاعات، شفاف نبودن قیمت‌ها و دشواری مقایسه است.',
      keyTakeaway: 'وجود راه‌حل‌های سنتی ناکارآمد که هزینه روانی و زمانی بالایی به کاربران تحمیل می‌کنند.'
    }
  ];

  return (
    <div className="space-y-10 py-4 max-w-5xl mx-auto">
      {/* Dossier Header */}
      <div className="bg-gradient-to-r from-amber-900 via-stone-800 to-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold">
              <FileText className="w-4 h-4" />
              <span>پروژه درس تجارت الکترونیکی — مستندات علمی و تحلیلی فاز ۱</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-stone-200 transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>نسخه چاپی / PDF</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-amber-100">
            پرونده تحلیلی کسب‌وکار زیبانو
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            این گزارش دانشگاهی و تحلیلی، ریشه‌های مسئله، اصطکاک‌های مدل‌های سنتی، هشت پرسش کلیدی امکان‌سنجی، مدل زمان‌سنجی اتلاف منابع، مصاحبه‌های میدانی شهر یزد و نقشه سفر مشتری را تدوین می‌کند.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300 border-t border-white/10">
            <span><strong>نام طرح:</strong> سامانه هوشمند زیبانو</span>
            <span>•</span>
            <span><strong>شهر پایلوت:</strong> یزد</span>
            <span>•</span>
            <span><strong>مدل ایده:</strong> پلتفرم ترکیبی دوطرفه (Two-Sided Platform)</span>
            <span>•</span>
            <span><strong>وضعیت:</strong> فاز اعتبارسنجی و MVP</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs for Dossier */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(idx)}
            className={`shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeSection === idx
                ? 'bg-rose-700 text-white shadow-sm shadow-rose-200'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>{sec.title}</span>
          </button>
        ))}
      </div>

      {/* Section 1: تبیین مسئله و اصطکاک‌های موجود */}
      {(activeSection === 0 || activeSection === -1) && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
              ۱
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                تبیین مسئله و اصطکاک‌های موجود در روش‌های فعلی
              </h2>
              <p className="text-xs text-slate-500">
                تحلیل موانع موجود در بازار سنتی خدمات زیبایی و آرایشگری
              </p>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            در شیوه مرسوم، دسترسی شهروندان به اطلاعات آرایشگاه‌ها و رزرو نوبت با گسستگی عمیق داده‌ها روبه‌روست. کاربران در روش‌های فعلی با مجموعه‌ای از اصطکاک‌ها مواجه هستند:
          </p>

          {/* Friction points cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-200/70 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-rose-950">
                  ۱. پراکندگی اطلاعات و دشواری مقایسه
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  پراکندگی اطلاعات آرایشگاه‌ها در اینستاگرام، گوگل مپ و سایر بسترها؛ نبود معیار واحد برای مقایسه همزمان چند سالن از نظر مکان، تخصص و نظرات.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-200/70 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <DollarSign className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-amber-950">
                  ۲. عدم شفافیت قیمت خدمات
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  شفاف نبودن قیمت خدمات و نیاز اجباری به تماس تلفنی، دایرکت اینستاگرام یا پیام در پیام‌رسان‌ها صرفاً برای مطلع شدن از نرخ خدمات.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-200/70 text-purple-800 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-purple-950">
                  ۳. ابهام در نمونه‌کارها و تطابق با چهره
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  پراکندگی و دسته‌بندی نشدن نمونه‌کارهای آرایشگران و ناتوانی مشتری در تصور و ارزیابی نتیجه مدل مو یا رنگ روی چهره و ویژگی‌های فردی خود.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-200/70 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-blue-950">
                  ۴. دشواری هماهنگی و رزرو نوبت
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  دشواری هماهنگی و رزرو نوبت از طریق تماس تلفنی مداوم یا پیام در شبکه‌های اجتماعی، اشغال بودن خطوط سالن‌ها و لغوهای ناگهانی بدون سازوکار یادآوری.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3 md:col-span-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-200/70 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <HomeIcon className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-emerald-950">
                  ۵. نبود بستری معتبر برای خدمات در محل
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  نبود بستری مناسب، امن و معتبر برای پیدا کردن آرایشگرانی که خدمات در محل ارائه می‌دهند؛ این مسئله به‌ویژه برای سالمندان، بیماران، افراد دارای معلولیت یا آسیب‌های حرکتی و مادران دارای نوزاد به چالشی اساسی تبدیل شده است.
                </p>
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 space-y-2 border-r-4 border-rose-500">
            <h4 className="text-amber-300 font-bold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>نتیجه مسئله (Core Problem Synthesis):</span>
            </h4>
            <p className="text-sm leading-relaxed text-stone-200">
              «کاربران برای پیدا کردن آرایشگاه مناسب، مقایسه خدمات و قیمت‌ها، انتخاب مدل و رزرو نوبت با فرآیندی زمان‌بر، پراکنده و بدون شفافیت مواجه هستند.»
            </p>
          </div>
        </section>
      )}

      {/* Section 2: ارزیابی ایده با هشت پرسش */}
      {(activeSection === 1 || activeSection === -1) && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
              ۲
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                ارزیابی ایده با هشت پرسش اعتبارسنجی کسب‌وکار
              </h2>
              <p className="text-xs text-slate-500">
                بررسی دقیق ابعاد بازار، ارزش‌آفرینی، مقیاس‌پذیری و مدل‌های جبران ریسک
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {questions.map((item) => {
              const isOpen = expandedQuestion === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`rounded-2xl border transition overflow-hidden ${
                    isOpen 
                      ? 'border-amber-300 bg-amber-50/20' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setExpandedQuestion(isOpen ? null : item.id)}
                    className="w-full text-right p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0">
                        {item.id}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-slate-900">
                        {item.q}
                      </span>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>

                  <div className={`px-4 pb-5 pt-1 sm:px-5 space-y-3 ${isOpen ? 'block' : 'block sm:block'}`}>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 ml-1">پاسخ و ارزیابی:</strong>
                      {item.a}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50/80 px-3 py-1.5 rounded-lg border border-emerald-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>نتیجه‌گیری:</strong> {item.keyTakeaway}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Section 3: دسته‌بندی ایده و مرزبندی فرایندها */}
      {(activeSection === 2 || activeSection === -1) && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">
              ۳
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                دسته‌بندی ایده و مرزبندی فرایندها
              </h2>
              <p className="text-xs text-slate-500">
                تفکیک دقیق فرایندهای نرم‌افزاری دیجیتال و فرایندهای فیزیکی در محل
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/60 flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs text-purple-700 font-bold">طبقه‌بندی نظری ایده:</span>
              <h3 className="text-base sm:text-lg font-black text-purple-950">
                ایده ترکیبی (Combined Idea)
              </h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-200 text-purple-900 font-bold">
              رزرو آنلاین + دایرکتوری + خدمات در محل + پیش‌نمایش هوشمند
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Online Processes */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50/30 p-5 space-y-4">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base border-b border-blue-200 pb-3">
                <span className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></span>
                <span>فرایندهای آنلاین (دیجیتال در سامانه زیبانو)</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>جستجو و فیلتر آرایشگاه‌ها بر اساس نام، موقعیت، نوع خدمت و قیمت</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>مشاهده اطلاعات، تصاویر محیط و آلبوم نمونه‌کارها</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>مقایسه چند آرایشگاه به‌صورت ستونی و مقایسه قیمت‌ها</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>مشاهده پیش‌نمایش تقریبی مدل‌ها در صورت پیاده‌سازی</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>ثبت و پیگیری درخواست رزرو و تولید کد رهگیری نوبت</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>مدیریت اطلاعات و درخواست‌های رزرو توسط آرایشگر در پنل اختصاصی</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>دریافت یادآوری نوبت و پیامک هماهنگی</span>
                </li>
              </ul>
            </div>

            {/* Offline Processes */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/30 p-5 space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base border-b border-amber-200 pb-3">
                <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                <span>فرایندهای حضوری و فیزیکی (خارج از سامانه)</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">•</div>
                  <span>انجام واقعی خدمات آرایشگری (کوتاهی، رنگ، براشینگ، فیشیال و...)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">•</div>
                  <span>مراجعه مشتری به آرایشگاه طبق زمان رزرو شده</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">•</div>
                  <span>انجام خدمات در محل مشتری (اعزام آرایشگر به منزل یا مرکز درمانی)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">•</div>
                  <span>ارزیابی کیفیت خدمت پس از دریافت آن توسط مشتری در دنیای واقعی</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Clarification Box */}
          <div className="p-4 rounded-2xl bg-slate-100 text-slate-800 text-xs sm:text-sm leading-relaxed border-r-4 border-slate-500">
            <strong>شفاف‌سازی مرزبندی عملیاتی:</strong> زیبانو بستر دیجیتال ارتباط، انتخاب، مقایسه و هماهنگی است و انجام واقعی خدمات فیزیکی خارج از سامانه و توسط آرایشگران مجرب صورت می‌گیرد.
          </div>
        </section>
      )}

      {/* Section 4: مدل اتلاف زمان و هزینه کاربران */}
      {(activeSection === 3 || activeSection === -1) && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
              ۴
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                مدل مقایسه‌ای اتلاف زمان و هزینه کاربران
              </h2>
              <p className="text-xs text-slate-500">
                سنجش تجربی بهره‌وری بر اساس زمان سپری شده قبل و بعد از زیبانو
              </p>
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm">
            نمودار و مقایسه زیر، تفاوت چشمگیر فرآیند سنتی در برابر سامانه زیبانو را نشان می‌دهد:
          </p>

          {/* Visual Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Method */}
            <div className="rounded-2xl border-2 border-red-200 bg-red-50/30 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-red-200 pb-3">
                <span className="font-black text-red-900 text-base flex items-center gap-2">
                  <Frown className="w-5 h-5 text-red-600" />
                  <span>وضعیت سنتی (بدون زیبانو)</span>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-200 text-red-900 font-black">
                  حداقل ۱۲۰ دقیقه اتلاف
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-red-100">
                  <span>جستجو در اینستاگرام و کانال‌ها</span>
                  <span className="font-bold text-red-700">۳۰ تا ۶۰ دقیقه</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-red-100">
                  <span>بررسی و مقایسه نمونه‌کارها</span>
                  <span className="font-bold text-red-700">۲۰ دقیقه</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-red-100">
                  <span>تماس و دایرکت با ۳ تا ۵ آرایشگاه</span>
                  <span className="font-bold text-red-700">حدود ۱۵ دقیقه</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-red-100">
                  <span>رفت‌وآمد به آرایشگاه و نوبت نامنظم</span>
                  <span className="font-bold text-red-700">زمان و هزینه اضافی</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-red-100/70 text-red-950 text-xs leading-relaxed font-medium">
                <strong>نتیجه سنتی:</strong> حداقل حدود ۲ ساعت اتلاف زمان، به‌علاوه ریسک انتخاب نامناسب و سردرگمی در هزینه.
              </div>
            </div>

            {/* ZibaNo Method */}
            <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/40 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                <span className="font-black text-emerald-900 text-base flex items-center gap-2">
                  <Smile className="w-5 h-5 text-emerald-600" />
                  <span>وضعیت با زیبانو</span>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-black">
                  فقط ۹ دقیقه کل فرآیند
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-100">
                  <span>جستجو و فیلتر بر اساس محله و خدمت</span>
                  <span className="font-bold text-emerald-700">۲ دقیقه</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-100">
                  <span>مقایسه و مشاهده نمونه‌کارها و قیمت</span>
                  <span className="font-bold text-emerald-700">۵ دقیقه</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-100">
                  <span>ثبت درخواست رزرو و دریافت کد</span>
                  <span className="font-bold text-emerald-700">۲ دقیقه</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-100">
                  <span>امکان رزرو خدمت در محل در صورت نیاز</span>
                  <span className="font-bold text-emerald-700">صرفه‌جویی ۱۰۰٪ ایاب‌وذهاب</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-100/80 text-emerald-950 text-xs leading-relaxed font-bold">
                <strong>نتیجه زیبانو:</strong> حدود ۹ دقیقه و صرفه‌جویی بیش از ۱.۵ ساعت بر اساس برآورد گزارش تحلیلی.
              </div>
            </div>
          </div>

          {/* Visual Bar Comparison Chart */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-rose-600" />
              <span>نمودار بصری مقایسه زمان سپری شده (دقیقه):</span>
            </h4>
            
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-600">روش سنتی اینستاگرام و تلفن</span>
                  <span className="font-bold text-red-700">۱۲۰+ دقیقه</span>
                </div>
                <div className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-gradient-to-l from-red-500 to-red-600 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-600 font-bold">سامانه زیبانو (ZibaNo)</span>
                  <span className="font-bold text-emerald-700">۹ دقیقه (۹۲٪ کاهش زمان)</span>
                </div>
                <div className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-gradient-to-l from-emerald-500 to-emerald-600 rounded-full w-[8%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: گزارش اعتبارسنجی اولیه و مصاحبه‌ها */}
      {(activeSection === 4 || activeSection === -1) && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-black">
              ۵
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                گزارش اعتبارسنجی اولیه و مصاحبه‌های میدانی در شهر یزد
              </h2>
              <p className="text-xs text-slate-500">
                بررسی میدانی حاصل از مصاحبه نیمه‌ساختاریافته با ۳ مشتری و ۲ آرایشگر در یزد
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-amber-950">روش تحقیق ذکرشده در گزارش:</strong> مصاحبه نیمه‌ساختاریافته با ۳ مشتری و ۲ آرایشگر در شهر یزد به منظور احراز دردها (Pains)، نیازها و رفتارهای واقعی کاربران.
          </div>

          {/* Quotes Cards as requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                    مشتری اول
                  </span>
                  <span className="text-[11px] text-slate-500">خانم، ۲۵ ساله — ساکن یزد</span>
                </div>
                <blockquote className="text-slate-800 text-sm italic leading-relaxed border-r-2 border-rose-400 pr-3">
                  «مدل‌های موی زیادی رو در اینستاگرام ذخیره می‌کنم ولی هیچ‌وقت مطمئن نیستم که روی جنس و فرم موهای خودم چطور درمیاد و کدوم آرایشگاه دقیقاً می‌تونه همون رو برام دربیاره.»
                </blockquote>
              </div>
              <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-100">
                <strong>یافته تحلیلی:</strong> عدم اطمینان به نتیجه و ریسک بالای تصمیم‌گیری زیبایی؛ نیاز به آلبوم دسته‌بندی شده و شبیه‌ساز مدل.
              </div>
            </div>

            {/* Customer 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    مشتری دوم
                  </span>
                  <span className="text-[11px] text-slate-500">آقا، ۳۰ ساله — ساکن یزد</span>
                </div>
                <blockquote className="text-slate-800 text-sm italic leading-relaxed border-r-2 border-blue-400 pr-3">
                  «قیمت خدمات و نزدیکی به محل کار یا منزلم در یزد برام خیلی مهمه. کاش یک سامانه بود که بشه همه رو کنار هم مقایسه کرد، نه اینکه به هر کدوم تک‌تک زنگ بزنم و بپرسم.»
                </blockquote>
              </div>
              <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-100">
                <strong>یافته تحلیلی:</strong> حساسیت بالا به هزینه و بعد مسافت؛ ضرورت ابزار مقایسه چندگانه قیمت و موقعیت مکانی.
              </div>
            </div>

            {/* Stylist 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    آرایشگر اول
                  </span>
                  <span className="text-[11px] text-slate-500">آقا، ۴۵ ساله — صاحب سالن در یزد</span>
                </div>
                <blockquote className="text-slate-800 text-sm italic leading-relaxed border-r-2 border-amber-500 pr-3">
                  «قبلاً برای یکی از مشتریانم که در تصادف آسیب دیده بود و نمی‌توانست به مغازه بیاید، در منزل اصلاح انجام دادم؛ آنجا فهمیدم چه نیاز بزرگی برای خدمات در محل وجود دارد که سامانه‌ای ندارد.»
                </blockquote>
              </div>
              <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-100">
                <strong>یافته تحلیلی:</strong> تأیید پتانسیل بالای لاین «خدمات در محل» برای اقشار دارای محدودیت حرکتی و سالمندان.
              </div>
            </div>

            {/* Stylist 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900">
                    آرایشگر دوم
                  </span>
                  <span className="text-[11px] text-slate-500">خانم، ۳۵ ساله — مدیر سالن زنانه در یزد</span>
                </div>
                <blockquote className="text-slate-800 text-sm italic leading-relaxed border-r-2 border-purple-400 pr-3">
                  «بزرگ‌ترین مشکل ما جذب مشتریان جدید و مدیریت نوبت‌هاست. روزانه وقت زیادی تلف پاسخ دادن به دایرکت‌هایی می‌شود که صرفاً قیمت می‌پرسند و رزرو نمی‌کنند.»
                </blockquote>
              </div>
              <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-100">
                <strong>یافته تحلیلی:</strong> بار کاری مضاعف ناشی از مکالمات تکراری استعلام قیمت؛ تمایل سالن‌داران به اتوماسیون نوبت‌دهی.
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 6: نقشه سفر مشتری (Customer Journey Map) */}
      {(activeSection === 5 || activeSection === -1) && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black">
              ۶
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                نقشه سفر مشتری (Customer Journey Map)
              </h2>
              <p className="text-xs text-slate-500">
                ۵ مرحله کلیدی چرخه تجربه مشتری: از نیاز اولیه تا ارزیابی خدمت
              </p>
            </div>
          </div>

          {/* 5 Stages Timeline */}
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: '۱. آگاهی و جستجو (Awareness & Search)',
                userAction: 'مشتری متوجه نیاز به خدمت آرایشگری شده و در اینستاگرام و نقشه جستجو می‌کند.',
                problem: 'پراکندگی اطلاعات، دشواری یافتن آدرس دقیق و اتلاف وقت قابل توجه.',
                zibaNoSolution: 'موتور جستجوی یکپارچه زیبانو بر اساس نام، نوع خدمت، محله و جنسیت سالن در کمتر از ۲ دقیقه.'
              },
              {
                step: 2,
                title: '۲. بررسی و ارزیابی (Evaluation & Consideration)',
                userAction: 'نمونه‌کارها و تصاویر سالن‌ها را مشاهده و در گوشی ذخیره می‌کند.',
                problem: 'نداشتن اطمینان از نتیجه مدل روی چهره و موهای خود و عدم دسته‌بندی عکس‌ها.',
                zibaNoSolution: 'آلبوم تخصصی خدمات با تفکیک مدل‌ها و جایگاه شبیه‌ساز هوشمند چهره برای کاهش تردید.'
              },
              {
                step: 3,
                title: '۳. استعلام قیمت و هماهنگی (Price Inquiry & Booking)',
                userAction: 'با آرایشگاه‌ها تماس تلفنی می‌گیرد یا در دایرکت پیام می‌دهد.',
                problem: 'شفاف نبودن قیمت‌ها، اشغال بودن تلفن سالن و دشواری توافق بر سر ساعت خالی.',
                zibaNoSolution: 'لیست رسمی قیمت مصوب تمامی خدمات و تقویم انتخاب ساعت نوبت بدون نیاز به تماس.'
              },
              {
                step: 4,
                title: '۴. تصمیم‌گیری و مراجعه (Decision & Visit / At-Home)',
                userAction: 'آرایشگاه را نهایی کرده و جهت دریافت خدمت مراجعه می‌کند یا منتظر می‌ماند.',
                problem: 'ریسک انتخاب نامناسب، معطلی در سالن و محدودیت حرکتی برای بیماران و سالمندان.',
                zibaNoSolution: 'ارائه خدمت در محل با تضمین بهداشت و ارسال پیامک یادآوری جهت جلوگیری از اتلاف وقت.'
              },
              {
                step: 5,
                title: '۵. دریافت خدمت و ارزیابی (Service Delivery & Review)',
                userAction: 'خدمت را دریافت کرده و هزینه را می‌پردازد.',
                problem: 'ممکن است از نتیجه راضی یا ناراضی باشد و برای نوبت بعدی دوباره باید همان مسیر فرسایشی سنتی را طی کند.',
                zibaNoSolution: 'ثبت شفاف نظر و امتیاز، ذخیره تاریخچه در نوبت‌های من و امکان رزرو مجدد با یک کلیک.'
              }
            ].map((st) => (
              <div key={st.step} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {st.title}
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                    مرحله {st.step} از ۵
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-700">
                  <span className="font-medium text-slate-500">اقدام کاربر: </span>
                  {st.userAction}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-red-50 text-red-900 border border-red-100">
                    <strong>مشکل اصلی:</strong> {st.problem}
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
                    <strong>راهکار زیبانو:</strong> {st.zibaNoSolution}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Concluding Statement requested in prompt */}
          <div className="p-5 rounded-2xl bg-gradient-to-l from-rose-900 to-amber-900 text-white space-y-2">
            <h4 className="font-bold text-amber-200 text-sm flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>نتیجه‌گیری چشم‌انداز نقشه سفر:</span>
            </h4>
            <p className="text-sm leading-relaxed text-rose-100">
              «زیبانو قصد دارد این مسیر ۵ مرحله‌ای را کوتاه‌تر، شفاف‌تر و مطمئن‌تر کند؛ به‌گونه‌ای که فاصله زمانی تصمیم تا قطعی شدن نوبت از ساعت‌ها به چند دقیقه کاهش یابد و استرس ناشی از کیفیت و قیمت به حداقل ممکن برسد.»
            </p>
          </div>
        </section>
      )}

      {/* Action Footer for Dossier */}
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-6 sm:p-8 border border-amber-200 text-center space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          مشاهده پیاده‌سازی عملی این تحلیل در محصول اولیه (MVP)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          برای آزمایش فرآیند جستجو، فیلتر، مقایسه، خدمات در محل و ثبت رزرو آزمایشی وارد نسخه اولیه سامانه شوید.
        </p>
        <button
          onClick={onGoToMVP}
          className="px-6 py-3 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-sm shadow-md shadow-rose-200 transition inline-flex items-center gap-2 cursor-pointer"
        >
          <span>ورود به محیط نسخه اولیه سامانه (MVP)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

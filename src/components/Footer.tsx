import React from 'react';
import { Sparkles, Heart, FileText, Search, Layers, UserCheck, Phone, MapPin, Store } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: 'home' | 'directory' | 'dossier' | 'mvp') => void;
  onOpenRegister: () => void;
  onOpenStylistPanel: () => void;
  onOpenAISimulator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenRegister,
  onOpenStylistPanel,
  onOpenAISimulator
}) => {
  return (
    <footer className="mt-20 bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white">زیبـانو</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              سامانه هوشمند جستجو، مقایسه و رزرو آنلاین آرایشگاه‌های زنانه و مردانه و خدمات زیبایی در محل.
            </p>
            <div className="text-xs text-amber-300 font-bold">
              شعار زیبانو: «انتخاب آگاهانه، رزرو آسان»
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">صفحات اصلی سامانه</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-rose-400 transition"
                >
                  صفحه اصلی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('directory')}
                  className="hover:text-rose-400 transition"
                >
                  جستجو و مقایسه آرایشگاه‌ها
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('dossier')}
                  className="hover:text-amber-400 text-amber-200 transition font-bold"
                >
                  پرونده تحلیلی کسب‌وکار (تحلیل جامع)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('mvp')}
                  className="hover:text-rose-400 transition"
                >
                  نسخه اولیه سامانه (MVP)
                </button>
              </li>
            </ul>
          </div>

          {/* Special Features & Stylists */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">بخش آرایشگران و امکانات</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenRegister}
                  className="hover:text-rose-400 transition text-right"
                >
                  ثبت‌نام سالن و پیوستن به زیبانو
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStylistPanel}
                  className="hover:text-rose-400 transition text-right"
                >
                  پیش‌نمایش پنل مدیریت نوبت‌های آرایشگر
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAISimulator}
                  className="hover:text-rose-400 transition text-right"
                >
                  پیش‌نمایش شبیه‌ساز مدل مو و چهره
                </button>
              </li>
              <li className="text-stone-400">
                پوشش خدمات در محل برای سالمندان و بیماران
              </li>
            </ul>
          </div>

          {/* Academic & Pilot info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">اطلاعات پروژه و شهر پایلوت</h4>
            <div className="p-3 rounded-2xl bg-stone-800/80 border border-stone-700/60 text-xs space-y-2">
              <p className="text-amber-300 font-bold">پروژه درس تجارت الکترونیکی</p>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                تمرکز فاز اول بر روی پرونده تحلیلی کسب‌وکار و محصول اولیه قابل‌آزمایش (MVP) با دیتابیس پایلوت ۹ آرایشگاه در شهر یزد است.
              </p>
            </div>
            <div className="text-[11px] text-stone-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>شهر پایلوت مرحله اول: یزد</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© تمامی حقوق برای سامانه «زیبانو» محفوظ است — پروژه تجارت الکترونیکی</p>
          <p className="flex items-center gap-1">
            طراحی شده با دقت و افتخار برای کاربران گرامی و همشهریان یزدی
          </p>
        </div>
      </div>
    </footer>
  );
};

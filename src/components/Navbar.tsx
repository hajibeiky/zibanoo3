import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  FileText, 
  Calendar, 
  Layers, 
  UserCheck, 
  Menu, 
  X, 
  Store,
  MapPin,
  Heart
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'directory' | 'dossier' | 'mvp';
  setActiveTab: (tab: 'home' | 'directory' | 'dossier' | 'mvp') => void;
  bookingCount: number;
  onOpenMyBookings: () => void;
  onOpenStylistRegister: () => void;
  onOpenStylistPanel: () => void;
  onOpenAISimulator: () => void;
  savedCount: number;
  onOpenSavedSalons: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  bookingCount,
  onOpenMyBookings,
  onOpenStylistRegister,
  onOpenStylistPanel,
  onOpenAISimulator,
  savedCount,
  onOpenSavedSalons
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-rose-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">سامانه هوشمند زیبانو</span>
            <span className="hidden sm:inline text-rose-300">|</span>
            <span className="hidden sm:inline">«انتخاب آگاهانه، رزرو آسان» — پروژه درس تجارت الکترونیکی (شهر پایلوت: یزد)</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAISimulator}
              className="hover:text-white transition flex items-center gap-1 text-[11px] bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-full"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>پیش‌نمایش شبیه‌ساز چهره (آزمایشی)</span>
            </button>
            <button
              onClick={onOpenStylistPanel}
              className="hover:text-white transition flex items-center gap-1 text-[11px] underline underline-offset-2"
            >
              <Store className="w-3 h-3 text-rose-200" />
              <span className="hidden md:inline">پیش‌نمایش</span>
              <span>پنل آرایشگر</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Identity */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-600 flex items-center justify-center text-white shadow-md shadow-rose-200 group-hover:scale-105 transition duration-200">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black bg-gradient-to-l from-rose-800 to-rose-600 bg-clip-text text-transparent">
                  زیبـانو
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  فاز اول (MVP)
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal">
                سامانه هوشمند رزرو و مقایسه آرایشگاه
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-600">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeTab === 'home'
                  ? 'bg-rose-50 text-rose-700 font-bold'
                  : 'hover:bg-slate-100/70 hover:text-slate-900'
              }`}
            >
              صفحه اصلی
            </button>

            <button
              onClick={() => setActiveTab('directory')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeTab === 'directory'
                  ? 'bg-rose-50 text-rose-700 font-bold'
                  : 'hover:bg-slate-100/70 hover:text-slate-900'
              }`}
            >
              <Search className="w-4 h-4 text-rose-600" />
              جستجوی آرایشگاه
            </button>

            <button
              onClick={() => setActiveTab('dossier')}
              className={`relative px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeTab === 'dossier'
                  ? 'bg-amber-100/80 text-amber-900 font-bold border border-amber-300'
                  : 'text-amber-800 bg-amber-50/60 hover:bg-amber-100/70'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-700" />
              <span>پرونده تحلیلی کسب‌وکار</span>
              <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] rounded-full bg-amber-200 text-amber-900 font-bold">
                تحلیل جامع
              </span>
            </button>

            <button
              onClick={() => setActiveTab('mvp')}
              className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeTab === 'mvp'
                  ? 'bg-rose-50 text-rose-700 font-bold'
                  : 'hover:bg-slate-100/70 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-rose-600" />
              نسخه اولیه سامانه (MVP)
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Saved Salons */}
            <button
              onClick={onOpenSavedSalons}
              title="علاقه‌مندی‌ها"
              className="relative p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 transition"
            >
              <Heart className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* My Bookings */}
            <button
              onClick={onOpenMyBookings}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl border border-rose-200 text-rose-800 bg-rose-50/70 hover:bg-rose-100 font-medium text-sm transition"
            >
              <Calendar className="w-4 h-4 text-rose-600" />
              <span>نوبت‌های من</span>
              {bookingCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Stylist Register */}
            <button
              onClick={onOpenStylistRegister}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-sm font-bold shadow-sm shadow-rose-200 transition"
            >
              <UserCheck className="w-4 h-4" />
              <span>ثبت‌نام آرایشگر</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenMyBookings}
              className="relative p-2 rounded-xl border border-rose-200 text-rose-700 bg-rose-50"
            >
              <Calendar className="w-5 h-5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {bookingCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-rose-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className={`w-full text-right px-4 py-3 rounded-xl flex items-center gap-3 ${
              activeTab === 'home' ? 'bg-rose-50 text-rose-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>صفحه اصلی</span>
          </button>

          <button
            onClick={() => { setActiveTab('directory'); setMobileMenuOpen(false); }}
            className={`w-full text-right px-4 py-3 rounded-xl flex items-center gap-3 ${
              activeTab === 'directory' ? 'bg-rose-50 text-rose-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Search className="w-5 h-5 text-rose-600" />
            <span>جستجوی آرایشگاه‌ها</span>
          </button>

          <button
            onClick={() => { setActiveTab('dossier'); setMobileMenuOpen(false); }}
            className={`w-full text-right px-4 py-3 rounded-xl flex items-center justify-between ${
              activeTab === 'dossier' ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-amber-50/70 text-amber-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-amber-700" />
              <span>پرونده تحلیلی کسب‌وکار</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-200 font-bold">بخش ویژه</span>
          </button>

          <button
            onClick={() => { setActiveTab('mvp'); setMobileMenuOpen(false); }}
            className={`w-full text-right px-4 py-3 rounded-xl flex items-center gap-3 ${
              activeTab === 'mvp' ? 'bg-rose-50 text-rose-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-5 h-5 text-rose-600" />
            <span>نسخه اولیه سامانه (MVP)</span>
          </button>

          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => { onOpenStylistRegister(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 px-3 rounded-xl bg-rose-600 text-white font-bold text-center text-xs flex items-center justify-center gap-1.5"
            >
              <UserCheck className="w-4 h-4" />
              <span>ثبت‌نام آرایشگر</span>
            </button>
            <button
              onClick={() => { onOpenStylistPanel(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 font-medium text-center text-xs flex items-center justify-center gap-1.5"
            >
              <Store className="w-4 h-4" />
              <span>پنل آرایشگر</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

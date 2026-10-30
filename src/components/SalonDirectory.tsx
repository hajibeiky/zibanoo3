import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  RotateCcw, 
  Home as HomeIcon, 
  SlidersHorizontal, 
  Sparkles, 
  Scale, 
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Salon, SalonType, PriceLevel } from '../types';
import { SalonCard } from './SalonCard';

interface SalonDirectoryProps {
  salons: Salon[];
  onViewDetails: (salon: Salon) => void;
  onBook: (salon: Salon) => void;
  comparedSalons: Salon[];
  onToggleCompare: (salon: Salon) => void;
  onOpenCompareModal: () => void;
  savedSalons: string[];
  onToggleSave: (salon: Salon) => void;
  initialSearchQuery?: string;
  initialCategory?: string;
  initialAtHomeOnly?: boolean;
}

export const SalonDirectory: React.FC<SalonDirectoryProps> = ({
  salons,
  onViewDetails,
  onBook,
  comparedSalons,
  onToggleCompare,
  onOpenCompareModal,
  savedSalons,
  onToggleSave,
  initialSearchQuery = '',
  initialCategory = 'all',
  initialAtHomeOnly = false
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedPriceLevel, setSelectedPriceLevel] = useState<string>('all');
  const [atHomeOnly, setAtHomeOnly] = useState<boolean>(initialAtHomeOnly);
  const [sortBy, setSortBy] = useState<'rating' | 'priceAsc' | 'reviews'>('rating');

  // Extract unique neighborhoods in Yazd from salons
  const neighborhoods = useMemo(() => {
    const list = Array.from(new Set(salons.map(s => s.neighborhood)));
    return ['all', ...list];
  }, [salons]);

  // Filter salons
  const filteredSalons = useMemo(() => {
    return salons.filter(salon => {
      // Search query matches name, neighborhood, address, or services
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = salon.name.toLowerCase().includes(q);
        const matchesNeighborhood = salon.neighborhood.toLowerCase().includes(q);
        const matchesServices = salon.services.some(srv => 
          srv.name.toLowerCase().includes(q) || srv.categoryLabel.toLowerCase().includes(q)
        );
        const matchesAbout = salon.about.toLowerCase().includes(q);
        if (!matchesName && !matchesNeighborhood && !matchesServices && !matchesAbout) {
          return false;
        }
      }

      // Type filter
      if (selectedType !== 'all') {
        if (selectedType === 'women' && salon.type !== 'women' && salon.type !== 'both') return false;
        if (selectedType === 'men' && salon.type !== 'men' && salon.type !== 'both') return false;
      }

      // Neighborhood filter
      if (selectedNeighborhood !== 'all' && salon.neighborhood !== selectedNeighborhood) {
        return false;
      }

      // Price level filter
      if (selectedPriceLevel !== 'all' && salon.priceLevel !== selectedPriceLevel) {
        return false;
      }

      // Service category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'at_home') {
          if (!salon.isAtHomeAvailable) return false;
        } else {
          const hasCategory = salon.services.some(s => s.category === selectedCategory);
          if (!hasCategory) return false;
        }
      }

      // At-Home only toggle
      if (atHomeOnly && !salon.isAtHomeAvailable) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'priceAsc') return a.minPrice - b.minPrice;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      return 0;
    });
  }, [
    salons, 
    searchQuery, 
    selectedType, 
    selectedNeighborhood, 
    selectedCategory, 
    selectedPriceLevel, 
    atHomeOnly, 
    sortBy
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedNeighborhood('all');
    setSelectedCategory('all');
    setSelectedPriceLevel('all');
    setAtHomeOnly(false);
    setSortBy('rating');
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedType !== 'all' || 
    selectedNeighborhood !== 'all' || 
    selectedCategory !== 'all' || 
    selectedPriceLevel !== 'all' || 
    atHomeOnly;

  return (
    <div className="space-y-6">
      {/* Header & Title */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Search className="w-6 h-6 text-rose-600" />
              <span>جستجو و فیلتر پیشرفته آرایشگاه‌ها (یزد)</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              مشاهده اطلاعات کامل، استعلام قیمت، مقایسه همزمان و فیلتر خدمات در محل
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-rose-400"
            >
              <option value="rating">بالاترین امتیاز رضایت</option>
              <option value="priceAsc">کمترین قیمت پایه</option>
              <option value="reviews">بیشترین تعداد نظرات</option>
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجوی نام آرایشگاه، نوع خدمت (مثلاً کوتاهی، رنگ، فیشیال) یا محله..."
            className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium pr-11 pl-10 py-3.5 rounded-2xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition outline-none"
          />
          <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 absolute left-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Gender / Type */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">نوع سالن:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:border-rose-400 outline-none"
            >
              <option value="all">همه سالن‌ها (زنانه و مردانه)</option>
              <option value="women">فقط سالن‌های زنانه</option>
              <option value="men">فقط آرایشگاه‌های مردانه</option>
            </select>
          </div>

          {/* Neighborhood */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">محله / منطقه در یزد:</label>
            <select
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:border-rose-400 outline-none"
            >
              <option value="all">همه محلات یزد</option>
              {neighborhoods.filter(n => n !== 'all').map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Service Category */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">دسته‌بندی خدمت:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:border-rose-400 outline-none"
            >
              <option value="all">همه خدمات</option>
              <option value="haircut">کوتاهی مو و استایل</option>
              <option value="color">رنگ، لایت و بالیاژ</option>
              <option value="makeup">میکاپ و گریم</option>
              <option value="skincare">پاکسازی پوست و فیشیال</option>
              <option value="nail">خدمات ناخن و اسپا</option>
              <option value="beard">اصلاح و طراحی ریش</option>
              <option value="at_home">خدمات دارای امکان در محل</option>
            </select>
          </div>

          {/* Price Level */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">سطح قیمت:</label>
            <select
              value={selectedPriceLevel}
              onChange={(e) => setSelectedPriceLevel(e.target.value)}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:border-rose-400 outline-none"
            >
              <option value="all">همه سطوح قیمتی</option>
              <option value="budget">اقتصادی و مناسب</option>
              <option value="medium">متوسط استاندارد</option>
              <option value="premium">پرمیوم و VIP</option>
            </select>
          </div>
        </div>

        {/* Toggles & Reset Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
          <div className="flex items-center gap-3">
            {/* At-Home Toggle Button */}
            <button
              onClick={() => setAtHomeOnly(!atHomeOnly)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                atHomeOnly
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <HomeIcon className="w-4 h-4" />
              <span>فقط آرایشگاه‌های ارائه‌دهنده خدمات در محل (منزل)</span>
              {atHomeOnly && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">
              نمایش <strong className="text-slate-900 font-bold">{filteredSalons.length}</strong> از {salons.length} آرایشگاه
            </span>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>حذف همه فیلترها</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Salons Grid */}
      {filteredSalons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSalons.map(salon => (
            <SalonCard
              key={salon.id}
              salon={salon}
              onViewDetails={onViewDetails}
              onBook={onBook}
              isCompared={comparedSalons.some(s => s.id === salon.id)}
              onToggleCompare={onToggleCompare}
              isSaved={savedSalons.includes(salon.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">هیچ آرایشگاهی با این فیلترها یافت نشد</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            لطفاً عبارت جستجو را تغییر دهید یا فیلترهای اعمال‌شده مانند محله یا نوع خدمت را بازنشانی کنید.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition"
          >
            پاک کردن تمام فیلترها
          </button>
        </div>
      )}

      {/* Floating Comparison Sticky Bar */}
      {comparedSalons.length > 0 && (
        <div className="fixed bottom-5 inset-x-4 max-w-3xl mx-auto z-40 bg-slate-900/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl border border-slate-700 flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold">
                {comparedSalons.length} آرایشگاه برای مقایسه انتخاب شده است
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                {comparedSalons.map(s => (
                  <span key={s.id} className="text-[10px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded-md truncate max-w-[100px]">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCompareModal}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition cursor-pointer"
            >
              مشاهده جدول مقایسه
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

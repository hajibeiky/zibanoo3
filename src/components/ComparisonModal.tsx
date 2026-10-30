import React from 'react';
import { 
  X, 
  Scale, 
  Star, 
  MapPin, 
  Clock, 
  Home as HomeIcon, 
  Check, 
  Minus, 
  ArrowLeft,
  CalendarCheck
} from 'lucide-react';
import { Salon } from '../types';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  salons: Salon[];
  onRemoveSalon: (id: string) => void;
  onBookSalon: (salon: Salon) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  salons,
  onRemoveSalon,
  onBookSalon
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                مقایسه هوشمند آرایشگاه‌ها ({salons.length} مورد)
              </h2>
              <p className="text-xs text-slate-500">
                بررسی همزمان قیمت پایه، موقعیت مکانی، خدمات در محل و رضایت مشتریان
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
        {salons.length === 0 ? (
          <div className="p-12 text-center space-y-4">
            <p className="text-sm text-slate-500">هیچ آرایشگاهی برای مقایسه انتخاب نشده است.</p>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold"
            >
              بازگشت به لیست آرایشگاه‌ها
            </button>
          </div>
        ) : (
          <div className="p-6 overflow-x-auto">
            <div className="min-w-[650px]">
              {/* Salons Top Row */}
              <div className="grid grid-cols-5 gap-3 border-b border-slate-200 pb-5">
                <div className="col-span-1 text-xs font-bold text-slate-400 flex items-end pb-2">
                  معیار مقایسه
                </div>

                {salons.map((salon) => (
                  <div key={salon.id} className="col-span-1 space-y-3 relative p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <button
                      onClick={() => onRemoveSalon(salon.id)}
                      className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 flex items-center justify-center transition shadow-xs text-xs"
                      title="حذف از مقایسه"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="space-y-2">
                      <div className="h-24 rounded-xl overflow-hidden bg-slate-200">
                        <img
                          src={salon.coverImage}
                          alt={salon.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 inline-block">
                        {salon.typeLabel}
                      </span>
                      <h4 className="font-black text-xs text-slate-900 leading-tight">
                        {salon.name}
                      </h4>
                    </div>

                    <button
                      onClick={() => onBookSalon(salon)}
                      className="w-full py-1.5 px-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold shadow-xs transition flex items-center justify-center gap-1"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>رزرو این سالن</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-100 text-xs">
                {/* Location */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-bold text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>موقعیت و محله</span>
                  </div>
                  {salons.map((s) => (
                    <div key={s.id} className="text-slate-800 font-medium">
                      {s.city}، {s.neighborhood}
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-bold text-slate-600 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    <span>امتیاز و نظرات</span>
                  </div>
                  {salons.map((s) => (
                    <div key={s.id} className="flex items-center gap-1 font-bold text-slate-900">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{s.rating.toFixed(1)}</span>
                      <span className="text-slate-400 font-normal">({s.reviewsCount} نظر)</span>
                    </div>
                  ))}
                </div>

                {/* Starting Price */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-bold text-slate-600">
                    قیمت پایه شروع خدمات
                  </div>
                  {salons.map((s) => (
                    <div key={s.id} className="font-black text-rose-700">
                      {s.minPrice.toLocaleString('fa-IR')} تومان
                    </div>
                  ))}
                </div>

                {/* Price Level */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-bold text-slate-600">
                    سطح و رده قیمتی
                  </div>
                  {salons.map((s) => (
                    <div key={s.id} className="font-medium text-slate-700">
                      {s.priceLevelLabel}
                    </div>
                  ))}
                </div>

                {/* At-Home Service */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center bg-amber-50/40 -mx-2 px-2 rounded-xl">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5">
                    <HomeIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>خدمات در محل (منزل)</span>
                  </div>
                  {salons.map((s) => (
                    <div key={s.id}>
                      {s.isAtHomeAvailable ? (
                        <div className="text-emerald-700 font-bold flex items-center gap-1">
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>فعال (با هماهنگی)</span>
                        </div>
                      ) : (
                        <div className="text-slate-400 font-medium flex items-center gap-1">
                          <Minus className="w-3.5 h-3.5" />
                          <span>فقط مراجعه حضوری</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Working hours */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-bold text-slate-600 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>ساعت کاری</span>
                  </div>
                  {salons.map((s) => (
                    <div key={s.id} className="text-slate-600 text-[11px]">
                      {s.workingHours}
                    </div>
                  ))}
                </div>

                {/* Key Services Sample */}
                <div className="grid grid-cols-5 gap-3 py-3 items-start">
                  <div className="font-bold text-slate-600">
                    نمونه خدمات و نرخ‌ها
                  </div>
                  {salons.map((s) => (
                    <div key={s.id} className="space-y-1.5">
                      {s.services.slice(0, 3).map((srv) => (
                        <div key={srv.id} className="text-[11px] p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                          <p className="font-bold text-slate-800 truncate">{srv.name}</p>
                          <p className="text-rose-700 font-bold mt-0.5">{srv.price.toLocaleString('fa-IR')} تومان</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>می‌توانید حداکثر ۴ سالن را به‌طور همزمان در این جدول مقایسه فرمایید.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition cursor-pointer"
          >
            بستن جدول مقایسه
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Home as HomeIcon, 
  Check, 
  Plus, 
  Heart, 
  ArrowLeft,
  CalendarCheck
} from 'lucide-react';
import { Salon } from '../types';

interface SalonCardProps {
  salon: Salon;
  onViewDetails: (salon: Salon) => void;
  onBook: (salon: Salon) => void;
  isCompared: boolean;
  onToggleCompare: (salon: Salon) => void;
  isSaved: boolean;
  onToggleSave: (salon: Salon) => void;
}

export const SalonCard: React.FC<SalonCardProps> = ({
  salon,
  onViewDetails,
  onBook,
  isCompared,
  onToggleCompare,
  isSaved,
  onToggleSave
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:border-rose-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Card Header & Image */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={salon.coverImage}
            alt={salon.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

          {/* Badges on Top */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between">
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs ${
              salon.type === 'women'
                ? 'bg-rose-600 text-white'
                : salon.type === 'men'
                ? 'bg-slate-900 text-white'
                : 'bg-purple-700 text-white'
            }`}>
              {salon.typeLabel}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(salon);
                }}
                className={`p-1.5 rounded-full backdrop-blur-md transition ${
                  isSaved
                    ? 'bg-rose-500 text-white'
                    : 'bg-white/80 hover:bg-white text-slate-700'
                }`}
                title="نشان کردن"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
              </button>
            </div>
          </div>

          {/* At-Home Service Badge */}
          {salon.isAtHomeAvailable && (
            <div className="absolute bottom-3 right-3 bg-amber-500/95 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>ارائه خدمات در محل (منزل)</span>
            </div>
          )}

          {/* Rating */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-black px-2 py-1 rounded-xl flex items-center gap-1 shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{salon.rating.toFixed(1)}</span>
            <span className="text-[10px] text-slate-400 font-normal">({salon.reviewsCount})</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          {/* Title & Neighborhood */}
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{salon.city}، {salon.neighborhood}</span>
            </div>
            <h3 
              onClick={() => onViewDetails(salon)}
              className="text-base sm:text-lg font-black text-slate-900 hover:text-rose-700 transition cursor-pointer"
            >
              {salon.name}
            </h3>
          </div>

          {/* About / Brief description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {salon.about}
          </p>

          {/* Sample services chips */}
          <div className="pt-1 flex flex-wrap gap-1.5">
            {salon.services.slice(0, 3).map((srv) => (
              <span
                key={srv.id}
                className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 font-medium"
              >
                {srv.name.split('+')[0]}
              </span>
            ))}
          </div>

          {/* Price Range & Starting Price */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              سطح قیمت: <strong className="text-slate-800">{salon.priceLevelLabel}</strong>
            </span>
            <div>
              <span className="text-slate-400 text-[11px]">شروع از: </span>
              <span className="font-black text-sm text-rose-700">
                {salon.minPrice.toLocaleString('fa-IR')}
              </span>
              <span className="text-[10px] text-slate-500 mr-1">تومان</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-4 bg-slate-50/70 border-t border-slate-100 space-y-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onBook(salon)}
            className="flex-1 py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>رزرو آنلاین نوبت</span>
          </button>

          <button
            onClick={() => onViewDetails(salon)}
            className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
          >
            جزئیات
          </button>
        </div>

        {/* Compare Toggle */}
        <button
          onClick={() => onToggleCompare(salon)}
          className={`w-full py-1.5 px-3 rounded-xl text-xs font-medium transition flex items-center justify-center gap-1.5 cursor-pointer ${
            isCompared
              ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
              : 'text-slate-500 hover:text-slate-800 hover:bg-white border border-transparent hover:border-slate-200'
          }`}
        >
          {isCompared ? (
            <>
              <Check className="w-3.5 h-3.5 text-amber-700" />
              <span>در لیست مقایسه قرار دارد</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>افزودن به لیست مقایسه</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

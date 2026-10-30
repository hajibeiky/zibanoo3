import React from 'react';
import { X, Heart, MapPin, Star, CalendarCheck } from 'lucide-react';
import { Salon } from '../types';

interface SavedSalonsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedSalons: Salon[];
  onRemoveSaved: (salon: Salon) => void;
  onBook: (salon: Salon) => void;
  onViewDetails: (salon: Salon) => void;
}

export const SavedSalonsModal: React.FC<SavedSalonsModalProps> = ({
  isOpen,
  onClose,
  savedSalons,
  onRemoveSaved,
  onBook,
  onViewDetails
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-rose-600 text-rose-600" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-base">سالن‌های نشان‌شده ({savedSalons.length})</h3>
              <p className="text-[11px] text-slate-500">لیست علاقه‌مندی‌های ذخیره‌شده شما در زیبانو</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-3 overflow-y-auto flex-1">
          {savedSalons.length === 0 ? (
            <div className="py-10 text-center text-slate-500 text-xs space-y-2">
              <p>شما هنوز هیچ سالنی را نشان نکرده‌اید.</p>
              <p className="text-[11px] text-slate-400">با کلیک روی آیکون قلب در هر کارت، سالن‌ها اینجا ذخیره می‌شوند.</p>
            </div>
          ) : (
            savedSalons.map(salon => (
              <div key={salon.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src={salon.coverImage} alt={salon.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{salon.name}</h4>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-500" />
                      <span>{salon.city}، {salon.neighborhood}</span>
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-amber-600 font-bold mt-0.5">
                      <Star className="w-3 h-3 fill-amber-500" />
                      <span>{salon.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onBook(salon);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-700 transition"
                  >
                    رزرو
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onViewDetails(salon);
                    }}
                    className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-[11px] font-medium hover:bg-slate-100 transition"
                  >
                    جزئیات
                  </button>
                  <button
                    onClick={() => onRemoveSaved(salon)}
                    className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-100 transition"
                    title="حذف از لیست"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

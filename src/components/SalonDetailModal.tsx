import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Home as HomeIcon, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  MessageSquare, 
  Share2,
  Heart,
  User,
  Scissors
} from 'lucide-react';
import { Salon, ServiceItem } from '../types';

interface SalonDetailModalProps {
  salon: Salon | null;
  isOpen: boolean;
  onClose: () => void;
  onBookService: (salon: Salon, service?: ServiceItem) => void;
  isSaved: boolean;
  onToggleSave: (salon: Salon) => void;
}

export const SalonDetailModal: React.FC<SalonDetailModalProps> = ({
  salon,
  isOpen,
  onClose,
  onBookService,
  isSaved,
  onToggleSave
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'portfolio' | 'reviews' | 'about'>('services');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);

  if (!isOpen || !salon) return null;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;
    setSubmittedReview(true);
    setTimeout(() => {
      setNewReviewAuthor('');
      setNewReviewComment('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-200 shrink-0">
          <img
            src={salon.coverImage}
            alt={salon.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Salon Details Overlay */}
          <div className="absolute bottom-5 inset-x-5 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-600 text-white">
                  {salon.typeLabel}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                  {salon.priceLevelLabel}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">{salon.name}</h2>
              <p className="text-xs sm:text-sm text-stone-200 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{salon.address}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSave(salon)}
                className={`p-2 rounded-xl backdrop-blur-md border border-white/20 transition ${
                  isSaved ? 'bg-rose-600 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                title="نشان کردن"
              >
                <Heart className={`w-5 h-5 ${isSaved ? 'fill-white' : ''}`} />
              </button>
              <button
                onClick={() => onBookService(salon)}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-lg transition flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>رزرو نوبت در این سالن</span>
              </button>
            </div>
          </div>
        </div>

        {/* At-Home Notice Box */}
        {salon.isAtHomeAvailable && (
          <div className="bg-amber-50 border-b border-amber-200 p-4 px-6 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <HomeIcon className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm text-amber-950 space-y-1">
              <p className="font-bold">ارائه خدمات در محل مشتری (منزل، بیمارستان، اقامتگاه):</p>
              <p className="text-amber-900 leading-relaxed">{salon.atHomeDetails}</p>
            </div>
          </div>
        )}

        {/* Quick Info Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>ساعت کاری: <strong>{salon.workingHours}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>تلفن سالن: <strong>{salon.phone}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>امتیاز {salon.rating.toFixed(1)} از ۵ ({salon.reviewsCount} نظر مشتریان)</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6">
          {[
            { id: 'services', label: `لیست خدمات و قیمت‌ها (${salon.services.length})` },
            { id: 'portfolio', label: `آلبوم نمونه‌کارها (${salon.portfolio.length})` },
            { id: 'reviews', label: `نظرات مشتریان (${salon.reviews.length})` },
            { id: 'about', label: 'درباره سالن و پرسنل' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition -mb-px cursor-pointer ${
                activeTab === tab.id
                  ? 'border-rose-600 text-rose-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 mb-2">
                قیمت‌ها مصوب و شفاف هستند؛ خدمت مورد نظر خود را انتخاب کنید و دکمه رزرو را بزنید:
              </p>
              <div className="space-y-3">
                {salon.services.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{service.name}</h4>
                        {service.supportsAtHome && (
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-medium flex items-center gap-1">
                            <HomeIcon className="w-3 h-3" />
                            <span>امکان ارائه در محل</span>
                          </span>
                        )}
                      </div>
                      {service.description && (
                        <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
                      )}
                      <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <span>دسته‌بندی: {service.categoryLabel}</span>
                        <span>•</span>
                        <span>مدت زمان تقریبی: {service.durationMinutes} دقیقه</span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
                      <div>
                        <span className="text-base font-black text-rose-700">
                          {service.price.toLocaleString('fa-IR')}
                        </span>
                        <span className="text-[11px] text-slate-500 mr-1">تومان</span>
                      </div>
                      <button
                        onClick={() => onBookService(salon, service)}
                        className="px-4 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold transition flex items-center gap-1 border border-rose-200 cursor-pointer"
                      >
                        <Scissors className="w-3.5 h-3.5" />
                        <span>رزرو این خدمت</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                تصاویر واقعی نمونه‌کارهای اجرا شده توسط آرایشگران این سالن:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {salon.portfolio.map((img) => (
                  <div key={img.id} className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square">
                    <img
                      src={img.imageUrl}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 text-white">
                      <div>
                        <p className="text-xs font-bold">{img.title}</p>
                        <p className="text-[10px] text-stone-300">{img.category} • {img.likes} پسند</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Existing Reviews */}
              <div className="space-y-3">
                {salon.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                          {rev.author[0]}
                        </div>
                        <span className="font-bold text-slate-900">{rev.author}</span>
                        <span className="text-slate-400 text-[11px]">({rev.serviceName})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-500">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-400 mr-2">{rev.date}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pr-9">
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>

              {/* Add Review Box */}
              <div className="p-4 rounded-2xl bg-white border border-rose-200 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-rose-600" />
                  <span>ثبت نظر و تجربه شما (آزمایشی)</span>
                </h4>

                {submittedReview ? (
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>نظر شما با موفقیت به صورت آزمایشی ثبت گردید و پس از تایید نمایش داده می‌شود.</span>
                  </div>
                ) : (
                  <form onSubmit={handleAddReview} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="نام شما"
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        required
                        className="text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-400 outline-none"
                      />
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-600">امتیاز:</span>
                        <select
                          value={newReviewRating}
                          onChange={(e) => setNewReviewRating(Number(e.target.value))}
                          className="p-2 rounded-xl border border-slate-200 bg-white"
                        >
                          <option value={5}>۵ ستاره - عالی</option>
                          <option value={4}>۴ ستاره - خیلی خوب</option>
                          <option value={3}>۳ ستاره - متوسط</option>
                        </select>
                      </div>
                    </div>
                    <textarea
                      placeholder="متن نظر یا تجربه شما از خدمات..."
                      rows={2}
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      required
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:border-rose-400 outline-none"
                    ></textarea>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition"
                    >
                      ارسال نظر
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900">معرفی سالن:</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {salon.about}
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900">امکانات و مزیت‌های شاخص:</h4>
                <div className="flex flex-wrap gap-2">
                  {salon.features.map((f, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                      <span>{f}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Stylists */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900">تیم آرایشگران و متخصصان سالن:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {salon.stylists.map((st) => (
                    <div key={st.id} className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
                      <img
                        src={st.avatar}
                        alt={st.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{st.name}</h5>
                        <p className="text-[11px] text-slate-500">{st.role}</p>
                        <p className="text-[10px] text-rose-700 font-medium">{st.experienceYears} سال سابقه کار</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

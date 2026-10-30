import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Smile, 
  Check, 
  ArrowLeft, 
  Search, 
  Layers, 
  Info,
  Palette
} from 'lucide-react';

interface AISimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHairstyle: (styleName: string) => void;
}

export const AISimulatorModal: React.FC<AISimulatorModalProps> = ({
  isOpen,
  onClose,
  onSelectHairstyle
}) => {
  const [selectedShape, setSelectedShape] = useState<'oval' | 'round' | 'square' | 'heart'>('oval');
  const [selectedGender, setSelectedGender] = useState<'women' | 'men'>('women');

  if (!isOpen) return null;

  const faceShapes = [
    { id: 'oval', name: 'فرم چهره بیضی', desc: 'متعادل‌ترین فرم صورت، مناسب تقریباً همه مدل‌های مو' },
    { id: 'round', name: 'فرم چهره گرد', desc: 'مناسب مدل‌های لیر بلند و حجم بالای سر جهت کشیده‌تر نشان دادن صورت' },
    { id: 'square', name: 'فرم چهره مربعی', desc: 'مناسب لایه‌های نرم دور فک، چتری ملایم و فرهای درشت' },
    { id: 'heart', name: 'فرم چهره قلبی', desc: 'مناسب مدل‌های تا روی چانه، باب کلاسیک و حجم در بخش انتهایی مو' },
  ];

  const recommendations = {
    women: {
      oval: [
        { name: 'کوتاهی باب فرانسوی کج', img: 'https://images.unsplash.com/photo-1522337094345-a044af567ce8?auto=format&fit=crop&w=400&q=80', color: 'شکلاتی دودی' },
        { name: 'لیر پرحجم متوسط با کرلی', img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80', color: 'بالیاژ نسکافه‌ای' },
      ],
      round: [
        { name: 'لیر بلند صاف شلاقی', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80', color: 'مشکی پرکلاغی یا قهوه‌ای تیره' },
        { name: 'چتری پرده‌ای با موهای مواج', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80', color: 'آمبره فندقی' },
      ],
      square: [
        { name: 'کرلی درشت با فرق کج عمیق', img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80', color: 'هایلایت کاراملی ملایم' },
      ],
      heart: [
        { name: 'مدل موی باب تا خط چانه', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80', color: 'عسلی طلایی' },
      ],
    },
    men: {
      oval: [
        { name: 'پمپادور کلاسیک با خط ریش دقیق', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', color: 'قهوه‌ای تیره طبیعی' },
        { name: 'مید فید با استایل تکسچر', img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=400&q=80', color: 'طبیعی مشکی' },
      ],
      round: [
        { name: 'اسکین فید با حجم بالای سر (High Top)', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80', color: 'مشکی مات' },
      ],
      square: [
        { name: 'کوتاهی ارتش و فید کلاسیک', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', color: 'طبیعی' },
      ],
      heart: [
        { name: 'استایل بلندتر در پهلوها با کات قیچی', img: 'https://images.unsplash.com/photo-1517832606589-7629c339590a?auto=format&fit=crop&w=400&q=80', color: 'دودی ملایم' },
      ],
    }
  };

  const currentStyles = recommendations[selectedGender][selectedShape] || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-l from-rose-900 via-stone-800 to-amber-900 text-white rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black">
                  پیش‌نمایش شبیه‌ساز هوشمند چهره و مدل مو (قابلیت آینده)
                </h2>
              </div>
              <p className="text-xs text-amber-200/90 mt-0.5">
                نسخه ماک (Mock Concept) مطابق پرسش ۷ پرونده تحلیلی کسب‌وکار
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice from Dossier */}
        <div className="bg-amber-50 p-4 border-b border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>توضیح فنی فاز اول:</strong> همان‌طور که در بند ۷ پرونده تحلیلی ذکر شد، اتصال به پردازش ابری تصویر صورت برای فازهای بعدی برنامه‌ریزی شده است. در این نسخه آزمایشی می‌توانید گالری پیشنهادات تطبیقی فرم چهره را بررسی و در میان سالن‌ها جستجو نمایید.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Gender toggle */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setSelectedGender('women')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition ${
                selectedGender === 'women'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              مدل‌های بانوان
            </button>
            <button
              onClick={() => setSelectedGender('men')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition ${
                selectedGender === 'men'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              مدل‌های آقایان
            </button>
          </div>

          {/* Face Shapes Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              ۱. انتخاب فرم هندسی صورت:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {faceShapes.map(shape => {
                const isSelected = selectedShape === shape.id;
                return (
                  <button
                    key={shape.id}
                    onClick={() => setSelectedShape(shape.id as any)}
                    className={`p-3 rounded-2xl border text-right transition cursor-pointer ${
                      isSelected
                        ? 'border-rose-600 bg-rose-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <p className={`text-xs font-bold ${isSelected ? 'text-rose-800' : 'text-slate-800'}`}>
                      {shape.name}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                      {shape.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Model Recommendations Gallery */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-800">
              ۲. مدل‌های پیشنهادی منطبق بر این فرم چهره:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentStyles.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between">
                  <div className="h-44 bg-slate-200 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-white">
                      تطابق بالا با فرم صورت
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-rose-600" />
                      <span>رنگ و تناژ پیشنهادی: <strong>{item.color}</strong></span>
                    </p>

                    <button
                      onClick={() => {
                        onSelectHairstyle(item.name.split(' ')[0]);
                        onClose();
                      }}
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-rose-700 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>جستجوی سالن‌های ارائه‌دهنده این مدل</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};

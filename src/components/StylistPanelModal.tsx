import React, { useState } from 'react';
import { 
  X, 
  Store, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  DollarSign, 
  Users, 
  Home as HomeIcon, 
  Scissors, 
  Sparkles, 
  Sliders, 
  Plus,
  AlertCircle
} from 'lucide-react';
import { BookingRequest } from '../types';

interface StylistPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingRequest[];
}

export const StylistPanelModal: React.FC<StylistPanelModalProps> = ({
  isOpen,
  onClose,
  bookings
}) => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'requests' | 'services'>('schedule');
  const [salonStatus, setSalonStatus] = useState<'open' | 'busy'>('open');

  // Simulated pending requests for salon manager to accept/reject
  const [pendingList, setPendingList] = useState([
    {
      id: 'p-1',
      customer: 'فاطمه یزدانی',
      phone: '۰۹۱۳۴۵۶۷۸۹۰',
      service: 'رنگ و لایت بالیاژ کاراملی',
      date: 'امروز ۱۲ آبان',
      time: 'ساعت ۱۶:۰۰',
      type: 'in_salon',
      price: 1450000,
      notes: 'لطفاً تست حساسیت رنگ قبل از کار انجام شود'
    },
    {
      id: 'p-2',
      customer: 'حاج محمود کمالی',
      phone: '۰۹۱۳۷۶۵۴۳۲۱',
      service: 'اصلاح سر و صورت در محل (سالمند)',
      date: 'فردا ۱۳ آبان',
      time: 'ساعت ۱۱:۰۰ صبح',
      type: 'at_home',
      price: 180000,
      notes: 'یزد، صفائیه، کوچه سنبل - طبقه اول'
    }
  ]);

  const [acceptedIds, setAcceptedIds] = useState<string[]>([]);
  const [rejectedIds, setRejectedIds] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleAccept = (id: string) => {
    setAcceptedIds(prev => [...prev, id]);
  };

  const handleReject = (id: string) => {
    setRejectedIds(prev => [...prev, id]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black">
                  پیش‌نمایش پنل اختصاصی مدیریت آرایشگاه
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/30 text-rose-300 border border-rose-500/40">
                  نمای آرایشگر
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                حل مشکل «مدیریت دستی نوبت‌ها و استعلام تلفنی قیمت» مطرح‌شده در پرونده تحلیلی
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Bar */}
        <div className="bg-slate-800 px-6 py-3 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-white">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">وضعیت پذیرش سالن:</span>
            <button
              onClick={() => setSalonStatus('open')}
              className={`px-3 py-1 rounded-lg font-bold transition ${
                salonStatus === 'open' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
              }`}
            >
              ● در حال پذیرش نوبت
            </button>
            <button
              onClick={() => setSalonStatus('busy')}
              className={`px-3 py-1 rounded-lg font-bold transition ${
                salonStatus === 'busy' ? 'bg-amber-600 text-white' : 'bg-slate-700 text-slate-300'
              }`}
            >
              پُر / موقتاً بسته
            </button>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-[11px]">
            <span>نوبت‌های امروز: <strong>۶ نوبت</strong></span>
            <span>•</span>
            <span>درخواست‌های جدید: <strong className="text-amber-400">{pendingList.filter(p => !acceptedIds.includes(p.id) && !rejectedIds.includes(p.id)).length} مورد</strong></span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50">
          {[
            { id: 'schedule', label: 'تقویم و نوبت‌های امروز سالن' },
            { id: 'requests', label: `درخواست‌های جدید در انتظار تایید (${pendingList.filter(p => !acceptedIds.includes(p.id) && !rejectedIds.includes(p.id)).length})` },
            { id: 'services', label: 'مدیریت تعرفه و خدمات' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition -mb-px cursor-pointer ${
                activeTab === tab.id
                  ? 'border-rose-600 text-rose-700 bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-600" />
                  <span>برنامه زمان‌بندی صندلی‌های سالن — شنبه ۱۲ آبان</span>
                </h3>
                <span className="text-xs text-slate-500">نوبت‌های رزرو شده در زیبانو</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { time: '۱۰:۰۰ الی ۱۱:۰۰', client: 'زهرا کاظمی', service: 'کوتاهی ژورنالی', stylist: 'پریناز افشار', status: 'انجام شده', isAtHome: false },
                  { time: '۱۱:۳۰ الی ۱۲:۳۰', client: 'فاطمه رضایی (ثبت شده در زیبانو)', service: 'کوتاهی + براشینگ', stylist: 'پریناز افشار', status: 'نوبت بعدی', isAtHome: false },
                  { time: '۱۴:۰۰ الی ۱۷:۰۰', client: 'سحر حائری', service: 'کراتین و نانوتراپی', stylist: 'مهسا کاظمی', status: 'در انتظار مراجعه', isAtHome: false },
                  { time: '۱۷:۳۰ الی ۱۸:۳۰', client: 'مادر گرانقدر آقای دهقان', service: 'اصلاح و مانیکور بهداشتی', stylist: 'تیم اعزام به منزل', status: 'اعزام در محل', isAtHome: true },
                  { time: '۱۹:۰۰ الی ۲۰:۰۰', client: 'نرگس یزدانی', service: 'میکاپ لایت', stylist: 'پریناز افشار', status: 'در انتظار مراجعه', isAtHome: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs hover:border-slate-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1.5 rounded-xl text-center shrink-0">
                        {item.time}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.client}</h4>
                          {item.isAtHome && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 flex items-center gap-1">
                              <HomeIcon className="w-3 h-3" />
                              <span>اعزام به محل</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.service} • استایلیست: {item.stylist}</p>
                      </div>
                    </div>

                    <span className={`text-xs font-bold px-3 py-1 rounded-xl shrink-0 self-start sm:self-center ${
                      item.status === 'انجام شده'
                        ? 'bg-slate-100 text-slate-500'
                        : item.status === 'نوبت بعدی'
                        ? 'bg-rose-100 text-rose-800 animate-pulse'
                        : item.status === 'اعزام در محل'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-emerald-50 text-emerald-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pending Requests Tab */}
          {activeTab === 'requests' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                درخواست‌هایی که کاربران به تازگی از طریق اپلیکیشن ارسال کرده‌اند:
              </p>

              {pendingList.map(req => {
                const isAccepted = acceptedIds.includes(req.id);
                const isRejected = rejectedIds.includes(req.id);

                return (
                  <div
                    key={req.id}
                    className={`p-4 rounded-2xl border transition space-y-3 ${
                      isAccepted
                        ? 'bg-emerald-50/60 border-emerald-200'
                        : isRejected
                        ? 'bg-red-50/60 border-red-200 opacity-60'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm">{req.customer}</h4>
                          <span className="text-xs text-slate-500 font-mono">({req.phone})</span>
                          {req.type === 'at_home' && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                              درخواست خدمت در منزل
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-rose-700 font-bold mt-1">{req.service}</p>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-xs font-bold text-slate-800">{req.date} — {req.time}</span>
                        <p className="text-xs text-slate-500 font-mono">{req.price.toLocaleString('fa-IR')} تومان</p>
                      </div>
                    </div>

                    {req.notes && (
                      <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <strong>یادداشت مشتری:</strong> {req.notes}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      {isAccepted ? (
                        <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>نوبت تایید شد و پیامک برای مشتری ارسال شد.</span>
                        </span>
                      ) : isRejected ? (
                        <span className="text-xs font-bold text-red-700 flex items-center gap-1">
                          <XCircle className="w-4 h-4" />
                          <span>نوبت رد شد.</span>
                        </span>
                      ) : (
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                          <button
                            onClick={() => handleReject(req.id)}
                            className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-medium transition"
                          >
                            عدم امکان در این ساعت
                          </button>
                          <button
                            onClick={() => handleAccept(req.id)}
                            className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>تایید قطعی نوبت</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">تنظیم نرخ و خدمات فعال سالن</h4>
                  <p className="text-xs text-slate-500">قیمت‌های واردشده مستقیماً در جستجوی زیبانو نمایش داده می‌شوند.</p>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>افزودن خدمت جدید</span>
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { name: 'کوتاهی مو ژورنالی', price: '۲۸۰,۰۰۰ تومان', time: '۴۵ دقیقه', status: 'فعال' },
                  { name: 'رنگ و لایت بالیاژ', price: '۱,۴۵۰,۰۰۰ تومان', time: '۱۸۰ دقیقه', status: 'فعال' },
                  { name: 'پکیج شینیون و میکاپ', price: '۱,۴۰۰,۰۰۰ تومان', time: '۱۲۰ دقیقه', status: 'فعال' },
                  { name: 'سرویس اعزام به منزل', price: '۳۵۰,۰۰۰ تومان به بالا', time: '۶۰ دقیقه', status: 'فعال' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <strong className="text-slate-800">{item.name}</strong>
                      <span className="text-slate-400 mr-2">({item.time})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-rose-700">{item.price}</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>این بخش نمونه شبیه‌سازی‌شده پنل آرایشگران در فاز اول پروژه تجارت الکترونیکی است.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition"
          >
            بستن پنل
          </button>
        </div>
      </div>
    </div>
  );
};

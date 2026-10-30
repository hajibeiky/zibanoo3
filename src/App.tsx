/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessDossier } from './components/BusinessDossier';
import { SalonDirectory } from './components/SalonDirectory';
import { SalonCard } from './components/SalonCard';
import { MVPDashboard } from './components/MVPDashboard';
import { SalonDetailModal } from './components/SalonDetailModal';
import { ComparisonModal } from './components/ComparisonModal';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { StylistRegisterModal } from './components/StylistRegisterModal';
import { StylistPanelModal } from './components/StylistPanelModal';
import { AISimulatorModal } from './components/AISimulatorModal';
import { SavedSalonsModal } from './components/SavedSalonsModal';
import { Footer } from './components/Footer';

import { INITIAL_SALONS, INITIAL_BOOKINGS } from './data/salonsData';
import { Salon, ServiceItem, BookingRequest, StylistApplication } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'directory' | 'dossier' | 'mvp'>('home');
  
  // Salons state
  const [salons] = useState<Salon[]>(INITIAL_SALONS);

  // Bookings state with LocalStorage persistence
  const [bookings, setBookings] = useState<BookingRequest[]>(() => {
    try {
      const saved = localStorage.getItem('zibano_bookings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_BOOKINGS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('zibano_bookings', JSON.stringify(bookings));
    } catch {
      // ignore
    }
  }, [bookings]);

  // Saved / Favorite Salons
  const [savedSalonIds, setSavedSalonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('zibano_saved_salons');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return ['salon-1', 'salon-8'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('zibano_saved_salons', JSON.stringify(savedSalonIds));
    } catch {
      // ignore
    }
  }, [savedSalonIds]);

  // Comparison list (max 4)
  const [comparedSalons, setComparedSalons] = useState<Salon[]>([]);

  // Modals state
  const [detailSalon, setDetailSalon] = useState<Salon | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const [bookingSalon, setBookingSalon] = useState<Salon | null>(null);
  const [bookingService, setBookingService] = useState<ServiceItem | undefined>(undefined);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isStylistRegisterOpen, setIsStylistRegisterOpen] = useState(false);
  const [isStylistPanelOpen, setIsStylistPanelOpen] = useState(false);
  const [isAISimulatorOpen, setIsAISimulatorOpen] = useState(false);
  const [isSavedSalonsOpen, setIsSavedSalonsOpen] = useState(false);

  // Filter transfer state
  const [initialSearchQuery, setInitialSearchQuery] = useState('');
  const [initialCategory, setInitialCategory] = useState('all');
  const [initialAtHomeOnly, setInitialAtHomeOnly] = useState(false);

  // Handlers
  const handleViewDetails = (salon: Salon) => {
    setDetailSalon(salon);
    setIsDetailOpen(true);
  };

  const handleStartBooking = (salon: Salon, service?: ServiceItem) => {
    setBookingSalon(salon);
    setBookingService(service);
    setIsBookingOpen(true);
  };

  const handleToggleCompare = (salon: Salon) => {
    setComparedSalons(prev => {
      const exists = prev.some(s => s.id === salon.id);
      if (exists) {
        return prev.filter(s => s.id !== salon.id);
      } else {
        if (prev.length >= 4) {
          alert('شما حداکثر ۴ سالن را می‌توانید همزمان مقایسه فرمایید.');
          return prev;
        }
        return [...prev, salon];
      }
    });
  };

  const handleToggleSave = (salon: Salon) => {
    setSavedSalonIds(prev => {
      if (prev.includes(salon.id)) {
        return prev.filter(id => id !== salon.id);
      } else {
        return [...prev, salon.id];
      }
    });
  };

  const handleBookingSuccess = (newBooking: BookingRequest) => {
    setBookings(prev => [newBooking, ...prev]);
  };

  const handleCancelBooking = (bookingId: string) => {
    if (confirm('آیا از لغو این نوبت آزمایشی اطمینان دارید؟')) {
      setBookings(prev => prev.filter(b => b.id !== bookingId));
    }
  };

  const handleApplicationSubmitted = (app: StylistApplication) => {
    try {
      const existing = JSON.parse(localStorage.getItem('zibano_stylist_applications') || '[]');
      localStorage.setItem('zibano_stylist_applications', JSON.stringify([app, ...existing]));
    } catch {
      // ignore
    }
  };

  // Filter navigations from Hero
  const handleSelectCategoryFromHero = (cat: string) => {
    if (cat === 'at_home') {
      setInitialAtHomeOnly(true);
      setInitialCategory('all');
    } else {
      setInitialCategory(cat);
      setInitialAtHomeOnly(false);
    }
    setActiveTab('directory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAudienceAtHome = () => {
    setInitialAtHomeOnly(true);
    setInitialCategory('all');
    setActiveTab('directory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHairstyleFromAI = (styleKeyword: string) => {
    setInitialSearchQuery(styleKeyword);
    setActiveTab('directory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const savedSalonsList = salons.filter(s => savedSalonIds.includes(s.id));

  return (
    <div className="min-h-screen bg-[#FAF7F5] flex flex-col font-['Vazirmatn'] text-slate-800">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookingCount={bookings.length}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        onOpenStylistRegister={() => setIsStylistRegisterOpen(true)}
        onOpenStylistPanel={() => setIsStylistPanelOpen(true)}
        onOpenAISimulator={() => setIsAISimulatorOpen(true)}
        savedCount={savedSalonIds.length}
        onOpenSavedSalons={() => setIsSavedSalonsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Tab 1: Home */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <Hero
              onSearchClick={() => {
                setActiveTab('directory');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRegisterClick={() => setIsStylistRegisterOpen(true)}
              onDossierClick={() => {
                setActiveTab('dossier');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={handleSelectCategoryFromHero}
              onSelectAudienceAtHome={handleSelectAudienceAtHome}
            />

            {/* Featured Salons Showcase in Home */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    آرایشگاه‌های برگزیده پایلوت یزد
                  </h3>
                  <p className="text-xs text-slate-500">
                    سالن‌های دارای بیشترین رضایت، قیمت شفاف و خدمات تضمین‌شده در شهر یزد
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 underline underline-offset-4"
                >
                  مشاهده همه آرایشگاه‌ها و مقایسه
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {salons.slice(0, 3).map(salon => (
                  <SalonCard
                    key={salon.id}
                    salon={salon}
                    onViewDetails={handleViewDetails}
                    onBook={handleStartBooking}
                    isCompared={comparedSalons.some(s => s.id === salon.id)}
                    onToggleCompare={handleToggleCompare}
                    isSaved={savedSalonIds.includes(salon.id)}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            </section>

            {/* Teaser for Business Dossier */}
            <section className="bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50 rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-right">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-200 text-amber-900">
                  بخش ویژه دانشگاهی
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  مطالعه پرونده تحلیلی کسب‌وکار زیبانو
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  بررسی اصطکاک‌های فعلی بازار، ارزیابی ایده با ۸ پرسش کلیدی، تفکیک فرایندهای آنلاین و حضوری، مدل اتلاف ۱۲۰ دقیقه زمان در روش سنتی و گزارش مصاحبه با مشتریان و آرایشگران در شهر یزد.
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('dossier');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="shrink-0 px-6 py-3.5 rounded-2xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-sm shadow-md transition"
              >
                مشاهده پرونده تحلیلی کامل
              </button>
            </section>
          </div>
        )}

        {/* Tab 2: Directory */}
        {activeTab === 'directory' && (
          <SalonDirectory
            salons={salons}
            onViewDetails={handleViewDetails}
            onBook={handleStartBooking}
            comparedSalons={comparedSalons}
            onToggleCompare={handleToggleCompare}
            onOpenCompareModal={() => setIsCompareOpen(true)}
            savedSalons={savedSalonIds}
            onToggleSave={handleToggleSave}
            initialSearchQuery={initialSearchQuery}
            initialCategory={initialCategory}
            initialAtHomeOnly={initialAtHomeOnly}
          />
        )}

        {/* Tab 3: Business Dossier */}
        {activeTab === 'dossier' && (
          <BusinessDossier
            onGoToMVP={() => {
              setActiveTab('mvp');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Tab 4: MVP Interactive Suite */}
        {activeTab === 'mvp' && (
          <MVPDashboard
            salons={salons}
            bookings={bookings}
            onViewDetails={handleViewDetails}
            onBook={handleStartBooking}
            comparedSalons={comparedSalons}
            onToggleCompare={handleToggleCompare}
            onOpenCompareModal={() => setIsCompareOpen(true)}
            savedSalons={savedSalonIds}
            onToggleSave={handleToggleSave}
            onOpenMyBookings={() => setIsMyBookingsOpen(true)}
            onOpenStylistRegister={() => setIsStylistRegisterOpen(true)}
            onOpenStylistPanel={() => setIsStylistPanelOpen(true)}
            onOpenAISimulator={() => setIsAISimulatorOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenRegister={() => setIsStylistRegisterOpen(true)}
        onOpenStylistPanel={() => setIsStylistPanelOpen(true)}
        onOpenAISimulator={() => setIsAISimulatorOpen(true)}
      />

      {/* Global Modals */}
      {/* 1. Salon Detail Modal */}
      <SalonDetailModal
        salon={detailSalon}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onBookService={handleStartBooking}
        isSaved={detailSalon ? savedSalonIds.includes(detailSalon.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* 2. Comparison Modal */}
      <ComparisonModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        salons={comparedSalons}
        onRemoveSalon={(id) => setComparedSalons(prev => prev.filter(s => s.id !== id))}
        onBookSalon={(s) => {
          setIsCompareOpen(false);
          handleStartBooking(s);
        }}
      />

      {/* 3. Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        salon={bookingSalon}
        allSalons={salons}
        initialService={bookingService}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* 4. My Bookings Modal */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
        onOpenDirectory={() => {
          setActiveTab('directory');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 5. Stylist Register Modal */}
      <StylistRegisterModal
        isOpen={isStylistRegisterOpen}
        onClose={() => setIsStylistRegisterOpen(false)}
        onApplicationSubmitted={handleApplicationSubmitted}
      />

      {/* 6. Stylist Management Panel Mockup */}
      <StylistPanelModal
        isOpen={isStylistPanelOpen}
        onClose={() => setIsStylistPanelOpen(false)}
        bookings={bookings}
      />

      {/* 7. Future AI Simulator Preview Modal */}
      <AISimulatorModal
        isOpen={isAISimulatorOpen}
        onClose={() => setIsAISimulatorOpen(false)}
        onSelectHairstyle={handleSelectHairstyleFromAI}
      />

      {/* 8. Saved Salons Modal */}
      <SavedSalonsModal
        isOpen={isSavedSalonsOpen}
        onClose={() => setIsSavedSalonsOpen(false)}
        savedSalons={savedSalonsList}
        onRemoveSaved={handleToggleSave}
        onBook={handleStartBooking}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}

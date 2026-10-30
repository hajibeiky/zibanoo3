import { Salon } from '../types';

export const INITIAL_SALONS: Salon[] = [
  {
    id: 'salon-1',
    name: 'سالن زیبایی و عروس پریناز',
    type: 'women',
    typeLabel: 'سالن زنانه تخصصی',
    city: 'یزد',
    neighborhood: 'صفائیه',
    address: 'یزد، صفائیه، خیابان ملاصدرا، نبش کوچه شقایق، پلاک ۲۴',
    phone: '۰۳۵-۳۸۲۴۵۶۷۸',
    rating: 4.9,
    reviewsCount: 128,
    priceLevel: 'premium',
    priceLevelLabel: 'لوکس و VIP',
    minPrice: 180000,
    isAtHomeAvailable: true,
    atHomeDetails: 'امکان اعزام میکاپ‌آرتیست و شینیون‌کار به منزل یا بیمارستان برای مادران، سالمندان و پکیج‌های عروس با هماهنگی ۲۴ ساعت قبل.',
    coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80',
    workingHours: 'همه روزه ۹:۰۰ الی ۲۰:۰۰ (جمعه‌ها با رزرو قبلی)',
    about: 'سالن زیبایی پریناز با بیش از ۱۰ سال سابقه در منطقه صفائیه یزد، ارائه‌دهنده بالاترین کیفیت خدمات رنگ، لایت، کوتاهی‌های ژورنالی و گریم تخصصی عروس با مواد ارگانیک و دارای مجوز رسمی وزارت بهداشت است.',
    features: ['پارکینگ اختصاصی', 'پذیرایی VIP', 'مواد ایتالیایی اصل', 'ارائه خدمت در محل', 'مشاوره رنگ رایگان'],
    services: [
      { id: 's1-1', name: 'کوتاهی مو ژورنالی + براشینگ تخصصی', category: 'haircut', categoryLabel: 'کوتاهی و استایل', price: 280000, durationMinutes: 45, supportsAtHome: true, description: 'مدل‌های به‌روز اروپایی همراه با سرم ضد وز و براشینگ ماندگار' },
      { id: 's1-2', name: 'رنگ و لایت بالیاژ آمبره (موهای متوسط)', category: 'color', categoryLabel: 'رنگ و لایت', price: 1450000, durationMinutes: 180, supportsAtHome: false, description: 'با مواد بدون آمونیاک و تکنیک حفظ سلامت تار مو' },
      { id: 's1-3', name: 'کراتین و احیای پروتئینه مو', category: 'haircut', categoryLabel: 'کراتین و احیا', price: 1800000, durationMinutes: 150, supportsAtHome: false, description: 'صافی ۹۰ درصد و احیای کامل تارهای آسیب‌دیده با ماندگاری ۸ ماه' },
      { id: 's1-4', name: 'میکاپ و کانتورینگ تخصصی صورت', category: 'makeup', categoryLabel: 'میکاپ و گریم', price: 850000, durationMinutes: 75, supportsAtHome: true, description: 'ماندگاری ۲۴ ساعته ضد تعریق با برترین برندهای روز' },
      { id: 's1-5', name: 'کاشت و ژلیش ناخن با طراحی دلخواه', category: 'nail', categoryLabel: 'خدمات ناخن', price: 340000, durationMinutes: 90, supportsAtHome: true, description: 'ضدقارچ همراه با مانیکور روسی تمیز و دقیق' }
    ],
    portfolio: [
      { id: 'p1', title: 'بالیاژ کاراملی نسکافه‌ای', category: 'رنگ مو', imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80', likes: 142 },
      { id: 'p2', title: 'میکاپ لایت اروپایی عروس', category: 'میکاپ', imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80', likes: 219 },
      { id: 'p3', title: 'شینیون خطی کلاسیک', category: 'شینیون', imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80', likes: 98 },
      { id: 'p4', title: 'طراحی ژلیش مینیمال ناخن', category: 'ناخن', imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80', likes: 165 }
    ],
    stylists: [
      { id: 'st1-1', name: 'پریناز افشار', role: 'مدیر و مستر میکاپ بین‌المللی', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', experienceYears: 12 },
      { id: 'st1-2', name: 'مهسا کاظمی', role: 'متخصص کالریست و تراپی مو', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80', experienceYears: 7 }
    ],
    reviews: [
      { id: 'r1', author: 'نرگس یزدانی', rating: 5, date: '۱۴۰۳/۰۸/۱۰', serviceName: 'بالیاژ و رنگ', comment: 'کیفیت مواد واقعاً عالی بود و اصلاً موهام نسوخت. پرسنل بسیار خوش‌برخورد بودند و دقیقاً سر ساعت رزرو شده کارم شروع شد.' },
      { id: 'r2', author: 'سمیرا دهقان', rating: 5, date: '۱۴۰۳/۰۸/۰۴', serviceName: 'خدمات در منزل (میکاپ)', comment: 'به خاطر شکستگی پای مادرم درخواست اعزام آرایشگر در منزل دادیم. خانم افشار سر وقت با تجهیزات کامل تشریف آوردند؛ خدا خیرتون بده.' }
    ]
  },
  {
    id: 'salon-2',
    name: 'باربرشاپ و استودیو آقایان رویال',
    type: 'men',
    typeLabel: 'پیرایشگاه مردانه مدرن',
    city: 'یزد',
    neighborhood: 'بلوار جمهوری',
    address: 'یزد، بلوار جمهوری اسلامی، نرسیده به چهارراه امام حسین، مجتمع مهر',
    phone: '۰۳۵-۳۵۲۲۱۹۴۰',
    rating: 4.8,
    reviewsCount: 94,
    priceLevel: 'medium',
    priceLevelLabel: 'قیمت متوسط و مناسب',
    minPrice: 120000,
    isAtHomeAvailable: true,
    atHomeDetails: 'سرویس پیرایش آقایان در محل مخصوص سالمندان گرامی، افراد بستری در منزل یا هتل‌های شهر یزد توسط باربر حرفه‌ای.',
    coverImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=200&q=80',
    workingHours: 'شنبه تا پنج‌شنبه ۱۰:۰۰ الی ۲۲:۰۰',
    about: 'رویال باربر یزد، فضایی آرام و مدرن با ارائه تخصصی‌ترین متدهای کات کلاسیک و فید روز، طراحی خط ریش، پاکسازی پوست با دستگاه و پکیج‌های اختصاصی گریم داماد.',
    features: ['محیط کاملاً استریل', 'پک یکبار مصرف اختصاصی', 'دستگاه بخور و اسکراب', 'سرویس اصلاح در منزل', 'قهوه بار رایگان'],
    services: [
      { id: 's2-1', name: 'اصلاح مو و استایل (Fade + Scissor Cut)', category: 'haircut', categoryLabel: 'کوتاهی و استایل', price: 160000, durationMinutes: 40, supportsAtHome: true, description: 'کوتاهی با متد روز متناسب با فرم هندسی جمجمه و صورت' },
      { id: 's2-2', name: 'اصلاح ریش، خط‌گیری و حوله گرم', category: 'beard', categoryLabel: 'ریش و آنکارد', price: 90000, durationMinutes: 25, supportsAtHome: true, description: 'ماساژ صورت، روغن آرگان و تیغ استریل یکبار مصرف' },
      { id: 's2-3', name: 'پاکسازی و فیشیال پوست آقایان', category: 'skincare', categoryLabel: 'پوست و پاکسازی', price: 320000, durationMinutes: 50, supportsAtHome: false, description: 'تخلیه جوش‌های سرسیاه، لایه‌برداری التراسونیک و ماسک جلبک' },
      { id: 's2-4', name: 'پکیج کامل دامادی VIP', category: 'makeup', categoryLabel: 'گریم داماد', price: 1200000, durationMinutes: 120, supportsAtHome: true, description: 'شامل هیرکات، پاکسازی، گریم محو صورت، استایلینگ مو و تست فرم' },
      { id: 's2-5', name: 'سرویس اصلاح سر و صورت در محل (منزل/هتل)', category: 'haircut', categoryLabel: 'خدمات در محل', price: 290000, durationMinutes: 60, supportsAtHome: true, description: 'حضور باربر به همراه تجهیزات بهداشتی، چتر اصلاح و پک استریل در آدرس شما' }
    ],
    portfolio: [
      { id: 'p2-1', title: 'فید مخملی کلاسیک آقایان', category: 'اصلاح مو', imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80', likes: 110 },
      { id: 'p2-2', title: 'آنکارد دقیق ریش با تیغ', category: 'طراحی ریش', imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80', likes: 85 },
      { id: 'p2-3', title: 'استایل مدرن تکسچر پمپادور', category: 'استایل', imageUrl: 'https://images.unsplash.com/photo-1517832606589-7629c339590a?auto=format&fit=crop&w=600&q=80', likes: 134 }
    ],
    stylists: [
      { id: 'st2-1', name: 'علیرضا زارع', role: 'مدرس باربرشاپ و استایلیست ارشد', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', experienceYears: 9 },
      { id: 'st2-2', name: 'حمید صادقی', role: 'متخصص کات و فیشیال پوست', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', experienceYears: 5 }
    ],
    reviews: [
      { id: 'r2-1', author: 'محمد میرحسینی', rating: 5, date: '۱۴۰۳/۰۸/۱۲', serviceName: 'اصلاح مو و فید', comment: 'دیگه نیاز نیست تو صف بنشینم. با زیبانو نوبت گرفتم و سر وقت نشستم زیر دست علیرضا خان؛ کارشون حرف نداشت.' },
      { id: 'r2-2', author: 'دکتر احسانی', rating: 5, date: '۱۴۰۳/۰۸/۰۲', serviceName: 'خدمت در محل (پدر سالمند)', comment: 'برای پدرم که توانایی راه رفتن ندارند اصلاح در منزل رزرو کردم. بسیار محترمانه و تمیز کار را انجام دادند.' }
    ]
  },
  {
    id: 'salon-3',
    name: 'کلینیک زیبایی و پوست ماهک',
    type: 'women',
    typeLabel: 'مرکز تخصصی پوست و زیبایی زنانه',
    city: 'یزد',
    neighborhood: 'قاسم‌آباد',
    address: 'یزد، بلوار قاسم‌آباد، خیابان گلستان، نبش گلستان ۳',
    phone: '۰۳۵-۳۸۲۳۱۱۵۵',
    rating: 4.7,
    reviewsCount: 81,
    priceLevel: 'medium',
    priceLevelLabel: 'قیمت متوسط و استاندارد',
    minPrice: 150000,
    isAtHomeAvailable: false,
    atHomeDetails: 'به دلیل لزوم استفاده از دستگاه‌های سنگین کلینیکی، کلیه خدمات ماهک در محل سالن با استانداردهای درمانی ارائه می‌شود.',
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    workingHours: 'شنبه تا چهارشنبه ۱۰:۰۰ الی ۱۹:۰۰',
    about: 'مرکز زیبایی ماهک متمرکز بر پاکسازی‌های عمقی پوست، هیدرافیشیال ۷ کاره، لیفت مژه و ابرو و آرایش دائم (میکروبلیدینگ فیبروز) با پیگمنت‌های گیاهی بدون تغییر رنگ.',
    features: ['دستگاه‌های روز کره‌ای', 'مشاوره اسکن پوست رایگان', 'اتاق ایزوله بهداشتی', 'پک بهداشتی رایگان'],
    services: [
      { id: 's3-1', name: 'فیشیال تخصصی VIP هیدروکربوکسی', category: 'skincare', categoryLabel: 'پوست و پاکسازی', price: 490000, durationMinutes: 75, supportsAtHome: false, description: 'لایه برداری با درمااف، سرم طلا، ماسک اکسیژن و نوردرمانی LED' },
      { id: 's3-2', name: 'میکروبلیدینگ ابرو به روش فیبروز طبیعی', category: 'makeup', categoryLabel: 'آرایش دائم', price: 950000, durationMinutes: 120, supportsAtHome: false, description: 'خطوط مویی منطبق بر خواب ابرو با ماندگاری ۱ الی ۲ ساله' },
      { id: 's3-3', name: 'لیفت و لمینت مژه و ابرو با مای‌لمینیشن', category: 'makeup', categoryLabel: 'مژه و ابرو', price: 320000, durationMinutes: 60, supportsAtHome: false, description: 'فر طبیعی و پرپشت نشان دادن مژه و ابرو بدون آسیب' },
      { id: 's3-4', name: 'پدیکور درمانی و کفسابی با کوکتل معطر', category: 'nail', categoryLabel: 'خدمات پا و ناخن', price: 290000, durationMinutes: 60, supportsAtHome: false, description: 'حذف ترک‌های پاشنه پا، اسکراب نمک دریا و پارافین تراپی نرم‌کننده' }
    ],
    portfolio: [
      { id: 'p3-1', title: 'فیبروز طبیعی و دخترانه ابرو', category: 'آرایش دائم', imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80', likes: 178 },
      { id: 'p3-2', title: 'نتیجه شفافیت پوست بعد از هیدرافیشیال', category: 'پوست', imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80', likes: 204 },
      { id: 'p3-3', title: 'لیفت مژه طبیعی و حالت‌دار', category: 'مژه', imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=600&q=80', likes: 92 }
    ],
    stylists: [
      { id: 'st3-1', name: 'مهتاب کریمی', role: 'پیگمنتر و بیوتی تراپیست ارشد', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', experienceYears: 8 }
    ],
    reviews: [
      { id: 'r3-1', author: 'آیدا فلاحتی', rating: 5, date: '۱۴۰۳/۰۸/۰۸', serviceName: 'فیشیال پوست', comment: 'پوستم بعد از جلسه اول کاملاً روشن و بدون چربی اضافه شد. محیط بسیار آرام و استریل بود.' }
    ]
  },
  {
    id: 'salon-4',
    name: 'پیرایش و سالن مردانه کلاسیک',
    type: 'men',
    typeLabel: 'پیرایش سنتی و مدرن مردانه',
    city: 'یزد',
    neighborhood: 'میدان آزادی',
    address: 'یزد، میدان آزادی (باغ ملی)، ابتدای خیابان فرخی، جنب بانک تجارت',
    phone: '۰۳۵-۳۷۲۶۴۸۵۲',
    rating: 4.6,
    reviewsCount: 67,
    priceLevel: 'budget',
    priceLevelLabel: 'اقتصادی و خوش‌قیمت',
    minPrice: 90000,
    isAtHomeAvailable: true,
    atHomeDetails: 'سرویس اعزام آرایشگر باتجربه برای اصلاح سالمندان عزیز، جانبازان و مصدومان در سراسر شهر یزد با نرخ مصوب منصفانه.',
    coverImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    workingHours: 'همه روزه ۸:۳۰ صبح الی ۲۱:۳۰ شب یکسره',
    about: 'پیرایش کلاسیک با ۴۰ سال پیشینه و تیمی از پیرایشگران ماهر، تلفیقی از تجربه اصیل و متدهای جدید را با مناسب‌ترین قیمت بازار به همشهریان یزدی ارائه می‌دهد.',
    features: ['قیمت اقتصادی منصفانه', 'دسته‌بندی نوبت منظم', 'امکان خدمت در منزل برای معلولین و سالمندان', 'تیغ استریل یکبار مصرف'],
    services: [
      { id: 's4-1', name: 'اصلاح سر مردانه کلاسیک ساده', category: 'haircut', categoryLabel: 'کوتاهی مو', price: 95000, durationMinutes: 25, supportsAtHome: true, description: 'اصلاح تمیز با قیچی و ماشین، متناسب با سلیقه شما' },
      { id: 's4-2', name: 'اصلاح ریش و خط سبیل سنتی با حوله گرم', category: 'beard', categoryLabel: 'اصلاح ریش', price: 50000, durationMinutes: 15, supportsAtHome: true, description: 'استفاده از فوم مخصوص پوست حساس و افترشیو گیاهی' },
      { id: 's4-3', name: 'اصلاح کامل سر و صورت در منزل (سالمندان و بیماران)', category: 'haircut', categoryLabel: 'خدمات در محل', price: 180000, durationMinutes: 45, supportsAtHome: true, description: 'اعزام پیرایشگر دلسوز و مسلط به کار با افراد کم‌توان جسمی در محیط خانه' },
      { id: 's4-4', name: 'رنگ موی طبیعی مشکی و جوانسازی ریش', category: 'color', categoryLabel: 'رنگ موی آقایان', price: 140000, durationMinutes: 35, supportsAtHome: true, description: 'پوشش کامل تارهای سفید مو با ماندگاری بالا' }
    ],
    portfolio: [
      { id: 'p4-1', title: 'اصلاح کلاسیک رسمی اداری', category: 'اصلاح مو', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', likes: 72 },
      { id: 'p4-2', title: 'خط ریش و آنکارد دقیق', category: 'ریش', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', likes: 64 }
    ],
    stylists: [
      { id: 'st4-1', name: 'استاد جواد دهقان', role: 'پیشکسوت پیرایش و عضو اتحادیه', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80', experienceYears: 28 }
    ],
    reviews: [
      { id: 'r4-1', author: 'محسن فتوحی', rating: 5, date: '۱۴۰۳/۰۸/۰۱', serviceName: 'اصلاح کلاسیک', comment: 'قیمت بسیار منصفانه و دست استاد جواد بسیار تند و تمیز است. رزرو آنلاین خیلی به نظم کارشون کمک کرده.' }
    ]
  },
  {
    id: 'salon-5',
    name: 'مرکز تخصصی مو و کراتین نیلوفر',
    type: 'women',
    typeLabel: 'کلینیک تخصصی تراپی و کراتین مو',
    city: 'یزد',
    neighborhood: 'خیابان ملاصدرا',
    address: 'یزد، صفائیه، ملاصدرا، کوچه ۱۵، ساختمان پزشکان بوعلی، طبقه ۲',
    phone: '۰۳۵-۳۸۲۵۹۹۳۳',
    rating: 4.9,
    reviewsCount: 112,
    priceLevel: 'premium',
    priceLevelLabel: 'تخصصی و پرمیوم',
    minPrice: 220000,
    isAtHomeAvailable: false,
    atHomeDetails: 'به دلیل ضرورت سیستم مکش دود نانوتراپی و تهویه صنعتی، خدمات صافی در سالن انجام می‌شود.',
    coverImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    workingHours: 'شنبه تا چهارشنبه ۹:۳۰ الی ۱۸:۳۰',
    about: 'مرکز تخصصی نیلوفر با مدرک رسمی برزیل و دبی، مرجع احیای سوختگی مو ناشی از دکلره، بوتاکس مو، نانوریباندینگ و پلکس‌تراپی سرد و گرم در استان یزد است.',
    features: ['گارانتی ماندگاری کتبی', 'دستگاه اوزون‌تراپی مه‌ساز', 'محصولات بدون بو و قرنطینه', 'دستگاه سنجش تخلخل مو'],
    services: [
      { id: 's5-1', name: 'نانو کراتین برزیلی ابریشم‌ساز (مو تا سرشانه)', category: 'haircut', categoryLabel: 'کراتین و احیا', price: 1650000, durationMinutes: 180, supportsAtHome: false, description: 'صافی شلاقی ۱۰۰٪ بدون نیاز به قرنطینه با تست آب در سالن' },
      { id: 's5-2', name: 'بوتاکس گرم و ویتامینه ضد کشسانی مو', category: 'haircut', categoryLabel: 'کراتین و احیا', price: 950000, durationMinutes: 120, supportsAtHome: false, description: 'ترمیم فوری پیوندهای دی‌سولفیدی موهای سوخته' },
      { id: 's5-3', name: 'اوزون‌تراپی و میکرومیست مو (جلسه‌ای)', category: 'skincare', categoryLabel: 'اسپا و تراپی سر', price: 380000, durationMinutes: 50, supportsAtHome: false, description: 'ضدعفونی اسکالپ، درمان شوره و افزایش گردش خون رشد مو' },
      { id: 's5-4', name: 'کوتاهی و پیوند موخوره با تیغ ژاپنی', category: 'haircut', categoryLabel: 'کوتاهی مو', price: 240000, durationMinutes: 45, supportsAtHome: false, description: 'حذف ۱۰۰ درصدی موخوره بدون کم شدن قد مو' }
    ],
    portfolio: [
      { id: 'p5-1', title: 'صافی شلاقی بعد از نانوکراتین', category: 'کراتین', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80', likes: 310 },
      { id: 'p5-2', title: 'احیای موی سوخته با پلکس تراپی', category: 'احیا', imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80', likes: 188 }
    ],
    stylists: [
      { id: 'st5-1', name: 'نیلوفر فیروزبخش', role: 'مستر بین‌المللی کراتین برزیل', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', experienceYears: 10 }
    ],
    reviews: [
      { id: 'r5-1', author: 'سحر حائری', rating: 5, date: '۱۴۰۳/۰۸/۱۱', serviceName: 'نانو کراتین', comment: 'موهای من بعد از دکلره پودر شده بود، الان ۶ ماهه ابریشمی مونده. واقعاً کاربلد هستند.' }
    ]
  },
  {
    id: 'salon-6',
    name: 'آرایشگاه مردانه کات‌پلاس (Cut+)',
    type: 'men',
    typeLabel: 'استودیو طراحی موی جوانان',
    city: 'یزد',
    neighborhood: 'صفائیه',
    address: 'یزد، صفائیه، میدان اطلسی، ابتدای بلوار شهیدان اشرف، مجتمع تجاری آوا',
    phone: '۰۳۵-۳۸۲۶۹۹۰۱',
    rating: 4.8,
    reviewsCount: 76,
    priceLevel: 'medium',
    priceLevelLabel: 'قیمت متوسط و جوان‌پسند',
    minPrice: 130000,
    isAtHomeAvailable: false,
    atHomeDetails: 'خدمات تخصصی در فضای تجهیز شده استودیو با تجهیزات نورپردازی و تصویربرداری ۳۶۰ درجه انجام می‌شود.',
    coverImage: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    workingHours: 'همه روزه ۱۱:۰۰ الی ۲۳:۰۰',
    about: 'کات‌پلاس ویژه جوانان و نوجوانانی است که به دنبال استایل‌های مدرن هالیوودی، فیدهای ژورنالی، اسکین فید و رنگ موهای فانتزی هستند.',
    features: ['کنسول بازی حین انتظار', 'مشاوره استایل بر اساس تیپ چهره', 'عکاسی حرفه‌ای از مدل مو', 'موسیقی متناسب'],
    services: [
      { id: 's6-1', name: 'اسکین فید و کات ترند ۲۰۲۴', category: 'haircut', categoryLabel: 'کوتاهی مو', price: 170000, durationMinutes: 40, supportsAtHome: false, description: 'سایه‌روشن دقیق، خط پیشانی میلی‌متری و استایل با پودر حجم‌دهنده' },
      { id: 's6-2', name: 'رنگ و هایلایت یخی / دودی آقایان', category: 'color', categoryLabel: 'رنگ مو', price: 420000, durationMinutes: 75, supportsAtHome: false, description: 'دکلره تخصصی بدون سوزش پوست سر و رنگساژ نقره‌ای' },
      { id: 's6-3', name: 'فر شش‌ماهه مردانه کره‌ای', category: 'haircut', categoryLabel: 'استایل و بافت', price: 650000, durationMinutes: 90, supportsAtHome: false, description: 'فر ملایم و حالت‌دار با ماندگاری بالا' },
      { id: 's6-4', name: 'بلک ماسک و پاکسازی بینی و پیشانی', category: 'skincare', categoryLabel: 'پاکسازی سریع', price: 90000, durationMinutes: 20, supportsAtHome: false, description: 'پاکسازی چربی پوست و بستن منافذ باز' }
    ],
    portfolio: [
      { id: 'p6-1', title: 'مید فید با بافت روی سر', category: 'اسکین فید', imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80', likes: 195 },
      { id: 'p6-2', title: 'هایلایت استخوانی مردانه', category: 'رنگ مو', imageUrl: 'https://images.unsplash.com/photo-1517832606589-7629c339590a?auto=format&fit=crop&w=600&q=80', likes: 142 }
    ],
    stylists: [
      { id: 'st6-1', name: 'آرش صبور', role: 'استایلیست جوان و طراح هیرکات', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80', experienceYears: 6 }
    ],
    reviews: [
      { id: 'r6-1', author: 'کیان ارجمند', rating: 5, date: '۱۴۰۳/۰۸/۰۷', serviceName: 'اسکین فید', comment: 'بهترین باربرشاپ صفائیه برای مدل‌های جدید. اصلاً معطلی نداشت با زیبانو.' }
    ]
  },
  {
    id: 'salon-7',
    name: 'عمارت زیبایی الیزه',
    type: 'women',
    typeLabel: 'مجموعه زیبایی و اسپا بانوان',
    city: 'یزد',
    neighborhood: 'بلوار شهید قندی',
    address: 'یزد، بلوار شهید قندی، میدان ریاضی، خیابان سنبل، پلاک ۱۸',
    phone: '۰۳۵-۳۸۲۴۱۸۹۹',
    rating: 4.9,
    reviewsCount: 154,
    priceLevel: 'premium',
    priceLevelLabel: 'پرمیوم و تشریفاتی',
    minPrice: 200000,
    isAtHomeAvailable: true,
    atHomeDetails: 'سرویس اعزام تیم ۳ نفره تشریفات میکاپ، شینیون و ناخن به عمارت، هتل، تالار یا منزل در سراسر استان یزد.',
    coverImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    workingHours: 'همه روزه ۹:۰۰ الی ۲۱:۰۰',
    about: 'عمارت الیزه در فضایی مجلل به وسعت ۵۰۰ مترمربع، شامل لاین‌های مجزای اسپا، هیرکالر، میکاپ عروس، پدیکور ژاکوزی و سالن پذیرایی اختصاصی است.',
    features: ['محیط مجلل باغ‌عمارت', 'آتلیه عکاسی اختصاصی', 'خدمات اعزام پرسنل در محل', 'گارانتی رضایت مشتری'],
    services: [
      { id: 's7-1', name: 'پکیج شینیون اروپایی و بافت دیزاین', category: 'haircut', categoryLabel: 'شینیون و استایل', price: 550000, durationMinutes: 60, supportsAtHome: true, description: 'انواع شینیون‌های مواج، گوجه‌ای لایت و فشن با فیکساتور آلمانی' },
      { id: 's7-2', name: 'اکستنشن مژه والیوم روسی سبک', category: 'makeup', categoryLabel: 'خدمات مژه', price: 480000, durationMinutes: 120, supportsAtHome: true, description: 'با تار مژه ابریشمی بدون ریزش و چسب ضد حساسیت' },
      { id: 's7-3', name: 'اسپا و پدیکور درمانی ژاکوزی پا', category: 'nail', categoryLabel: 'اسپا و سلامت', price: 390000, durationMinutes: 70, supportsAtHome: false, description: 'ریلکسیشن با کوکتل طلا، اسکراب هلو و ماساژ رفلکسولوژی' },
      { id: 's7-4', name: 'پکیج اعزام میکاپ‌آرتیست در منزل', category: 'makeup', categoryLabel: 'خدمات در محل', price: 1200000, durationMinutes: 90, supportsAtHome: true, description: 'حضور میکاپ آرتیست به همراه رینگ‌لایت، صندلی پرتابل و کیف محصولات مک و دیور' }
    ],
    portfolio: [
      { id: 'p7-1', title: 'شینیون نیمه‌باز با اکسسوری مروارید', category: 'شینیون', imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80', likes: 240 },
      { id: 'p7-2', title: 'مژه اسپایک والیوم ابریشمی', category: 'مژه', imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=600&q=80', likes: 162 }
    ],
    stylists: [
      { id: 'st7-1', name: 'الناز صراف', role: 'مدیر تشریفات و گریمور ارشد', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', experienceYears: 14 }
    ],
    reviews: [
      { id: 'r7-1', author: 'مینا سلطانی', rating: 5, date: '۱۴۰۳/۰۸/۰۹', serviceName: 'شینیون اروپایی', comment: 'شینیونم تا آخر شب تکون نخورد و خیلی طبیعی بود. نحوه رزرو در زیبانو هم فوق‌العاده راحت بود.' }
    ]
  },
  {
    id: 'salon-8',
    name: 'مرکز تخصصی آرایشگری در محل باران',
    type: 'both',
    typeLabel: 'سامانه تخصصی خدمات زیبایی و بهداشتی در محل',
    city: 'یزد',
    neighborhood: 'پوشش سراسر یزد',
    address: 'یزد، دفتر مرکزی: بلوار شهید بهشتی، خیابان چمران (ارائه خدمات در کل مناطق شهر یزد)',
    phone: '۰۳۵-۳۷۲۵۰۰۱۰',
    rating: 5.0,
    reviewsCount: 143,
    priceLevel: 'medium',
    priceLevelLabel: 'قیمت شفاف و مصوب',
    minPrice: 110000,
    isAtHomeAvailable: true,
    atHomeDetails: 'تیم تخصصی اعزام به منزل و بیمارستان با تمرکز بر: سالمندان، معلولین، بیماران بستری، مادران باردار و کودکان در کلیه محلات یزد با تجهیزات کامل بهداشتی.',
    coverImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=200&q=80',
    workingHours: 'همه روزه ۸:۰۰ الی ۲۲:۰۰ (پشتیبانی تلفنی و رزرو آنلاین ۲۴ ساعته)',
    about: 'باران اولین مرکز دارای گواهی سلامت و بیمه مسئولیت مدنی جهت اعزام آرایشگران مجرب خانم و آقا به منزل و مراکز درمانی در یزد است. رعایت پروتکل‌های بهداشتی، آرامش روانی متقاضیان و احترام کامل به وقت مشتریان اولویت ماست.',
    features: ['بیمه مسئولیت حین کار', 'تجهیزات و پیش‌بندهای کاملاً استریل', 'پرسنل آموزش‌دیده ارتباط با سالمندان', 'پوشش کل مناطق یزد', 'بدون هزینه ایاب‌وذهاب اضافه'],
    services: [
      { id: 's8-1', name: 'اصلاح سر و صورت سالمندان و معلولین در تخت / صندلی', category: 'haircut', categoryLabel: 'خدمات در محل', price: 160000, durationMinutes: 45, supportsAtHome: true, description: 'انجام اصلاح آرام، شست‌وشوی خشک و پیرایش تمیز توسط آرایشگر مرد ماهر' },
      { id: 's8-2', name: 'کوتاهی، براشینگ و رنگ ساده بانوان در منزل', category: 'haircut', categoryLabel: 'خدمات در محل', price: 280000, durationMinutes: 60, supportsAtHome: true, description: 'اعزام آرایشگر خانم با چتر اصلاح، وسایل پاکیزه و حوله‌های بهداشتی' },
      { id: 's8-3', name: 'مانیکور و پدیکور بهداشتی در منزل (مخصوص سالمندان و دیابتی‌ها)', category: 'nail', categoryLabel: 'خدمات در محل', price: 220000, durationMinutes: 50, supportsAtHome: true, description: 'کوتاهی اصولی ناخن‌ها بدون زخم و آبرسانی پوست با ابزار اتوکلاو شده' },
      { id: 's8-4', name: 'اصلاح موی کودک در منزل با وسایل بازی سرگرم‌کننده', category: 'haircut', categoryLabel: 'خدمات در محل', price: 150000, durationMinutes: 30, supportsAtHome: true, description: 'تجربه‌ای بدون ترس و استرس برای کودکان در محیط امن خانه' }
    ],
    portfolio: [
      { id: 'p8-1', title: 'نمونه تجهیزات استریل سیار در منزل', category: 'تجهیزات', imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80', likes: 215 },
      { id: 'p8-2', title: 'اصلاح تمیز و آرامش‌بخش سالمندان', category: 'خدمات در منزل', imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80', likes: 340 }
    ],
    stylists: [
      { id: 'st8-1', name: 'مریم حسینی', role: 'سرپرست تیم بانوان و بیوتی‌آرتیست در منزل', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80', experienceYears: 9 },
      { id: 'st8-2', name: 'رضا منتظری', role: 'سرپرست تیم آقایان و متخصص مراقبت‌های پیرایشی', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', experienceYears: 11 }
    ],
    reviews: [
      { id: 'r8-1', author: 'فاطمه صادقیان', rating: 5, date: '۱۴۰۳/۰۸/۰۶', serviceName: 'اصلاح سر و صورت در منزل', comment: 'پدرم به خاطر سکته مغزی زمین‌گیر هستند. آقا رضا با نهایت ادب، مهربانی و حوصله آمدند و سر و صورت پدرم را اصلاح کردند. دعای خیر ما بدرقه راهتان.' },
      { id: 'r8-2', author: 'زهرا جوادی', rating: 5, date: '۱۴۰۳/۰۷/۲۸', serviceName: 'کوتاهی مو در منزل', comment: 'من بعد از زایمان امکان بیرون رفتن نداشتم؛ این سرویس مثل یک معجزه بود برام. خیلی منظم و شیک.' }
    ]
  },
  {
    id: 'salon-9',
    name: 'استودیو زیبایی و موی آریانا',
    type: 'women',
    typeLabel: 'استودیو تخصصی کوتاهی و براشینگ',
    city: 'یزد',
    neighborhood: 'بلوار دانشجو',
    address: 'یزد، بلوار دانشجو، نرسیده به دانشگاه یزد، کوچه گلها، ساختمان پارسیان',
    phone: '۰۳۵-۳۸۲۱۳۴۹۰',
    rating: 4.7,
    reviewsCount: 59,
    priceLevel: 'budget',
    priceLevelLabel: 'دانشجویی و اقتصادی',
    minPrice: 95000,
    isAtHomeAvailable: false,
    atHomeDetails: 'سرویس‌دهی حضوری سریع با تخفیف ویژه برای دانشجویان و کارمندان.',
    coverImage: 'https://images.unsplash.com/photo-1522337094345-a044af567ce8?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    workingHours: 'شنبه تا پنج‌شنبه ۹:۰۰ الی ۲۰:۰۰',
    about: 'استودیو آریانا واقع در نزدیکی دانشگاه یزد، فضایی صمیمی با خدمات سریع، شیک و قیمت‌های مناسب برای کات‌های روز، پدیکور دانشجویی، میکاپ لایت و براشینگ مجلسی است.',
    features: ['تخفیف ویژه دانشجویی', 'نوبت‌دهی سریع بدون معطلی', 'وای‌فای رایگان', 'براشینگ ماندگار'],
    services: [
      { id: 's9-1', name: 'کوتاهی لیر و باب فرانسوی', category: 'haircut', categoryLabel: 'کوتاهی مو', price: 150000, durationMinutes: 35, supportsAtHome: false, description: 'کوتاهی مدرن ژورنالی با حفظ پرپشتی مو' },
      { id: 's9-2', name: 'براشینگ حرفه‌ای کرلی و صاف شلاقی', category: 'haircut', categoryLabel: 'استایل و سشوار', price: 110000, durationMinutes: 30, supportsAtHome: false, description: 'با کرم محافظ حرارت و ماندگاری ۴۸ ساعته' },
      { id: 's9-3', name: 'بافت مکزیکی و بافت هلندی فانتزی', category: 'haircut', categoryLabel: 'بافت مو', price: 180000, durationMinutes: 45, supportsAtHome: false, description: 'انواع بافت‌های رنگی، کوئین و بافت با موی اضافه' }
    ],
    portfolio: [
      { id: 'p9-1', title: 'کوتاهی باب زاویه‌دار', category: 'کوتاهی', imageUrl: 'https://images.unsplash.com/photo-1522337094345-a044af567ce8?auto=format&fit=crop&w=600&q=80', likes: 88 },
      { id: 'p9-2', title: 'بافت دوتایی هلندی دخترانه', category: 'بافت مو', imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80', likes: 112 }
    ],
    stylists: [
      { id: 'st9-1', name: 'آرزو زارع‌شاهی', role: 'متخصص کات و براشینگ مدرن', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', experienceYears: 5 }
    ],
    reviews: [
      { id: 'r9-1', author: 'مونا رضوانی', rating: 5, date: '۱۴۰۳/۰۸/۰۲', serviceName: 'کوتاهی لیر', comment: 'خیلی خوش‌اخلاق و فرز هستند. برای دانشجویان واقعاً عالی و اقتصادیه.' }
    ]
  }
];

export const INITIAL_BOOKINGS = [
  {
    id: 'b-init-1',
    bookingCode: 'ZB-38291',
    salonId: 'salon-1',
    salonName: 'سالن زیبایی و عروس پریناز',
    serviceId: 's1-1',
    serviceName: 'کوتاهی مو ژورنالی + براشینگ تخصصی',
    price: 280000,
    serviceType: 'in_salon' as const,
    stylistName: 'پریناز افشار',
    customerName: 'فاطمه رضایی',
    customerPhone: '۰۹۱۳۱۲۳۴۵۶۷',
    dateStr: 'شنبه ۱۲ آبان ۱۴۰۳',
    timeSlot: 'ساعت ۱۱:۰۰ صبح',
    addressOrNotes: 'لطفاً مدل موی لیر متوسط اجرا شود.',
    status: 'confirmed' as const,
    createdAt: '۱۴۰۳/۰۸/۱۰',
    reminderEnabled: true
  },
  {
    id: 'b-init-2',
    bookingCode: 'ZB-91044',
    salonId: 'salon-8',
    salonName: 'مرکز تخصصی آرایشگری در محل باران',
    serviceId: 's8-1',
    serviceName: 'اصلاح سر و صورت سالمندان و معلولین در تخت / صندلی',
    price: 160000,
    serviceType: 'at_home' as const,
    stylistName: 'رضا منتظری',
    customerName: 'محمدعلی حیدری',
    customerPhone: '۰۹۱۳۹۸۷۶۵۴۳',
    dateStr: 'یکشنبه ۱۳ آبان ۱۴۰۳',
    timeSlot: 'ساعت ۱۶:۳۰ عصر',
    addressOrNotes: 'یزد، بلوار جمهوری، کوچه پروانه، پلاک ۱۲ - طبقه همکف برای پدر بزرگوارم',
    status: 'confirmed' as const,
    createdAt: '۱۴۰۳/۰۸/۱۱',
    reminderEnabled: true
  }
];

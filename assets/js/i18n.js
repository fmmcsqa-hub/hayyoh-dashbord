Hayyoh.i18n = (() => {
  const STORAGE_KEY = 'dashboard-language-preference';

  const messages = {
    en: {
      switchLanguage: 'Switch to Arabic',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      darkModeActive: 'Dark mode active',
      lightModeActive: 'Light mode active',
      displayPreferences: 'Display preferences',
      mainNavigation: 'Main navigation',
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
      collapseSidebar: 'Collapse sidebar',
      expandSidebar: 'Expand sidebar',
      breadcrumb: 'Breadcrumb',
      selectPeriod: 'Select reporting period',
      viewSwitch: 'Chart or table view',
      close: 'Close',
      details: 'Details',
      sinceLaunch: 'Since launch',
      periodIncomplete: 'Select both a start and an end date.',
      periodEndBeforeStart: 'End date must be on or after the start date.',
      periodOutOfRange: 'Dates must be within the available data range.',
      noData: 'No data available',
      fullDataInTable: 'use the Table view for the full data',
      category: 'Category',
      value: 'Value',
      chart: 'Chart',
      table: 'Table',
      trend: 'Trend',
      breakdown: 'Breakdown',
      status: 'Status',
      target: 'Target',
      period: 'Period',
      definition: 'Definition',
      source: 'Source',
      calculation: 'Calculation',
      meaning: 'What this means',
      recommendedAction: 'Recommended action:'
    },
    ar: {
      switchLanguage: 'التبديل إلى الإنجليزية',
      switchToLight: 'التبديل إلى الوضع الفاتح',
      switchToDark: 'التبديل إلى الوضع الداكن',
      darkModeActive: 'الوضع الداكن مُفعّل',
      lightModeActive: 'الوضع الفاتح مُفعّل',
      displayPreferences: 'تفضيلات العرض',
      mainNavigation: 'التنقل الرئيسي',
      openNavigation: 'فتح القائمة',
      closeNavigation: 'إغلاق القائمة',
      collapseSidebar: 'طيّ القائمة الجانبية',
      expandSidebar: 'توسيع القائمة الجانبية',
      breadcrumb: 'مسار التنقل',
      selectPeriod: 'اختيار فترة التقرير',
      viewSwitch: 'عرض الرسم البياني أو الجدول',
      close: 'إغلاق',
      details: 'التفاصيل',
      sinceLaunch: 'منذ الإطلاق',
      periodIncomplete: 'اختر تاريخ البدء وتاريخ الانتهاء.',
      periodEndBeforeStart: 'يجب أن يكون تاريخ الانتهاء في تاريخ البدء أو بعده.',
      periodOutOfRange: 'يجب أن تكون التواريخ ضمن نطاق البيانات المتاحة.',
      noData: 'لا توجد بيانات متاحة',
      fullDataInTable: 'الجدول يعرض البيانات الكاملة',
      category: 'الفئة',
      value: 'القيمة',
      chart: 'الرسم البياني',
      table: 'الجدول',
      trend: 'الاتجاه',
      breakdown: 'التفصيل',
      status: 'الحالة',
      target: 'المستهدف',
      period: 'الفترة',
      definition: 'التعريف',
      source: 'المصدر',
      calculation: 'طريقة الحساب',
      meaning: 'ماذا يعني هذا',
      recommendedAction: 'الإجراء المقترح:'
    }
  };

  const chartLabels = {
    'Registered': 'المسجّلون',
    'Active': 'النشطون',
    'Attendance': 'الحضور',
    'Redeemed': 'المستبدَلة',
    'Issued (m)': 'المُصدَرة (مليون)',
    'Awarded': 'مُنحت',
    'Not awarded': 'لم تُمنح',
    'Transactions': 'المعاملات',
    'Eligible': 'مؤهلون',
    'Gap ≤250': 'فجوة ≤250',
    'Gap ≤500': 'فجوة ≤500',
    'Gap ≤1000': 'فجوة ≤1000',
    'Trend': 'الاتجاه',
    'Verified': 'موثّق',
    'Not verified': 'غير موثّق',
    'Earning': 'يكسبون',
    'Member': 'عضو',
    'Bronze': 'برونزية',
    'Silver': 'فضية',
    'Check-in': 'تسجيل الدخول',
    'Points': 'النقاط',
    'Offers': 'العروض',
    'Redeem': 'الاستبدال',
    'Profile': 'الملف الشخصي',
    'Own / adult': 'صاحب الحساب / بالغ',
    'Dependant': 'مرافق',
    'Checked in': 'سجّل الدخول',
    'No-show': 'لم يحضر',
    'Issued': 'مُصدَرة',
    'Available': 'متاحة',
    'Near': 'قريبة',
    'Expired': 'منتهية',
    'Outstanding': 'قائمة',
    'Telco': 'اتصالات',
    'Other': 'أخرى',
    'Used': 'مستخدَمة',
    'Confirmed not used': 'مؤكدة غير مستخدَمة',
    'Not confirmed': 'غير مؤكدة',
    'Operational': 'يعمل',
    'Degraded': 'متدهور',
    'Down': 'متوقف',
    'All users': 'كل المستخدمين',
    'Viewed offer': 'شاهدوا العرض',
    'Showed interest': 'أبدوا اهتماماً',
    'Near required points': 'قريبون من النقاط المطلوبة',
    'Eligible to redeem': 'مؤهلون للاستبدال',
    'Started redemption': 'بدأوا الاستبدال',
    'Successfully redeemed': 'استبدلوا بنجاح',
    'Points & Rewards': 'النقاط والمكافآت',
    'Ticket purchase': 'شراء التذاكر',
    'Product info & offers': 'معلومات المنتجات والعروض',
    'Registration & login': 'التسجيل والدخول',
    'Ticket not showing': 'التذكرة لا تظهر',
    'Dependants': 'المرافقون'
  };

  const root = document.documentElement;
  let language = root.lang === 'ar' ? 'ar' : 'en';

  function current() {
    return language;
  }

  function t(key) {
    return messages[language][key] ?? messages.en[key] ?? key;
  }

  function pick(english, arabic) {
    return language === 'ar' && arabic ? arabic : english;
  }

  function label(text) {
    return language === 'ar' && chartLabels[text] ? chartLabels[text] : text;
  }

  function applyTranslations(scope = document) {
    scope.querySelectorAll('[data-en]').forEach((element) => {
      const text = element.getAttribute(language === 'ar' ? 'data-ar' : 'data-en');
      if (text !== null) {
        element.textContent = text;
      }
    });
    scope.querySelectorAll('[data-i18n-label]').forEach((element) => {
      element.setAttribute('aria-label', t(element.dataset.i18nLabel));
    });
  }

  function updateLanguageButton() {
    const button = document.getElementById('language-toggle');
    if (!button) {
      return;
    }
    button.textContent = language === 'ar' ? 'EN' : 'AR';
    button.setAttribute('aria-label', t('switchLanguage'));
    button.title = t('switchLanguage');
  }

  function setLanguage(nextLanguage, persist = true) {
    language = nextLanguage === 'ar' ? 'ar' : 'en';
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    applyTranslations();
    updateLanguageButton();
    if (persist) {
      Hayyoh.writeSetting(STORAGE_KEY, language);
    }
    Hayyoh.emit('languagechange', language);
  }

  function initializeLanguage() {
    setLanguage(language, false);
    const button = document.getElementById('language-toggle');
    if (button) {
      button.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
    }
  }

  Hayyoh.onReady(initializeLanguage);

  return { current, t, pick, label, applyTranslations, setLanguage };
})();

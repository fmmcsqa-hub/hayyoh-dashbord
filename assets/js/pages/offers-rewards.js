const details = {
  "active-offers": {
    title: "Active offers",
    titleAr: "العروض النشطة",
    value: "60",
    delta: "▲ 3.4% vs previous period",
    definition: "Offers active in the catalogue.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Healthy",
    statusAr: "سليم",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [43.05, 45.15, 49.05, 50.55, 52.05, 55.65, 58.05, 60]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "rewards-available": {
    title: "Rewards available",
    titleAr: "المكافآت المتاحة",
    value: "78 of 82",
    delta: "▲ 2.3% vs previous period",
    definition: "Catalogue rewards available (4 out of stock).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "Full availability",
    status: "4 OOS",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [55.58, 60.25, 61.03, 66.88, 69.22, 72.73, 76.24, 78]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  redemptions: {
    title: "Redemptions",
    titleAr: "عمليات الاستبدال",
    value: "193",
    delta: "▲ 4.4% vs previous period",
    definition: "Reward redemptions since launch.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Growing",
    statusAr: "ينمو",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [141.37, 149.09, 151.02, 164.53, 172.25, 177.08, 184.8, 193]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "offer-utilisation": {
    title: "Offer utilisation",
    titleAr: "نسبة استخدام العروض",
    value: "56.7%",
    delta: "▲ 5.5% vs previous period",
    definition: "Active offers redeemed at least once (34 of 60).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 70%",
    status: "Uneven",
    statusAr: "متفاوت",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [40.4, 42.1, 45.5, 48.62, 50.32, 52.02, 53.72, 56.7]
    },
    breakdown: null,
    insight: "Over half moved; the long tail is idle.",
    action: "Refresh or retire idle offers."
  },
  "low-utilisation-offers": {
    title: "Low-utilisation offers",
    titleAr: "العروض قليلة الاستخدام",
    value: "54",
    delta: "▲ 5.6% vs previous period",
    definition: "Catalogue rewards with no redemption in 4 weeks (of 82).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "High",
    statusAr: "مرتفع",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [39.01, 40.91, 43.6, 44.41, 46.58, 50.08, 51.16, 54]
    },
    breakdown: null,
    insight: "",
    action: "Rationalise the dormant tail."
  },
  "approaching-expiry": {
    title: "Approaching expiry",
    titleAr: "قرب انتهاء الصلاحية",
    value: "1",
    delta: "▲ 5.3% vs previous period",
    definition: "Voucher likely to run out in 14 days (Burgeri QAR 150).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Act now",
    statusAr: "إجراء الآن",
    statusLevel: "red",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [0.73, 0.78, 0.8, 0.82, 0.87, 0.91, 0.95, 1]
    },
    breakdown: null,
    insight: "",
    action: "Approve restock with the partner."
  },
  "points-spent-on-rewards": {
    title: "Points spent on rewards",
    titleAr: "النقاط المُنفَقة على المكافآت",
    value: "2,174,300",
    delta: "▲ 6.1% vs previous period",
    definition: "Points redeemed against rewards.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1538317.25, 1690518.25, 1766618.75, 1788361.75, 1918819.75, 1962305.75, 2049277.75, 2174300]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "most-saved-reward": {
    title: "Most saved reward",
    titleAr: "المكافأة الأكثر حفظاً",
    value: "Land Cruiser VXR",
    delta: "",
    definition: "Reward saved most often (2,508 saves).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Aspiration",
    statusAr: "طموح",
    statusLevel: "info",
    trend: null,
    breakdown: null,
    insight: "Aspirational rewards drive engagement even without redemption.",
    action: ""
  }
};

Hayyoh.registerPage({
  details,
  render(period) {
    const { charts, data } = Hayyoh;
    const partnerPalette = ['primary', 'violet', 'sky', 'purple', 'green', 'lightBlue', 'red', 'grey'];
    charts.bar('ofBand', ['4-6k', '6-10k', '10-16k', '16-25k', '25k+'], [48, 64, 35, 33, 13], { colors: partnerPalette });
    charts.donut('ofFul', ['Used', 'Confirmed not used', 'Not confirmed'], [99, 22, 72], ['primary', 'violet', 'amber']);
    charts.bar('ofTop', ['Burgeri 150', 'Burgeri 80', 'Nojoom 25K', 'Nojoom 50K', 'Blue Saloon 500'], [23, 21, 16, 15, 10], {
      color: 'primary',
      horizontal: true
    });
    charts.donut('ofPartner', data.partners.map((partner) => partner.name), data.partners.map((partner) => partner.redemptions), partnerPalette);
  }
});

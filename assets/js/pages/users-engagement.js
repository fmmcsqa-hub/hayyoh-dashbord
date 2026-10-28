const details = {
  "registered-users": {
    title: "Registered users",
    titleAr: "المستخدمون المسجّلون",
    value: "59,665",
    delta: "▲ 1.1% vs previous period",
    definition: "Total registered account holders.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Growing",
    statusAr: "ينمو",
    statusLevel: "green",
    trend: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      values: [41200, 45800, 49100, 52400, 54900, 56800, 58100, 59000, 59665]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "new-users-period": {
    title: "New users (period)",
    titleAr: "المستخدمون الجدد (الفترة)",
    value: "665",
    delta: "▲ 5.5% vs previous period",
    definition: "New registrations in the selected period.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 1,000/week",
    status: "Slowing",
    statusAr: "يتباطأ",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [480.46, 497.09, 536.99, 546.96, 593.51, 606.81, 630.09, 665]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "active-users-30d": {
    title: "Active users (30d)",
    titleAr: "النشطون (30 يوماً)",
    value: "32,400",
    delta: "▲ 0.9% vs previous period",
    definition: "Active in the last 30 days (54.3% of registered).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 65%",
    status: "54%",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      values: [24900, 27100, 28600, 30000, 30900, 31500, 31900, 32100, 32400]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "verified-users": {
    title: "Verified users",
    titleAr: "المستخدمون الموثّقون",
    value: "40.4%",
    delta: "▲ 2.8% vs previous period",
    definition: "Share of registered users verified (24,081).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 70%",
    status: "Critical",
    statusAr: "حرج",
    statusLevel: "red",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [29.39, 30.6, 32.02, 34.04, 36.26, 37.07, 39.29, 40.4]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "inactive-dormant": {
    title: "Inactive / dormant",
    titleAr: "غير النشطين / الخاملين",
    value: "27,265",
    delta: "▲ 3.9% vs previous period",
    definition: "No qualifying action in 30 days.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≤ 35%",
    status: "46%",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [19971.61, 20653.24, 22289.14, 22561.79, 23788.71, 25015.64, 26242.56, 27265]
    },
    breakdown: null,
    insight: "",
    action: "Run a win-back campaign."
  },
  "retention-90d": {
    title: "Retention (90d)",
    titleAr: "معدل الاحتفاظ (90 يوماً)",
    value: "71%",
    delta: "▲ 3.9% vs previous period",
    definition: "Users active in a period returning within 90 days.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 70%",
    status: "Healthy",
    statusAr: "سليم",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [49.88, 54.14, 56.98, 59.82, 61.95, 64.79, 68.34, 71]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "avg-ops-active-user": {
    title: "Avg ops / active user",
    titleAr: "متوسط العمليات لكل نشط",
    value: "4.1",
    delta: "▲ 5.7% vs previous period",
    definition: "Average operations per active user.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [3.02, 3.06, 3.25, 3.43, 3.64, 3.76, 3.88, 4.1]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "duplicate-anomaly-accounts": {
    title: "Duplicate / anomaly accounts",
    titleAr: "حسابات مكررة / شاذة",
    value: "128",
    delta: "",
    definition: "Accounts flagged for duplicate or unusual behaviour.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Watch",
    statusAr: "للمتابعة",
    statusLevel: "amber",
    trend: null,
    breakdown: null,
    insight: "",
    action: ""
  }
};

Hayyoh.registerPage({
  details,
  render(period) {
    const { charts, data } = Hayyoh;
    charts.line('usGrow', period.slice(data.weeks.labels), [
      { name: 'Registered', values: period.slice(data.registeredUsers), color: 'primary' },
      { name: 'Active', values: period.slice(data.activeUsers), color: 'violet' }
    ]);
    charts.donut('usTier', ['Member', 'Bronze', 'Silver'], [54756, 3026, 1972], ['primary', 'violet', 'lightBlue']);
    charts.donut('usVer', ['Verified', 'Not verified'], [24081, 35584], ['primary', 'grey']);
    charts.bar('usFeat', ['Check-in', 'Points', 'Offers', 'Redeem', 'Profile'], [29800, 21400, 15200, 187, 9800], {
      color: 'primary',
      horizontal: true
    });
  }
});

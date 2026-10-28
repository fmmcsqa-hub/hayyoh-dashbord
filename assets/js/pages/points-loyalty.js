const details = {
  "points-issued": {
    title: "Points issued",
    titleAr: "النقاط المُصدَرة",
    value: "124.3m",
    delta: "▲ 5.3% vs previous period",
    definition: "Points issued since launch.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Growing",
    statusAr: "ينمو",
    statusLevel: "info",
    trend: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      values: [14, 28, 46, 69, 86, 98, 110, 118, 124.3]
    },
    breakdown: null,
    insight: "Issuance scales with attendance; outstanding base is large.",
    action: "Pair issuance growth with a redemption strategy."
  },
  "points-redeemed": {
    title: "Points redeemed",
    titleAr: "النقاط المستبدَلة",
    value: "2,174,300",
    delta: "▲ 3.1% vs previous period",
    definition: "Points redeemed since launch.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Low",
    statusAr: "منخفض",
    statusLevel: "amber",
    trend: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      values: [4000, 67000, 268600, 931800, 1334800, 1647200, 1757000, 2109200, 2174300]
    },
    breakdown: null,
    insight: "Rising but a tiny fraction of issuance.",
    action: "Approve a redemption campaign."
  },
  "earn-to-burn": {
    title: "Earn-to-burn",
    titleAr: "نسبة الكسب إلى الاستبدال",
    value: "57 : 1",
    delta: "▲ 3.4% vs previous period",
    definition: "Points earned per point redeemed.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≤ 12:1",
    status: "High",
    statusAr: "مرتفع",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [41.47, 42.89, 45.46, 47.74, 50.3, 53.44, 55.15, 57]
    },
    breakdown: null,
    insight: "Weak redemption pull.",
    action: "Improve reward relevance and visibility."
  },
  "outstanding-points": {
    title: "Outstanding points",
    titleAr: "النقاط القائمة",
    value: "122.1m",
    delta: "▲ 5.5% vs previous period",
    definition: "Issued minus redeemed, held by customers.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [87.0, 93.71, 95.54, 101.04, 107.75, 113.86, 115.69, 122.1]
    },
    breakdown: null,
    insight: "Core of the liability.",
    action: "Monitor against the redemption target."
  },
  "avg-balance-user": {
    title: "Avg balance / user",
    titleAr: "متوسط الرصيد لكل مستخدم",
    value: "2,084",
    delta: "▲ 5.5% vs previous period",
    definition: "Average points balance per registered user.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1484.85, 1599.47, 1693.25, 1734.93, 1818.29, 1901.65, 1974.59, 2084]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "points-expiring-90d": {
    title: "Points expiring (90d)",
    titleAr: "نقاط تنتهي خلال 90 يوماً",
    value: "2.11m",
    delta: "▲ 2.3% vs previous period",
    definition: "Points approaching expiry within 90 days.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "Communicate",
    status: "Watch",
    statusAr: "للمتابعة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1535025.0, 1566675.0, 1693275.0, 1767125.0, 1819875.0, 1957025.0, 2062525.0, 2110000]
    },
    breakdown: null,
    insight: "Will rise as first cohorts reach expiry.",
    action: "Send expiry reminders to prompt redemption."
  },
  "holders-w-o-redemption": {
    title: "Holders w/o redemption",
    titleAr: "أصحاب أرصدة دون استبدال",
    value: "11,892",
    delta: "▲ 2.3% vs previous period",
    definition: "Members with points who never redeemed.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Opportunity",
    statusAr: "فرصة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [8710.89, 8829.81, 9602.79, 10137.93, 10375.77, 10851.45, 11624.43, 11892]
    },
    breakdown: null,
    insight: "A large reactivation pool.",
    action: "Target with attainable rewards."
  },
  "manual-adjustments": {
    title: "Manual adjustments",
    titleAr: "التعديلات اليدوية",
    value: "312",
    delta: "▲ 5.0% vs previous period",
    definition: "Manual point adjustments since launch.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Within range",
    statusAr: "ضمن المعدل",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [219.18, 239.46, 244.14, 256.62, 280.02, 289.38, 297.18, 312]
    },
    breakdown: null,
    insight: "",
    action: ""
  }
};

Hayyoh.registerPage({
  details,
  render(period) {
    const { charts, data } = Hayyoh;
    charts.bar('ptWk', period.slice(data.weeks.labels), period.slice(data.pointsRedeemed), { color: 'violet' });
    charts.bar('ptFunnel', ['Issued', 'Available', 'Near', 'Redeemed', 'Expired'], [124287596, 122113296, 8600000, 2174300, 128500], {
      colors: ['primary', 'cyan', 'violet', 'sky', 'grey']
    });
    charts.donut('ptStatus', ['Outstanding', 'Redeemed', 'Expired'], [122113296, 2174300, 128500], ['primary', 'violet', 'grey']);
    charts.donut('ptTelco', ['Telco', 'Other'], [37, 63], ['purple', 'primary']);
  }
});

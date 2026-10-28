const details = {
  "points-redeemed-cost": {
    title: "Points redeemed cost",
    titleAr: "تكلفة النقاط المستبدَلة",
    value: "QAR 239,644",
    delta: "▲ 4.4% vs previous period",
    definition: "Cash cost of redemptions since launch.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [176737.45, 185124.99, 195908.97, 197107.19, 215080.49, 219873.37, 229459.13, 239644]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "estimated-liability": {
    title: "Estimated liability",
    titleAr: "الالتزام التقديري",
    value: "QAR 13.4m",
    delta: "▲ 2.8% vs previous period",
    definition: "Outstanding points valued at the average 0.11 QAR/point.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Outstanding points x avg cost per point.",
    target: "",
    status: "Rising",
    statusAr: "يرتفع",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [9.61, 9.95, 10.49, 11.02, 11.89, 12.5, 13.03, 13.4]
    },
    breakdown: null,
    insight: "Rises as points go unredeemed.",
    action: "Set a liability ceiling."
  },
  "cost-per-redemption": {
    title: "Cost per redemption",
    titleAr: "تكلفة كل استبدال",
    value: "QAR 1,242",
    delta: "▲ 3.9% vs previous period",
    definition: "Average cash cost per redemption.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [891.13, 947.02, 1015.33, 1046.38, 1114.69, 1133.33, 1195.42, 1242]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "reward-cost-user": {
    title: "Reward cost / user",
    titleAr: "تكلفة المكافأة لكل مستخدم",
    value: "QAR 4.02",
    delta: "▲ 4.4% vs previous period",
    definition: "Reward cost per registered user.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [2.86, 3.11, 3.19, 3.37, 3.61, 3.77, 3.85, 4.02]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "breakage-rate": {
    title: "Breakage rate",
    titleAr: "معدل التبخّر",
    value: "6.8%",
    delta: "▲ 4.0% vs previous period",
    definition: "Share of issued points expected to expire unredeemed.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Watch",
    statusAr: "للمتابعة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [4.98, 5.12, 5.49, 5.66, 6.03, 6.31, 6.54, 6.8]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "budget-vs-actual": {
    title: "Budget vs actual",
    titleAr: "الموازنة مقابل الفعلي",
    value: "60% used",
    delta: "",
    definition: "Program spend against budget (QAR 0.24m of 0.40m).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "On track",
    statusAr: "على المسار",
    statusLevel: "green",
    trend: null,
    breakdown: null,
    insight: "",
    action: ""
  },
  "highest-cost-partner": {
    title: "Highest-cost partner",
    titleAr: "الشريك الأعلى تكلفة",
    value: "Ooredoo Nojoom",
    delta: "",
    definition: "QAR 91,200, 38% of all reward cost.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Review",
    statusAr: "مراجعة",
    statusLevel: "amber",
    trend: null,
    breakdown: null,
    insight: "",
    action: ""
  },
  "financial-anomalies": {
    title: "Financial anomalies",
    titleAr: "الشذوذ المالي",
    value: "2 open",
    delta: "▲ 4.2% vs previous period",
    definition: "Duplicate / high-value redemptions under review.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitored",
    statusAr: "مُراقَب",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1.45, 1.54, 1.61, 1.67, 1.75, 1.81, 1.92, 2]
    },
    breakdown: null,
    insight: "",
    action: "Apply anomaly rules."
  }
};

Hayyoh.registerPage({
  details,
  render(period) {
    const { charts, data } = Hayyoh;
    charts.bar('finCost', data.partners.map((partner) => partner.name), data.partners.map((partner) => partner.cost), {
      color: 'violet',
      horizontal: true
    });
    charts.bar('finVal', ['Issued', 'Redeemed', 'Outstanding'], [124287596, 2174300, 122113296], {
      colors: ['primary', 'violet', 'cyan']
    });
  }
});

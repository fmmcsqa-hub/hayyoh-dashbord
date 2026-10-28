const details = {
  "active-partners": {
    title: "Active partners",
    titleAr: "الشركاء النشطون",
    value: "7",
    delta: "▲ 3.9% vs previous period",
    definition: "Reward partners with redemption activity.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Active",
    statusAr: "نشط",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [4.92, 5.34, 5.62, 5.79, 6.04, 6.39, 6.74, 7]
    },
    breakdown: null,
    insight: "A small set carries all redemptions; concentration risk.",
    action: "Onboard partners to broaden choice."
  },
  "top-partner-volume": {
    title: "Top partner (volume)",
    titleAr: "الشريك الأكبر حجماً",
    value: "Aspire Katara",
    delta: "",
    definition: "94 of 193 redemptions at ~QAR 242 each.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Leader",
    statusAr: "الأعلى",
    statusLevel: "green",
    trend: null,
    breakdown: null,
    insight: "",
    action: ""
  },
  "highest-cost-share": {
    title: "Highest cost share",
    titleAr: "الأعلى حصة تكلفة",
    value: "Ooredoo Nojoom",
    delta: "",
    definition: "41 redemptions, 38% of reward cost (QAR 91,200).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Costly",
    statusAr: "مرتفع التكلفة",
    statusLevel: "amber",
    trend: null,
    breakdown: null,
    insight: "",
    action: ""
  },
  "lowest-rated-partner": {
    title: "Lowest-rated partner",
    titleAr: "الشريك الأدنى تقييماً",
    value: "Vodafone 1.6★",
    delta: "▲ 5.3% vs previous period",
    definition: "Well below the 3.4-star average.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 3.4★",
    status: "Review",
    statusAr: "مراجعة",
    statusLevel: "red",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1.16, 1.19, 1.29, 1.32, 1.38, 1.44, 1.52, 1.6]
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
    const names = data.partners.map((partner) => partner.name);
    charts.donut('mePts', names, data.partners.map((partner) => partner.points), ['primary', 'violet', 'sky', 'purple', 'green', 'lightBlue', 'red', 'grey']);
    charts.bar('meCost', names, data.partners.map((partner) => partner.cost), { color: 'violet', horizontal: true });
    charts.bar('meVol', names, data.partners.map((partner) => partner.redemptions), { color: 'sky', horizontal: true });
    charts.bar('meRate', names, data.partners.map((partner) => partner.rating), { color: 'primary', horizontal: true });
  }
});

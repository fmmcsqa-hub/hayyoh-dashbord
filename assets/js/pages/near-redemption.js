const details = {
  "ready-to-redeem": {
    title: "Ready to redeem",
    titleAr: "جاهزون للاستبدال",
    value: "187",
    delta: "▲ 3.4% vs previous period",
    definition: "Users holding enough points to redeem at least one reward now, but who have not.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Users with available points ≥ cheapest eligible reward AND no redemption.",
    target: "",
    status: "Opportunity",
    statusAr: "فرصة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [133.24, 142.59, 146.33, 160.35, 165.96, 175.31, 180.92, 187]
    },
    breakdown: null,
    insight: "Points already cover a reward; a nudge can convert them.",
    action: "Trigger approved Next-Best-Action prompts."
  },
  "very-close-250": {
    title: "Very close (≤ 250)",
    titleAr: "قريبون جداً (≤ 250)",
    value: "68",
    delta: "▲ 3.9% vs previous period",
    definition: "Users within 250 points of a target reward.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Opportunity",
    statusAr: "فرصة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [50.15, 51.85, 54.23, 57.97, 60.69, 61.37, 65.45, 68]
    },
    breakdown: null,
    insight: "A tiny top-up converts them.",
    action: "Micro-earn prompt (one check-in)."
  },
  "close-1-000": {
    title: "Close (≤ 1,000)",
    titleAr: "قريبون (≤ 1,000)",
    value: "410",
    delta: "▲ 3.4% vs previous period",
    definition: "Users within 1,000 points of a target reward.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Pipeline",
    statusAr: "قيد التهيئة",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [300.32, 310.58, 324.93, 345.42, 365.93, 378.22, 396.67, 410]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "view-redeem-rate": {
    title: "View → redeem rate",
    titleAr: "معدل التحويل: مشاهدة ← استبدال",
    value: "4.6%",
    delta: "▲ 6.0% vs previous period",
    definition: "Conversion from offer view to redemption.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Opportunity",
    statusAr: "فرصة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [3.32, 3.51, 3.69, 3.83, 3.97, 4.29, 4.34, 4.6]
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
    const offers = data.nearRedemptionOffers;
    charts.bar('nbaFunnel', data.offerFunnel.map((step) => step.stage), data.offerFunnel.map((step) => step.users), {
      colors: ['primary', 'cyan', 'sky', 'violet', 'purple', 'lightBlue', 'green'],
      horizontal: true
    });
    charts.stacked('nbaOffers', offers.map((offer) => offer.offer), [
      { name: 'Eligible', values: offers.map((offer) => offer.eligible), color: 'primary' },
      { name: 'Gap ≤250', values: offers.map((offer) => offer.gap250), color: 'violet' },
      { name: 'Gap ≤500', values: offers.map((offer) => offer.gap500), color: 'sky' },
      { name: 'Gap ≤1000', values: offers.map((offer) => offer.gap1000), color: 'purple' }
    ]);
  }
});

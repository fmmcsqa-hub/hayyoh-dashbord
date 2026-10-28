const details = {
  "matches-played": {
    title: "Matches played",
    titleAr: "المباريات المُقامة",
    value: "6",
    delta: "▲ 4.3% vs previous period",
    definition: "QSL matches in the reporting week.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Week 5",
    statusAr: "",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [4.33, 4.46, 4.75, 5.0, 5.18, 5.53, 5.75, 6]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "stadium-attendance": {
    title: "Stadium attendance",
    titleAr: "حضور الملعب",
    value: "47,854",
    delta: "▼ 2.5% vs previous period",
    definition: "Total Week-5 attendance.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "-2.5% MoM",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      values: [52100, 50300, 49800, 49100, 48600, 48200, 47900, 49060, 47854]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "hayyoh-check-ins": {
    title: "Hayyoh check-ins",
    titleAr: "تسجيلات الدخول عبر حيّوه",
    value: "36,614",
    delta: "▲ 3.9% vs previous period",
    definition: "Check-ins through Hayyoh across 6 matches.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "76.5% of attendance",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [26636.68, 27735.11, 29565.8, 31030.36, 32861.07, 33593.35, 35240.97, 36614]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "points-awarded": {
    title: "Points awarded",
    titleAr: "النقاط الممنوحة",
    value: "24.1m",
    delta: "▲ 4.4% vs previous period",
    definition: "Hayyoh points awarded this week.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Week 5",
    statusAr: "",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [17.41, 18.01, 18.86, 19.94, 21.27, 22.23, 23.08, 24.1]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "calls-received": {
    title: "Calls received",
    titleAr: "المكالمات الواردة",
    value: "1,754",
    delta: "▲ 6.1% vs previous period",
    definition: "Inbound contact-centre calls.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "+405%",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1276.03, 1346.19, 1381.27, 1486.51, 1565.44, 1644.37, 1653.14, 1754]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "first-contact-resolution": {
    title: "First contact resolution",
    titleAr: "الحل من أول تواصل",
    value: "47.4%",
    delta: "▲ 5.0% vs previous period",
    definition: "Calls resolved first time.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 70%",
    status: "Critical",
    statusAr: "حرج",
    statusLevel: "red",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [34.25, 36.85, 38.04, 39.22, 41.12, 43.25, 45.15, 47.4]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "emails-answered": {
    title: "Emails answered",
    titleAr: "الرسائل المُجاب عليها",
    value: "95.5%",
    delta: "▲ 5.0% vs previous period",
    definition: "Share of emails answered this week.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "On track",
    statusAr: "على المسار",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [69.48, 73.3, 76.16, 80.94, 82.37, 88.1, 90.96, 95.5]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "rewards-redeemed-week": {
    title: "Rewards redeemed (week)",
    titleAr: "المكافآت المستبدَلة (الأسبوع)",
    value: "25",
    delta: "▲ 3.9% vs previous period",
    definition: "Rewards redeemed 4-11 Oct for 417,300 points.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Week",
    statusAr: "",
    statusLevel: "info",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [17.81, 18.94, 20.31, 20.56, 21.56, 22.56, 24.06, 25]
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
    const weeks = period.slice(data.weeks.labels);
    charts.stacked('wkMatch', data.matches.map((match) => match.name), [
      { name: 'Awarded', values: data.matches.map((match) => match.awarded), color: 'primary' },
      { name: 'Not awarded', values: data.matches.map((match) => match.notAwarded), color: 'violet' }
    ]);
    charts.bar('wkCat', data.inquiryCategories.map((item) => item.name), data.inquiryCategories.map((item) => item.calls), {
      color: 'primary',
      horizontal: true
    });
    charts.line('wkAtt', weeks, [{ name: 'Attendance', values: period.slice(data.attendance), color: 'sky' }]);
    charts.bar('wkRed', weeks, period.slice(data.pointsRedeemed), { color: 'violet' });
  }
});

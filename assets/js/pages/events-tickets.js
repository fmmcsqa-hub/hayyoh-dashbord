const details = {
  "matches-covered": {
    title: "Matches covered",
    titleAr: "المباريات المشمولة",
    value: "24",
    delta: "▲ 2.3% vs previous period",
    definition: "Matches 27 Aug to 10 Oct in the analysis.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "On schedule",
    statusAr: "في الموعد",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [17.22, 17.82, 18.9, 20.1, 21.06, 22.14, 23.46, 24]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "hayyoh-linked-tickets": {
    title: "Hayyoh-linked tickets",
    titleAr: "التذاكر المرتبطة بحيّوه",
    value: "166,179",
    delta: "▲ 2.8% vs previous period",
    definition: "Own plus dependant tickets across 24 matches.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Strong",
    statusAr: "قوي",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [117571.64, 129204.17, 130035.07, 140836.7, 143329.39, 153300.13, 161609.08, 166179]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "attendance-week": {
    title: "Attendance (week)",
    titleAr: "الحضور (الأسبوع)",
    value: "47,854",
    delta: "▼ 2.5% vs previous period",
    definition: "Week-5 stadium attendance.",
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
  "no-show-rate": {
    title: "No-show rate",
    titleAr: "نسبة عدم الحضور",
    value: "12.8%",
    delta: "▲ 5.0% vs previous period",
    definition: "Issued Hayyoh tickets not checked in.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≤ 10%",
    status: "Watch",
    statusAr: "للمتابعة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [9.25, 9.82, 10.08, 10.78, 11.1, 11.62, 12.19, 12.8]
    },
    breakdown: null,
    insight: "No-shows erode attendance value and points.",
    action: "Reminders and waitlist release."
  },
  "ticket-utilisation": {
    title: "Ticket utilisation",
    titleAr: "نسبة استخدام التذاكر",
    value: "82.3%",
    delta: "▲ 5.0% vs previous period",
    definition: "Linked tickets that became a verified check-in.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 90%",
    status: "Attention",
    statusAr: "يحتاج انتباه",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [58.64, 61.52, 66.05, 68.51, 71.4, 76.33, 78.39, 82.3]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "points-award-rate": {
    title: "Points-award rate",
    titleAr: "نسبة منح النقاط",
    value: "87.7%",
    delta: "▲ 3.4% vs previous period",
    definition: "Hayyoh tickets that earned points (Week 5).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 95%",
    status: "Attention",
    statusAr: "يحتاج انتباه",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [61.61, 65.12, 69.06, 74.76, 77.83, 79.15, 84.85, 87.7]
    },
    breakdown: null,
    insight: "~1 in 10 did not earn; check-in or verification friction.",
    action: "Investigate award failures with integration."
  },
  "adult-dependant": {
    title: "Adult : dependant",
    titleAr: "البالغ : المرافق",
    value: "2.1 : 1",
    delta: "",
    definition: "Own vs dependant tickets (112,496 : 53,683).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: null,
    breakdown: null,
    insight: "",
    action: ""
  },
  "retrieval-success": {
    title: "Retrieval success",
    titleAr: "نجاح استرجاع التذكرة",
    value: "98.6%",
    delta: "▲ 2.8% vs previous period",
    definition: "Ticket retrievals completed without error.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 99%",
    status: "Healthy",
    statusAr: "سليم",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [70.25, 74.2, 78.63, 83.07, 88.0, 92.44, 95.89, 98.6]
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
    charts.line('evAtt', period.slice(data.weeks.labels), [{ name: 'Attendance', values: period.slice(data.attendance), color: 'sky' }]);
    charts.stacked('evMatch', data.matches.map((match) => match.name), [
      { name: 'Awarded', values: data.matches.map((match) => match.awarded), color: 'primary' },
      { name: 'Not awarded', values: data.matches.map((match) => match.notAwarded), color: 'violet' }
    ]);
    charts.donut('evDep', ['Own / adult', 'Dependant'], [112496, 53683], ['primary', 'violet']);
    charts.donut('evShow', ['Checked in', 'No-show'], [36614, Math.round(36614 * 0.128)], ['primary', 'red']);
  }
});

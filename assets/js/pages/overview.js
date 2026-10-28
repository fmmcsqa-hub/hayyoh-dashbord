const details = {
  "registered-users": {
    title: "Registered users",
    titleAr: "المستخدمون المسجّلون",
    value: "59,665",
    delta: "▲ 1.1% vs previous period",
    definition: "Total account holders registered on Hayyoh since launch.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "80,000 by Dec",
    status: "Growing",
    statusAr: "ينمو",
    statusLevel: "green",
    trend: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      values: [41200, 45800, 49100, 52400, 54900, 56800, 58100, 59000, 59665]
    },
    breakdown: null,
    insight: "Registrations climb weekly but the pace eases as the early base is captured.",
    action: "Shift focus from acquisition to activation and verification."
  },
  "active-users": {
    title: "Active users",
    titleAr: "المستخدمون النشطون",
    value: "32,400",
    delta: "▲ 0.9% vs previous period",
    definition: "Users with a qualifying action (check-in, earn, redeem) in 30 days.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 65%",
    status: "54% of base",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
      values: [24900, 27100, 28600, 30000, 30900, 31500, 31900, 32100, 32400]
    },
    breakdown: null,
    insight: "Active share is slipping as registrations outpace activity.",
    action: "Target dormant users with event and reward prompts."
  },
  "total-operations": {
    title: "Total operations",
    titleAr: "إجمالي العمليات",
    value: "2,418,650",
    delta: "",
    definition: "Sum of check-ins, points-earn and redemption events (platform activity, not payments).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "check-ins + earn events + redemptions, de-duplicated.",
    target: "",
    status: "Monitor",
    statusAr: "مراقبة",
    statusLevel: "info",
    trend: null,
    breakdown: null,
    insight: "Activity volume tracks the fixture calendar.",
    action: "Grow activity by lifting active share and attendance."
  },
  "points-redemption-rate": {
    title: "Points redemption rate",
    titleAr: "معدل استبدال النقاط",
    value: "1.75%",
    delta: "▲ 6.1% vs previous period",
    definition: "Points redeemed as a share of points issued.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 8%",
    status: "Low burn",
    statusAr: "استبدال منخفض",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1.25, 1.31, 1.39, 1.47, 1.55, 1.58, 1.65, 1.75]
    },
    breakdown: null,
    insight: "Earn-to-burn 57:1; value accumulates unredeemed.",
    action: "Approve a redemption campaign."
  },
  "attendance-via-hayyoh": {
    title: "Attendance via Hayyoh",
    titleAr: "الحضور عبر حيّوه",
    value: "82.3%",
    delta: "▲ 6.1% vs previous period",
    definition: "Stadium attendance checked in through Hayyoh (160,229 of 194,795).",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 90%",
    status: "Attention",
    statusAr: "يحتاج انتباه",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [58.64, 61.52, 67.28, 68.1, 73.86, 75.51, 77.57, 82.3]
    },
    breakdown: null,
    insight: "One in five attendees not captured; caps points and data coverage.",
    action: "Close the 18% gap via gate prompts and venue registration."
  },
  "reward-fulfilment": {
    title: "Reward fulfilment",
    titleAr: "تنفيذ المكافآت",
    value: "99 of 193",
    delta: "▲ 2.8% vs previous period",
    definition: "Redeemed rewards confirmed used or delivered.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "51%",
    statusAr: "",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [72.52, 73.51, 78.46, 83.41, 88.36, 91.82, 96.28, 99]
    },
    breakdown: null,
    insight: "Half await manual confirmation.",
    action: "Automate usage confirmation."
  },
  "verified-users": {
    title: "Verified users",
    titleAr: "المستخدمون الموثّقون",
    value: "40.4%",
    delta: "▲ 5.0% vs previous period",
    definition: "Share of registered users verified.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 70%",
    status: "Critical",
    statusAr: "حرج",
    statusLevel: "red",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [28.38, 31.01, 33.03, 33.63, 35.45, 37.07, 38.48, 40.4]
    },
    breakdown: null,
    insight: "Six in ten unverified; limits reward eligibility and clean data.",
    action: "Make verification the lead KPI this quarter."
  },
  "programme-health": {
    title: "Programme health",
    titleAr: "صحة البرنامج",
    value: "Attention",
    delta: "",
    definition: "Composite of adoption, engagement, service and assurance.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Attention",
    statusAr: "يحتاج انتباه",
    statusLevel: "amber",
    trend: null,
    breakdown: null,
    insight: "Strong attendance and engagement, held back by verification, burn and manual fulfilment.",
    action: "Focus on verification and redemption."
  }
};

Hayyoh.registerPage({
  details,
  render(period) {
    const { charts, data } = Hayyoh;
    const weeks = period.slice(data.weeks.labels);
    charts.line('ovReg', weeks, [
      { name: 'Registered', values: period.slice(data.registeredUsers), color: 'primary' },
      { name: 'Active', values: period.slice(data.activeUsers), color: 'violet' }
    ]);
    charts.combo('ovIssRed', weeks,
      { name: 'Redeemed', values: period.slice(data.pointsRedeemed) },
      { name: 'Issued (m)', values: period.slice(data.pointsIssuedMillions) });
    charts.line('ovAtt', weeks, [{ name: 'Attendance', values: period.slice(data.attendance), color: 'sky' }]);
    charts.bar('ovFun', ['Registered', 'Verified', 'Active', 'Earning', 'Redeemed'], [59665, 24081, 32400, 12079, 187], {
      colors: ['primary', 'cyan', 'sky', 'violet', 'purple'],
      horizontal: true
    });
  }
});

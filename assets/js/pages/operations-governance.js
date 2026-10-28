const details = {
  "system-availability": {
    title: "System availability",
    titleAr: "توافر النظام",
    value: "99.9%",
    delta: "▲ 3.9% vs previous period",
    definition: "Monthly uptime across services.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 99.8%",
    status: "On track",
    statusAr: "على المسار",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [71.68, 76.17, 81.67, 82.17, 87.16, 91.16, 96.15, 99.9]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "api-availability": {
    title: "API availability",
    titleAr: "توافر الواجهات البرمجية",
    value: "99.9%",
    delta: "▲ 2.3% vs previous period",
    definition: "Availability of critical APIs.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 99.8%",
    status: "On track",
    statusAr: "على المسار",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [70.68, 74.18, 81.17, 82.17, 86.66, 93.66, 97.65, 99.9]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "transaction-success": {
    title: "Transaction success",
    titleAr: "نجاح المعاملات",
    value: "99.6%",
    delta: "▲ 2.3% vs previous period",
    definition: "Processed without failure.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 99.5%",
    status: "Healthy",
    statusAr: "سليم",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [71.96, 76.94, 78.43, 81.92, 88.39, 92.38, 97.36, 99.6]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "failed-transactions": {
    title: "Failed transactions",
    titleAr: "المعاملات الفاشلة",
    value: "0.4%",
    delta: "▲ 2.6% vs previous period",
    definition: "Failed or reversed.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≤ 0.5%",
    status: "Within range",
    statusAr: "ضمن المعدل",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [0.29, 0.3, 0.31, 0.33, 0.35, 0.36, 0.39, 0.4]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "open-incidents": {
    title: "Open incidents",
    titleAr: "الحوادث المفتوحة",
    value: "3",
    delta: "▲ 4.9% vs previous period",
    definition: "Incidents currently open.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Watch",
    statusAr: "للمتابعة",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [2.12, 2.32, 2.39, 2.47, 2.6, 2.75, 2.86, 3]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "sla-compliance": {
    title: "SLA compliance",
    titleAr: "الالتزام باتفاقية الخدمة",
    value: "96.2%",
    delta: "▲ 2.8% vs previous period",
    definition: "Share meeting SLA targets.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "≥ 90%",
    status: "On track",
    statusAr: "على المسار",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [69.5, 71.43, 78.64, 82.49, 82.97, 90.19, 93.55, 96.2]
    },
    breakdown: null,
    insight: "",
    action: ""
  },
  "system-reconciliation": {
    title: "System reconciliation",
    titleAr: "مطابقة الأنظمة",
    value: "1 open",
    delta: "▲ 6.4% vs previous period",
    definition: "Differences between systems needing reconciliation.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Monitored",
    statusAr: "مُراقَب",
    statusLevel: "amber",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [0.72, 0.75, 0.81, 0.85, 0.89, 0.9, 0.94, 1]
    },
    breakdown: null,
    insight: "Outstanding-balance definition reconciled; dashboard calculation to be confirmed.",
    action: ""
  },
  "privileged-access-review": {
    title: "Privileged-access review",
    titleAr: "مراجعة الصلاحيات المرتفعة",
    value: "2 sessions",
    delta: "▲ 2.6% vs previous period",
    definition: "Active privileged sessions, all authorised.",
    source: "Hayyoh platform (analytics dashboard)",
    calculation: "Direct count from the source system for the reporting period.",
    target: "",
    status: "Controlled",
    statusAr: "مُحكم",
    statusLevel: "green",
    trend: {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [1.42, 1.51, 1.6, 1.67, 1.73, 1.81, 1.95, 2]
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
    charts.line('inVol', period.slice(data.weeks.labels), [
      { name: 'Transactions', values: period.slice(data.transactions), color: 'primary' }
    ]);
    charts.bar('inStat', ['Operational', 'Degraded', 'Down'], [10, 1, 0], {
      colors: ['green', 'amber', 'red'],
      horizontal: true
    });
  }
});

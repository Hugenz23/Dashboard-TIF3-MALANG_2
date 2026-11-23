window.APP_CONFIG = {
  gasUrl: "https://script.google.com/macros/s/AKfycbzNTYWA6W_6sJBXQbmsT63oidkuiyLi4NomRU9ckcD77AgNnAuGeOKZdDDY2bnTtwbwVw/exec",
  defaultMenu: "kpi_wisa",
  menus: {
    kpi_wisa: {
      title: "KPI WISA",
      file: "pages/kpi-wisa.html",
      initFn: "initKpiWisa"
    },
    monitoring_deployment: {
      title: "Monitoring Deployment",
      file: "pages/monitoring-deployment.html",
      initFn: "initMonitoringDeployment"
    },
    due_date_pekerjaan: {
      title: "Due Date Pekerjaan",
      file: "pages/due-date-pekerjaan.html",
      initFn: "initDueDatePekerjaan"
    }
  }
};

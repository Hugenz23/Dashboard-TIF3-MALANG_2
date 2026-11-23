window.APP_CONFIG = {
  gasUrl: "https://script.google.com/macros/s/GANTI_DENGAN_URL_WEB_APP_GAS/exec",
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

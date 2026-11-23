window.APP_CONFIG = {
  gasUrl: "https://script.google.com/macros/s/AKfycbzBNrjG1n8Ysm-PFkN_R7vPpMJ4yXoJOSoMDSOBEzRZ6SILXhtT-zxl64qawdXxpkXI4g/exec",
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

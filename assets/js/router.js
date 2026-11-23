(function () {
  const container = document.getElementById("app-content");

  function setActiveNav(menuKey) {
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      const isActive = btn.dataset.menu === menuKey;
      btn.classList.toggle("bg-blue-600", isActive);
      btn.classList.toggle("text-white", isActive);
      btn.classList.toggle("text-slate-300", !isActive);
    });
  }

  async function loadMenu(menuKey, pushHash = true) {
    const menus = window.APP_CONFIG.menus;
    const key = menus[menuKey] ? menuKey : window.APP_CONFIG.defaultMenu;
    const cfg = menus[key];

    setActiveNav(key);
    if (pushHash) window.location.hash = "#" + key;

    container.innerHTML = `<div class="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-400 animate-pulse">Memuat ${cfg.title}...</div>`;

    try {
      const res = await fetch(`${cfg.file}?v=${Date.now()}`);
      if (!res.ok) throw new Error(`Gagal memuat ${cfg.file} (${res.status})`);
      container.innerHTML = await res.text();

      if (typeof window[cfg.initFn] === "function") {
        await window[cfg.initFn]();
      }
    } catch (err) {
      container.innerHTML = `<div class="bg-slate-900 border border-red-800 rounded-xl p-5 text-red-400">Error: ${err.message}</div>`;
    }
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;
    loadMenu(btn.dataset.menu);
  });

  window.addEventListener("hashchange", () => {
    const hashKey = window.location.hash.replace(/^#/, "");
    if (hashKey) loadMenu(hashKey, false);
  });

  window.addEventListener("DOMContentLoaded", () => {
    const startKey = window.location.hash.replace(/^#/, "") || window.APP_CONFIG.defaultMenu;
    loadMenu(startKey, false);
  });
})();

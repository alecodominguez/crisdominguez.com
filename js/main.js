/* Cris Dominguez — site behavior (no dependencies, ~3 KB)
   1. Mobile nav toggle   2. Header hairline on scroll
   3. Works filters       4. Lightbox            5. Email + footer year */
(function () {
  "use strict";

  /* 1. Mobile nav ------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* 2. Header hairline -------------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* 3. Works filters ---------------------------------------------------- */
  var grid = document.querySelector(".works-grid");
  var buttons = document.querySelectorAll(".filter-btn");
  var empty = document.querySelector(".works-empty");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.dataset.filter;
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      var shown = 0;
      grid.querySelectorAll(".work").forEach(function (w) {
        var media = (w.dataset.medium || "").split(/\s+/);
        var match = f === "all" || media.indexOf(f) !== -1;
        w.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });

  /* 4. Lightbox --------------------------------------------------------- */
  var dialog = document.getElementById("lightbox");
  if (grid && dialog && typeof dialog.showModal === "function") {
    var lbImg = dialog.querySelector(".lightbox-figure img");
    var lbTitle = dialog.querySelector(".lightbox-caption .work-title");
    var lbMeta = dialog.querySelector(".lightbox-caption .work-meta");
    var lbDesc = dialog.querySelector(".lightbox-desc");
    var current = 0;

    var visibleWorks = function () {
      return Array.prototype.filter.call(grid.querySelectorAll(".work"), function (w) { return !w.hidden; });
    };

    var show = function (i) {
      var list = visibleWorks();
      if (!list.length) return;
      current = (i + list.length) % list.length;
      var w = list[current];
      var img = w.querySelector("img");
      lbImg.src = w.dataset.full || img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lbTitle.textContent = w.querySelector(".work-title").textContent;
      lbMeta.textContent = w.querySelector(".work-meta").textContent;
      var d = w.querySelector(".work-desc");
      lbDesc.textContent = d ? d.textContent : "";
      lbDesc.hidden = !d || !d.textContent.trim();
    };

    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".work-thumb");
      if (!btn) return;
      show(visibleWorks().indexOf(btn.closest(".work")));
      dialog.showModal();
    });
    dialog.querySelector(".lb-close").addEventListener("click", function () { dialog.close(); });
    dialog.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    dialog.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
    dialog.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
    // click on backdrop area closes
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
    // basic swipe on touch screens
    var x0 = null;
    dialog.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    dialog.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  /* 5. Email (assembled in JS to reduce scraper spam) + year ------------ */
  document.querySelectorAll("[data-email-user]").forEach(function (a) {
    var addr = a.dataset.emailUser + "@" + a.dataset.emailDomain;
    a.href = "mailto:" + addr;
    if (!a.dataset.keepText) a.textContent = addr;
  });
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

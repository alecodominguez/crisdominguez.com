/* Cris Dominguez — site behavior (no dependencies)
   0. Language toggle (EN/ES)   1. Mobile nav   2. Header hairline
   3. Works filters             4. Lightbox     5. Email + footer year */
(function () {
  "use strict";
  var root = document.documentElement;

  /* 0. Language ---------------------------------------------------------
     Text: pair elements with lang="en" / lang="es" (CSS hides the other).
     Attributes: add data-es-alt / data-es-aria-label for the Spanish value.
     Page title: <html data-title-es="…">.                                 */
  var titleEn = document.title;
  var ATTRS = ["alt", "aria-label", "title"];

  function setLang(lang) {
    var es = lang === "es";
    root.classList.toggle("lang-es", es);
    root.lang = es ? "es" : "en";
    document.title = es && root.dataset.titleEs ? root.dataset.titleEs : titleEn;
    ATTRS.forEach(function (a) {
      document.querySelectorAll("[data-es-" + a + "]").forEach(function (el) {
        if (!el.hasAttribute("data-en-" + a)) el.setAttribute("data-en-" + a, el.getAttribute(a) || "");
        el.setAttribute(a, el.getAttribute(es ? "data-es-" + a : "data-en-" + a));
      });
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === (es ? "es" : "en")));
    });
    try { localStorage.setItem("lang", es ? "es" : "en"); } catch (e) {}
  }
  setLang(root.classList.contains("lang-es") ? "es" : "en");
  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.setLang); });
  });

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
  if (grid) {
    var works = grid.querySelectorAll(".work");
    var mediaOf = function (w) { return (w.dataset.medium || "").split(/\s+/); };
    // Hide any filter chip that has no works yet, so empty categories never show.
    buttons.forEach(function (btn) {
      var f = btn.dataset.filter;
      if (f === "all") return;
      var has = Array.prototype.some.call(works, function (w) { return mediaOf(w).indexOf(f) !== -1; });
      if (!has) btn.closest(".filter-chip").hidden = true;
    });
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.dataset.filter;
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        var shown = 0;
        works.forEach(function (w) {
          var match = f === "all" || mediaOf(w).indexOf(f) !== -1;
          w.hidden = !match;
          if (match) shown++;
        });
        if (empty) empty.hidden = shown !== 0;
      });
    });
  }

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

    // innerHTML (not textContent) so both language versions come along.
    var show = function (i) {
      var list = visibleWorks();
      if (!list.length) return;
      current = (i + list.length) % list.length;
      var w = list[current];
      var img = w.querySelector("img");
      lbImg.src = w.dataset.full || img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lbTitle.innerHTML = w.querySelector(".work-title").innerHTML;
      lbMeta.innerHTML = w.querySelector(".work-meta").innerHTML;
      var d = w.querySelector(".work-desc");
      lbDesc.innerHTML = d ? d.innerHTML : "";
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
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
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
    a.textContent = addr;
  });
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

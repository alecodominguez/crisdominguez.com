/* Cris Dominguez — site behavior (no dependencies)
   0. Language toggle (EN/ES)   1. Works page (sections, filters, viewer)
   2. Mobile nav   3. Header hairline   4. Email + footer year          */
(function () {
  "use strict";
  var root = document.documentElement;
  var titleEn = document.title;
  var ATTRS = ["alt", "aria-label", "title"];
  var isES = function () { return root.classList.contains("lang-es"); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
  // paired-language markup: <span lang="en">…</span><span lang="es">…</span>
  var L = function (o) { return o ? (o.en === o.es ? esc(o.en) : '<span lang="en">' + esc(o.en) + '</span><span lang="es">' + esc(o.es) + "</span>") : ""; };

  /* 0. Language ------------------------------------------------------- */
  function applyAttrs(scope) {
    var es = isES();
    ATTRS.forEach(function (a) {
      (scope || document).querySelectorAll("[data-es-" + a + "]").forEach(function (el) {
        if (!el.hasAttribute("data-en-" + a)) el.setAttribute("data-en-" + a, el.getAttribute(a) || "");
        el.setAttribute(a, el.getAttribute(es ? "data-es-" + a : "data-en-" + a));
      });
    });
  }
  function setLang(lang) {
    var es = lang === "es";
    root.classList.toggle("lang-es", es);
    root.lang = es ? "es" : "en";
    document.title = es && root.dataset.titleEs ? root.dataset.titleEs : titleEn;
    applyAttrs();
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === (es ? "es" : "en")));
    });
    try { localStorage.setItem("lang", es ? "es" : "en"); } catch (e) {}
    document.dispatchEvent(new CustomEvent("langchange"));
  }

  /* 1. Works page ----------------------------------------------------- */
  var app = document.getElementById("works-app");
  if (app && window.WORKS && window.SECTIONS) buildWorks(app);

  function buildWorks(app) {
    var WORKS = window.WORKS, SECTIONS = window.SECTIONS;
    var bySection = {};
    WORKS.forEach(function (w, i) { w._i = i; (bySection[w.section] = bySection[w.section] || []).push(w); });
    var used = SECTIONS.filter(function (s) { return bySection[s[0]]; });

    var meta = function (w) {
      var parts = [L(w.medium)];
      if (w.size) parts.push(L(w.size));
      if (w.year) parts.push(esc(w.year));
      return parts.join(" · ");
    };
    var img = function (im, cls, eager) {
      // im = [file, altEN, altES, w, h]
      return '<img class="' + (cls || "") + '" src="images/works/thumbs/' + esc(im[0]) + '.jpg" alt="' + esc(im[1]) +
        '" data-es-alt="' + esc(im[2]) + '" width="' + (im[3] || 800) + '" height="' + (im[4] || 800) + '"' +
        (eager ? "" : ' loading="lazy"') + ' decoding="async">';
    };
    var stmtBtn = function (w) {
      return w.statement ? '<button type="button" class="statement-link" data-open="' + w._i + '"><span lang="en">Read statement</span><span lang="es">Leer declaración</span></button>' : "";
    };

    // filters
    var chips = '<li><button class="filter-btn" data-filter="all" aria-pressed="true"><span lang="en">All</span><span lang="es">Todo</span> <span class="chip-count">' + WORKS.length + "</span></button></li>";
    used.forEach(function (s) {
      chips += '<li><button class="filter-btn" data-filter="' + s[0] + '" aria-pressed="false">' + L({ en: s[1], es: s[2] }) +
        ' <span class="chip-count">' + bySection[s[0]].length + "</span></button></li>";
    });

    // sections
    var html = '<ul class="filters" aria-label="Filter works" data-es-aria-label="Filtrar obras">' + chips + "</ul>";
    var n = 0;
    used.forEach(function (s) {
      var list = bySection[s[0]];
      html += '<section class="work-section" data-section="' + s[0] + '" aria-labelledby="sec-' + s[0] + '">' +
        '<h2 class="section-title" id="sec-' + s[0] + '">' + L({ en: s[1], es: s[2] }) + "</h2>";
      if (s[0] === "collections") {
        html += '<ul class="collections-grid">';
        list.forEach(function (w) {
          var rest = w.images.slice(1, 4).map(function (im) { return img(im, "strip-img"); }).join("");
          html += '<li class="collection-card">' +
            '<button type="button" class="collection-open" data-open="' + w._i + '" aria-label="Open collection: ' + esc(w.title.en) + '" data-es-aria-label="Abrir colección: ' + esc(w.title.es) + '">' +
            '<span class="collection-cover">' + img(w.images[0], "", n++ < 4) + '<span class="badge">' + w.images.length + "</span></span>" +
            '<span class="collection-strip">' + rest + "</span></button>" +
            '<div class="work-caption"><p class="eyebrow"><span lang="en">Collection</span><span lang="es">Colección</span></p>' +
            '<h3 class="collection-title">' + L(w.title) + '</h3><p class="work-meta">' + meta(w) + "</p>" +
            '<button type="button" class="statement-link" data-open="' + w._i + '"><span lang="en">View collection &amp; statement</span><span lang="es">Ver colección y declaración</span></button></div></li>';
        });
        html += "</ul>";
      } else {
        html += '<ul class="works-grid">';
        list.forEach(function (w) {
          html += '<li class="work">' +
            '<button type="button" class="work-thumb" data-open="' + w._i + '" aria-label="Open: ' + esc(w.title.en) + '" data-es-aria-label="Abrir: ' + esc(w.title.es) + '">' +
            img(w.images[0], "", n++ < 4) + (w.images.length > 1 ? '<span class="badge">' + w.images.length + "</span>" : "") + "</button>" +
            '<div class="work-caption"><p class="work-title">' + L(w.title) + '</p><p class="work-meta">' + meta(w) + "</p>" + stmtBtn(w) + "</div></li>";
        });
        html += "</ul>";
      }
      html += "</section>";
    });
    app.innerHTML = html;

    // filter behavior (+ #hash so a filtered view can be linked)
    var buttons = app.querySelectorAll(".filter-btn");
    var sections = app.querySelectorAll(".work-section");
    var current = "all";
    function filter(f, push) {
      if (f !== "all" && !bySection[f]) f = "all";
      current = f;
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === f)); });
      sections.forEach(function (s) { s.hidden = !(f === "all" || s.dataset.section === f); });
      if (push) history.replaceState(null, "", f === "all" ? location.pathname + location.search : "#" + f);
    }
    buttons.forEach(function (b) { b.addEventListener("click", function () { filter(b.dataset.filter, true); }); });
    filter((location.hash || "").slice(1) || "all", false);

    // viewer
    var dlg = document.getElementById("lightbox");
    if (!dlg || typeof dlg.showModal !== "function") return;
    var lbImg = dlg.querySelector(".lb-figure img");
    var q = function (s) { return dlg.querySelector(s); };
    var seq = [], pos = 0;
    function buildSeq() {
      seq = [];
      WORKS.forEach(function (w) {
        if (current !== "all" && w.section !== current) return;
        w.images.forEach(function (_, k) { seq.push([w._i, k]); });
      });
      // keep display order: collections first, then section order
      var order = used.map(function (s) { return s[0]; });
      seq.sort(function (a, b) {
        var wa = WORKS[a[0]], wb = WORKS[b[0]];
        return order.indexOf(wa.section) - order.indexOf(wb.section) || wa._i - wb._i || a[1] - b[1];
      });
    }
    function show(p) {
      pos = (p + seq.length) % seq.length;
      var w = WORKS[seq[pos][0]], k = seq[pos][1], im = w.images[k];
      lbImg.src = "images/works/" + im[0] + ".jpg";
      lbImg.width = im[3] || 1600; lbImg.height = im[4] || 1200;
      lbImg.alt = isES() ? im[2] : im[1];
      var kick = w.section === "collections" ? '<span lang="en">Collection</span><span lang="es">Colección</span>' : "";
      if (w.images.length > 1) kick += (kick ? " · " : "") + (k + 1) + " / " + w.images.length;
      q(".lb-kicker").innerHTML = kick;
      q(".lb-kicker").hidden = !kick;
      q(".lb-title").innerHTML = L(w.title);
      q(".lb-meta").innerHTML = meta(w);
      var st = q(".lb-statement");
      st.hidden = !w.statement;
      q(".lb-statement-text").innerHTML = w.statement ? L(w.statement) : "";
      q(".lb-count").textContent = (pos + 1) + " / " + seq.length;
      // preload neighbour
      var nx = seq[(pos + 1) % seq.length]; (new Image()).src = "images/works/" + WORKS[nx[0]].images[nx[1]][0] + ".jpg";
    }
    app.addEventListener("click", function (e) {
      var t = e.target.closest("[data-open]");
      if (!t) return;
      buildSeq();
      var wi = +t.dataset.open;
      var p = 0; for (var i = 0; i < seq.length; i++) { if (seq[i][0] === wi) { p = i; break; } }
      q(".lb-statement").open = window.matchMedia("(min-width: 900px)").matches || t.classList.contains("statement-link");
      show(p);
      dlg.showModal();
    });
    q(".lb-close").addEventListener("click", function () { dlg.close(); });
    q(".lb-prev").addEventListener("click", function () { show(pos - 1); });
    q(".lb-next").addEventListener("click", function () { show(pos + 1); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(pos - 1);
      if (e.key === "ArrowRight") show(pos + 1);
    });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    var x0 = null;
    q(".lb-figure").addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    q(".lb-figure").addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(pos + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    document.addEventListener("langchange", function () { if (dlg.open) show(pos); });
  }

  /* initial language pass (after works are rendered) */
  setLang(root.classList.contains("lang-es") ? "es" : "en");
  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.setLang); });
  });

  /* 2. Mobile nav ----------------------------------------------------- */
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

  /* 3. Header hairline ------------------------------------------------ */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* 4. Email + year --------------------------------------------------- */
  document.querySelectorAll("[data-email-user]").forEach(function (a) {
    var addr = a.dataset.emailUser + "@" + a.dataset.emailDomain;
    a.href = "mailto:" + addr;
    a.textContent = addr;
  });
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

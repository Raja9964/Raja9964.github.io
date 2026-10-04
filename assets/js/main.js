(function () {
  "use strict";

  var D = window.SITE_DATA;
  if (!D) return;

  var ICONS = {
    github: '<svg viewBox="0 0 24 24" class="fill" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" class="fill" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    cap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    pipeline: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="6" height="6" rx="1.5"/><rect x="16" y="15" width="6" height="6" rx="1.5"/><path d="M8 6h5a3 3 0 0 1 3 3v6"/><circle cx="5" cy="18" r="2"/><path d="M7 18h9"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    database: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
    tools: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 16v-4M12 16V8M17 16v-7"/></svg>',
    folder: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function $(id) { return document.getElementById(id); }
  function tags(list) {
    return '<ul class="tags">' + (list || []).map(function (t) {
      return '<li>' + esc(t) + '</li>';
    }).join("") + '</ul>';
  }
  function extLink(href, label, cls, icon) {
    return '<a class="' + cls + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' +
      (icon ? ICONS[icon] : "") + '<span>' + esc(label) + '</span></a>';
  }

  // ---- Hero ----
  document.querySelectorAll('[data-bind]').forEach(function (el) {
    el.textContent = D[el.getAttribute('data-bind')] || "";
  });
  $("hero-location").textContent = D.location;
  $("hero-role").innerHTML = esc(D.title) + ' <span class="at">at</span> ' + esc(D.company);

  var actions = '<a class="btn btn-primary" href="#projects"><span>View projects</span>' + ICONS.arrow + '</a>' +
    extLink(D.links.linkedin, "LinkedIn", "btn btn-ghost", "linkedin") +
    extLink(D.links.github, "GitHub", "btn btn-ghost", "github");
  if (D.resumeAvailable) {
    actions += '<a class="btn btn-ghost" href="' + esc(D.resumeUrl) + '" download>' + ICONS.download + '<span>Download résumé</span></a>';
  }
  $("hero-actions").innerHTML = actions;

  $("hero-stats").innerHTML = (D.highlights || []).map(function (h) {
    return '<li><strong>' + esc(h.value) + '</strong><span>' + esc(h.label) + '</span></li>';
  }).join("");

  $("hero-visual").innerHTML =
    '<div class="photo-frame">' +
      '<picture><source srcset="' + esc(D.photo.webp) + '" type="image/webp">' +
      '<img src="' + esc(D.photo.jpg) + '" alt="' + esc(D.photo.alt) + '" width="320" height="320" fetchpriority="high"></picture>' +
    '</div>' +
    (D.heroBadge ? '<div class="photo-badge">' + ICONS.award +
      '<div><strong>' + esc(D.heroBadge.title) + '</strong><span>' + esc(D.heroBadge.subtitle) + '</span></div></div>' : "");

  // ---- About ----
  $("about-body").innerHTML =
    '<div class="about-text reveal">' + D.about.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("") + '</div>' +
    '<dl class="facts card reveal">' + D.facts.map(function (f) {
      return '<div><dt>' + esc(f.label) + '</dt><dd>' + esc(f.value) + '</dd></div>';
    }).join("") + '</dl>';

  // ---- Skills ----
  $("skills-body").innerHTML = D.skills.map(function (g) {
    return '<article class="card skill-card reveal">' +
      '<h3><span class="icon-chip">' + (ICONS[g.icon] || ICONS.code) + '</span>' + esc(g.group) + '</h3>' +
      tags(g.items) + '</article>';
  }).join("");

  // ---- Experience ----
  $("experience-body").innerHTML = D.experience.map(function (e) {
    var hl = e.highlight ?
      '<div class="xp-highlight"><p class="mono label">Key project</p><p class="xp-hl-title">' + esc(e.highlight.title) + '</p>' + tags(e.highlight.tags) + '</div>' : "";
    return '<li class="timeline-item reveal">' +
      '<span class="timeline-dot" aria-hidden="true"></span>' +
      '<article class="card xp-card">' +
        '<p class="xp-date mono">' + esc(e.start) + ' – ' + esc(e.end) + '</p>' +
        '<h3>' + esc(e.role) + '</h3>' +
        '<p class="xp-meta">' + ICONS.briefcase + '<span>' + esc(e.company) + '</span>' +
          '<span class="sep" aria-hidden="true">·</span>' + ICONS.pin + '<span>' + esc(e.location) + '</span></p>' +
        '<ul class="xp-points">' + e.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>' +
        hl +
      '</article></li>';
  }).join("");

  // ---- Projects ----
  $("projects-body").innerHTML = D.projects.map(function (p) {
    var flow = "";
    if (p.featured && p.pipeline) {
      flow = '<ol class="flow" aria-label="Data flow">' + p.pipeline.map(function (s) {
        var tier = String(s.stage).toLowerCase().replace(/\s+/g, "-");
        return '<li class="flow-step tier-' + esc(tier) + '">' +
          '<span class="flow-stage mono">' + esc(s.stage) + '</span>' +
          '<span class="flow-note">' + esc(s.note) + '</span></li>';
      }).join("") + '</ol>';
    }
    return '<article class="card project-card reveal' + (p.featured ? ' featured' : '') + '">' +
      '<div class="project-top">' +
        '<span class="icon-chip">' + ICONS.folder + '</span>' +
        (p.featured ? '<span class="badge mono">Featured</span>' : '') +
      '</div>' +
      '<h3>' + esc(p.name) + '</h3>' +
      '<p class="project-desc">' + esc(p.description) + '</p>' +
      flow +
      '<div class="project-foot">' + tags(p.tags) +
        (p.url ? extLink(p.url, "View on GitHub", "text-link", "github") : "") +
      '</div>' +
    '</article>';
  }).join("");

  // ---- Credentials ----
  var pub = D.publication;
  $("credentials-body").innerHTML =
    '<div class="reveal">' +
      '<h3 class="sub-head">Certifications</h3>' +
      '<ul class="cert-list">' + D.certifications.map(function (c) {
        return '<li class="card cert"><span class="icon-chip">' + ICONS.award + '</span>' +
          '<div><strong>' + esc(c.name) + '</strong><span>' + esc(c.issuer) + '</span></div></li>';
      }).join("") + '</ul>' +
    '</div>' +
    (pub ? '<div class="reveal">' +
      '<h3 class="sub-head">Publication</h3>' +
      '<article class="card pub-card">' +
        '<p class="badge mono">' + esc(pub.venue) + '</p>' +
        '<h4>' + esc(pub.title) + '</h4>' +
        '<p>' + esc(pub.summary) + '</p>' +
        tags(pub.tags) +
        (pub.url ? extLink(pub.url, "Read the paper", "text-link", "file") : "") +
      '</article>' +
    '</div>' : '');

  // ---- Achievements & education ----
  $("education-body").innerHTML =
    '<div class="reveal">' +
      '<h3 class="sub-head">Achievements</h3>' +
      '<ul class="cert-list">' + D.achievements.map(function (a) {
        return '<li class="card cert"><span class="icon-chip">' + (ICONS[a.icon] || ICONS.award) + '</span>' +
          '<div><strong>' + esc(a.title) + '</strong><span>' + esc(a.detail) + '</span></div></li>';
      }).join("") + '</ul>' +
    '</div>' +
    '<div class="reveal">' +
      '<h3 class="sub-head">Education</h3>' +
      D.education.map(function (ed) {
        return '<article class="card edu-card">' +
          '<span class="icon-chip lg">' + ICONS.cap + '</span>' +
          '<h4>' + esc(ed.degree) + '</h4>' +
          '<p class="edu-school">' + esc(ed.school) + (ed.location ? ', ' + esc(ed.location) : '') + '</p>' +
          '<div class="edu-meta">' +
            (ed.grade ? '<span class="grade mono">' + esc(ed.grade) + '</span>' : '') +
            (ed.period ? '<span class="mono muted">' + esc(ed.period) + '</span>' : '') +
          '</div></article>';
      }).join("") +
    '</div>';

  // ---- Contact ----
  var c = D.contact;
  var contactBtns = extLink(D.links.linkedin, "Connect on LinkedIn", "btn btn-primary", "linkedin") +
    extLink(D.links.github, "Follow on GitHub", "btn btn-ghost", "github");
  if (D.links.email) {
    contactBtns += '<a class="btn btn-ghost" href="mailto:' + esc(D.links.email) + '">' + ICONS.mail + '<span>Email</span></a>';
  }
  if (D.resumeAvailable) {
    contactBtns += '<a class="btn btn-ghost" href="' + esc(D.resumeUrl) + '" download>' + ICONS.download + '<span>Download résumé</span></a>';
  }
  $("contact-body").innerHTML =
    '<p class="kicker mono">07 / Contact</p>' +
    '<h2 id="contact-title">' + esc(c.heading) + '</h2>' +
    '<p class="contact-text">' + esc(c.text) + '</p>' +
    '<div class="hero-actions center">' + contactBtns + '</div>';

  // structured data for search engines
  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: D.name,
    jobTitle: D.title,
    worksFor: { "@type": "Organization", name: D.company },
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    alumniOf: D.education.map(function (e) { return { "@type": "CollegeOrUniversity", name: e.school }; }),
    url: "https://raja9964.github.io/",
    image: "https://raja9964.github.io/" + D.photo.jpg,
    sameAs: [D.links.linkedin, D.links.github]
  });
  document.head.appendChild(ld);

  // ---- Theme toggle ----
  var root = document.documentElement;
  var themeBtn = $("theme-toggle");
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function stored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  applyTheme(root.getAttribute("data-theme") || "light");

  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  if (mq) {
    var onSystem = function (e) { if (!stored()) applyTheme(e.matches ? "dark" : "light"); };
    if (mq.addEventListener) mq.addEventListener("change", onSystem);
    else if (mq.addListener) mq.addListener(onSystem);
  }

  // ---- Mobile menu ----
  var header = $("site-header");
  var navToggle = $("nav-toggle");
  var navLinks = $("nav-links");

  function setMenu(open) {
    header.classList.toggle("menu-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  navToggle.addEventListener("click", function () {
    setMenu(navToggle.getAttribute("aria-expanded") !== "true");
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("menu-open")) {
      setMenu(false);
      navToggle.focus();
    }
  });

  // header border once the page scrolls
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Active section in nav ----
  var links = Array.prototype.slice.call(navLinks.querySelectorAll("a"));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

  function setActive(id) {
    links.forEach(function (a) {
      var on = a === byId[id];
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }

  function updateActive() {
    var line = window.innerHeight * 0.35;
    var current = null;
    Object.keys(byId).forEach(function (id) {
      var el = $(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    });
    // last section is short, so treat the bottom of the page as "contact"
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
    setActive(current);
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { updateActive(); ticking = false; });
  }, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();

  // ---- Reveal on scroll ----
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }
})();

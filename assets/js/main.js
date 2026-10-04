(function () {
  "use strict";

  var D = window.SITE_DATA;
  if (!D) return;

  var I = {
    github: '<svg viewBox="0 0 24 24" class="fill" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" class="fill" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
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
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>'
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function $(id) { return document.getElementById(id); }
  function chips(list, cls) {
    return '<ul class="chips ' + (cls || "") + '">' + (list || []).map(function (t) {
      return "<li>" + esc(t) + "</li>";
    }).join("") + "</ul>";
  }
  function ext(href, inner, cls, label) {
    return '<a class="' + (cls || "") + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer"' +
      (label ? ' aria-label="' + esc(label) + '"' : "") + ">" + inner + "</a>";
  }
  var mailto = "mailto:" + D.links.email;

  // hero
  $("hero-copy").innerHTML =
    '<p class="hero-eyebrow">' + I.pin + "<span>" + esc(D.location) + "</span></p>" +
    '<h1 id="hero-title">' + esc(D.name) + "</h1>" +
    '<p class="hero-role">' + esc(D.role) + ' <span class="at">@</span> ' + esc(D.company) + "</p>" +
    '<p class="hero-tagline">' + esc(D.tagline).replace(/\.\s+/, '. <span class="gold">') + "</span></p>" +
    '<p class="hero-intro">' + esc(D.intro) + "</p>" +
    '<ul class="hero-creds" aria-label="Credentials">' + D.credentials.map(function (c) {
      return '<li class="cred cred-' + esc(c.tone) + '"><span class="cred-dot" aria-hidden="true"></span>' + esc(c.label) + "</li>";
    }).join("") + "</ul>" +
    '<div class="hero-ctas">' +
      '<a class="btn btn-primary" href="#projects"><span>View projects</span>' + I.arrow + "</a>" +
      ext(D.links.linkedin, I.linkedin + "<span>LinkedIn</span>", "btn btn-glass") +
      ext(D.links.github, I.github + "<span>GitHub</span>", "btn btn-glass") +
      '<a class="btn btn-glass" href="' + esc(mailto) + '">' + I.mail + "<span>Email</span></a>" +
    "</div>";

  $("hero-portrait").innerHTML =
    '<div class="portrait">' +
      '<div class="portrait-ring" aria-hidden="true"></div>' +
      '<picture><source type="image/webp" srcset="' + esc(D.photo.webp) + " 320w, " + esc(D.photo.webp2x) + ' 460w" sizes="(max-width: 720px) 180px, 300px">' +
      '<img src="' + esc(D.photo.jpg) + '" alt="' + esc(D.photo.alt) + '" width="320" height="320" fetchpriority="high"></picture>' +
    "</div>";

  // proof strip
  $("proof-body").innerHTML = D.stats.map(function (s) {
    return '<li class="proof-tile reveal"><span class="proof-icon">' + I[s.icon] + "</span>" +
      '<div><p class="proof-value">' + esc(s.value) + '</p><p class="proof-label">' + esc(s.label) + "</p>" +
      '<p class="proof-note">' + esc(s.note) + "</p></div></li>";
  }).join("");

  // about
  $("about-body").innerHTML =
    '<div class="about-text reveal">' + D.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
    '<aside class="facts card reveal" aria-label="Quick facts"><p class="facts-title">Quick facts</p><dl>' +
    D.facts.map(function (f) {
      return '<div class="fact"><span class="fact-icon">' + I[f.icon] + "</span><div><dt>" + esc(f.label) + "</dt><dd>" + esc(f.value) + "</dd></div></div>";
    }).join("") + "</dl></aside>";

  // experience
  $("experience-body").innerHTML = D.experience.map(function (x) {
    var h = x.highlight;
    return '<li class="tl-item reveal"><span class="tl-dot" aria-hidden="true"></span>' +
      '<article class="card exp-card">' +
        '<header class="exp-head"><div class="exp-logo" aria-hidden="true">' + I.database + "</div><div>" +
          "<h3>" + esc(x.role) + "</h3>" +
          '<p class="exp-company">' + esc(x.company) + " · " + esc(x.location) + "</p></div>" +
          '<div class="exp-meta"><span class="badge badge-accent">' + esc(x.start) + " – " + esc(x.end) + "</span>" +
          '<span class="badge">' + esc(x.mode) + "</span></div>" +
        "</header>" +
        '<ul class="exp-points">' + x.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
        (h ? '<div class="exp-highlight">' +
          '<div class="exp-hl-head"><span class="badge badge-gold">' + esc(h.label) + "</span>" +
          "<h4>" + esc(h.title) + '</h4><span class="exp-hl-period">' + esc(h.period) + "</span></div>" +
          "<p>" + esc(h.text) + "</p>" +
          '<ol class="flow" aria-label="Migration flow">' + h.flow.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ol>" +
        "</div>" : "") +
      "</article></li>";
  }).join("");

  // projects
  function frame(p) {
    var host = p.url.replace(/^https?:\/\//, "");
    return '<div class="browser"><div class="browser-bar" aria-hidden="true"><span></span><span></span><span></span>' +
      '<p class="browser-url">' + esc(host) + "</p></div>" +
      '<img src="' + esc(p.image.src) + '" alt="' + esc(p.image.alt) + '" width="' + p.image.width + '" height="' + p.image.height + '" loading="lazy" decoding="async">' +
      "</div>";
  }
  function actions(p) {
    var label = p.demoLabel || "Live demo";
    return '<div class="card-actions">' +
      (p.demo ? ext(p.demo, "<span>" + esc(label) + "</span>" + I.external, "btn btn-small btn-primary", label + ": " + p.name) : "") +
      ext(p.url, I.github + "<span>View code</span>", "btn btn-small btn-outline", "View " + p.name + " code on GitHub") +
      "</div>";
  }
  var ci = '<span class="ci">' + I.check + "CI passing</span>";
  var feat = D.projects.filter(function (p) { return p.featured; })[0];
  var rest = D.projects.filter(function (p) { return !p.featured; });

  $("projects-body").innerHTML =
    '<div class="proj-group"><h3 class="group-title reveal"><span class="group-icon">' + I.pipeline + "</span>Data engineering</h3>" +
    '<article class="card project-featured reveal">' +
      '<div class="pf-media">' + frame(feat) + "</div>" +
      '<div class="pf-body">' +
        '<p class="pf-kicker"><span class="badge badge-gold">Featured</span>' + esc(feat.kicker) + "</p>" +
        "<h3>" + esc(feat.name) + "</h3>" +
        '<p class="pf-desc">' + esc(feat.description) + "</p>" +
        '<ol class="stages" aria-label="Medallion layers">' + feat.stages.map(function (s) {
          return '<li class="stage-chip stage-' + s.name.toLowerCase() + '"><span class="stage-name">' + esc(s.name) + '</span><span class="stage-note">' + esc(s.note) + "</span></li>";
        }).join("") + "</ol>" +
        '<ul class="pf-points">' + feat.points.map(function (t) { return "<li>" + I.check + "<span>" + esc(t) + "</span></li>"; }).join("") + "</ul>" +
        chips(feat.tags) +
        '<div class="card-foot">' + actions(feat) + ci + "</div>" +
      "</div>" +
    "</article></div>" +
    '<div class="proj-group"><h3 class="group-title reveal"><span class="group-icon">' + I.code + "</span>Full-stack &amp; automation</h3>" +
    '<div class="proj-grid">' + rest.map(function (p) {
      return '<article class="card project reveal">' + frame(p) +
        '<div class="project-body"><div class="project-meta"><p class="project-kicker">' + esc(p.kicker) + "</p>" + ci + "</div>" +
        "<h4>" + esc(p.name) + "</h4><p>" + esc(p.description) + "</p>" + chips(p.tags) +
        '<div class="card-foot">' + actions(p) + "</div></div></article>";
    }).join("") +
    '<article class="card project-more reveal"><span class="more-icon">' + I.github + "</span>" +
      "<h4>More on GitHub</h4><p>Source code, READMEs and CI runs for every project.</p>" +
      ext(D.links.github, "<span>github.com/Raja9964</span>" + I.external, "link-code") +
    "</article></div></div>";

  // publications
  $("publications-body").innerHTML = D.publications.map(function (p) {
    return '<article class="card pub reveal">' +
      '<div class="pub-top"><span class="ieee" aria-label="IEEE">IEEE</span><span class="pub-abbr">' + esc(p.abbr) + "</span>" +
      '<span class="pub-role">Co-author</span></div>' +
      "<h3>" + esc(p.title) + "</h3>" +
      '<p class="pub-venue">' + esc(p.conference) + "</p>" +
      '<p class="pub-meta">' + I.calendar + "<span>" + esc(p.date) + "</span>" + I.pin + "<span>" + esc(p.city) + "</span></p>" +
      '<p class="pub-summary">' + esc(p.summary) + "</p>" +
      (p.results ? '<div class="results"><p class="results-title">Key results · accuracy</p><ul>' + p.results.map(function (r) {
        return '<li><strong>' + esc(r.value) + "</strong><span>" + esc(r.label) + "</span><em>" + esc(r.model) + "</em></li>";
      }).join("") + "</ul></div>" : "") +
      '<div class="pub-links">' +
        ext(p.xplore, "<span>Read on IEEE Xplore</span>" + I.external, "btn btn-small btn-primary") +
        ext("https://doi.org/" + p.doi, '<span class="mono">DOI ' + esc(p.doi) + "</span>", "doi", "DOI " + p.doi) +
      "</div></article>";
  }).join("");

  // certifications
  $("certifications-body").innerHTML = D.certifications.map(function (c) {
    return '<article class="card cert cert-' + esc(c.tone) + ' reveal">' +
      '<div class="cert-head"><span class="cert-mark" aria-hidden="true">' + esc(c.mark) + "</span>" +
      '<div><p class="cert-issuer">' + esc(c.issuer) + "</p><h3>" + esc(c.name) + "</h3>" +
      (c.code ? '<span class="badge cert-code">' + esc(c.code) + "</span>" : "") + "</div></div>" +
      '<dl class="cert-meta"><div><dt>Issued</dt><dd>' + esc(c.issued) + "</dd></div>" +
      "<div><dt>Valid until</dt><dd>" + esc(c.expires) + "</dd></div>" +
      '<div class="cert-id"><dt>Credential ID</dt><dd class="mono">' + esc(c.id) + "</dd></div></dl>" +
      '<div class="card-foot">' + ext(D.links.certifications, I.linkedin + "<span>View on LinkedIn</span>" + I.external, "link-code", "Verify " + c.name + " on LinkedIn") + "</div></article>";
  }).join("");

  // achievements & education
  var a = D.achievement, e = D.education;
  $("education-body").innerHTML =
    '<article class="card bg-card reveal"><span class="bg-icon bg-trophy">' + I.trophy + "</span>" +
      '<p class="bg-label">Achievement</p><h3>' + esc(a.title) + "</h3><p>" + esc(a.detail) + "</p>" +
      '<p class="bg-meta">' + I.calendar + "<span>" + esc(a.date) + "</span></p></article>" +
    '<article class="card bg-card reveal"><span class="bg-icon bg-cap">' + I.cap + "</span>" +
      '<p class="bg-label">Education</p><h3>' + esc(e.degree) + "</h3><p>" + esc(e.school) + ", " + esc(e.location) + "</p>" +
      '<p class="bg-meta">' + I.calendar + "<span>" + esc(e.period) + "</span></p>" +
      '<p class="gpa"><strong>' + esc(e.grade) + "</strong><span>" + esc(e.gradeOf) + "</span></p></article>";

  // skills
  $("skills-body").innerHTML = D.skills.map(function (g) {
    var body = g.sets ? g.sets.map(function (s) {
      return '<p class="skill-sub">' + esc(s.label) + "</p>" + chips(s.items);
    }).join("") : chips(g.items);
    return '<div class="card skill-card reveal"><h3><span class="skill-icon">' + I[g.icon] + "</span>" + esc(g.group) + "</h3>" + body + "</div>";
  }).join("");

  // contact + footer
  $("contact-body").innerHTML =
    '<div class="contact-copy"><p class="kicker kicker-light">Contact</p><h2 id="contact-title">' + esc(D.contact.heading) + "</h2>" +
    "<p>" + esc(D.contact.text) + "</p>" +
    '<p class="contact-mail"><a class="mono" href="' + esc(mailto) + '">' + esc(D.links.email) + "</a>" +
    '<button class="copy-btn" type="button" id="copy-email" aria-label="Copy email address">' + I.copy + "<span>Copy</span></button></p></div>" +
    '<div class="contact-actions">' +
      '<a class="btn btn-primary btn-lg" href="' + esc(mailto) + '">' + I.mail + "<span>Email me</span></a>" +
      ext(D.links.linkedin, I.linkedin + "<span>LinkedIn</span>", "btn btn-glass btn-lg") +
      ext(D.links.github, I.github + "<span>GitHub</span>", "btn btn-glass btn-lg") +
    "</div>";

  $("footer-body").innerHTML =
    "<p>&copy; " + new Date().getFullYear() + " " + esc(D.name) + " · " + esc(D.location) + "</p>" +
    '<div class="footer-links">' +
      ext(D.links.linkedin, I.linkedin, "icon-link", "LinkedIn") +
      ext(D.links.github, I.github, "icon-link", "GitHub") +
      '<a class="icon-link" href="' + esc(mailto) + '" aria-label="Email">' + I.mail + "</a>" +
      '<a href="#top" class="footer-top">Back to top</a>' +
    "</div>";

  // copy email
  var copyBtn = $("copy-email");
  copyBtn.addEventListener("click", function () {
    var done = function () {
      copyBtn.querySelector("span").textContent = "Copied";
      setTimeout(function () { copyBtn.querySelector("span").textContent = "Copy"; }, 1800);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(D.links.email).then(done, function () {});
  });

  // theme toggle
  var root = document.documentElement;
  var toggle = $("theme-toggle");
  function syncToggle() {
    var dark = root.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  syncToggle();
  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncToggle();
  });

  // mobile menu
  var header = $("site-header");
  var navToggle = $("nav-toggle");
  var navLinks = $("nav-links");
  function setMenu(open) {
    header.classList.toggle("menu-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  navToggle.addEventListener("click", function () { setMenu(!header.classList.contains("menu-open")); });
  navLinks.addEventListener("click", function (ev) { if (ev.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") setMenu(false); });

  // header style over the dark hero
  var hero = $("top");
  function onScroll() {
    header.classList.toggle("on-hero", hero.getBoundingClientRect().bottom > 72);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // active section in the nav
  var links = Array.prototype.slice.call(navLinks.querySelectorAll("a"));
  var sections = links.map(function (l) { return document.querySelector(l.getAttribute("href")); });
  function markActive() {
    var y = window.scrollY + window.innerHeight * 0.35;
    var current = null;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections.length - 1;
    links.forEach(function (l, i) {
      var on = i === current;
      l.classList.toggle("active", on);
      if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", markActive, { passive: true });
  window.addEventListener("resize", markActive);
  markActive();

  // reduced motion: freeze the pipeline mid-flow
  var flow = $("hero-flow");
  var mq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  function applyMotion() {
    if (!flow || !flow.pauseAnimations) return;
    if (mq && mq.matches) { flow.setCurrentTime(2.6); flow.pauseAnimations(); } else { flow.unpauseAnimations(); }
  }
  applyMotion();
  if (mq && mq.addEventListener) mq.addEventListener("change", applyMotion);

  // fade sections in as they scroll into view
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !(mq && mq.matches)) {
    root.classList.add("reveal-on");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }
})();

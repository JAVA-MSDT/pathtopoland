/* =====================================================
   Polish B1 Exam Prep — Main JS
   - Theme toggle (light / dark)
   - Mobile nav toggle
   - Active nav state
   - Reveal answer buttons
   ===================================================== */

(function () {
  'use strict';

  /* ── THEME ── */
  const THEME_KEY = 'polish-b1-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  function initTheme() {
    let saved;
    try { saved = localStorage.getItem(THEME_KEY); } catch (_) {}
    if (!saved) {
      saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme(saved);
  }


  /* ── MOBILE NAV ── */
  function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const mobileMenu = document.getElementById('nav-mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ── ACTIVE NAV ── */
  // Grammar sub-pages (grammar-instrumental, genitive, etc.) highlight the Grammar link
  const GRAMMAR_PAGES = ['grammar-instrumental', 'grammar-genitive', 'grammar-aspects',
                          'grammar-dative', 'grammar-locative', 'grammar-motion'];

  function setActiveNav() {
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    const base = filename.replace(/\.html$/, '');
    const isGrammarSub = GRAMMAR_PAGES.includes(base);

    document.querySelectorAll('.nav-link, .nav-mobile-menu a').forEach(link => {
      const href = (link.getAttribute('href') || '').split('/').pop();
      const matches =
        href === filename ||
        (filename === 'index.html' && href === '') ||
        (isGrammarSub && href === 'grammar-overview.html');
      if (matches) link.classList.add('active');
    });
  }

  /* ── GRAMMAR DROPDOWN ── */
  function initGrammarDropdown() {
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-grammar-group')) {
        document.querySelectorAll('.nav-grammar-dropdown').forEach(d => d.classList.remove('open'));
      }
    });
  }

  /* Exposed globally so onclick= in HTML can reach it */
  window.toggleGrammarMenu = function(e) {
    e.stopPropagation();
    const group = e.currentTarget.closest('.nav-grammar-group');
    const dd = group?.querySelector('.nav-grammar-dropdown');
    if (!dd) return;

    if (!dd.classList.contains('open')) {
      // Position below the grammar group, escaping overflow context
      const rect = group.getBoundingClientRect();
      dd.style.top  = (rect.bottom + 4) + 'px';
      dd.style.left = rect.left + 'px';
    }
    dd.classList.toggle('open');
  };

  /* ── SCROLL-TO-TOP ── */
  function initScrollTop() {
    const btn = document.getElementById('scroll-top-btn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 320);
    }, { passive: true });
  }

  /* ── REVEAL ANSWERS ── */
  function initAnswerReveal() {
    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const reveal = btn.nextElementSibling;
        if (!reveal) return;
        const isVisible = reveal.classList.toggle('visible');
        btn.textContent = isVisible ? '🙈 Hide Answer' : '👁 Show Answer';
      });
    });
  }

  /* ── SMOOTH SCROLL for anchor links ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = document.querySelector('.navbar')?.offsetHeight || 70;
          const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    setActiveNav();
    initGrammarDropdown();
    initScrollTop();
    initAnswerReveal();
    initSmoothScroll();

    const themeBtn = document.getElementById('btn-theme');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  });
})();

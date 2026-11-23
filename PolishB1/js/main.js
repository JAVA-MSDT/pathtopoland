/* =====================================================
   Polish B1 Exam Prep — Main JS
   - Theme toggle (light / dark)
   - Mobile nav toggle + collapsible sections
   - Unified nav dropdown menus
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

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ── MOBILE COLLAPSIBLE SECTIONS ── */
  window.toggleMobileSection = function(btn) {
    const items = btn.nextElementSibling;
    if (!items || !items.classList.contains('mobile-section-items')) return;
    const isOpen = items.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
  };

  function initMobileCollapsibles() {
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mobile-section-items').forEach(section => {
      const hasActive = Array.from(section.querySelectorAll('a')).some(a =>
        (a.getAttribute('href') || '').split('/').pop() === filename
      );
      if (hasActive) {
        section.classList.add('open');
        const btn = section.previousElementSibling;
        if (btn && btn.classList.contains('mobile-section-toggle')) btn.classList.add('open');
      }
    });
  }


  /* ── UNIFIED NAV DROPDOWN MENUS ── */
  function initNavMenus() {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-menu-group')) {
        document.querySelectorAll('.nav-menu-dropdown').forEach(d => d.classList.remove('open'));
      }
    });
  }

  window.toggleNavMenu = function(btn) {
    const group = btn.closest('.nav-menu-group');
    const dd = group?.querySelector('.nav-menu-dropdown');
    if (!dd) return;

    // Close sibling dropdowns
    document.querySelectorAll('.nav-menu-dropdown.open').forEach(d => {
      if (d !== dd) d.classList.remove('open');
    });

    if (!dd.classList.contains('open')) {
      const rect = group.getBoundingClientRect();
      dd.style.top  = (rect.bottom + 4) + 'px';
      dd.style.left = rect.left + 'px';
    }
    dd.classList.toggle('open');
  };


  /* ── ACTIVE NAV ── */
  function setActiveNav() {
    const filename = window.location.pathname.split('/').pop() || 'index.html';

    // Plain nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = (link.getAttribute('href') || '').split('/').pop();
      if (href === filename || (filename === 'index.html' && href === '')) {
        link.classList.add('active');
      }
    });

    // Dropdown groups — highlight button if any sub-link matches current page
    document.querySelectorAll('.nav-menu-group').forEach(group => {
      const btn = group.querySelector('.nav-menu-btn');
      const isActive = Array.from(group.querySelectorAll('.nav-menu-dropdown a')).some(a =>
        (a.getAttribute('href') || '').split('/').pop() === filename
      );
      if (isActive && btn) btn.classList.add('active');
    });

    // Mobile menu links
    document.querySelectorAll('.nav-mobile-menu a').forEach(link => {
      const href = (link.getAttribute('href') || '').split('/').pop();
      if (href === filename) link.classList.add('active');
    });
  }


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
    initMobileCollapsibles();
    initNavMenus();
    setActiveNav();
    initScrollTop();
    initAnswerReveal();
    initSmoothScroll();

    const themeBtn = document.getElementById('btn-theme');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  });
})();

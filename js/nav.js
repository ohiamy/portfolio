document.addEventListener('DOMContentLoaded', function () {
  // Scroll-triggered nav shadow
  const nav = document.querySelector('.site-nav');
  if (nav) {
       function updateNav() {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
    }
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
      hamburger.focus();
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) closeMobileNav();
      else openMobileNav();
    });
  }

  // Close on link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobileNav);
    });
  }

  // Escape key closes mobile nav
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });

  // Active nav link
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
});

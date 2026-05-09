(function () {
  const stored = localStorage.getItem('theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = stored || system;
  document.documentElement.setAttribute('data-theme', theme);

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    animateIcon(t);
  }

  function updateIcon(t) {
    const sun = document.getElementById('icon-sun');
    const moon = document.getElementById('icon-moon');
    if (!sun || !moon) return;
    if (t === 'dark') {
      sun.style.display = 'block';
      moon.style.display = 'none';
    } else {
      sun.style.display = 'none';
      moon.style.display = 'block';
    }
  }

  function animateIcon(t) {
    const wrapper = document.getElementById('theme-icon-spin');
    if (!wrapper) { updateIcon(t); return; }
    const target = t === 'dark' ? 180 : 0;
    wrapper.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)';
    wrapper.style.transform = 'rotate(' + target + 'deg)';
    setTimeout(function () { updateIcon(t); }, 150);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const current = document.documentElement.getAttribute('data-theme');
    const wrapper = document.getElementById('theme-icon-spin');
    if (wrapper) {
      wrapper.style.transition = 'none';
      wrapper.style.transform = 'rotate(' + (current === 'dark' ? 180 : 0) + 'deg)';
    }
    updateIcon(current);
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.addEventListener('click', function () {
      const t = document.documentElement.getAttribute('data-theme');
      setTheme(t === 'dark' ? 'light' : 'dark');
    });
  });
})();

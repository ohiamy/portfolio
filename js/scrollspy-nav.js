(function () {
  if (window.innerWidth < 768) return;

  var sections = Array.from(document.querySelectorAll('section[id]'));
  if (sections.length < 2) return;

  function toLabel(id) {
    return id.replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  var nav = document.createElement('nav');
  nav.className = 'scrollspy-nav';
  nav.setAttribute('aria-label', 'Page sections');

  var ul = document.createElement('ul');

  sections.forEach(function (section) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + section.id;
    a.textContent = toLabel(section.id);
    a.addEventListener('click', function (e) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    });
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  document.body.appendChild(nav);

  // Show sidebar only after the hero scrolls out of view
  var hero = document.querySelector('.cs-hero');
  if (hero) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle('scrollspy-nav--visible', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(hero);
  } else {
    nav.classList.add('scrollspy-nav--visible');
  }

  var currentActive = null;

  function setActive(id) {
    if (id === currentActive) return;
    currentActive = id;
    ul.querySelectorAll('a').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
    });
  }

  setActive(sections[0].id);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '-10% 0px -85% 0px',
    threshold: 0
  });

  sections.forEach(function (s) { observer.observe(s); });

  window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      setActive(sections[sections.length - 1].id);
    }
  }, { passive: true });
})();

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const dropdownParent = document.querySelector('.has-dropdown');

  if (toggle) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('mobile-open');
      const expanded = header.classList.contains('mobile-open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  if (dropdownParent) {
    const trigger = dropdownParent.querySelector('button');
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownParent.classList.toggle('open');
      trigger.setAttribute('aria-expanded', dropdownParent.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (!dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdownParent.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Placeholder App Store button: not live yet, so make this explicit on click.
  document.querySelectorAll('[data-store-link]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      alert("awpa isn't on the App Store yet. This button is a placeholder, swap in the real App Store link once it's published.");
    });
  });

  // simple scroll reveal for feature rows
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }
});

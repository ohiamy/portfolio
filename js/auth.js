// JS light gate for password-protected case studies.
// Content lives in the DOM; this overlay prevents casual access.
// Default password: portfolio2024 — replace hash below to change it.

var PAGE_AUTH = {
  hash: 'e191cdbf5bb9d55705f93723ddb61646823e72c051db47ead5dbf7446b1d0297',
  storageKey: 'analytics_authed'
};

async function sha256hex(str) {
  var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
    .map(function (b) { return b.toString(16).padStart(2, '0'); })
    .join('');
}

function initGate() {
  var overlay = document.getElementById('auth-overlay');
  if (!overlay) return;

  if (sessionStorage.getItem(PAGE_AUTH.storageKey) === 'true') {
    overlay.remove();
    return;
  }

  // Trap focus inside overlay
  overlay.focus();

  var form = document.getElementById('auth-form');
  var input = document.getElementById('auth-password');
  var error = document.getElementById('auth-error');

  if (!form || !input || !error) return;

  // Auto-focus the password field
  setTimeout(function () { input.focus(); }, 50);

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var pw = input.value;
    if (!pw) return;

    var hash = await sha256hex(pw);

    if (hash === PAGE_AUTH.hash) {
      sessionStorage.setItem(PAGE_AUTH.storageKey, 'true');
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s ease';
      setTimeout(function () { overlay.remove(); }, 300);
    } else {
      error.textContent = 'Incorrect password. Please try again.';
      input.value = '';
      input.classList.add('shake');
      input.addEventListener('animationend', function () {
        input.classList.remove('shake');
      }, { once: true });
      input.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', initGate);

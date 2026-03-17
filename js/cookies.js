/* =============================================
   Belle Martineé — Cookie Consent Logic
   ============================================= */

(function () {
  'use strict';

  var STORAGE_KEY = 'bm_cookie_consent';
  var banner = document.getElementById('cookie-banner');
  var btnAccept = document.getElementById('cookie-accept');
  var btnDecline = document.getElementById('cookie-decline');

  if (!banner) return;

  function showBanner() {
    // Small delay so the page loads first
    setTimeout(function () {
      banner.classList.add('visible');
    }, 900);
  }

  function hideBanner() {
    banner.classList.remove('visible');
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // localStorage unavailable — use sessionStorage as fallback
      try { sessionStorage.setItem(STORAGE_KEY, value); } catch (e2) { /* ignore */ }
    }
    hideBanner();
  }

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) {}
    try { return sessionStorage.getItem(STORAGE_KEY); } catch (e) {}
    return null;
  }

  // Only show if no prior decision
  if (getConsent() === null) {
    showBanner();
  }

  if (btnAccept) {
    btnAccept.addEventListener('click', function () {
      setConsent('accepted');
      // Activate analytics / tracking here when needed
    });
  }

  if (btnDecline) {
    btnDecline.addEventListener('click', function () {
      setConsent('declined');
    });
  }
})();

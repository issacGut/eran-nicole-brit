(function() {
  'use strict';

  const HEALTH_URL = 'https://erannik.onrender.com/health';
  const TARGET_URL = 'https://erannik.onrender.com/';
  const CHECK_INTERVAL = 4000;
  const MIN_REDIRECT_DELAY = 1500;

  let statusText = null;

  const statusMessages = [
    'בודקים שהאתר מוכן...',
    'עוד רגע עוברים לאישור ההגעה...',
    'תודה על הסבלנות...'
  ];

  let currentMessageIndex = 0;
  let pageLoadTime = Date.now();
  let isRedirecting = false;

  function getElements() {
    if (!statusText) {
      statusText = document.getElementById('statusText');
    }
  }

  function rotateStatusText() {
    if (isRedirecting) return;

    getElements();

    currentMessageIndex = (currentMessageIndex + 1) % statusMessages.length;
    if (statusText) {
      statusText.style.opacity = '0';
      setTimeout(() => {
        statusText.textContent = statusMessages[currentMessageIndex];
        statusText.style.opacity = '1';
      }, 300);
    }
  }

  function showRedirecting() {
    getElements();

    if (statusText) {
      statusText.textContent = 'האתר מוכן! מעביר לאישור ההגעה...';
      statusText.style.color = '#d4a574';
      statusText.style.fontWeight = '600';
    }
  }

  function checkHealth() {
    if (isRedirecting) return;

    fetch(HEALTH_URL, {
      method: 'GET',
      cache: 'no-store',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Health check failed');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.ok === true) {
          const elapsed = Date.now() - pageLoadTime;
          const remainingDelay = Math.max(0, MIN_REDIRECT_DELAY - elapsed);

          showRedirecting();

          setTimeout(() => {
            if (!isRedirecting) {
              isRedirecting = true;
              window.location.href = TARGET_URL;
            }
          }, remainingDelay);
        }
      })
      .catch(() => {
        // Silently fail - keep showing calm waiting text
      });
  }

  function init() {
    getElements();

    // Initial health check
    checkHealth();

    // Set up periodic health checks
    setInterval(checkHealth, CHECK_INTERVAL);

    // Rotate status text every 3 seconds
    setInterval(rotateStatusText, 3000);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

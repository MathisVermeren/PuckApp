if('serviceWorker' in navigator) navigator.serviceWorker.register('/PuckApp/dev-sw.js?dev-sw', { scope: '/PuckApp/', type: 'classic' })
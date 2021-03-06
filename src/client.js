(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function (reg) {
                if (reg.installing) {
                    console.info('Service worker installing');
                } else if (reg.waiting) {
                    console.info('Service worker installed');
                } else if (reg.active) {
                    console.info('Service worker active');
                }
            })
            .catch(function (error) {
                console.warn('Registration failed with ' + error);
            });
    }
})();

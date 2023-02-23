window.addEventListener('error', function (e) {
    if (e && e.status === 404) {
        window.location.href = '/html/page-redirect.html';
    }
});

console.log('page-redirect.js loaded');

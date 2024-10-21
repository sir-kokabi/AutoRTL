const html = document.documentElement;

new MutationObserver(() => {
    // Set dir to 'rtl' if translated-rtl class is present, otherwise set to 'ltr'
    html.setAttribute('dir', html.classList.contains('translated-rtl') ? 'rtl' : 'ltr');
}).observe(html, { attributeFilter: ['class'] });

// Initial check to set the dir attribute accordingly
html.setAttribute('dir', html.classList.contains('translated-rtl') ? 'rtl' : 'ltr');
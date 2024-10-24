const html = document.documentElement;
let previousDir = html.getAttribute('dir'); // Store the initial value of the 'dir' attribute

new MutationObserver(() => {
    if (html.classList.contains('translated-rtl')) {
        // If the 'translated-rtl' class is added, change 'dir' to 'rtl'
        html.setAttribute('dir', 'rtl');
    } else {
        // If the 'translated-rtl' class is removed, restore the previous 'dir' value
        if (previousDir === null) {
            html.removeAttribute('dir');
        } else {
            html.setAttribute('dir', previousDir);
        }
        
        // Check if 'translated-rtl' was the only class, and remove the 'class' attribute if so
        if (html.classList.length === 0) {
            html.removeAttribute('class');
        }
    }
}).observe(html, { attributeFilter: ['class'] });

// Initial check to set the dir attribute accordingly
if (html.classList.contains('translated-rtl')) {
    html.setAttribute('dir', 'rtl');
}
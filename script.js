document.addEventListener('scroll', function() {
    let offset = window.scrollY;
    document.querySelectorAll('header, section, footer').forEach(el => {
        let speed = el.getAttribute('data-speed');
        el.style.transform = 'translateY(' + (-offset * speed) + 'px)';
    });
});

// Lazy load images (if you have many)
document.querySelectorAll('img[data-src]').forEach(img => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => img.removeAttribute('data-src');
});

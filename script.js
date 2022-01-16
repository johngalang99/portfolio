const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    rootMargin: '200px 0px 0px 0px',
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});

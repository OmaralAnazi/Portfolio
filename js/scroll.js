let currentViewIndex = 0;
let isWheeling = false;
const views = getAllViews();
const sectionCount = views.length;

document.getElementById(views[currentViewIndex]).scrollIntoView({ behavior: 'smooth' });

window.addEventListener('wheel', function(event) {
    if (isPC()) {
        event.preventDefault();
        if (!isWheeling) {
            isWheeling = true;
            const direction = Math.sign(event.deltaY); // Math.sign(event.deltaY) returns 1 for scrolling down (positive deltaY) and -1 for scrolling up (negative deltaY).
            currentViewIndex = clamp(currentViewIndex + direction, 0, sectionCount - 1);
            document.getElementById(views[currentViewIndex]).scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => isWheeling = false, 500);
        }
    }
}, { passive: false });

function getAllViews() {
    const sections = document.querySelectorAll('section');
    const views = Array.from(sections).map(section => section.id);
    return views;
}

function isPC() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isDesktop = window.innerWidth >= 1400;
    return !isMobile && isDesktop;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
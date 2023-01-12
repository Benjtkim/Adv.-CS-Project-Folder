//I got all of this from https://www.youtube.com/watch?v=Iksq8oaebMw. This is all his work.

const wrapper = document.querySelector('.wrapper');
const neck = document.querySelector('.neck');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            injectNeck(entry);
        }
    });
}, {});

function injectNeck(entry) {
    observer.unobserve(entry.target);
    const clonedNeck = neck.cloneNode(true);
    wrapper.appendChild(clonedNeck);
    observer.observe(clonedNeck);
}

observer.observe(neck);
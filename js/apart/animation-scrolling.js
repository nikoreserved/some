/*
    Animation on scroll
    v.10
*/

'use strict'
export function animationScroll() {

const items = document.querySelectorAll('[data-item]');
    const options = {
        threshold: 0.2
    }
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('activeScroll');
            }
        });
    }

    const observer = new IntersectionObserver(callback, options);
    items.forEach(item =>{
        observer.observe(item);
    });   
}
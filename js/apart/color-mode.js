/*
    color sheme (default-light)
    v1.0
*/
'use strict'



export function colorMode() {

    function addColor() {
        document.body.classList.toggle('_color-mode');
    }

    function setRemoveColor() {
        if(getColor()) {
            localStorage.removeItem('color--mode')
        } else {
            localStorage.setItem('color--mode', 'val')
        }
    };

    function getColor() {
        return localStorage.getItem('color--mode'); 
    };

        if (getColor()) {
            addColor();
        };

    document.querySelector('.color__mode').addEventListener('click', () => {
        setRemoveColor();
        addColor();
    });

};
/*
    multilanguage page
    v1.0 EN / UA
    EN-default
*/
'use strict'



export let langs = document.querySelector('.lang'),
linkLang = document.querySelectorAll('a'),
translMain = document.querySelector('.translatemain'),
translAboutTitle = document.querySelector('.translateabouttitle'),
translAboutText = document.querySelector('.translateabouttext'),
translProd = document.querySelector('.translateproducts');

const defaultLang = document.querySelector('.defaul-lang');
defaultLang.addEventListener('click', () => {
    document.location.reload();
})


linkLang.forEach(el=>{
el.addEventListener('click', ()=>{
     langs.querySelector('.activeLang').classList.remove('activeLang');
     el.classList.add('activeLang');

     let attrLang = el.getAttribute('language');

     translMain.textContent = data[attrLang].translatemain;
     translAboutTitle.textContent = data[attrLang].translateabouttitle;
     translAboutText.textContent = data[attrLang].translateabouttext;
     translProd.textContent = data[attrLang].translateproducts;
})
})

let data = {
ua: {
    translatemain: "Я шукаю посаду Intern/Junior JavaScript Developer. Я вивчаю JavaScript більше року і готовий до викликів!",
    translateabouttitle: "Привіт! Мене звати Микола Папченко",
    translateabouttext: "Я програміст-початківець. Я пишу на JavaScript і HTML/CSS. Я також маю навички роботи з scss/sass, npm, Docker. На даний момент я шукаю роботу в frontend. Ви можете переглянути мої проекти на GitHub, а також можете переглянути мій профіль на ресурсі LinkedIn. У сфері програмування важливо співпрацювати зі спільнотою розробників, допомагати іншим, і я вважаю, що це дає можливість розвивати свої навички програмування. Я активний учасник спільноти StackOverflow, відповідаю та ставлю запитання щодо програмування. У цьому блозі я ділюся своїми думками в основному про розробку програмного забезпечення.",
    translateproducts: "Мої програми"
}
}
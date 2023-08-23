new Swiper('.swiper-container',{
    pagination:{
        el: '.swiper-pagination',
    },
    loop:false,
    
})
let menu=document.querySelector('.menu-btn');
let menu_menu=document.querySelector('.menu-menu');

let menu_2=document.querySelector('.menu-menu-2');
let bt=document.querySelector('.bt')
menu.addEventListener('click',()=>{
   menu_menu.classList.toggle('menu-menu-d');
})
bt.addEventListener('click',()=>{
    menu_2.classList.toggle('menu-menu-2-d')
})
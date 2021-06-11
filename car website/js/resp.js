burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})
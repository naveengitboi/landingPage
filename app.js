const productList = document.querySelector('.productList')
const liInfo = document.querySelector('.liInfo')

productList.addEventListener('click', (e) => {
    liInfo.classList.toggle('liInfoActive')
})


// hamburger Menu

const openBtn = document.querySelector('.openBtn')
const navLinks = document.querySelector('.navLinkers')
count = 0
openBtn.addEventListener('click', () => {

    navLinks.classList.toggle('menuActive')

})
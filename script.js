const bigimg = document.querySelector('.big-img');
const images = document.querySelectorAll('.small-img img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        const lastimg = document.querySelectorAll('.selected')
        if (lastimg) {
            lastimg[0].classList.remove('selected');
        }
        image.classList.add('selected');
        const selectedimg = document.querySelector('.selected');
        switch (selectedimg.getAttribute('src')) {
            case "./images/image-product-1-thumbnail.jpg":
                bigimg.src = "./images/image-product-1.jpg";
                break;
            case "./images/image-product-2-thumbnail.jpg":
                bigimg.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                bigimg.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                bigimg.src = "./images/image-product-4.jpg";
                break;
        }
    })
});

let current = 0;
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const amount = document.querySelector('.amount')

plus.addEventListener('click', () => {
    current++;
    amount.innerText = current;
})
minus.addEventListener('click', () => {
    if (current > 0) {
        current--;
    }
    amount.innerText = current;
})

const cartbtn = document.querySelector('.cart-btn');
const indicator = document.querySelector('.indicator');
const cartwrap = document.querySelector('.cart-wrap');
const cartcontent = document.querySelector('.cart-content');
const addbtn = document.querySelector('.add-btn');

indicator.style.display = "none";

cartbtn.addEventListener('click', () => {
    cartwrap.classList.toggle('invisible');
})
addbtn.addEventListener('click', () => {
    if (current > 0) {
        const total = 125 * current;
        cartcontent.classList.remove('empty');
        cartcontent.innerHTML = `<div class="product">
                                  <div class="flex product-title">
                                    <img src="./images/image-product-1-thumbnail.jpg" alt="" class="product-img">
                                    <div class="product-info">
                                      <p>Fall Limited Edition Sneakers</p>
                                      <p><span>$125.00 * </span><span class="number">${current} </span><b>= $${total}.00</b></p>
                                    </div>
                                    <button class="delete" onclick="deleteitem()"><img src="./images/icon-delete.svg" alt=""></button>
                                  </div>
                                    <button class="checkbox">checkout</button>
                                </div>`;
        indicator.style.display = "block";
        indicator.innerText = current;
    }
})
function deleteitem() {
    cartcontent.classList.add('empty');
    cartcontent.innerHTML = `<p>your cart is empty</p>`;
    indicator.style.display = "none";
    amount.innerText = '0'
}

const menubtn = document.querySelector('.menu-btn')
const closebtn = document.querySelector('.close-btn');
const navlinks = document.querySelector('.nav-links');

menubtn.addEventListener('click', () => {
    navlinks.classList.add('active');
})
closebtn.addEventListener('click', () => {
    navlinks.classList.remove('active');
})

const thumbmob = document.querySelector('.thumb-mob');
const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
let currentimg = 1;

next.addEventListener('click', () => {
    if (currentimg == 4) {
        currentimg = 1;
    }
    else {
        currentimg++;
    }
    thumbmob.src = `./images/image-product-${currentimg}.jpg`;
})
prev.addEventListener('click', () => {
    if (currentimg == 1) {
        currentimg = 4
    }
    else {
        currentimg--;
    }
    thumbmob.src = `./images/image-product-${currentimg}.jpg`;
})

let card = document.querySelector('.trend');
let blogPage = document.querySelector('.trends');
let mainPage = document.querySelector('.main');
let card2 = document.querySelector('#trends');
let aboutUs = document.querySelector('.about');
let contactUs = document.querySelector('.contact');
 
function home(){
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blogPage.style.display = "block"
aboutUs.style.display = "none"
document.querySelector('#blog').style.color = 'black';
document.querySelector('#home').style.color = 'rgb(2,173,173)';
document.querySelector('#shops').style.color = 'black';
document.querySelector('#about').style.color = 'black';
document.querySelector('#contact').style.color = 'black';
}

function shop(){
mainPage.style.display = "none";
blogPage.style.display = "none";
aboutUs.style.display = "none"
card.style.display = "block";
card2.style.display = "block";
document.querySelector('#blog').style.color = 'black';
document.querySelector('#home').style.color = 'black';
document.querySelector('#shops').style.color = 'rgb(2,173,173)';
document.querySelector('#about').style.color = 'black';
document.querySelector('#contact').style.color = 'black';

}

function blog(){
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blogPage.style.display = "block"
    aboutUs.style.display = "none"
    document.querySelector('#blog').style.color = 'rgb(2,173,173)';
    document.querySelector('#home').style.color = 'black';
    document.querySelector('#shops').style.color = 'black';
    document.querySelector('#about').style.color = 'black';
    document.querySelector('#contact').style.color = 'black';

}
function about(){
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blogPage.style.display = "none"
    aboutUs.style.display = "block"
    document.querySelector('#blog').style.color = 'black';
    document.querySelector('#home').style.color = 'black';
    document.querySelector('#shops').style.color = 'black';
    document.querySelector('#about').style.color = 'rgb(2,173,173)';
    document.querySelector('#contact').style.color = 'black';
}

function contact(){
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blogPage.style.display = "none";
    aboutUs.style.display = "none";
    contactUs.style.display = "block";
    document.querySelector('#blog').style.color = 'black';
    document.querySelector('#home').style.color = 'black';
    document.querySelector('#shops').style.color = 'black';
    document.querySelector('#about').style.color = 'black';
    document.querySelector('#contact').style.color = 'rgb(2,173,173)';

}

function showImage(img){
let newImage = document.querySelector('#newImg');
// console.log(img);
newImage.src = img.src
mainPage.style.display = "none";
card.style.display = "none";
card2.style.display = "none";
blogPage.style.display = "none";
aboutUs.style.display = "none";
contactUs.style.display = "none";
document.querySelector('.cart').style.display = "flex";
}

let cart = [];
function addToCart(item) {
    cart.push(item); 
    updateCartNotification(); 
    alert('Item Added To Cart Successfully');
    // location.reload();
}

function updateCartNotification() {
    let cartCountElement = document.getElementById('cartCount');
    cartCountElement.innerText = cart.length; 
}

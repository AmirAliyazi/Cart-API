

const hamburgerMenu = document.querySelector(".product-bar"),
      logo = document.querySelector(".header-logo"),
      cartIcon = document.querySelector(".header-cart"),
      searchIcon = document.querySelector(".header-search"),
      searchInput = document.querySelector(".search-input"),
      times = document.querySelector(".header-times"),
      slider = document.querySelectorAll(".slider img"),
      sliderContainer = document.querySelector(".slider-container"),
      content = document.querySelector(".content"),
      productMenu = document.querySelector(".product-bar-menu");



// HEADER JAVASCRIPT

hamburgerMenu.addEventListener("click",() => {
    hamburgerMenu.classList.toggle("open");
    productMenu.classList.toggle("expanded");

    if (hamburgerMenu.classList.contains("open")){
        logo.classList.add("hidden");
        cartIcon.classList.add("hidden");
        searchIcon.classList.add("hidden");
        sliderContainer.classList.add("hidden");
        content.classList.add("hidden");
    }else{
        logo.classList.remove("hidden");
        cartIcon.classList.remove("hidden");
        searchIcon.classList.remove("hidden");
        sliderContainer.classList.remove("hidden");
        content.classList.remove("hidden");
    }
})

searchIcon.addEventListener("click" , () => {
    logo.classList.add("hidden");
    cartIcon.classList.add("hidden");
    searchInput.classList.remove("hidden");
    times.classList.remove("hidden");
})

times.addEventListener("click" , () => {
    logo.classList.remove("hidden");
    cartIcon.classList.remove("hidden");
    searchInput.classList.add("hidden");
    times.classList.add("hidden");
})


//SLIDESHOW IMAGE

let slideIndex = 0;
showSlide()
function showSlide(){
    let i;
    for (i=0 ; i<slider.length ; i++){
        slider[i].style.display = "none"
    }
    slideIndex++;
    if (slideIndex > slider.length) {slideIndex = 1}
    slider[slideIndex-1].style.display="block";
    setTimeout(showSlide,3000);
}


const search1 = document.querySelector("#search"),
      productDom = document.querySelector(".products-content"),
      menuBtn = document.querySelectorAll(".btn-menu"),
      shapeBtn = document.querySelectorAll(".shape"),
      shapeColor = document.querySelectorAll(".shape-change"),
      macBgColor = document.querySelector(".mac-color"),
      iPadBgColor = document.querySelector(".ipad-color"),
      iPhoneBgColor = document.querySelector(".iphone-color"),
      watchBgColor = document.querySelector(".watch-color"),
      airPodsBgColor = document.querySelector(".airpods-color"),
      accessoriesBgColor = document.querySelector(".accesseries-color"),
      search2 = document.querySelector("#content-search");


let allProductsData = [];
const filters = {
    searchItem : ""
}




document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/items")
        .then(res => {
            allProductsData = res.data;
            renderProducts(allProductsData,filters)
        })
        .catch()
})

function renderProducts(myProducts,myFilters){
    const filterProducts = myProducts.filter(p => {
        return p.tittle.toLowerCase().includes(myFilters.searchItem.toLowerCase());
    })
    productDom.innerHTML = ""
    filterProducts.forEach(p => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<img src=${p.imageURL} alt="${p.class}">
                    <h3>${p.tittle}</h3>
                    <span>$ ${p.price}</span>
                    <button >Add to Cart</button>`;
        productDom.appendChild(productDiv)
    })
}

function rendersproducts(myProducts,myFilters){
    const filterProducts = myProducts.filter(p => {
        return p.class.toLowerCase().includes(myFilters.searchItem.toLowerCase())
    })
    productDom.innerHTML = ""
    filterProducts.forEach(p => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<img src=${p.imageURL} alt="${p.class}">
                    <h3>${p.tittle}</h3>
                    <span>$ ${p.price}</span>
                    <button >Add to Cart</button>`;
        productDom.appendChild(productDiv)
    })
}

search1.addEventListener("input" , searchItem);
search2.addEventListener("input" , searchItem);


function searchItem(e){
    filters.searchItem = e.target.value;
    renderProducts(allProductsData,filters)
}

menuBtn.forEach(btn => {
    btn.addEventListener("click" , (e) => {
        const filter = e.target.dataset.filter
        filters.searchItem = filter;
        rendersproducts(allProductsData,filters)
    })
})

shapeBtn.forEach(btn => {
    btn.addEventListener("click" , (e) => {
        const filter = e.target.dataset.filter
        filters.searchItem = filter;
        rendersproducts(allProductsData,filters)


    })
})

macBgColor.addEventListener("click" , () => {
    macBgColor.classList.add("clicked");
    iPadBgColor.classList.remove("clicked");
    iPhoneBgColor.classList.remove("clicked");
    watchBgColor.classList.remove("clicked");
    airPodsBgColor.classList.remove("clicked");
    accessoriesBgColor.classList.remove("clicked");
})

iPadBgColor.addEventListener("click" , () => {
    iPadBgColor.classList.add("clicked");
    macBgColor.classList.remove("clicked");
    iPhoneBgColor.classList.remove("clicked");
    watchBgColor.classList.remove("clicked");
    airPodsBgColor.classList.remove("clicked");
    accessoriesBgColor.classList.remove("clicked");
})

iPhoneBgColor.addEventListener("click" , () => {
    iPhoneBgColor.classList.add("clicked");
    iPadBgColor.classList.remove("clicked");
    macBgColor.classList.remove("clicked");
    watchBgColor.classList.remove("clicked");
    airPodsBgColor.classList.remove("clicked");
    accessoriesBgColor.classList.remove("clicked");
})

watchBgColor.addEventListener("click" , () => {
    watchBgColor.classList.add("clicked");
    iPadBgColor.classList.remove("clicked");
    iPhoneBgColor.classList.remove("clicked");
    macBgColor.classList.remove("clicked");
    airPodsBgColor.classList.remove("clicked");
    accessoriesBgColor.classList.remove("clicked");
})

airPodsBgColor.addEventListener("click" , () => {
    airPodsBgColor.classList.add("clicked");
    iPadBgColor.classList.remove("clicked");
    iPhoneBgColor.classList.remove("clicked");
    watchBgColor.classList.remove("clicked");
    macBgColor.classList.remove("clicked");
    accessoriesBgColor.classList.remove("clicked");
})

accessoriesBgColor.addEventListener("click" , () => {
    accessoriesBgColor.classList.add("clicked");
    iPadBgColor.classList.remove("clicked");
    iPhoneBgColor.classList.remove("clicked");
    watchBgColor.classList.remove("clicked");
    airPodsBgColor.classList.remove("clicked");
    macBgColor.classList.remove("clicked");
})




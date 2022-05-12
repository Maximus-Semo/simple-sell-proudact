const btnAll = document.querySelectorAll(".btn-primary");
const parent = document.querySelector(".parent")
const blackScreen = document.getElementById("blackScreen");
const allProducts = document.getElementById("allProducts")
btnAll.forEach(item => {
    item.addEventListener("click",(eo)=> {

{        item.setAttribute("disabled","")
        item.classList.remove("btn-primary");
        item.classList.add("btn-success","icon-check-circle-o")
        item.innerText = "Done";
}        
       const popUp = document.createElement("div");
        popUp.setAttribute("class","don-pop-up");
        popUp.innerText = "concatroantion";
        parent.append(popUp);

{        setTimeout(() => {
            popUp.style.transform = `translateX(100vw)`
        }, 1500);
}
{        setTimeout(() => {
            popUp.remove();
        }, 4500);
        shope();
}   
    const card = item.parentElement.parentElement.parentElement
    const imgSrc = card.getElementsByClassName("card-img-top")[0].getAttribute("src")
    const itemName = card.getElementsByClassName("card-title")[0].innerText
    const itemPrice = card.getElementsByClassName("price")[0].innerText

    const addedProduct = `
        <div class="item-container">
            <div class="img-title-parent">
                <img src="${imgSrc}" alt="">
                <p class="prodact-name">${itemName}</p>
            </div>

            <div style="display:flex; align-items:center; ">
                <input class="input-quantiy" type="number" id="input-quantity" min="1" max="20" dir="ltr" value="1">
                <p style="margin-left: 20px; margin-top: 10px;">the range</p>
            </div>
            <div class="price">
                ${itemPrice}
            </div>
            <div class="btn btn-secondary delete">
                delete
            </div>
        </div>
    `
    allProducts.innerHTML += addedProduct;

    // const dlelteItem = allProducts.querySelector(".item-container").getElementsByClassName("delete")[0];
    updateTotalPrice();
})
});


const body = document.getElementById("body");
const shopItem = document.createElement("div");
const shope = (eo) => {
    body.append(shopItem);
    shopItem.classList.add("show-item");
    shopItem.innerHTML = "shoop";
}
const close = document.getElementById("close");

close.addEventListener("click",(eo) => {
    blackScreen.style.transform =  "translateX(-111vw)";

})

shopItem.addEventListener("click",()=> {
    blackScreen.style.transform = "translateX(0vw)";
})

const updateTotalPrice = ()=> {
    const allProductsInBlackScreen = document.querySelectorAll(".item-container");
    let total = 0;
    allProductsInBlackScreen.forEach(item => {
        const price = Number(item.getElementsByClassName("price")[0].innerText.replace("$",""));
        const quantity = Number(item.getElementsByClassName("input-quantiy")[0].value);
        
        total = total + (quantity * price);
        
    })
    totlaPrice.innerText =`Price $${total}`
}

blackScreen.addEventListener("click",(eo)=> {

    if (eo.target.classList.contains("btn-secondary")) {
        eo.target.parentElement.remove();
        const nameOfDeletedProudct = eo.target.parentElement.getElementsByClassName("img-title-parent")[0].innerText.trim();
        const allCardsInGallary = document.querySelectorAll(".card")

        allCardsInGallary.forEach(item => {
            const nameOfgar = item.getElementsByClassName("card-title")[0].innerText;
            if(nameOfDeletedProudct == nameOfgar){
                const btnSucce = item.getElementsByClassName("btn-success")[0];
                btnSucce.removeAttribute("disabled", "");
                btnSucce.classList.remove("btn-success", "icon-check-circle-o");
                btnSucce.classList.add("btn-primary");
                btnSucce.innerText = "buy"
            }

        });

    }
    

    
    updateTotalPrice();

})
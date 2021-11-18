


class Sneakears {
    constructor(){
        this.removeProductAmount = document.getElementById('remove-amount')
        this.addProductAmount = document.getElementById('add-amount')
        this.spanAmount = document.getElementById('span-amount')
        this.btnCart = document.getElementById("btn-cart")
        this.cartContainer = document.getElementById("cart-container")
        this.btnAddItemCart = document.getElementById("add-product-cart")
        this.mainImageArea = document.getElementById("main-image")
        this.mainImages = document.querySelectorAll(".main-image img")
        this.secondaryImages= document.querySelectorAll(".secondary-images div")
        this.maxImages = this.mainImages.length - 1
        this.indexImages = 0
        this.indexMaximum = 0
        this.lenMaximum = this.mainImages.length - 1
        this.productImages = document.getElementById("product-imagens")
        this.maximumScreen = document.getElementById("maximum-screen-products")
        this.closeMaximum = document.querySelector("#close-maximum svg")
        this.arrowLeft = document.getElementById("arrow-left")
        this.arrowRight = document.getElementById("arrow-right")
        this.maximumImages = document.querySelectorAll("#maximum-images img")
        this.maximumSecondary = document.querySelectorAll(".maximum-secondary div")
    }

    addOrRemoveAmount(){
        this.addProductAmount.addEventListener("click", () => {
            this.spanAmount.innerHTML = this.spanAmount.innerHTML == "0" ? 1 : +this.spanAmount.innerHTML + 1
        })

        this.removeProductAmount.addEventListener("click", () => {
            this.spanAmount.innerHTML = this.spanAmount.innerHTML == "0" ? "0" : +this.spanAmount.innerHTML - 1 
        })
    }

    openCart(){
        this.btnCart.addEventListener("click", () => {

            this.cartContainer.classList.toggle("active-cart")
        })
    }

    createItemCart(amount, value){
        const itemCart = `
    <h1>cart</h1>
    <div class="cart-final-item">
        <div class="cart-item">
            <img src="images/image-product-1-thumbnail.jpg" alt="">
            <div class="cart-title">
                <span class="cart-describe">Fall Limited Edition Sneakers</span>
                <span class="cart-describe">$${value} x ${amount} <b>$${value*amount}</b></span>
            </div>
            <div id="cart-delete"> 
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
    </div>
    <div id="btn-check">
        <p class="p-check">Checkout</p>
     </div>
        `


        return itemCart
    }
    
    deleteCart(){
        const deleteItemCart = document.getElementById("cart-delete")
        console.log(deleteItemCart)
        deleteItemCart.addEventListener("click", ()=>{
            this.cartContainer.innerHTML = `
                <h1>cart</h1>
                <p>Your cart is empty.</p>`
                this.spanAmount.innerHTML = '0' 
        })

    }
    addItemCart(){
        this.btnAddItemCart.addEventListener("click", () => {
            this.cartContainer.innerHTML = ""
            if(this.spanAmount.innerHTML == "0"){
                this.spanAmount.innerHTML = "1"
            }
            this.cartContainer.innerHTML = this.createItemCart(125.00, +this.spanAmount.innerHTML)
            this.deleteCart()
        })
        
    }

    nextImage(){
        this.secondaryImages[this.indexImages].classList.remove("thumb-select")
        this.mainImages[this.indexImages].classList.remove("select")
        if(this.indexImages >= this.maxImages){
            this.mainImages[this.indexImages].classList.remove("select")
            this.secondaryImages[this.indexImages].classList.remove("thumb-select")
            this.indexImages = 0

        }else{
            this.indexImages++
        }
        this.mainImages[this.indexImages].classList.add("select")
        this.secondaryImages[this.indexImages].classList.add("thumb-select")

    }


    carroselImages(){
        setInterval(() => {
            this.nextImage()
        },2000)
        
    }

    
    maximumScreenProducts(){
        this.productImages.addEventListener("click", () => {
            this.maximumScreen.classList.toggle("active-maximum")
        })

        this.closeMaximum.addEventListener("click", () => {
            this.maximumScreen.classList.toggle("active-maximum")
        })

        
    }

    arrowMaximum(){
        this.arrowRight.addEventListener("click", () => {
            console.log(this.indexMaximum)
            this.maximumImages[this.indexMaximum].classList.add("img-max-active")
            this.maximumSecondary[this.indexMaximum].classList.remove("secondary-active")
            this.indexMaximum++
            if(this.indexMaximum == 4){
                this.indexMaximum = 0

            }
            this.maximumSecondary[this.indexMaximum].classList.add("secondary-active")
            this.maximumImages[this.indexMaximum].classList.remove("img-max-active")
        })

        this.arrowLeft.addEventListener("click", () => {
            console.log(this.indexMaximum)
            this.maximumSecondary[this.indexMaximum].classList.remove("secondary-active")
            this.maximumImages[this.indexMaximum].classList.add("img-max-active")
            if (this.indexMaximum == 0){
                this.indexMaximum = 4
            }
            this.indexMaximum = this.indexMaximum - 1
            this.maximumSecondary[this.indexMaximum].classList.add("secondary-active")
            this.maximumImages[this.indexMaximum].classList.remove("img-max-active")
        })

    }




}





const teste = new Sneakears();

teste.addOrRemoveAmount()
teste.openCart()
teste.addItemCart()
teste.maximumScreenProducts()
teste.arrowMaximum()
console.log(teste.maximumSecondary)
window.addEventListener("load", teste.carroselImages())











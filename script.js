class Sneakears {
    constructor(){
        this.removeProductAmount = document.getElementById('remove-amount')
        this.addProductAmount = document.getElementById('add-amount')
        this.spanAmount = document.getElementById('span-amount')
        this.btnCart = document.getElementById("btn-cart")
        this.cartContainer = document.getElementById("cart-container")
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
    
}


const teste = new Sneakears();
teste.addOrRemoveAmount()
teste.openCart()
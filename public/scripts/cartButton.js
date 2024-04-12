document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".cart");
    const cart = document.querySelector(".filters");
    let products = document.querySelectorAll(".products__item");
    const cart_button = document.querySelector(".navigation-element > img")
    
    console.log(modal)
    console.log(cart_button)

    cart_button.addEventListener("click", () => {
        if (modal.style.display === 'none') {
            modal.style.display = 'flex'
        } else {
            modal.style.display = 'none'
        }
    })


    // загрузка из стораджа
    if (localStorage.getItem("products") !== null) {
        const cart_products = JSON.parse(localStorage.getItem("products"))
        console.log(cart_products)
        cart_products.list.forEach((product) => {
            modal.innerHTML += modalDiv(product.img, product.price)
        })
    }

    console.log(products)

    let cart_div = document.createElement("div")


    // const items = [] // global array of datas


    // for each item
    // const data
    // data.image = item.imageSrc
    //... data.price
    // button = document.querySelector(... ) // button inside item
    // button.addEventListener ("click", () => {
    //   items.add(data)
    // }

    products.forEach((product) => {
        let data = {}
        data["image"] = product.children.item(0).getAttribute("src")
        data["price"] = product.children.item(1).textContent.trim()
        let button = product.children.item(2)
        button.addEventListener("click", () => {
            modal.innerHTML += modalDiv(data.image, data.price)
            storagePush(data.image, data.price)
            console.log('item added to cart')
        })
    })

})

function modalDiv(imgSrc, price) {
    return `<div class="modal-item">
                        <img class="modal-image" src=${imgSrc} height="52" width="46">
                        <p class="modal-description">${price}</p>
                        </div>`
}

function storagePush(imgSrc, price) {
    var cart_products = JSON.parse(localStorage.getItem("products"))

    const last_id = cart_products.list.length

        cart_products.list.push({
            id: last_id,
            img: imgSrc,
            price: price
        });

    localStorage.setItem("products", JSON.stringify(cart_products));
}
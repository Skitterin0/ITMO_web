if (localStorage.getItem("products") === null) {
    var products =
        {
            list:
                []
        }

    localStorage.setItem("products", JSON.stringify(products))
    console.log("products cart was created")
}
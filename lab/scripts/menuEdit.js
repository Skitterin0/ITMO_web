(() => {
    window.addEventListener('load', () => {
        const loc = window.location.pathname.split('/').at(-1);

        let menuItems = document.querySelectorAll('.navigation-element > a');
        console.log(menuItems)

        menuItems.forEach(function (item) {
            if (item.getAttribute('href') === loc) {
                const parent = item.parentNode
                parent.classList.add('active')
            }
        })
    })
})()
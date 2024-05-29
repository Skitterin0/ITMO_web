function toast(data) {
    Toastify({
        text: data,
        duration: '3000',
        style: {
            background: '#0FF0FA',
        }
    }).showToast();
}

(() => {
    window.addEventListener('load', () => {
        const loc = window.location.pathname.split('/').at(-1);

        let menuItems = document.querySelectorAll('.navigation-element > a');

        menuItems.forEach(function (item) {
            if (item.getAttribute('href') === loc) {
                const name = item.textContent;
                const parent = item.parentNode;
                parent.classList.add('active')

                // При загрузке отправляет сообщение серверу, что пользователь на этой странице
                socket.on('pages', (data) => {
                    toast(data);
                })

                socket.emit('pages', name);

            }
        })
    })
})()
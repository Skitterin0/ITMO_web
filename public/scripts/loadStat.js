
const startTime = Date.now();

window.addEventListener("load", (() => {
    const loadTime = Date.now() - startTime
    let element = document.querySelector('footer div');
    element.textContent = `Время загрузки: ${loadTime} мс + ${serverProcessingTime} мс`;
    setTimeout(() => {
        element.style.color = '#1c1c2f';
        element.style.transition = 'color 1s ease'
    }, 5000)
}))
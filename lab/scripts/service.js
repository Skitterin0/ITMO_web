class Service extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
            <style>
                a {
                    text-decoration-line: none;
                }
                img {            
                    height: 250px;
                    width: 390px;
                    padding: 5px 0 5px;
                }
                p {
                    display: flex;
                    justify-content: center;
                    padding-bottom: 3px;
                    font-family: Nunito, serif;
                    font-weight: bold;
                    font-size: 20px;
                }
                div {
                    padding: 5px 13px 9px;                  
                    border-radius: 4px;
                    color: #f0f8f8;
                    font-family: Nunito, serif;
                    background-color: var(--black);
                    transition: background-color 0.3s ease;
                    text-decoration-line: none;
                }
                div:hover {
                    background-color: var(--pink);
                    transition: background-color 0.3s ease;
                }
            </style>
            <img class="image" src="${this.getAttribute('img')}">
            <p>
                ${this.getAttribute('name')}
            </p>
            <a href="${this.getAttribute('link')}">
                <div>
                    Подробнее
                </div>
            </a>`;
    }
}

customElements.define('service-info', Service);
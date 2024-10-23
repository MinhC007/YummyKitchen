import products from '/products.js';
import cart from './cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');
// load layout file
const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}

loadTemplate();
const initApp = () => {
     // load list product
     let listProductHTML = document.querySelector('.listProduct');
     listProductHTML.innerHTML = null;
     
     products.forEach(product => {
         let newProduct = document.createElement('div');
         newProduct.classList.add('item');
         newProduct.innerHTML = 
         `<div class="craft__image">
        <div class="craft__image__content">
        <a href="/detail.html?id=${product.id}">
                    <img src="${product.image}" alt="craft" />
                </a>
                <p>${product.name}</p>
                <h4>$${product.price}</h4>
            </div>
            <button class="addCart" data-id='${product.id}'>+</button>
      </div>`;
         listProductHTML.appendChild(newProduct);
    });
}

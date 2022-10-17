const productSectionSpec = document.querySelector('.product-section.product-spec')
const productSectionOpenButton = productSectionSpec.querySelector('.button-wrapper.sm-only button')


function productSpecOpen(){
    productSectionSpec.classList.add('is-open')
}


productSectionOpenButton.addEventListener('click', productSpecOpen)
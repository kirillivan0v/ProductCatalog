let productList = [];

function testing() {
    let n = 10;
    while(n){
        let product = new Product(
            faker.commerce.productName(),
            faker.commerce.price(),
            faker.commerce.productDescription(),
            faker.image.avatar()
        )
        productList.push(product);
        product.render('md');
        n--;
    }
}

window.addEventListener('load', testing)
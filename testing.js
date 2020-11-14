let bicycleList = [];
let bicycleTypes = ['Road', 'Mountain', 'Touring', 'Men\'s', 'Women\'s'];
let bicycleImages = ['src/bicycle/images/1.png', 'src/bicycle/images/2.png', 'src/bicycle/images/3.png', 'src/bicycle/images/4.png', 'src/bicycle/images/5.png', 'src/bicycle/images/6.png',]

function testing() {
    let n = 10;
    while(n){
        let bicycle = new Bicycle(
            faker.commerce.productName(),
            faker.commerce.price(),
            faker.random.arrayElement(bicycleTypes),
            faker.commerce.productDescription(),
            faker.random.arrayElement(bicycleImages)
        )
        bicycleList.push(bicycle);
        bicycle.render('md');
        n--;
    }

    console.log(bicycleList);
}

window.addEventListener('load', testing)
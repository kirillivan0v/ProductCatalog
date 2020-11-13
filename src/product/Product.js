class Product
{
    constructor(name, price, description, image)
    {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.container = 'product-block';
    }

    render(mode = 'md')
    {   
        let productBlock = document.querySelector(`.${this.container}`);

        if(!productBlock)
        {
            productBlock = document.createElement('div');
            productBlock.classList.add('product-block');
            document.body.appendChild(productBlock);
        }

        let div = document.createElement('div');
            div.classList.add(`product-${mode}`);


        let productImage = document.createElement('img');
            productImage.setAttribute('src', this.image);
            div.appendChild(productImage);

        
        let md = function()
        {
            let name = document.createElement('span');
                name.classList.add('name');
                name.innerText = this.name;

                let price = document.createElement('span');
                    price.innerText = this.price;
                    price.classList.add('price');
                    
                div.appendChild(name);
                div.appendChild(price);
        }

        let middleMode = md.bind(this);

        let lg = function()
        {
            let desc = document.createElement('p');
                desc.innerText = this.description;

            div.appendChild(desc);
        }
        let largeMode = lg.bind(this);
          

        if(mode == 'md')
        {
            middleMode();
        }else if(mode == 'lg'){
            middleMode();
            largeMode();
        }

        productBlock.appendChild(div);
    }

    getSchema(){
        return{
            name:{
                tag: "input",
                type: "text",
                placeholder: `Search in ${this.getName().toLowerCase()}s`
            },
            price: {
                tag: "input",
                type: "range"
            },
            image: {
                tag: "input",
                type: "checkbox"
            }
        }
    }

    getName(){
        return "Product";
    }
}


class Bicycle
{
    constructor(name, price, type, description, image)
    {
        this.name = name;
        this.price = price;
        this.type = type;
        this.description = description;
        this.image = image;
        this.container = 'bicycles-block';
    }

    render(mode = 'md')
    {   
        let bicyclesBlock = document.querySelector(`.${this.container}`);

        if(!bicyclesBlock)
        {
            bicyclesBlock = document.createElement('div');
            bicyclesBlock.classList.add(this.container);
            document.body.appendChild(bicyclesBlock);
        }

        let div = document.createElement('div');
            div.classList.add(`bicycle-${mode}`);


        let bicycleImage = document.createElement('img');
            bicycleImage.setAttribute('src', this.image);
            div.appendChild(bicycleImage);

        
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

        bicyclesBlock.appendChild(div);
    }

    getSchema(){
        return{
            name: {
                tag: "input",
                type: "text",
                placeholder: `Search in ${this.getName().toLowerCase()}s`
            },
            price: {
                tag: "input",
                type: "range"
            },
            bicycleType:{
                tag: "select",
                key: "type"
            },
            image: {
                tag: "input",
                type: "checkbox"
            },

        }
    }

    getName(){
        return "Bicycle";
    }
}


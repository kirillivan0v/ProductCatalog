class Search
{
    constructor(model = [], rootElement = document.body)
    {
       this.model = model,
       this.rootElement = rootElement 
    }

    render()
    {
        let object = this.model[0];
        let schema = object.getSchema();
        let searchBlock = document.createElement('div');
            searchBlock.classList.add(`search-for-${object.getName().toLowerCase()}`);


        for(let key in schema)
        {
            let elem;

            for(let subKey in schema[key])
            {

                if(subKey == "tag")
                {
                    elem = document.createElement(schema[key][subKey]);
                    elem.classList.add(`search-${key}`);

                    if(schema[key][subKey] == "select")
                    {
                        let arrayKey = schema[key].key;
                        console.log(arrayKey);

                        if(arrayKey)
                        {
                            let resultArray = [];
                            this.model.forEach(object => resultArray.push(object[arrayKey]));

                            let defaultWord = document.createElement('option');
                                defaultWord.innerHTML = `Select ${arrayKey}`;
                                defaultWord.selected = true; 
                                elem.appendChild(defaultWord);

                            resultArray
                                      .filter((item, index) => resultArray.indexOf(item) === index)
                                      .forEach(item => {
                                        let option = document.createElement('option');
                                            option.innerText = item;

                                        elem.appendChild(option);
                                      });
                        }
                    }
                }
                else if(subKey == "type")
                {
                    elem.type = schema[key][subKey];
                }
                else if(subKey == "placeholder")
                {
                    elem.placeholder = schema[key][subKey];
                }

                searchBlock.appendChild(elem);
            }

        }
        
        this.rootElement.appendChild(searchBlock);
    }
}
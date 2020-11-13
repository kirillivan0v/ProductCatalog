function capitalize(str){
    return str = str[0].toUpperCase() + str.substr(1);
}

let errors = [];

function pushError(){
    if(this.src)
        errors.push(`Can't load ${this.src}`);
    else    
        errors.push(`Can't load ${this.href}`);
}

function loadComponent(comp){
    let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `src/${comp}/${comp}.css`;
        link.addEventListener('error', pushError);
        document.head.appendChild(link);

    let script = document.createElement('script');
        script.src = `src/${comp}/${capitalize(comp)}.js`;
        script.addEventListener('error', pushError);
        document.body.appendChild(script);
}


loadComponent('product');
loadComponent('search');




function appBody(){
    if(errors.length >= 1){
        console.log('Components error', errors);
    }

    let search = new Search(productList);
    search.render();
}

window.addEventListener('load', appBody);
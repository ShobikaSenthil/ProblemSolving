const products = new Map();
const maxSize = 4;

const addElement = (elem) =>
{
    const hasElement = products.get(elem);
    if(hasElement) {
        products.delete(elem);
        products.set(elem,elem);
        console.log("@ss Set",new Map(products),elem);
        return;
    }
    if(products.size === maxSize)
    {
        products.delete(products.keys().next().value);
        products.set(elem,elem);
        console.log("@ss Size",new Map(products),elem);
        return;
    }
    products.set(elem,elem);
    console.log("@ss New",new Map(products),elem);
}

const getQueue =()=>{
    return products.values();
}

addElement("samsung");
addElement("apple");
addElement("google");
addElement("samsung");
addElement("apple");
console.log(getQueue());
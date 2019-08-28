function factoryShoeCat() {
const stock = [];

function addShoe(size, brand, color, qty, price, img){
    const shoeStock = {
        size,
        brand,
        color,
        qty,
        price, 
        img
    };
    stock.push(shoeStock)
    console.log(stock);
    
}

function getShoe(){
    return stock;
    console.log(getShoe);
    
}

return{
    addShoe,
    getShoe
}
}
  
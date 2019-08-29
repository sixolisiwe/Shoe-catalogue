function factoryShoeCat() {
const stock = [ 
 ];

function addShoe(size, brand, color, qty, price, img){
    const shoeStock = {
        size,
        brand,
        color,
        qty,
        price, 
        img,
        stockMessage: function() {
            if(qty >0)
            return `we have ${qty} shoe(s)`
            else return "Out of stock"
            }
            
        };
        
    
    stock.push(shoeStock)
    stock.forEach(element => {
   return element.stockMessage();
    
});
  // console.log(stock[0].stockMessage());
    };


function getShoe(){
    
        return stock; 
    }
   
    console.log(getShoe);
    

function filterOnSearch(filterParams) {
    const filterColor = filterParams.color;
    const filterQuant = filterParams.qty;
    const filterSize  = filterParams.size;
    const filterBrand = filterParams.brand;
    const filterPrice = filterParams.price
    const filterImage = filterParams.img;

    const filteredShoes = [];

    if ( filterColor !== "" && filterQuant !== "" && filterSize !== "" && filterBrand !== "" && filterPrice !== "" && filterImage !== ""){
        for(var i=0;i<stock.length;i++) {
            const currentShoe = stock[i];
            // check if the current shape has a color we are looking for
            if ( currentShoe.color === filterColor 
                    && currentShoe.qty === filterQuant && currentShoe.size === filterSize 
                    && currentShoe.brand === filterBrand && currentShoe.price === filterPrice
                    && currentShoe.img === filterImage ) {
                filteredShoes.push(currentShoe);
            }
        }
    } 
    

    return filteredShapes;;
}

return{
    addShoe,
    getShoe,
    filterOnSearch
}
}
  
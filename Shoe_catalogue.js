function factoryShoeCat(storedStock) {
    var stock = storedStock || []
    var error = ""

    function addShoe(size, brand, color, in_stock, price) {
        const shoeStock = {
            size,
            brand,
            color,
            in_stock,
            price,
            
            // stockMessage: function() {
            //     if(qty >0)
            //     return `we have ${qty} shoe(s)`
            //     else return "Out of stock"
            //     }

        };
if(size != " " && brand != " " && color != " " && in_stock != " " && price != " "){

        stock.push(shoeStock)
        return true;
        //     stock.forEach(element => {
        //    return element.stockMessage();

        // });
        // console.log(stock[0].stockMessage());
       
        
} else{
    error = "Invalid entry!"
}
console.log("stock",stock);
    };


    function getShoe() {

        return stock;
    }

    console.log(getShoe);

    function ErrorMsg() {
        return error;
    }

    function filterOnSearch(filterParams) {
        const filterColor = filterParams.color;
        const filterBrand = filterParams.brand;
         const filterSize = filterParams.size;

        console.log(filterParams, 'k');
        

        const filteredShoes = [];

        if (filterColor !== "" && filterBrand !== "" && filterSize) {
            console.log(filterParams, 'filter');
            console.log(stock.length);
            console.log(stock);
            
            
            for (var i = 0; i < stock.length; i++) {
                const currentShoe = stock[i];
                // check if the current shape has a color n brand we are looking for
                if (currentShoe.color === filterColor &&
                    currentShoe.brand === filterBrand && currentShoe.size === filterSize) {
                    filteredShoes.push(currentShoe);
                }
            }

            return filteredShoes;
            
        }

        else if (filterColor !== "") {
			for(var i=0;i<stock.length;i++) {
				const currentShoe = stock[i];
				// check if the current shoe has a color we are looking for
				if ( currentShoe.color === filterColor) {
					filteredShoes.push(currentShoe);
				}
            }
            return filteredShoes
        }
        
         else if (filterBrand !== "") {
			for(var i=0;i<stock.length;i++) {
				const currentShoe = stock[i];
				// check if the current shoe has the brand we are looking for
				if ( currentShoe.brand === filterBrand ) {
					filteredShoes.push(currentShoe);
				}
            }
            return filteredShoes;
		}

        else if (filterSize !== 0) {
			for(var i=0;i<stock.length;i++) {
				const currentShoe = stock[i];
				// check if the current shoe has the brand we are looking for
				if ( currentShoe.size === filterSize ) {
					filteredShoes.push(currentShoe);
				}
            }
            return filteredShoes;
		}

        
    }

    return {
        addShoe,
        getShoe,
        filterOnSearch,
        ErrorMsg
    }

}



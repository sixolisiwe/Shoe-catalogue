function factoryShoeCat(stock) {
    console.log(stock);

    var stock = [ {
        size: 3,
        color : 'blue',
        brand : "Nike",
        price : 350,
        in_stock : 5
    },
    {
        size : 4,
        color : 'black',
        brand : "Adidas",
        price : 275,
        in_stock : 3
    },
    
    {
        size : 5,
        color : 'red',
        brand : "Adidas",
        price : 275,
        in_stock : 3
    }
    ]
    
     
    var toAddtoCart = []
    var error = "";
    size = 0;
    brand = ""
    color = ""
    in_stock = 0
    price = 0
    var isValidReg = (/[!@#$%^&*(),.'?":+`?~{}|<>]/gi);


    function addShoe(size, brand, color, in_stock, price) {
        const shoeStock = {
            size,
            brand,
            color,
            in_stock,
            price,

        };

        if (isValidReg.test(stock) === false) {} else {
            error = "invalid entry!"
        }
        if (size != " " && brand != " " && color != " " && in_stock != " " && price != " ") {

            stock.push(shoeStock)
        } else {
            error = "Invalid entry!"
        }
        console.log("stock", stock);
    };


    function getShoe() {

        return stock;
    }

   // console.log(getShoe);


    function ErrorMsg() {
        return error;
    }

    function addtoCartSet(size, color, brand, price, in_stock) {
        var inCart = {
            size,
            color,
            brand,
            price,
            in_stock
        }
        toAddtoCart.push(inCart)

    }

    function getCart() {
        return toAddtoCart

    }
  //  console.log(toAddtoCart);

    function filteringOnShoes(filterInput) {
        var filteredShoe = []
        console.log(stock);
        for (var i = 0; i < stock.length; i++) {
            var filtered = stock[i];
           //  console.log(filtered);
             
            if (filtered.color === filterInput.color &&
                filtered.size === filterInput.size &&
                filtered.brand === filterInput.brand) {
                     filteredShoe.push(filterInput);
                }

            }
           
        console.log(filteredShoe)
              return filteredShoe
       
    }

  //  console.log(toAddtoCart);

    function selectedColor(ColorInputs, selectedOption) {
        let isColorSelected = false;

        var selectedInput = ColorInputs.filter(function (option) {
            if (option.color === selectedOption) {
                isColorSelected = true
            }
        })
        return isColorSelected
    }

    function selectedShoe() {
        let currentOption = {}
        var selectedShoe = storedStock.filter(function (option) {
            if (option.color === "red") {
                currentOption = option;
            }
        })

        return currentOption
    }

    function cartCounter() {
        return toAddtoCart.length
    }

    return {
        addShoe,
        getShoe,
        // filterOnSearch,
        ErrorMsg,
        selectedColor,
        getCart,
        cartCounter,
        addtoCartSet,
        filteringOnShoes
    }

}
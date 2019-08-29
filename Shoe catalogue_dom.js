
var mySizeTextBoxElem = document.querySelector(".form1-control");
var myColorTextBoxElem = document.querySelector(".form2-control");
var myBrandTextBoxElem = document.querySelector(".form3-control");
var myQuantTextBoxElem = document.querySelector(".form4-control");
var myPriceTextBoxElem = document.querySelector(".form5-control");
var myImageTextBoxElem = document.querySelector(".form6-control")
var addingBtnElem = document.querySelector(".addToStock");
var shoePrint = document.querySelector(".shoes")

var mySizeElem = document.querySelector(".dropdownSize");
var myBrandElem = document.querySelector(".dropdownBrand");
var myColorElem = document.querySelector(".dropdownSize");
var searchBtnElem = document.querySelector(".panel-footer");

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var shoesElem = document.querySelector(".shoesTemp");


let shoeCat = factoryShoeCat();

function addOnStock() {

    const currentSize = mySizeTextBoxElem.value;
    const currentBrand = myBrandTextBoxElem.value;
    const currentColor = myColorTextBoxElem.value;
    const currentQuant = myQuantTextBoxElem.value;
    const currentPrice = myPriceTextBoxElem.value;
    const currentImg = myImageTextBoxElem.value;

    var forShoe = shoeCat.getShoe(currentSize, currentBrand, currentQuant, currentPrice, currentImg);

    if (currentSize != "" && currentBrand != "" && currentColor != "" && currentQuant != "" && currentPrice != "" && currentImg != " ") {
        shoeCat.addShoe(currentSize, currentBrand, currentColor, currentQuant, currentPrice, currentImg)
    }

    var userData = userTemplate({
        forShoe, 
        

    });
   console.log(userData);
 
    shoesElem.innerHTML = userData;

}



function filter() {

    const currentSelectedColor = myColorElem.value;
    const currentSelectedBrand = myBrandElem.value;
    const currentSelectedSize = mySize.value;

    let filteredShoes = [];
    if (currentSelectedColor === "" && currentSelectedBrand === "" && currentSelectedSize) {
        filteredShoes = shoeCat.addShoe();
    } else {

        const params = {
            size: currentSelectedSize,
            color: currentSelectedColor,
            brand: currentSelectedBrand
        };
        filteredShoes = shoeCat.filterOnSearch(params);
    }
    shoes.innerHTML = ' ';

    for (var i = 0; i < filteredShoes.length; i++) {
        const currentShoe = filteredShapes[i];
        //create 

    }

}

addingBtnElem.addEventListener('click', addOnStock);
// searchBtnElem.addEventListener('click', filter)
var mySizeTextBoxElem = document.querySelector(".form1-control");
var myColorTextBoxElem = document.querySelector(".form2-control");
var myBrandTextBoxElem = document.querySelector(".form3-control");
var myQuantTextBoxElem = document.querySelector(".form4-control");
var myPriceTextBoxElem = document.querySelector(".form5-control");
var addingBtnElem = document.querySelector(".addToStock");
var shoePrint = document.querySelector(".shoes");
var searchBtnElem = document.querySelector(".toFilter");
// var filtered = document.querySelector(".filteredCart");
var addtoCart = document.querySelector(".counter");
// var filter = document.querySelector(".filteredCart");
var errorMsg = document.querySelector(".error");
var purcashed = document.querySelector(".toBuy")

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var shoesElem = document.querySelector(".shoesTemp");



let shoeCat = factoryShoeCat();

function addError(ErrorMessage) {

    errorMsg.innerHTML = ErrorMessage;

}

function clearError() {
    setTimeout(function () {
        errorMsg.innerHTML = "";
    }, 2000);

}

if (stock) {
    let newStock = {
        stock
    }
    brandList(newStock)
    sizeList(newStock)
    colorList(newStock)

}

function brandList(list) {
    let shoeTemplate = document.querySelector(".shoeBrandTemplate").innerHTML;
    let shoeBrandTemplate = Handlebars.compile(shoeTemplate);
    let printedShoeBrand = shoeBrandTemplate(list)

    document.querySelector(".dropdownBrand").innerHTML = printedShoeBrand;
    console.log(list);

}

function sizeList(list) {
    let shoeTemplate1 = document.querySelector(".shoeSizeTemplate").innerHTML;
    let shoeSizeTemplate = Handlebars.compile(shoeTemplate1);
    let printedShoeSize = shoeSizeTemplate(list)

    document.querySelector(".dropdownSize").innerHTML = printedShoeSize;
    console.log(list);

}

function colorList(list) {
    let shoeTemplate2 = document.querySelector(".shoeColorTemplate").innerHTML;
    let shoeColorTemplate = Handlebars.compile(shoeTemplate2);
    let printedShoeColor = shoeColorTemplate(list)

    document.querySelector(".dropdownColor").innerHTML = printedShoeColor;
    console.log(list);

}

console.log(stock)

function addOnStock() {

    const currentSize = mySizeTextBoxElem.value;
    const currentBrand = myBrandTextBoxElem.value;
    const currentColor = myColorTextBoxElem.value;
    const currentQuant = myQuantTextBoxElem.value;
    const currentPrice = myPriceTextBoxElem.value;


    var forShoe = shoeCat.getShoe();

    if (currentSize != "" && currentBrand != "" && currentColor != "" && currentQuant != "" && currentPrice != "") {
        shoeCat.addShoe(currentSize, currentBrand, currentColor, currentQuant, currentPrice, )


        var userData = userTemplate({
            forShoe,


        });
        console.log(shoeCat.addShoe())
        console.log(userData);

        shoesElem.innerHTML = userData;

    } else {
        errorMsg.innerHTML = shoeCat.ErrorMsg()
    }


}

var templateSource3 = document.querySelector(".filterTemplate").innerHTML;
var filterTemplate = Handlebars.compile(templateSource3);
var filterElem = document.querySelector(".filteredCart");

function displayfilteredShoes() {
    var currentSelSize = document.querySelector(".dropdownSize");
    var currentSelBrand = document.querySelector(".dropdownBrand");
    var currentSelColor = document.querySelector(".dropdownColor");



//    var k = shoeCat.addtoCartSet(currentSelSize, currentSelBrand, currentSelColor);
//     console.log(k);
    
    // const brandShoe = currentSelBrand.value;
    // console.log(brandShoe);
    
    // const sizeShoe = currentSelSize.value;
    // const colorShoe = currentSelColor.value;

    var y = {
        size : currentSelSize.value,
        color : currentSelColor.value,
        brand : currentSelBrand.value
    }
       console.log(y)
    var selectedShoe = shoeCat.filteringOnShoes(y);
        console.log(selectedShoe)
    if ( currentSelBrand.value != "" && currentSelSize.value != "" && currentSelColor.value != "") {
        // shoeCat.filteringOnShoes(selectedShoe);


        var userData2 = filterTemplate({
            selectedShoe,
        });

        console.log(selectedShoe);
    }
    filterElem.innerHTML = userData2;
}

function cartBtn() {

    addtoCart.innerHTML = shoeCat.cartCounter();
}



purcashed.addEventListener('click', cartBtn);
addingBtnElem.addEventListener('click', addOnStock);
searchBtnElem.addEventListener('click', displayfilteredShoes);

var mySizeTextBoxElem = document.querySelector(".form1-control");
var myColorTextBoxElem = document.querySelector(".form2-control");
var myBrandTextBoxElem = document.querySelector(".form3-control");
var myQuantTextBoxElem = document.querySelector(".form4-control");
var myPriceTextBoxElem = document.querySelector(".form5-control");
var addingBtnElem = document.querySelector(".addToStock");
var shoePrint = document.querySelector(".shoes");
var searchBtnElem = document.querySelector(".toFilter");

var mySizeElem = document.querySelector(".dropdownSize");
var myBrandElem = document.querySelector(".dropdownBrand");
var myColorElem = document.querySelector(".dropdownColor");


var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var shoesElem = document.querySelector(".shoesTemp");


// var newStore = [];
// if (localStorage["userData"]) {
//     var newStore = JSON.parse(localStorage.getItem("userData"))
//     var result = "";
//     for (let i = 0; i < newStore.length; i++) {
//         let storeList = newStore[i];

//         result = `<tr>
//                         <th>${storeList.size}</th>

//                         <th>${storeList.color} </th>

//                         <th> ${storeList.brand}</th>
//                         <th> ${storeList.in_stock}</th>
//                         <th> ${storeList.price}</th>
                      
//                     </tr>`
//         document.getElementById("stockStore").innerHTML += result
// console.log(storeList);

//     }
// }

let shoeCat = factoryShoeCat();


function addOnStock() {

    const currentSize = mySizeTextBoxElem.value;
    const currentBrand = myBrandTextBoxElem.value;
    const currentColor = myColorTextBoxElem.value;
    const currentQuant = myQuantTextBoxElem.value;
    const currentPrice = myPriceTextBoxElem.value;


    var forShoe = shoeCat.getShoe();

    if (currentSize != "" && currentBrand != "" && currentColor != "" && currentQuant != "" && currentPrice != "" ) {
        shoeCat.addShoe(currentSize, currentBrand, currentColor, currentQuant, currentPrice, )
    

    var userData = userTemplate({
        forShoe, 
        

    });
    console.log(shoeCat.addShoe())
   console.log(userData);
 
    shoesElem.innerHTML = userData;

}
// window.localStorage.setItem("userData", JSON.stringify(shoeCat.getShoe()))
}


function filter() {

    const currentSelectedColor = myColorElem.value;
    const currentSelectedBrand = myBrandElem.value;
    const currentSelectedSize = mySizeElem.value;
   

    let filteredShoes = [];
    if (currentSelectedColor !== "" && currentSelectedBrand !== "" && currentSelectedSize !== 0) {

        filteredShoes = shoeCat.getShoe();
    } else {

        const params = {
        
            color: currentSelectedColor,
            brand: currentSelectedBrand,
            size: currentSelectedSize,
        };
        filteredShoes = shoeCat.filterOnSearch(params);
       
    }
   

    shoesElem.innerHTML = ' ';

    for (var i = 0; i < filteredShoes.length; i++) {
        const currentShoe = filteredShoes[i];
        //create 
        
        result = `<tr>
                                <th>${currentShoe.size}</th>
        
                               <th>${currentShoe.color} </th>
        
                               <th> ${currentShoe.brand}</th>
                                 <th> ${currentShoe.in_stock}</th>
                               <th> ${currentShoe.price}</th>
                              
                             </tr>`
                document.getElementById("stockStore").innerHTML += result
        
    }
    console.log(filteredShoes);
    
}

addingBtnElem.addEventListener('click', addOnStock);
searchBtnElem.addEventListener('click', filter);
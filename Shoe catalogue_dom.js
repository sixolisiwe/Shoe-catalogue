
// var sizeDropdownElem = document.querySelector(".sizeSec");
// var colorDropdownelem = document.querySelector(".colorSec");
// var brandDropDownElem = document.querySelector(".brandSec");
// var searchBtnElem =document.querySelector(".searchBtn");

var mySizeTextBoxElem = document.querySelector(".form1-control");
var myColorTextBoxElem = document.querySelector(".form2-control");
var myBrandTextBoxElem = document.querySelector(".form3-control");
var myQuantTextBoxElem = document.querySelector(".form4-control");
var myPriceTextBoxElem = document.querySelector(".form5-control");
var addingBtnElem = document.querySelector(".addBtn");


let shoeCat= factoryShoeCat();

function addOnStock(){

const currentSize = mySizeTextBoxElem.value;
const  currentBrand = myBrandTextBoxElem.value;
const currentColor = myColorTextBoxElem.value;
const currentQuant = myQuantTextBoxElem.value;
const currentPrice = myPriceTextBoxElem.value;
        
           
   
console.log(currentSize);
console.log(currentBrand);
console.log(currentColor);
console.log(currentQuant);
console.log(currentPrice);
if(currentSize !=""|| currentBrand != "" || currentColor != "" || currentQuant != "" || currentPrice != ""){
 shoeCat.addShoe(currentSize, currentBrand, currentColor,currentQuant, currentPrice)   
}


}
    
addingBtnElem.addEventListener('click', addOnStock);



describe("adding stock to the list", function () {
  
    it("should add 1 shoe to the stock", function () {
        var shoeCatInstance = factoryShoeCat();
        shoeCatInstance.addShoe(5,"Adidas", 1);
        

        assert.deepEqual(1, shoeCatInstance.getShoe().length)   

    })

        it("should add 10 shoes to the stock", function () {
            var shoeCatInstance = factoryShoeCat();
            shoeCatInstance.addShoe(5,"Adidas", 1);
            shoeCatInstance.addShoe(6,"Nike", 1);
            shoeCatInstance.addShoe(5,"Adidas", 1);
            shoeCatInstance.addShoe(5,"Adidas", 1);
            shoeCatInstance.addShoe(6,"Nike", 1);
            shoeCatInstance.addShoe(5,"Adidas", 1);
            shoeCatInstance.addShoe(6,"Nike", 1);
            shoeCatInstance.addShoe(5,"Adidas", 1);
            shoeCatInstance.addShoe(5,"Adidas", 1);
            shoeCatInstance.addShoe(5,"Adidas", 1);
    
            assert.deepEqual(10, shoeCatInstance.getShoe().length)   
    
})

it("should add 5 shoes to the stock", function () {
    var shoeCatInstance = factoryShoeCat();
    shoeCatInstance.addShoe(5,"Adidas", 1);
    shoeCatInstance.addShoe(7,"Puma", 1);
    shoeCatInstance.addShoe(5,"Adidas", 1);
    shoeCatInstance.addShoe(7,"Puma", 1);
    shoeCatInstance.addShoe(5,"Adidas", 1);
    
  

const shoeList = shoeCatInstance.getShoe();
		assert.equal(5, shoeList.length);

		assert.equal("Adidas", shoeList[0].brand);
		assert.equal("Puma", shoeList[1].brand);
        assert.equal("Adidas", shoeList[2].brand);
        assert.equal("Puma", shoeList[3].brand);
		assert.equal("Adidas", shoeList[4].brand);
    });

    it("should not add empty input to the stock", function () {
        var shoeCatInstance = factoryShoeCat();
        shoeCatInstance.addShoe(" ");
        

        assert.deepEqual(0, shoeCatInstance.getShoe().length)   

    })

  
    it("should return the filtered Adidas shoe", function () { 

      var shoeCatInstance = factoryShoeCat(stock);
        
        shoeCatInstance.addShoe()
   
        const param = {
            brand: "Adidas",
            color: "red",
            size: 3,
           
        };
 
        
        const filteredShoes = shoeCatInstance.filterOnSearch(param);
        console.log(filteredShoes)
        assert.equal(2, filteredShoes.length);
    

    })


    it("should return the filtered Nike shoe", function () { 

        var shoeCatInstance = factoryShoeCat(stock);
          
          shoeCatInstance.addShoe()
     
          const param = {
              brand: "Nike",
              color: "blue",
              size: 3,
             
          };
   
          
          const filteredShoes = shoeCatInstance.filterOnSearch(param);
          console.log(filteredShoes)
          assert.equal(1, filteredShoes.length);
      
  
      })

});
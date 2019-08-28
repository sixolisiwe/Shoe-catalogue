
describe("shoe catalogue", function () {
  
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

});


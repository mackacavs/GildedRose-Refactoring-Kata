describe("Gilded Rose", function () {
  //Double for the item object
  class ItemObj {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

  describe("#updateQuality", function () {

    it("should reduce the quality of the item by 1 when updateQuality is called as long as the name isn't 'aged brie', 'Backstage passes to a TAFKAL80ETC concert' or 'Sulfuras, Hand of Ragnaros' and the quality of the item doesn't become negative",
      function () {
        let chocolate = new ItemObj('chocolate', 5, 10)
        const shop = new Shop([chocolate]);
        shop.updateQuality()
        expect(chocolate.quality).toEqual(9);
      });

    it("should not reduce the quality of the itme further if the item's quality is already 0",
      function () {
        let chocolate = new ItemObj('chocolate', 5, 0)
        const shop = new Shop([chocolate]);
        shop.updateQuality()
        expect(chocolate.quality).toEqual(0);
      });

    it("should increase the quality of the itme by 1 if the item's name is already 'Aged Brie'",
      function () {
        let aged_brie = new ItemObj('Aged Brie', 5, 10)
        const shop = new Shop([aged_brie]);
        shop.updateQuality()
        expect(aged_brie.quality).toEqual(11);
      });

    it("shouldn't increase the quality of the itme by 1 if the item's quality is already 50",
      function () {
        let sweets = new ItemObj('sweets', 5, 50)
        const shop = new Shop([sweets]);
        shop.updateQuality()
        expect(sweets.quality).toEqual(50);
      });

    it("shouldn't decrease the quality of the item if the item's name is 'Sulfuras, Hand of Ragnaros'",
      function () {
        let sulfuras = new ItemObj('Sulfuras, Hand of Ragnaros', 5, 10)
        const shop = new Shop([sulfuras]);
        shop.updateQuality()
        expect(sulfuras.quality).toEqual(10);
      });


  })

  describe("#checkItemNotSpecial", function () {
    let shop;

    beforeEach(function () {
      shop = new Shop();
    });

    it("return true if the argument entered is noy 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert' or 'Sulfuras, Hand of Ragnaros'",
      function () {
        expect(shop.checkItemNotSpecial('chocolate')).toEqual(true);
      });

    it("return false if the argument entered is 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert' or 'Sulfuras, Hand of Ragnaros'",
      function () {
        expect(shop.checkItemNotSpecial('Aged Brie')).toEqual(false);
      });

  })

  describe("#checkItemBetween0and50", function () {
    let shop;

    beforeEach(function () {
      shop = new Shop();
    });

    it("return true if the argument entered is between 0 and 50",
      function () {
        expect(shop.checkItemBetween0and50(10)).toEqual(true);
      });

    it("return false if the argument entered is between 0 and 50",
      function () {
        expect(shop.checkItemBetween0and50(60)).toEqual(false);
      });

  })

});





    // statement = new Statement();
    // spyOn(account.statement, 'addLineToStatement');


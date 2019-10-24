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

    it("shouldn't decrease the quality of the item if the item's name is 'Sulfuras, Hand of Ragnaros'",
      function () {
        let sulfuras = new ItemObj('Sulfuras, Hand of Ragnaros', 5, 80)
        const shop = new Shop([sulfuras]);
        shop.updateQuality()
        expect(sulfuras.quality).toEqual(80);
      });


    it("shouldn't increase the quality of the item if the item's quality is already 50",
      function () {
        let sweets = new ItemObj('sweets', 5, 50)
        const shop = new Shop([sweets]);
        shop.updateQuality()
        expect(sweets.quality).toEqual(50);
      });

    it("should not reduce the quality of the item further if the item's quality is already 0",
      function () {
        let chocolate = new ItemObj('chocolate', 5, 0)
        const shop = new Shop([chocolate]);
        shop.updateQuality()
        expect(chocolate.quality).toEqual(0);
      });

    it("should decrease the quality of the item by 2 if the item's sellIn is 0",
      function () {
        let sweets = new ItemObj('sweets', 0, 10)
        const shop = new Shop([sweets]);
        shop.updateQuality()
        expect(sweets.quality).toEqual(8);
      });

    it("should increase the quality of the item by 1 if the item's name is 'Aged Brie' and the sellIn date is yet to be reached",
      function () {
        let aged_brie = new ItemObj('Aged Brie', 11, 10)
        const shop = new Shop([aged_brie]);
        shop.updateQuality()
        expect(aged_brie.quality).toEqual(11);
      });

    it("should increase the quality of the item by 2 if the item's name is 'Aged Brie' and the sellIn date has been reached",
      function () {
        let aged_brie = new ItemObj('Aged Brie', 11, 10)
        const shop = new Shop([aged_brie]);
        shop.updateQuality()
        expect(aged_brie.quality).toEqual(11);
      });

    it("should increase the quality of the item by 1 if the item's name is 'Backstage passes to a TAFKAL80ETC concert' and there are more than 10 sellIn days left",
      function () {
        let backstate_passes = new ItemObj('Backstage passes to a TAFKAL80ETC concert', 11, 10)
        const shop = new Shop([backstate_passes]);
        shop.updateQuality()
        expect(backstate_passes.quality).toEqual(11);
      });

    it("should increase the quality of the item by 2 if the item's name is 'Backstage passes to a TAFKAL80ETC concert' and there are between 5 and 10 sellIn days left",
      function () {
        let backstage_passes = new ItemObj('Backstage passes to a TAFKAL80ETC concert', 8, 10)
        const shop = new Shop([backstage_passes]);
        shop.updateQuality()
        expect(backstage_passes.quality).toEqual(12);
      });

    it("should increase the quality of the item by 3 if the item's name is 'Backstage passes to a TAFKAL80ETC concert' and there are between 1 and 5 sellIn days left",
      function () {
        let backstage_passes = new ItemObj('Backstage passes to a TAFKAL80ETC concert', 3, 10)
        const shop = new Shop([backstage_passes]);
        shop.updateQuality()
        expect(backstage_passes.quality).toEqual(13);
      });

    it("should reduce the quality of the item to 0 if the item's name is 'Backstage passes to a TAFKAL80ETC concert' and sellIn is 0",
      function () {
        let backstage_passes = new ItemObj('Backstage passes to a TAFKAL80ETC concert', 0, 10)
        const shop = new Shop([backstage_passes]);
        shop.updateQuality()
        expect(backstage_passes.quality).toEqual(0);
      });

    it("should degrade in quality by 2 if the item is named 'Conjured' and the sellIn date is above 0",
      function () {
        let conjured = new ItemObj('Conjured', 10, 10)
        const shop = new Shop([conjured]);
        shop.updateQuality()
        expect(conjured.quality).toEqual(8);
      });

    it("should degrade in quality by 4 if the item is named 'Conjured' and the sellIn date is 0 ro below",
      function () {
        let conjured = new ItemObj('Conjured', -2, 10)
        const shop = new Shop([conjured]);
        shop.updateQuality()
        expect(conjured.quality).toEqual(6);
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

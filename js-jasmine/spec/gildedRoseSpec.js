describe("Gilded Rose", function () {

  let chocolate;

  beforeEach(function () {
    class ItemObj {
      constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
      }
    }
    chocolate = new ItemObj('chocolate', 5, 10)

  });


  describe("Blah", function () {

    it("should reduce the quality of the item by 1 when updateQuality is called", function () {
      const shop = new Shop([chocolate]);
      shop.updateQuality()
      expect(chocolate.quality).toEqual(9);
    });
  })
});





    // statement = new Statement();
    // spyOn(account.statement, 'addLineToStatement');


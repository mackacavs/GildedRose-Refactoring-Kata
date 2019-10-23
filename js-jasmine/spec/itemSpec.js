describe("Item", function () {

  it("should initialize with a name, sellIn and Quality properties", function () {
    const item = new Item("chocolate", 5, 10);
    expect(item.name).toEqual("chocolate");
    expect(item.sellIn).toEqual(5);
    expect(item.quality).toEqual(10);
  });



});

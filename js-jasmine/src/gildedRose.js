class Shop {
  constructor(items) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      if (this.checkItemBetween0and50(item.quality)) {
        if (this.checkItemNotSpecial(item.name)) {
          item.quality = item.quality - 1
        } else if (item.name === 'Aged Brie') {
          item.quality = item.quality + 1
        } else if (item.name === 'Sulfuras, Hand of Ragnaros') {

        }
      }
    })
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {

      } else {
        if (this.items[i].quality < 50) {
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    // return this.items;
  }

  checkItemNotSpecial(name) {
    return (name !== 'Aged Brie' && name !== 'Backstage passes to a TAFKAL80ETC concert'
      && name !== 'Sulfuras, Hand of Ragnaros') ? true : false
  }

  checkItemBetween0and50(quality) {
    console.log(quality)
    return (quality > 0 && quality < 50) ? true : false
  }



}

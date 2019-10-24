class Shop {
  constructor(items) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {

      if (item.name === 'Sulfuras, Hand of Ragnaros') return

      if (this.checkItemBetween0and50(item.quality)) {
        switch (item.name) {
          case 'Aged Brie':
            this.editAgedBrieQuality(item)
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            this.editBackStagePassQuality(item)
            break;
          case 'Conjured':
            this.editConjuredQuality(item)
            break;
          default:
            this.editStandardItemQuality(item)
        }
      }
    }
    )
  }

  checkItemBetween0and50(quality) {
    return (quality > 0 && quality < 50) ? true : false
  }

  editStandardItemQuality(item) {
    if (item.sellIn > 0) {
      item.quality -= 1
    } else {
      item.quality -= 2
    }
  }

  editAgedBrieQuality(item) {
    if (item.sellIn > 0) {
      item.quality += 1
    } else {
      item.quality += 2
    }
  }

  editBackStagePassQuality(item) {
    if (item.sellIn <= 10 && item.sellIn > 5) {
      item.quality += 2
    } else if (item.sellIn < 5 && item.sellIn > 0) {
      item.quality += 3
    } else if (item.sellIn === 0) {
      item.quality = 0
    } else {
      item.quality += 1
    }
  }

  editConjuredQuality(item) {
    if (item.sellIn > 0) {
      item.quality -= 2
    } else {
      item.quality -= 4
    }
  }
}






const MIN_QUALITY = 0;
const MAX_QUALITY = 50;
const SELL_BY = 0;

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

      item.sellIn -= 1
    }
    )
  }

  checkItemBetween0and50(quality) {
    return (quality > MIN_QUALITY && quality < MAX_QUALITY) ? true : false
  }

  editStandardItemQuality(item) {
    (item.sellIn > SELL_BY) ? item.quality -= 1 : item.quality -= 2
  }

  editAgedBrieQuality(item) {
    (item.sellIn > SELL_BY) ? item.quality += 1 : item.quality += 2
  }

  editBackStagePassQuality(item) {
    if (item.sellIn <= 10 && item.sellIn > 5) {
      item.quality += 2
    } else if (item.sellIn < 5 && item.sellIn > SELL_BY) {
      item.quality += 3
    } else if (item.sellIn === SELL_BY) {
      item.quality = MIN_QUALITY
    } else {
      item.quality += 1
    }
  }

  editConjuredQuality(item) {
    (item.sellIn > SELL_BY) ? item.quality -= 2 : item.quality -= 4
  }
}






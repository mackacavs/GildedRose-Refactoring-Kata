## Gilded Rose Kata

In this tech test, we were given the challenge of refactoring code for 'Gilded Rose' - a small shop. The goods degraded in quality as time passed and a system was already in place that dealt with this degradation by lowering the quality of the items in the shop. Unfortunately, the pre-written code was poorly written, difficult to understand and hard to refactor. Not only this, certain products had certain qualities. This meant that they didn't follow the standard rules of lowering the quality of the item by 1 every time the system was run.

My challenge was to refactor the code so it was more readable and changeable moving forward. I also had to add extra functionality to deal with certain product names.

## Test instructions

- Clone the code to a suitable directory in your local fiel system 
- Run SpecRunner.html in your browser

# User Stories
```
As an innkeeper
So that I can keep track of the value of my items
I want to adjust the quality of my items on a daily basis.
```

```
As an innkeeper
So that I can keep track of when my items must be sold by
I want to adjust the sellIn date of my items on a daily basis.
```


# Full GildedRose Spcification:

"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."

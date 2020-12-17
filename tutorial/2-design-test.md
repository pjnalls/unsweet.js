## Section 2: Test Design
***
### Input
* ***date of journal entry*** (``Date object``): the date of current food journal entry.
* ***all food consumed*** (``number[]``): a complete list of all IDs for food consumed on a given ***date of journal entry***.
* ***food consumed*** (``Food object``):
the ***name*** (``string``) and ***grams of nutrient*** (``number``) per serving for a given food.
* ***serving size*** (``number``): the serving size of a food consumed to be added to a journal entry.

### Output
* ***total grams of nutrient consumed*** (``number``): the total number of grams for a selected nutrient consumed on a given day.
* ***message*** (``string``): a message shown which changes based on ***total of nutrient consumed*** relative to ***total nutrient goal*** 

### Constraints
* ***DATE_OF_FIRST_ENTRY*** <= ***date of journal entry*** <= ***today's date***
* 0 <= ***all food consumed***```.length``` < 1000
* 0 <= ***food consumed***```.```***grams of nutrient*** < 200
* 0 < ***serving size*** < 100
* 0 <= ***total grams of nutrient consumed*** < 1000
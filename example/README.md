<h1 align="center">Unsweet.js Example: Sugar Journal App</h1>

An endocrinologist needs "a simple web app to monitor patients' daily intake of dietary sugar". Patients should be able to send journal entries of the food they consume each day to the endocrinologist's office.

## Minimal Techinical Requirements
* a web browser
* an installation of Node.js

***
### Input
* ***date of journal entry*** (``Date object``): the date of current food journal entry.
* ***all food consumed*** (``number[]``): a complete list of all IDs for food consumed on a given ***date of journal entry***.
* ***food consumed*** (``Food object``):
the ***food name*** (``string``) and ***grams of sugar*** (``number``) per serving for a given food.
* ***serving size*** (``number``): the serving size of a food consumed to be added to a journal entry.

### Output
* ***total grams of sugar consumed*** (``number``): the total number of grams for a sugar consumed on a given day.
* ***message*** (``string``): a message shown which changes based on ***total of sugar consumed*** relative to ***total sugar goal*** 

### Constraints
* ***DATE_OF_FIRST_ENTRY*** <= ***date of journal entry*** <= ***today's date***
* 0 <= ***all food consumed***```.length``` < 1000
* 0 <= ***food consumed***```.```***grams of sugar*** < 200
* 0 < ***serving size*** < 100
* 0 <= ***total grams of sugar consumed*** < 1000

## Useful References
* [Support Tables to help with cross-browser compatiblity](https://caniuse.com/)
* [How to use Excel to make a wireframe](https://medium.com/@chlyang1992/how-to-use-excel-to-make-a-wireframe-ef6407163c91)
* [How to create a low-fidelity prototype in Google Sheets](https://uxdesign.cc/how-to-create-a-low-fidelity-prototype-in-google-sheets-6e27b7020426)
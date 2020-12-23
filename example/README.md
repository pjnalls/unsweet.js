<h1 align="center">Unsweet.js Example: Sugar Journal App</h1>

An endocrinologist needs "a simple web app to monitor patients' daily intake of dietary sugar". The doctor's patients will need to send journal entries of the food they consume each day to the doctor's office. The doctor emphasizes that they want to make food journaling for their patients "as simple as possible".

## Minimal Techinical Requirements
* a web browser
* an installation of Node.js (version 13.2.0 or above)

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

## Useful References
* [Support Tables to help with cross-browser compatiblity](https://caniuse.com/)
* [How to use Excel to make a wireframe](https://medium.com/@chlyang1992/how-to-use-excel-to-make-a-wireframe-ef6407163c91)
* [How to create a low-fidelity prototype in Google Sheets](https://uxdesign.cc/how-to-create-a-low-fidelity-prototype-in-google-sheets-6e27b7020426)
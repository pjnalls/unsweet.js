
function createContainer() {
  var container = document.createElement('div');
  
  container.className = 'container';

  // Center.
  container.style.margin = '0 auto';
  // Create white-spacing on the right and left sides of the container.
  container.style.width = '80%';

  container.style.borderRadius = '5px';
  container.style.border = 'solid #cfcfcf 1.5px';
  container.style.backgroundColor = '#fff';

  return container;
}

function createAppHeader() {
  var appHeader = document.createElement('h1');

  appHeader.className ='app-header';
  appHeader.textContent = 'Sugar Journal';
  appHeader.style.textAlign = 'center';
  appHeader.style.fontFamily = 'Arial, Helvetica, san-serif';

  // Set size of text relative to the viewport.
  appHeader.style.fontSize = '5vw';

  appHeader.style.fontWeight = 'lighter';

  // Set text color.
  appHeader.style.color = '#231878';

  return appHeader;
}

/**
 * .food-menu {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: .5rem;
}
 */

function createFoodMenuSelectionDropdown() {
  var 
    foodMenuContainer = document.createElement('div'),
    foodMenuLabel = document.createElement('label'),
    foodMenuDropdown = document.createElement('input'),
    foodDataListElement = document.createElement('datalist'),
    // Create placeholder food data.
    foodData = ['Tea', 'Ice Cream', 'Coffee', 'Cake', 'Pizza', 'Cheeseburger'];
  
  foodMenuContainer.className = 'food-menu';
  
  foodMenuLabel.htmlFor= 'food-selection';
  foodMenuLabel.textContent = 'What food have you consumed today?'

  foodMenuDropdown.setAttribute('list', 'foods');
  foodMenuDropdown.id = 'food-selection';
  foodMenuDropdown.name = 'food-selection';

  foodDataListElement.id ='foods';

  foodData.forEach(food => {
    const foodOption = document.createElement('option');
    foodOption.value = food; 
    foodDataListElement.appendChild(foodOption)
  });

  foodMenuContainer.appendChild(foodMenuLabel);
  foodMenuContainer.appendChild(foodMenuDropdown);
  foodMenuContainer.appendChild(foodDataListElement);

  return foodMenuContainer;
}

function bootstrapWebApplication() {

  //
  // Bootstrap user interface.
  //
  
  var 
    root = document.getElementById('root'),
    mainContainer = createContainer(),
    appHeader = createAppHeader(),
    dateSelectionContainer = createContainer(),
    menuContainer = createContainer(),
    resultsContainer = createContainer(),
    mainButtonContainer = createContainer(); 

  root.appendChild(mainContainer);

  // 
  // Bootstrap main container.
  //

  mainContainer.appendChild(appHeader);
  // Append date selection container for sub-header and buttons.
  mainContainer.appendChild(dateSelectionContainer);
  // Append horizontal rule.
  mainContainer.appendChild(document.createElement('hr'));

  // Append food menu container.
  menuContainer.appendChild(createFoodMenuSelectionDropdown());
  mainContainer.appendChild(menuContainer);
  
  // Append horizontal rule.
  mainContainer.appendChild(document.createElement('hr'));
  // Append daily results container.
  mainContainer.appendChild(resultsContainer);
  // Append main button container.
  mainContainer.appendChild(mainButtonContainer);
  // Append line break.
  mainContainer.appendChild(document.createElement('br'));

  //
  //  Bootstrap food menu container.
  //
}

bootstrapWebApplication();
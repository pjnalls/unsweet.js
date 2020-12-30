
function createContainer() {
  var container = document.createElement('div');
  
  container.className = 'container';

  // Center.
  container.style.margin = '0 auto';
  // Create white-spacing on the right and left sides of the container.
  container.style.width = '80%';
  container.style.backgroundColor = '#fff';
  container.style.fontFamily = 'Arial, Helvetica, san-serif';

  return container;
}

function createAppHeader() {
  var appHeader = document.createElement('h1');

  appHeader.className ='app-header';
  appHeader.textContent = 'Sugar Journal';
  appHeader.style.textAlign = 'center';

  appHeader.style.fontWeight = 'bold';

  // Set text color.
  appHeader.style.color = '#0b5394';

  return appHeader;
}

function createFoodMenuSelectionDropdown() {
  var 
    foodMenuContainer = document.createElement('div'),
    foodMenuLabel = document.createElement('label'),
    foodMenuDropdown = document.createElement('input'),
    foodDataListElement = document.createElement('datalist'),
    // Create placeholder food data.
    foodData = ['Tea', 'Ice Cream', 'Coffee', 'Cake', 'Pizza', 'Cheeseburger'];
  
  foodMenuContainer.className = 'food-menu';

  // Style food menu container.
  foodMenuContainer.style.display = 'flex';
  foodMenuContainer.style.justifyContent = 'space-between';
  foodMenuContainer.style.width = '80%';
  // Center.
  foodMenuContainer.style.margin = '0 auto';
  
  foodMenuLabel.htmlFor= 'food-selection';
  foodMenuLabel.textContent = 'What food have you eaten today?'
  foodMenuLabel.style.fontWeight = 'bold';

  foodMenuDropdown.setAttribute('list', 'foods');
  foodMenuDropdown.id = 'food-selection';
  foodMenuDropdown.name = 'food-selection';
  foodMenuDropdown.style.width = '50%';

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
  
  mainContainer.style.borderRadius = '5px';
  mainContainer.style.border = 'solid #cfcfcf 1.5px';

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
}

bootstrapWebApplication();
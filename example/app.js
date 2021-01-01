
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

function createDateSelectionInputs() {
  var
    dateSelectionContainer = createContainer(),
    previousDateButton = document.createElement('button'),
    nextDateButton = document.createElement('button'),
    currentDateSelection = document.createElement('select'),
    dateData = ['1/1/2021', '1/2/2021', '1/3/2021', '1/4/2021', '1/5/2021'];

  previousDateButton.value = previousDateButton.textContent = `◀   ${dateData[2]}`;
  previousDateButton.id = 'previous-date-btn';
  nextDateButton.value = nextDateButton.textContent = `${dateData[dateData.length - 1]}   ▶`;
  nextDateButton.id = 'next-date-btn';

  currentDateSelection.style.fontWeight = 'bold';
  currentDateSelection.style.border = '0px';

  dateData.forEach(date => {
    const dateOption = document.createElement('option');
    dateOption.value = dateOption.textContent = date;
    if (dateOption.value === dateData[3]) dateOption.selected = true;
    currentDateSelection.appendChild(dateOption);
  });

  currentDateSelection.value = dateData[3];

  // Style food menu container.
  dateSelectionContainer.style.display = 'flex';
  dateSelectionContainer.style.justifyContent = 'space-between';
  dateSelectionContainer.style.width = '80%';
  // Center.
  dateSelectionContainer.style.margin = '0 auto';

  dateSelectionContainer.appendChild(previousDateButton);
  dateSelectionContainer.appendChild(currentDateSelection);
  dateSelectionContainer.appendChild(nextDateButton);

  return dateSelectionContainer;
}

function createFoodMenuSelectionDropdown() {
  var 
    foodMenuContainer = document.createElement('div'),
    foodMenuLabel = document.createElement('label'),
    foodMenuDropdown = document.createElement('select'),
    // Create placeholder food data.
    foodData = ['Tea', 'Ice Cream', 'Coffee', 'Cake', 'Pizza', 'Cheeseburger'];
  
  foodMenuContainer.className = 'food-menu';

  // Style food menu container.
  foodMenuContainer.style.display = 'flex';
  foodMenuContainer.style.justifyContent = 'space-between';
  foodMenuContainer.style.width = '80%';
  // Center.
  foodMenuContainer.style.margin = '0 auto';
  
  foodMenuLabel.htmlFor = 'food-selection';
  foodMenuLabel.textContent = 'What food have you eaten today?'
  foodMenuLabel.style.fontWeight = 'bold';

  foodMenuDropdown.id = foodMenuLabel.htmlFor;
  foodMenuDropdown.name = 'foods';
  foodMenuDropdown.style.width = '50%';

  foodData.forEach(food => {
    const foodOption = document.createElement('option');
    foodOption.value = foodOption.textContent = food;
    foodMenuDropdown.appendChild(foodOption)
  });

  foodMenuContainer.appendChild(foodMenuLabel);
  foodMenuContainer.appendChild(foodMenuDropdown);

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
  mainContainer.appendChild(createDateSelectionInputs());
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
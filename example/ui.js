
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

// TODO: Use grid display and grid template areas to form
// table for the food menu.
function createFoodMenu() {
  var 
    foodMenuContainer = document.createElement('div'),
    foodMenuLabel = document.createElement('label'),
    foodSugarContainer = document.createElement('div'),
    foodSugarLabel = document.createElement('label'),
    foodSugarInput = document.createElement('input'),
    servingSizeContainer = document.createElement('div'),
    servingSizeLabel = document.createElement('label'),
    servingSizeInput = document.createElement('input'),
    foodMenuDropdown = document.createElement('select'),
    listener = function() {
      JSON.parse(this.response).forEach(food => {
        const foodOption = document.createElement('option');
        foodOption.id = food.id;
        foodOption.value = `${food.icon},${food.name},${food.gramsOfSugar},${food.unit}`;
        foodOption.textContent = `${food.icon} ${food.name}`;
        foodMenuDropdown.appendChild(foodOption);
      });
      foodSugarInput.value = parseInt(foodMenuDropdown.value.split(',')[2]);
      
      // Set sugar serving size label.
      servingSizeLabel.htmlFor = 'sugar-serving-size';
      servingSizeLabel.textContent = `Serving Size (${foodMenuDropdown.value.split(',')[3]})`;
      servingSizeInput.value = 1;
    },
    request = new XMLHttpRequest();
  
  request.addEventListener('load', listener);
  request.open('GET', '/api/foods');
  request.send();
  
  foodMenuContainer.className = 'food-menu';

  // Style food menu container.
  foodMenuContainer.style.display = 'grid';
  foodMenuContainer.style.width = '80%';
  // Center.
  foodMenuContainer.style.margin = '0 auto';
  
  // Set food menu label.
  foodMenuLabel.htmlFor = 'food-selection';
  foodMenuLabel.textContent = 'What food have you eaten today?'
  foodMenuLabel.style.fontWeight = 'bold';

  // Set food sugar label.
  foodSugarLabel.htmlFor = 'food-sugar-amount';
  foodSugarLabel.textContent = 'Sugar (per serving)';

  foodMenuDropdown.id = foodMenuLabel.htmlFor;
  foodMenuDropdown.name = 'foods';
  foodMenuDropdown.style.width = '50%';

  // Set food sugar input.
  foodSugarInput.id = foodSugarLabel.htmlFor;
  foodSugarInput.disabled = true;
  foodSugarInput.style.width = servingSizeInput.style.width = '50%';
  foodSugarInput.style.float = servingSizeInput.style.float = 'right';

  foodSugarContainer.style.display = servingSizeContainer.style.display = 'inline-block';

  foodSugarContainer.appendChild(foodSugarLabel);
  foodSugarContainer.appendChild(foodSugarInput);
  servingSizeContainer.appendChild(servingSizeLabel);
  servingSizeContainer.appendChild(servingSizeInput);

  foodMenuDropdown.onchange = foodMenuDropdown.onload = function() { 
    foodSugarInput.value = parseInt(foodMenuDropdown.value.split(',')[2]); 
    servingSizeLabel.textContent = `Serving Size (${foodMenuDropdown.value.split(',')[3]})`;
  }

  foodMenuContainer.appendChild(foodMenuLabel);
  foodMenuContainer.appendChild(foodMenuDropdown);
  foodMenuContainer.appendChild(document.createElement('br'));
  foodMenuContainer.appendChild(foodSugarContainer);
  foodMenuContainer.appendChild(document.createElement('br'));
  foodMenuContainer.appendChild(servingSizeContainer);

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
  menuContainer.appendChild(createFoodMenu());
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
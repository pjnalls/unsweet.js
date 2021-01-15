
function createContainer() {
  var container = document.createElement('div');
  
  container.className = 'container';

  // Center.
  container.style.margin = '0 auto';
  // Create white-spacing on the right and left sides of the container.
  container.style.width = '66.7%';
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
    dropdownContainer = document.createElement('div'),
    addFoodButton = document.createElement('button'),
    entry = document.createElement('div'),
    entryContainer = document.createElement('div'),
    listener = function() {
      JSON.parse(this.response).forEach(food => {
        const foodOption = document.createElement('option');
        foodOption.id = food.id;
        foodOption.value = `${food.icon},${food.name},${food.gramsOfSugar},${food.unit}`;
        foodOption.textContent = `${food.icon} ${food.name}`;
        foodMenuDropdown.appendChild(foodOption);
      });
      foodSugarInput.value = `${foodMenuDropdown.value.split(',')[2]}g`;
      
      // Set sugar serving size label.
      servingSizeLabel.htmlFor = 'sugar-serving-size';
      servingSizeLabel.textContent = `Serving Size (${foodMenuDropdown.value.split(',')[3]})`;
      servingSizeInput.type = 'number';
      servingSizeInput.min = 0;
      servingSizeInput.max = 99;
      // Set default value.
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

  foodSugarInput.id = foodSugarLabel.htmlFor;
  foodSugarInput.disabled = true;

  addFoodButton.style.width = '25%';

  foodSugarInput.style.width = 
  servingSizeInput.style.width = 
  entry.style.width =
  foodMenuDropdown.style.width = '50%';
  foodSugarInput.style.float = 
  servingSizeInput.style.float = 
  addFoodButton.style.float =
  foodMenuDropdown.style.float = 
  foodSugarInput.style.textAlign = 
  servingSizeInput.style.textAlign = 'right';
  // Set box-sizing for input and select elements for them to be the same width.
  foodSugarInput.style.boxSizing = 
  servingSizeInput.style.boxSizing = 
  foodMenuDropdown.style.boxSizing = 'border-box';

  foodSugarContainer.style.display = 
  servingSizeContainer.style.display = 
  entryContainer.style.display = 
  dropdownContainer.style.display = 'inline-block';

  foodSugarContainer.appendChild(foodSugarLabel);
  foodSugarContainer.appendChild(foodSugarInput);
  servingSizeContainer.appendChild(servingSizeLabel);
  servingSizeContainer.appendChild(servingSizeInput);
  entryContainer.appendChild(addFoodButton);
  entryContainer.appendChild(entry);
  dropdownContainer.appendChild(foodMenuLabel);
  dropdownContainer.appendChild(foodMenuDropdown);

  foodMenuDropdown.onchange = foodMenuDropdown.onload = function() { 
    foodSugarInput.value = `${foodMenuDropdown.value.split(',')[2]}g`; 
    servingSizeLabel.textContent = `Serving Size (${foodMenuDropdown.value.split(',')[3]})`;
    servingSizeInput.value = 1;
  }

  addFoodButton.textContent = 'Add Food';
  addFoodButton.onclick = function () { 
    var
      sugarIntake = document.getElementById('sugar-intake'),
      dailyGoal = document.getElementById('daily-goal'),
      foodSugarAmount = document.getElementById('food-sugar-amount');

    entry.textContent += ` ${foodMenuDropdown.value.split(',')[0]}`;

    document.getElementById('sugar-intake').value = `${
      parseInt(sugarIntake.value.split('g')[0]) + parseInt(foodSugarAmount.value)}g`;
    
    // TODO: Resolve issue with color of sugar intake input text not changing color. 
    parseInt(dailyGoal.value.split('g')[0]) < parseInt(sugarIntake.value.split('g')[0]) ?
      sugarIntake.style.color = '#aa0000' : sugarIntake.style.color = '#000000';
  };

  foodMenuContainer.appendChild(dropdownContainer);
  foodMenuContainer.appendChild(document.createElement('br'));
  foodMenuContainer.appendChild(foodSugarContainer);
  foodMenuContainer.appendChild(document.createElement('br'));
  foodMenuContainer.appendChild(servingSizeContainer);
  foodMenuContainer.appendChild(document.createElement('br'));
  foodMenuContainer.appendChild(entryContainer);

  return foodMenuContainer;
}

function createResultsSection() {
  var
    entryResultsContainer = document.createElement('div'),
    dailyGoalContainer = document.createElement('div'),
    dailyGoalLabel = document.createElement('label'),
    dailyGoalInput = document.createElement('input'),
    sugarIntakeContainer = document.createElement('div'),
    sugarIntakeLabel = document.createElement('label'),
    sugarIntakeInput = document.createElement('input'),
    sugarBlank = document.createElement('label'),
    sugarLabel = document.createElement('label');

  dailyGoalContainer.style.display = 
  sugarIntakeContainer.style.display = 'inline-block';

  dailyGoalLabel.htmlFor = 'daily-goal';
  sugarIntakeLabel.htmlFor = 'sugar-intake';
  dailyGoalLabel.textContent = 'Daily Goal';
  sugarIntakeLabel.textContent = 'Today\'s Consumption';
  dailyGoalLabel.style.fontWeight = 
  sugarIntakeLabel.style.fontWeight ='bold';
  dailyGoalInput.id = dailyGoalLabel.htmlFor;
  sugarIntakeInput.id = sugarIntakeLabel.htmlFor;
  dailyGoalInput.disabled = sugarIntakeInput.disabled = true;
  dailyGoalInput.style.float = 
  sugarIntakeInput.style.float = 
  dailyGoalInput.style.textAlign = 
  sugarIntakeInput.style.textAlign = 'right';
  dailyGoalInput.value = `< 50g`;
  sugarIntakeInput.value = `0g`;
  sugarLabel.textContent = sugarBlank.textContent = 'of Sugar.'
  sugarBlank.style.color = 'rgba(255, 255, 255, 0)';
  dailyGoalInput.style.width = 
  sugarIntakeInput.style.width = '40%';
  sugarBlank.style.width =  '17.5%';
  sugarLabel.style.width = '97.5%';
  sugarBlank.style.float = sugarLabel.style.float = 'right';
  sugarLabel.style.textAlign = 'right';
  sugarBlank.style.marginLeft = sugarLabel.style.marginLeft = '2.5%';

  entryResultsContainer.style.display = 'grid';
  entryResultsContainer.style.width = '80%';
  // Center.
  entryResultsContainer.style.margin = '0 auto';
  
  dailyGoalContainer.appendChild(dailyGoalLabel);
  dailyGoalContainer.appendChild(sugarBlank.cloneNode(true));
  dailyGoalContainer.appendChild(dailyGoalInput);
  entryResultsContainer.appendChild(dailyGoalContainer);

  entryResultsContainer.appendChild(sugarLabel);

  sugarIntakeContainer.appendChild(sugarIntakeLabel);
  sugarIntakeContainer.appendChild(sugarBlank.cloneNode(true));
  sugarIntakeContainer.appendChild(sugarIntakeInput);
  entryResultsContainer.appendChild(sugarIntakeContainer);
  

  return entryResultsContainer;
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
  resultsContainer.appendChild(createResultsSection());
  mainContainer.appendChild(resultsContainer);

  mainContainer.appendChild(document.createElement('br'));

  // Append main button container.
  mainContainer.appendChild(mainButtonContainer);
  // Append line break.
  mainContainer.appendChild(document.createElement('br'));
}

bootstrapWebApplication();
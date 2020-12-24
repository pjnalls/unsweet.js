
function createContainer() {
  var container = document.createElement('div');
  
  container.className = 'container';
  // Center.
  container.style.margin = '0 auto';
  // Create white-spacing on the right and left sides of the container.
  container.style.width = '80%';
  container.style.borderRadius = '5px';
  container.style.border = 'solid #cfcfcf 1.5px';
  container.style.backgroundColor = '#f9f9f9';

  return container;
}

function createAppHeader() {
  var appHeader = document.createElement('h1');

  appHeader.className ='app-header';
  appHeader.textContent = 'Sugar Journal';
  // Center.
  appHeader.style.textAlign = 'center';
  // Set default font family.
  appHeader.style.fontFamily = 'Arial, Helvetica, san-serif';
  // Set color.
  appHeader.style.color = '#581845';

  return appHeader;
}

function bootstrapWebClientApplication() {
  var 
    root = document.getElementById('root'),
    container = createContainer(),
    appHeader = createAppHeader();

  root.appendChild(container);
  container.appendChild(appHeader);
}

bootstrapWebClientApplication();
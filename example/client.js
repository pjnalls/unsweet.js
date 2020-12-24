


/* @param {Element} root The top-level Element node to which the child container appends.*/
function createContainer(root) {
  var container = document.createElement('div');
  
  container.className = 'container';
  // Center.
  container.style.margin = '0 auto';
  // Create white-spacing on the right and left sides of the container.
  container.style.width = '80%';

  return container;
}

function bootstrapWebClientApplication() {
  var 
    root = document.getElementById('root'),
    container = createContainer(root);

  root.appendChild(container);
}

bootstrapWebClientApplication();
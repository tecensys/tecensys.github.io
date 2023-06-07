
window.addEventListener('load', function(){
    var progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '100%';
    this.setTimeout(function(){
        progressBar.style.display = 'none';
    },500);
});
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<nav>
<h1>TECENSYS</h1>
<ul>
<li class="classLi"><a href="./index.html">Inicio</a></li>
<li class="classLi"><a href="./temas.html">Temas</a></li>
<li class="classLi"><a href="./Nosotros.html">Nosotros</a></li>
<input type="checkbox" id="menu-toggle">
<label for="menu-toggle" class="boton_menu">
  <span class="barrasmenu"></span>
  <span class="barrasmenu"></span>
  <span class="barrasmenu"></span>
</label>
<div id="menu"></div>
</ul>
</nav>

`;


footer.innerHTML = `
<div class="grid-container">
  <div class="item1">TECNOLOGIA EN SISTEMAS Y SEGURIDAD</div>
  <div class="item2"> Contacto: proyectos-tecensys@outlook.com</div>
  // <div class="item3"></div>  
  // <div class="item4"></div>
  <div class="item5"> </div>
</div>
`;





const textElement = document.getElementById('text');

const text = 'TECNOLOGIA EN SISTEMAS Y SEGURIDAD';
let index = 0;

function writeText() {
  textElement.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    clearInterval(textTimer);
  }
}

const textTimer = setInterval(writeText, 100);

let cursorVisible = true;

function toggleCursor() {
  if (cursorVisible) {
    textElement.innerText = textElement.innerText.slice(0, -1);
  } else {
    textElement.innerText += '█';
  }

  cursorVisible = !cursorVisible;
}

const cursorTimer = setInterval(toggleCursor, 500);














document.addEventListener('DOMContentLoaded', function() {
  loadContent();
});
  function loadContent() {
    fetch('./view/portada.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('contenido').innerHTML = data;
      });
  }

//////////////////////////////////////////////////////////////////////////////////////////





function loadPage(pageUrl) {
  // Actualiza la URL en la barra de direcciones
  history.pushState({page: pageUrl}, "título " + pageUrl, "?page=" + pageUrl);

  // Usa fetch para cargar el contenido de la nueva página
  fetch(pageUrl)
      .then(response => response.text())
      .then(text => {
          // Agregar el contenido a la página
          var contenido = document.getElementById("contenido");
          contenido.innerHTML = text;

          // Ejecutar los scripts incluidos en el contenido
          var scripts = contenido.getElementsByTagName("script");
          for (var i = 0; i < scripts.length; i++) {
              eval(scripts[i].text);
          }
      });
     
}

// Verifica la URL cuando se carga la página
window.onload = function() {
  var urlParams = new URLSearchParams(window.location.search);
  var page = urlParams.get("page");
  if (page) {
      loadPage(page);
  }
}




///////////////////////////////////////////////////////////////////






// Get all images in the DOM
const images = document.querySelectorAll('img');

// Create a modal element
const modal = document.createElement('div');
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.zIndex = '1';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.overflow = 'auto';
modal.style.backgroundColor = 'rgba(0,0,0,0.9)';

// Create an image element for the modal
const modalImg = document.createElement('img');
modalImg.style.margin = 'auto';
modalImg.style.display = 'block';
modalImg.style.width = '80%';
modalImg.style.maxWidth = '700px';

// Center the image horizontally and vertically
modalImg.style.position = 'absolute';
modalImg.style.top = '50%';
modalImg.style.left = '50%';
modalImg.style.transform = 'translate(-50%, -50%)';

// Append the image to the modal
modal.appendChild(modalImg);

// Append the modal to the body
document.body.appendChild(modal);

// Add click event listeners to all images
images.forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.style.display = 'block';
  });
});

// Add click event listener to the modal to close it
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Check for new images every second
setInterval(() => {
  const newImages = document.querySelectorAll('img');
  newImages.forEach(img => {
    if (!img.onclick) {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = 'block';
      });
    }
  });
}, 1000);



/////////////////////ocultar menu mivil lateral/////////////////////////

document.body.addEventListener('click', function(event) {
  if (event.target.id !== 'menu' && event.target.id !== 'menu-toggle' && event.target.className !== 'boton_menu' && event.target.className !== 'barrasmenu') {
    document.getElementById('menu-toggle').checked = false;
  }
});














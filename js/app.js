// ---- Section menu ----
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// ---- sacar el menú al seleccionar una sección - bring up the menu when selecting a section
// ---- Combinación de teclado: alt + 91: []  -  alt + 92: \  -  alt + 94: ^  - alt + 96: ``
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

        if(entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        }
    });
}, {rootMargin: "-40% 0px -30% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);

    if(target) {
        observer.observe(target);
    }
});

// ---- connect the form to whatsapp ----
// let sendbtn = document.querySelector('#sendbtn');

// sendbtn.addEventListener('click',enviarMensaje);
// function enviarMensaje() {
//     let inputName = document.querySelector('#name').value
//     let textareaMensaje = document.querySelector('#description').value
//     let urlWhatsapp = "https://api.whatsapp.com/send?phone=541154120432&text=Nombre y Apellido: %0A" + inputName + "%0A%0AMensaje: %0A" + textareaMensaje + "%0A";
//     window.open(urlWhatsapp);
// }


// ---- Las seccion con despriegue ----
const btnItem = document.querySelectorAll('.item .btnItem');

function removeclass(){
    for(let i=0; i < btnItem.length; i++){
        btnItem[i].classList.remove('active');
    }
}

for(let i=0; i < btnItem.length; i++){
    // console.log(btnItem[i]);  imprimo los elementos que recore el bucle.
    
    btnItem[i].addEventListener('click', function(e){
        // console.log(e.target);  //imprime el elemento que hago click.
        let btnItemClicleado = e.target;
        // btnItemClicleado.classList.add('active'); // Agrego la class active al btnItemClicleado.
    
        if(btnItemClicleado.className == 'btnItem active'){  // Pregunta si la class active existe:
            // btnItemClicleado.classList.remove('active'); // Si existe la remueve.
            removeclass();
        }
        else{
            removeclass();
            btnItemClicleado.classList.add('active'); // Y si no existe la coloca.
        }
    })
}

// ---- Activar y desactivar el efecto cristal en el header ----
    // we store the class header in a constant header
const header = document.querySelector(".header"); 

// function to Apply the header2 class
function header2() {
    header.classList.toggle("header2");
}

// we apply the class when clicking on the buttons
openMenuBtn.addEventListener("click", header2);
closeMenuBtn.addEventListener("click", header2);
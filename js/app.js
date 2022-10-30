// ---- Section menu
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
}, {rootMargin: "-40% 0px 0% 0px"});

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

// ---- connect the form to whatsapp
// let sendbtn = document.querySelector('#sendbtn');

// sendbtn.addEventListener('click',enviarMensaje);

// function enviarMensaje() {
//     let inputName = document.querySelector('#name').value
//     let textareaMensaje = document.querySelector('#description').value

//     let urlWhatsapp = "https://api.whatsapp.com/send?phone=541154120432&text=Nombre y Apellido: %0A" + inputName + "%0A%0AMensaje: %0A" + textareaMensaje + "%0A";

//     window.open(urlWhatsapp);
// }


// ---- Las seccion con despriegue
const container = document.getElementById('container');

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('listTitle')) { // devuelve booleano
        e.target.parentElement.classList.toggle('scale')
        e.target.children[1].classList.toggle('rotate')
    }
})








// function acordeon (){
//     document.getElementById('acordeonText').classList.toggle ('clickOpen');
// }

// document.getElementById('boton').onclick = function (){
//     acordeon();
// }




// const boton = document.getElementById('boton');
// const acordeonText = document.querySelectorAll('acordeonText');
// console.log(acordeonText);

// boton.addEventListener('click',()=>{

//     for(let contador of acordeonText) {
//         contador.classList.toggle('clickOpen')
//     }

// });


// function acordeon (){
//     const acordeonText = document.querySelectorAll('acordeonText');

//     boton.addEventListener('click',()=>{
//         for(let contador=0; contador < acordeonText.length; contador++) {
//             acordeonText[contador].classList.toggle('clickOpen');
//         }
//     });
// }

// document.getElementById('boton').onclick = function (){
//     acordeon();
// }
// Obtener elements del DOM
const menuBtn = document.querySelector(".menu-btn"); //para seleccionar selectors in de Document
const menuBtnMobile = document.querySelector(".menu-btn-mobile");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const backdrop = document.querySelector(".sidebar-backdrop");
const navbarMenu = document.querySelector(".navbar-menu");

//inicializar on scroll animations
AOS.init();

//Add menu click events
menuBtn.addEventListener("click", sidebarOpen);
menuBtnMobile.addEventListener("click", sidebarOpen);

/*Open sidebar function*/

function sidebarOpen() {
  /*cambia posision de sidebar */
  sidebar.style.right = "0";
  //muestra backdrop
  backdrop.style.display = "block";
  //muestra backdrop atravez de una transition suavez
  setTimeout(() => {
    backdrop.style.opacity = "1";
  }, 50);
  //deshabilita el scroll en el body
  document.body.classList.add("sidebar-open-body");
}

//click event para close button
closeBtn.addEventListener("click", () => {
  //cambiamos la position de el sidebar
  sidebar.style.right = "-20em";
});

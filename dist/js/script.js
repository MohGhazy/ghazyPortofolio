document.addEventListener("DOMContentLoaded", function(){

  /* ================= NAVBAR SCROLL ================= */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
      header.classList.add("navbar-fixed");
    }else{
      header.classList.remove("navbar-fixed");
    }
  });


  /* ================= MOBILE BURGER ================= */
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll(".mobile-link");

  if(burger && menu){

    burger.addEventListener("click", () => {
      burger.classList.toggle("burger-active");

      if(menu.style.maxHeight){
        menu.style.maxHeight = null;
      } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
      }
    });

    links.forEach(link=>{
      link.addEventListener("click",()=>{
        burger.classList.remove("burger-active");
        menu.style.maxHeight = null;
      });
    });

  }

});
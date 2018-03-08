if(navigator.serviceWorker){
  navigator.serviceWorker.register("/sw.js")
}

class Navigation{
  constructor(selector){
    this.items = document.querySelectorAll(selector)
    this.bindEvents()
  }

  bindEvents(){
    this.items.forEach((item, index)=>{
      item.addEventListener("click", this.scrollToMenuLink);
    })
  }

  scrollToMenuLink(ev){
    // this.items.map((index, item) => {
    //   if(ev.target == item || ev.currentTarget == item) return; item.classList.remove("active")
    // });
    // ev.currentTarget.classList.toggle("active");
    let scrollTo = ev.currentTarget.getAttribute("data-link");
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 300);
    // location.hash = ev.currentTarget.getAttribute("data-link");
  }
}
//Se encapsula la funciona que se ejecuta con los parentesis del final
;(function(){
  let sticky = false
  let currentPosition = 0
  const imgsQuantity = $("[data-name='image-counter']").attr("content") //envio de informacion con metadatos
  let $stickynav = $("#sticky-navigation")

//Con arrow function
  // $("#menu-opener").on("click", (ev)=>{
  //   $("#responsive-nav ul").toggleClass("active")
  //   $(ev.currentTarget).toggleClass("glyphicon-menu-hamburger") //Se pone la de la hamburguesa porque es la primera que aparece
  // })
  //Con function
  // $("#menu-opener").on("click", function(){
  //   $("#responsive-nav ul").toggleClass("active")
  //   $(this).toggleClass("glyphicon-menu-hamburger")
  // })
  let menuItems = new Navigation(".menu-link");


  $("#menu-opener").on("click",toggleNav)
  $(".menu-link").on("click", toggleNav)

  $stickynav.removeClass("hidden")
  $stickynav.slideUp(0)
  checkScroll()
  isOpen()

  //Metodo para la galeria slider
  setInterval(()=>{
    currentPosition += 1
    if(currentPosition>imgsQuantity){
      currentPosition = 0
    }
    $("#gallery .inner").css({left : "-"+currentPosition*100+"%"})
  }, 5000)

  $(window).scroll(checkScroll)

  function toggleNav(menuItem){
    $("#responsive-nav ul").toggleClass("active")
    $("#menu-opener").toggleClass("glyphicon-menu-hamburger") //Se pone la de la hamburguesa porque es la primera que aparece
  }
  function checkScroll() {
    const inBottom = isInBottom()
    if(inBottom && !sticky){
      sticky = true
      stickNavigation()
    }
    if(!inBottom && sticky){
      sticky = false
      unstickNavigation()
    }
  }

  function stickNavigation(){
    $("#description").addClass("fixed").removeClass("absolute")
    $("#navigation").slideUp("fast")
    $("#sticky-navigation").slideDown("fast")
  }

  function unstickNavigation(){
    $("#description").removeClass("fixed").addClass("absolute")
    $("#navigation").slideDown("fast")
    $("#sticky-navigation").slideUp("fast")
  }

  function isInBottom(){
      const $description = $("#description")
      const descriptHeight = $description.height()

      return $(window).scrollTop() > $(window).height() - (descriptHeight*2)
  }

  function isOpen(){ //Para modificar si esta abierto o cerrado
    let date = new Date()
    let horario = { "abre": 10, "cierra":20}
    const currentHour = date.getHours()
    if(currentHour < horario.abre || currentHour > horario.cierra){
      $("#isOpen").html(`Cerrado </br> Horario: ${horario.abre}:00 - ${horario.cierra}:00 hrs`)
    }
  }

})()

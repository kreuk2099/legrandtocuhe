"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();!function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"get",value:function(e){return navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){e({lat:n.coords.latitude,lng:n.coords.longitude})}):alert("No es posible detectar la posicion donde te ubicas"),{lat:0,lng:0}}}]),e}(),n={lat:19.3906274,lng:-99.0797393};google.maps.event.addDomListener(window,"load",function(){var t=new google.maps.Map(document.getElementById("map"),{center:n,zoom:15});new google.maps.Marker({map:t,position:n,title:"Le Grand Touché",visible:!0,animation:google.maps.Animation.BOUNCE}),e.get(function(e){var t=new google.maps.LatLng(e.lat,e.lng),a=new google.maps.LatLng(n.lat,n.lng);(new google.maps.DistanceMatrixService).getDistanceMatrix({origins:[t],destinations:[a],travelMode:google.maps.TravelMode.DRIVING},function(e,n){if(n===google.maps.DistanceMatrixStatus.OK){var t=e.rows[0].elements[0];document.querySelector("#mesaageMap").innerHTML="\n                                                                Estás a "+t.distance.text+" o\n                                                                "+t.duration.text+' de\n                                                                <span class="great-vibes font-size-medium">Le Grand Touchê -  55 5756 2858</span>\n                                                              '}})})})}(),$.fn.formObject=function(){var e={};return $.each($(this).serializeArray(),function(r,n){e[n.name]=n.value||""}),e};_createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js");var Navigation=function(){function e(n){_classCallCheck(this,e),this.items=document.querySelectorAll(n),this.bindEvents()}return _createClass(e,[{key:"bindEvents",value:function(){var e=this;this.items.forEach(function(n,t){n.addEventListener("click",e.scrollToMenuLink)})}},{key:"scrollToMenuLink",value:function(e){var n=e.currentTarget.getAttribute("data-link");$("html, body").animate({scrollTop:$(n).offset().top},300)}}]),e}();!function(){function e(e){$("#responsive-nav ul").toggleClass("active"),$("#menu-opener").toggleClass("glyphicon-menu-hamburger")}function n(){var e=function(){var e=$("#description").height();return $(window).scrollTop()>$(window).height()-2*e}();e&&!t&&(t=!0,$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")),!e&&t&&(t=!1,$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast"))}var t=!1,i=0,a=$("[data-name='image-counter']").attr("content"),r=$("#sticky-navigation");new Navigation(".menu-link"),$("#menu-opener").on("click",e),$(".menu-link").on("click",e),r.removeClass("hidden"),r.slideUp(0),n(),function(){var t=(new Date).getHours();(t<10||t>20)&&$("#isOpen").html("Cerrado </br> Horario: 10:00 - 20:00 hrs")}(),setInterval(function(){(i+=1)>a&&(i=0),$("#gallery .inner").css({left:"-"+100*i+"%"})},5e3),$(window).scroll(n)}(),function(){function t(){document.querySelector(a).checkValidity()?n($(a)):e($(a).find(".input:invalid").first().parent())}function e(t){$(".step.active").removeClass("active"),t.addClass("active"),t.find(".input").focus();var e=t.index(".step")+1;$(".path-step.active").removeClass("active"),$(".path-step:nth-child("+e+")").addClass("active")}function n(t){$.post(i,t.formObject()).then(function(){t.slideUp("fast"),$("#info-form").html("Hemos recibido tu mensaje. Nos podremos en contacto muy pronto.")})}var a="#contact-form",i="https://mailthis.to/fgc.2007@hotmail.com";$(".step textarea").on("keydown",function(t){13==t.keyCode&&(console.log("Se presiono enter"),t.preventDefault(),$(t.target).blur())}),$(".path-step").on("click",function(t){$(".path-step.active").removeClass("active");var n=$(t.target);n.addClass("active");var a=n.index(".path-step")+1;e($(".step:nth-child("+a+")"))}),$(a).find(".input").on("change",function(n){var a=$(n.target).parent().next(".step");a.length>0?e(a):t()}),$(a).on("submit",function(t){return t.preventDefault(),n($(this)),!1})}();
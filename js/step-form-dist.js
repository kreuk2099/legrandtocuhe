"use strict";!function(){function t(){if(document.querySelector(o).checkValidity())n($(o));else{e($(o).find(".input:invalid").first().parent())}}function e(t){$(".step.active").removeClass("active"),t.addClass("active"),t.find(".input").focus();var e=t.index(".step")+1;$(".path-step.active").removeClass("active"),$(".path-step:nth-child("+e+")").addClass("active")}function n(t){console.log(t.formObject()),$.post(a,t.formObject()).then(function(){t.slideUp("fast"),$("#info-form").html("Hemos recibido tu mensaje. Nos podremos en contacto muy pronto.")})}var o="#contact-form",a="https://mailthis.to/fgc.2007@hotmail.com";$(".step textarea").on("keydown",function(t){13==t.keyCode&&(console.log("Se presiono enter"),t.preventDefault(),$(t.target).blur())}),$(".path-step").on("click",function(t){$(".path-step.active").removeClass("active");var n=$(t.target);n.addClass("active");var o=n.index(".path-step")+1;e($(".step:nth-child("+o+")"))}),$(o).find(".input").on("change",function(n){var o=$(n.target).parent().next(".step");o.length>0?e(o):t()}),$(o).on("submit",function(t){return t.preventDefault(),n($(this)),!1})}();
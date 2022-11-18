$(document).ready(function(){
    // TOOLTIPS
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // CAMBIO COLOR NAV SCROLL
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

    // CAMBIO DE COLOR
    $(".icono").on( "mouseover", function() {
          $(this).css({
            "color":"#373A3C",
            "background-color":"lightyellow",
          });
        });
        
    $(".icono").on( "mouseout", function() {
          $(this).css({
            "color":"white",
            "background-color":"rgb(13,202,240)",
          });
        });
        
    // OCULTAR INFORMACION RECETAS RELACIONADAS
    $( "#icono1" ).click(function() {
        $( "#ocultar1" ).fadeToggle(100);
    });

    $( "#icono2" ).click(function() {
        $( "#ocultar2" ).fadeToggle(100);
    });

    $( "#icono3" ).click(function() {
        $( "#ocultar3" ).fadeToggle(100);
    });

    // ALERTA BOTON ENVIAR
    $( "#enviar" ).click(function() {
        alert( "Mensaje enviado correctamente." );
      });
});
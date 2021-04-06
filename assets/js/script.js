// cuando la carga de la pagina finalice
$(document).ready(function(){
    // TOOLTIPS
    $('[data-toggle="tooltip"]').tooltip()

    $('[data-toggle="popover"]').popover()

    // esto no se especifica, pero el nav al hacer scroll
    // se pierde con las letras blancas del resto de las
    // secciones, asi que le cambié el color de fondo 
    // para destacar la barra para cuando se pasan las
    // imagenes del slider
    window.onscroll = function (e) {
        if ($(this).scrollTop() > 900){
            $("nav").removeClass("bg-transparent");

            $("nav").addClass("bg-info");
        }else{
            $("nav").removeClass("bg-info");

            $("nav").addClass("bg-transparent");
        }
    }
    
    // añadimos el smooth scrolling
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
    
            $('html, body').animate( 
                {
                    scrollTop: $(hash).offset().top
                }, 900, function(){
                    window.location.hash = hash;
                }
            );
        }
    });

    // lo dejamos asi por mientras
    $( "#card1" ).click( function(){
        $( "#card2" ).toggle( 'slow' );
        $( "#card3" ).toggle( 'slow' );
        $( "#card4" ).toggle( 'slow' );
    } )

    $( "#card2" ).click( function(){
        $( "#card1" ).toggle( 'slow' );
        $( "#card3" ).toggle( 'slow' );
        $( "#card4" ).toggle( 'slow' );
    } )

    $( "#card3" ).click( function(){
        $( "#card1" ).toggle( 'slow' );
        $( "#card2" ).toggle( 'slow' );
        $( "#card4" ).toggle( 'slow' );
    } )

    $( "#card4" ).click( function(){
        $( "#card1" ).toggle( 'slow' );
        $( "#card2" ).toggle( 'slow' );
        $( "#card3" ).toggle( 'slow' );
    } )
});
// esto no se especifica, pero el nav al hacer scroll
// se pierde con las letras blancas del resto de las
// secciones, asi que le cambié el color de fondo 
// para destacar la barra para cuando se pasan las
// imagenes del slider
window.onscroll = function (e) {
    // #17a2b8!important
    console.log( 'scrolling', e )
    if ($(this).scrollTop() > 900){

        $("nav").removeClass("bg-transparent")
        $("nav").addClass("bg-info")
    }else{
        $("nav").removeClass("bg-info")
        $("nav").addClass("bg-transparent")
    }
} 
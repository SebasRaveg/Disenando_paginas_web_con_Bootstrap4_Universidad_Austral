$(function(){

    $("[data-toggle='tooltip']").tooltip()
    $("[data-toggle='popover']").popover()
    $('.carousel').carousel({
      interval: 5000 
    })

    $('#Pedido').on('show.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
      console.log('El modal Pedido se esta mostrando') //e evento 
      $('#pedidoBtn').prop('disabled', true) //Acceder a las propiedades
    })
    $('#Pedido').on('shown.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
      console.log('El modal Pedido se mostro') //e evento 
    })
    $('#Pedido').on('hide.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
      console.log('El modal Pedido se oculta') //e evento 
    })
    $('#Pedido').on('hidden.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
      console.log('El modal Pedido se oculto') //e evento 
      $('#pedidoBtn').prop('disabled', false) //Acceder a las propiedades
    })

    $('#contacto').on('show.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
        console.log('El modal Pedido se esta mostrando') //e evento 
        $('#comentarioBtn').removeClass('btn-comentario')
        $('#comentarioBtn').addClass('btn-comentario2')
        $('#comentarioBtn').prop('disabled', true); //Acceder a las propiedades
    })
    $('#contacto').on('shown.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
        console.log('El modal Pedido se mostro') //e evento 
    })
    $('#comentarioBtn').on('hide.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
        console.log('El modal Pedido se oculta') //e evento 
    })
    $('#contacto').on('hidden.bs.modal', function(e){ // on sintaxis de jquery para suscribir eventos  
        console.log('El modal Pedido se oculto'); //e evento 
        $('#comentarioBtn').removeClass('btn-comentario2')
        $('#comentarioBtn').addClass('btn-comentario')
        $('#comentarioBtn').prop('disabled', false); //Acceder a las propiedades
    })
})

function pregunta(){
    if (confirm('¿Estas seguro de enviar este Comentario?')){
      document.pagina.submit()
    }
}
$(document).ready(function(){
   $('.formulaire').envoyer(function(){

    const nom = $('.nom'). val();
    const message = $('.message') .val();

    $.post('send.php',{nom:nom,message:message},function(donnees){
        $('.afficher') .text(donnees);

    });
    return false;

   });

});
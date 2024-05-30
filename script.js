$(document).ready(function(){
   $('.formulaire').envoyer(function(){

    const nom = $('.nom'). val();
    const message = $('.message') .val();

    alert(nom + message );



   });

});
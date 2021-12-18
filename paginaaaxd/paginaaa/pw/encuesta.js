$( document ).ready(function(){
    $("#alerta-exito").hide();
  });
  
  $("#btnRegistra").click(function(){
     $("#alerta-exito").show("slow");
  });
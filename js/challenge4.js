$( "#challenge4_form" ).submit(function( event ) {
    var result = $(this).serializeArray();
    $("#nmError").addClass("errormsg");
    $("#addrError").addClass("errormsg");
    console.log(result);
    if(result[0].value==""){
        $("#nmError").removeClass("errormsg");
        //$("#nmError").attr("display","block");
        event.preventDefault();
    }
    if(result[1].value==""){
        $("#addrError").removeClass("errormsg");
        event.preventDefault();
    }
    // if((result[0].value!="")&&(result[1].value!="")){
    //
    // }

});

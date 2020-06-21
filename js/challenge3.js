$( "#ch3form" ).submit(function( event ) {
    var result = $(this).serializeArray();
    console.log(result);
    console.log(result.length);
    if(result.length<2){
        if(result.length==0){
            alert( "You need to select both class standing and graduation date." );
            event.preventDefault();
        } else if (result[0].name =="standing"){
            alert( "You need to select graduation date." );
            event.preventDefault();
        } else {
            alert( "You need to select a class standing." );
            event.preventDefault();
        }

    }
});
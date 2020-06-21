$("#useAddress").click(function(){
    var homeEnter = $("#home");
    if (this.checked !== true) {

        homeEnter.val('');
        homeEnter.css("backgroundColor", "#FFFFFF");
        homeEnter.removeAttr('disabled');
    } else {
        var myAddress = $("#bill").val();
        homeEnter.val(myAddress);
        homeEnter.css("backgroundColor", "#D2D2D2");
        homeEnter.attr('disabled', 'disabled');

    };

});



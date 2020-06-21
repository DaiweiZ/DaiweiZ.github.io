$(".thumbnail").hover(function(){
    //console.log(this);
    var image_link = this.getAttribute('src');
    var alt_text = this.getAttribute("alt");
    //console.log(image_link);
    $("#largeDiv").css("background-image", "url("+image_link+")").css("background-color", "#FFFFFF");
    $("#largeDiv").text(alt_text);
},function(){
    $("#largeDiv").css("background-image","none").css("background-color", "#6E3DFF");
    $("#largeDiv").text("Hover over an image below to display the image and the alt text.");

});
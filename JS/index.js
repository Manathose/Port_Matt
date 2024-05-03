console.log("test");

$(document).ready(function(){
$(".dev-menu").hover(function(){
    $(".dev-menu").css(
        "background-color", "blue");
}, function(){
    $(".dev-menu").css
        ("background-color", "transparent");
    
});
    });

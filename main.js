$(document).on("click","#button",function() {

    $('html, body').animate({
        scrollTop: $("#section3").offset().top
    }, 800);
});
$(document).on('click',"input",function(){
var a = $('#submission')[0]
var b = $(a).children()[0]
$($(b)[0])[0].value = '';
})

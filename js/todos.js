// cross out items on the list and change color
$("li").click(function () {
    $(this).toggleClass("completed");
});

$("span").click(function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if(event.which ===13){
        var text = $(this).val();
        $("ul").append("<li><span>X</span> "+text+"</li>");
    }
})

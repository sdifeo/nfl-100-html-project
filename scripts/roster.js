$( document ).ready(function(){
    $(".container").find(".player").click(function(){
        $(this).parent().find(".modal").addClass("openModal")
    });

    $(".container").find(".closeBtn").click(function(){
        $(this).parent().parent().removeClass("openModal")
        // $(this).child().trigger("pause")
    });

    $(".container").find(".closeBtn").click(function(){

    });
});


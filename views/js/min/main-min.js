jQuery(document).ready(function() {
    if($(".cd-stretchy-nav").length>0){
        var n=$(".cd-stretchy-nav");
        n.each(function() {
            var n=$(this)
            var t=n.find(".cd-nav-trigger");
            t.on("click",function(t) {
                t.preventDefault(),n.toggleClass("nav-is-visible")
            })
        }),$(document).on("click",function(t) {
            !$(t.target).is(".cd-nav-trigger") && !$(t.target).is(".cd-nav-trigger span") && n.removeClass("nav-is-visible")
        })
    }
});
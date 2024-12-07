var elem = document.querySelectorAll(".elem");

elem.forEach(function(val) {
    val.addEventListener("mouseenter", function() {
        if (val.childNodes.length > 3) {
            val.childNodes[3].style.opacity = 1;
        }
    });
    val.addEventListener("mouseleave", function() {
        if (val.childNodes.length > 3) {
            val.childNodes[3].style.opacity = 0;
        }
    });
    val.addEventListener("mousemove", function(e) {
        if (val.childNodes.length > 3) {
            val.childNodes[3].style.left = e.x + "px";
            val.childNodes[3].style.top = e.y + "px";
        }
    });
});

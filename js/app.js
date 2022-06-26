(function ($) {
    "use strict";

    let toolTip = document.getElementById("tooltip");

    window.addEventListener("mousemove", toolTipXY);

    function toolTipXY(e) {
        let x = e.clientX,
            y = e.clientY;
        toolTip.style.top = y + 20 + "px";
        toolTip.style.left = x + 20 + "px";
    }   
})(jQuery);

# wow-tooltip-and-button live https://jibon87.github.io/wow-tooltip-and-button/
```
tooltip and button

1.  js--link ---> jquery.min.js

2.  css--link ---> style.css [ ]

3.  html 
    {
    index.html [ ]
    }
    
4.  active js {

    let toolTip = document.getElementById("tooltip");

    window.addEventListener("mousemove", toolTipXY);

    function toolTipXY(e) {
        let x = e.clientX,
            y = e.clientY;
        toolTip.style.top = y + 20 + "px";
        toolTip.style.left = x + 20 + "px";
    }   
}
5.  note [ 
           
         ]

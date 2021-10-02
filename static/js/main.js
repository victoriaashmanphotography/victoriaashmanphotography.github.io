

var protectContent = () => {
    var disableContextMenuOn = (elements) => {
        elements.forEach(element => {
            element.setAttribute("oncontextmenu", "return false")
        });
    }
    
    var imgs = document.querySelectorAll("img");
    var protectedElements = document.querySelectorAll(".protected");
    disableContextMenuOn(imgs);
    disableContextMenuOn(protectedElements);
}

protectContent();

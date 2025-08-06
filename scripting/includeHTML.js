/*
    Includes a block of HTML code at the given location.
    The location and code snippet are designated by the tag include-html="file.html" in a div.
    The div element is removed after the HTML content is inserted.
*/
function includeHTML() {
    var elements;
    var i;
    var elem;
    var file;
    var httpReq;

    elements = document.getElementsByTagName("div")

    for(var i=0; i<elements.length; i++) {
        elem = elements[i];

        file = elem.getAttribute("include-html");
        if(file) {
            httpReq = new XMLHttpRequest();
            httpReq.onreadystatechange = function() {
                if(this.readyState == 4) {
                    if(this.status == 200) {
                        elem.insertAdjacentHTML('beforebegin', this.responseText); // insert HTML before div element
                    }
                    if(this.status == 404) {
                        elem.insertAdjacentHTML('beforebegin', 'Page not found.');
                    }
                    elem.parentNode.removeChild(elem); // remove the div element
                    includeHTML();
                }
            }
            httpReq.open("GET", file, true);
            httpReq.send();
            return;
        }
    }
}
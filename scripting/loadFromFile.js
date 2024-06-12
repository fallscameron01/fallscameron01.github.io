/*
    Loads text from a file.
*/

const MY_URL = "";

function loadFromFile(element, filename)
{
    var hash = "#".concat(element);
    var dot = ".".concat(element);
    var url = MY_URL.concat(filename);
    $(document).ready( function() {
        $(hash).ready( function() {
            $(dot).load(url);
            console.log(url);
        });
    }); 
}
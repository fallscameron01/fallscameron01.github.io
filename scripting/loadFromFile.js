const MY_URL = "https://fallscameron01.github.io/";

function loadFromFile(element, filename)
{
    var hash = "#".concat(element);
    var dot = ".".concat(element);
    var url = MY_URL.concat(filename);
    $(document).ready( function() {
        $(hash).ready( function() {
            $(dot).load(url);
        });
    }); 
}
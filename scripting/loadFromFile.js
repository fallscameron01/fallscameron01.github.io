function loadFromFile(element, filename)
{
    var hash = "#".concat(element);
    var dot = ".".concat(element);
    var url = ($(location).attr('href')).concat("/", filename);
    $(document).ready( function() {
        $(hash).ready( function() {
            $(dot).load(url);
        });
    }); 
}
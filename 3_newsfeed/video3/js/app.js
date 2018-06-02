const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank'); // attr = getter setter on attributes
$pdfs.attr('download', true); 


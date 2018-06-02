const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$odd.css('borderBottom', '1px solid gray');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');



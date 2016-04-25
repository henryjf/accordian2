var section = $('.para');
var header = $('header');

header.on('click', function(event){
  event.preventDefault();

section.toggleClass('hidden');

section.addClass('hidden');

var parent = $(this).parent();
parent.removeClass('hidden');

console.log(event);

});

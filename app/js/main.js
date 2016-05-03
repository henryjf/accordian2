var para = $('.para');
var header = $('header');

header.on('click', function(event){
  event.preventDefault();

  para.toggleClass('hidden');

var parent = $(this).parent();
parent.removeClass('hidden').addClass('hidden');


// parent.toggleClass('hidden');

// para.removeClass('hidden');


// console.log(event);

});

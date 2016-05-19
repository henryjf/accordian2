var head1= $('.head1');
var header = $('header');
var para = $('.para');
var one = $('.one');


head1.on('click', function(event){
  event.preventDefault();

  head1.next().toggleClass('hidden');


  // var header = $(this).header();
  // header.removeClass('hidden')


});
// console.log(header.on);





// parent.toggleClass('hidden');

// para.removeClass('hidden');


// console.log(event);

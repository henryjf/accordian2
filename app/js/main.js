var head1= $('.head1');
var head2= $('.head2');
var head3= $('.head3');

var header = $('header');
var para = $('.para');
var one = $('.one');


head1.on('click', function(event){
  event.preventDefault();

  head1.next().toggleClass('hidden');

});

  head2.on('click', function(event){
    event.preventDefault();

    head2.next().toggleClass('hidden');
  });

  head3.on('click', function(event){
    event.preventDefault();

    head3.next().toggleClass('hidden');

  });



  // var header = $(this).header();
  // header.removeClass('hidden')


// console.log(header.on);





// parent.toggleClass('hidden');

// para.removeClass('hidden');


// console.log(event);

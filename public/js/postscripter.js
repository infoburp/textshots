$('.sharepost').click(function() {
  $('.sharepost').text('Sharing Post...');
  draw();
  var author_name = $('#author_name').text()
  var url = document.URL
  var message = "Check out this post by @"+author_name+" "+url;

  $.post('/tweet', { image: $('#image').attr('src'), message: message }, function(data) {
    $('.sharepost').text('Your Tweet is Betwotten');
  });
});

// function draw() {
//   html2canvas(document.getElementById('t'), {
//     allowTaint: true,
//     onrendered: function(canvas) {
//       document.getElementById('image').src = canvas.toDataURL();
//     }
//   });
// }

// window.onload = draw();

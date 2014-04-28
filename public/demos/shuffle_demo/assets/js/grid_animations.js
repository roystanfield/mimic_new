$(document).ready(function() {
  
  

// Make an array of grid styles and connect it to the shuffle button.

  var grid_classes = ['grid_1','grid_2', 'grid_3'];
  var grid_classes_length = grid_classes.length;


  $('.shuffle_button').click(function() {

    for (var i=0; i<grid_classes_length; i++) 
      {
        var current_class = grid_classes[i];
        if($('#image_grid').hasClass(current_class)) {
          var next_index = i + 1;
          if(next_index == grid_classes_length) {
            next_index=0;
          }

          var next_class = grid_classes[next_index];
          $('#image_grid').removeClass(current_class).addClass(next_class);
          return;
        };
      }
  });


  function get_window_height() {
    var window_width = $(window).width(),
        window_height = $(window).height(),
        grid_height = window_height * 0.8,
        info_height = $('#info .wrapper').height();

    //console.log(window_height);
    //console.log(grid_height);
    //console.log(info_height);

    if(window_width > 940) {
      $('.grid').css('height',grid_height);
    }
    if(window_width <= 940) {
      //subtract info_height from window_height and add some extra spacing.
      var window_thin_grid_height = window_height - (info_height + 60);
      $('.grid').css('height',window_thin_grid_height);

    }
  }

  $(window).resize(function() {
    get_window_height();
  });

  $(window).load(function(){
    get_window_height();
  });
  

});















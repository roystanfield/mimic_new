// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




$(function () {
  // var current_page = 0;
  // var pages = ['/mixel_acquired_by_etsy', '/sound_and_vision'];

  // $('a#next').on('click', function (e) {
  //   current_page++;
  //   current_page = current_page == pages.length ? 0 : current_page;
  //   load_page();
  //   e.preventDefault();
  // });

  // $('a#previous').on('click', function (e) {
  //   current_page--;
  //   current_page = current_page < 0 ? pages.length-1 : current_page;
  //   load_page();
  //   e.preventDefault();
  // });

  // function load_page () {
  //   $.ajax({
  //     url: pages[current_page]
  //   }).done(function (html) {
  //     $('section#post_wrapper').html(html);
  //   });
  // }


  $('#info_button').click(function(e) {

    if ($('#info_button').hasClass('hiding')) {
      console.log("clicker");
      $(this).removeClass('hiding').addClass('showing');
      $('#info').removeClass('hide').addClass('show');
    } else {
      $(this).removeClass('showing').addClass('hiding');
      $('#info').removeClass('show').addClass('hide');
    }
    e.preventDefault();

    $('#close_info').click(function(e) {
      $('#info_button').removeClass('showing').addClass('hiding');
      $('#info').removeClass('show').addClass('hide');
      e.preventDefault();
    });
  });

  $("#to_top").click(function(e){
    $("html, body").animate( {scrollTop:0}, 600 )
    e.preventDefault();
  });


  // Sticky headers for artwork page

  function UpdateTableHeaders() {
     $("#artwork_wrapper .post").each(function() {
     
         var el             = $(this),
             offset         = el.offset(),
             scrollTop      = $(window).scrollTop(),
             floatingHeader = $(".floating_header", this)
         
         if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
             floatingHeader.css({
              "visibility": "visible"
             });
         } else {
             floatingHeader.css({
              "visibility": "hidden"
             });      
         };
     });
  }


   var clonedHeaderRow;

   $("#artwork_wrapper .post").each(function() {
       clonedHeaderRow = $("h3", this);
       clonedHeaderRow
         .before(clonedHeaderRow.clone())
         .css("width", 100)
         .addClass("floating_header");
         
   });
   
   $(window)
    .scroll(UpdateTableHeaders)
    .trigger("scroll");
   

});


// $(document).ready(function(){
//   function t(){
//     $(e).removeClass("hide").addClass("show")
//   }function n(){
//     $(e).removeClass("show").addClass("hide")
//   }

//   var e=$("#info");
//   $(e).addClass("hide")

//   $("#info_button").click(function(r){
//     $(e).hasClass("hide")?t():n()
//     r.preventDefault()
//   })

//   $("#close_info").click(function(e){
//     n(),e.preventDefault()
//   })

//   $(".top").click(function(){
//     console.log("clicked")
//     $("html, body").animate({scrollTop:0},600)
//   })








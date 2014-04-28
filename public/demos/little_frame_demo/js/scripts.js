
(function( $, Modernizr){
  
function TestThing() {
  // properties
  this.scrolled = 0;
  this.levels = 3;
  this.distance3d = 1000;
  this.levelGuide = {
    '#top' : 0,
    '#middle' : 1,
    '#bottom' : 2
  };
  
  // cache some jQuery objects
  this.$window = $(window);
  this.$document = $(document);
  
  // which method should be used to return CSS transform styles
  this.getScrollTransform = Modernizr.csstransforms3d ? 
    this.getScroll3DTransform : this.getScroll2DTransform;
  
  // bind constructor to window.scroll event
  if ( Modernizr.csstransforms ) {
    window.addEventListener( 'scroll', this, false);
  }
  
}


// enables constructor to be used within event listener
// like obj.addEventListener( eventName, this, false )

// Ask Angad.
TestThing.prototype.handleEvent = function( event ) {
  if ( this[event.type] ) {
    this[event.type](event);
  }
};




TestThing.prototype.getScroll3DTransform = function( scroll ) {
  var z = ( scroll * (this.levels - 1) * this.distance3d ),
      // how close are we to the nearest level
      leveledZ = this.distance3d / 2 - Math.abs( ( z % this.distance3d ) - this.distance3d / 2 ),
      style;
  
  // if close to nearest level, 
  // ensures that text doesn't get fuzzy after nav is clicked
  if ( leveledZ < 5 ) {
    z = Math.round( z / this.distance3d ) * this.distance3d;
  }
  
  style = {
    '-webkit-transform' : 'translate3d( 0, 0, ' + z + 'px )'
  };
  return style;
};




TestThing.prototype.scroll = function( event ) {

  // normalize scroll value from 0 to 1
  this.scrolled = this.$window.scrollTop() / ( this.$document.height() - this.$window.height() );

  this.transformScroll( this.scrolled );
  
};



// where the magic happens
// applies transform to content from position of scroll
TestThing.prototype.transformScroll = function( scroll ) {
  this.$content.css( this.getScrollTransform( scroll ) );
};




// BeerCamp '11 Global object
// initialize Beercamper
var TT = new TestThing();

$(function(){
  
  TT.$content = $('#content');
   
  
});




})( jQuery, window.Modernizr );
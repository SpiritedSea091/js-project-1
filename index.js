let active_slide = 1;

$("#left-arrow").click(function(){
  prev_slide();
  display_carousel_slide();
});

$("#right-arrow").click(function(){
  next_slide();
  display_carousel_slide();
  // display_carousel_slide(active_slide);
})
//
function next_slide() {
  if(active_slide<3) active_slide++;
  else active_slide = 1;
}

function prev_slide() {
  if(active_slide>1) active_slide--;
  else active_slide = 3;
}

//
function display_carousel_slide(){
  if(active_slide === 1){
    // Displaying text
    $("#text-slide-2").addClass("hide");
    $("#text-slide-3").addClass("hide");
    $("#text-slide-1").removeClass("hide");
    // Displaying image
    $(".desktop-img").attr("src", "images/desktop-image-hero-1.jpg");
  }
  if(active_slide === 2){
    // Displaying text
    $("#text-slide-2").removeClass("hide");
    $("#text-slide-1").addClass("hide");
    $("#text-slide-3").addClass("hide");
    // Displaying image
    $(".desktop-img").attr("src", "images/desktop-image-hero-2.jpg");
  }
  if(active_slide === 3){
    // Displaying text
    $("#text-slide-3").removeClass("hide");
    $("#text-slide-1").addClass("hide");
    $("#text-slide-2").addClass("hide");
    // Displaying image
    $(".desktop-img").attr("src", "images/desktop-image-hero-3.jpg");
  }



}

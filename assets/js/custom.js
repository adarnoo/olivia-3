// Video toggle
$('body').on('click', '#or-splash-toggle', function(e) {
  e.preventDefault();
  $(".or-header-container").addClass("or-header-container--show");
  $(".or-splash-container").addClass("or-splash-container--close");
  $(".or-scroll").addClass("or-scroll--active");
});

// Video player
function playVideo() {
        $('#or-play-video').trigger('play');
    }

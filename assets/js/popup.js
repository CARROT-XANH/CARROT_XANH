jQuery(document).ready(function($) {
  $('.gallery-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  $('.play-video-popup').magnificPopup({
    type: 'iframe',
  });
});

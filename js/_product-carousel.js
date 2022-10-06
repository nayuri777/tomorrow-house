const productCarousel = tns({
  container: '.product-carousel .slider-list',
  gutter: 30,
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true, //true로 하면 모바일에서 에러 안뜸.
})

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  gutter: 4,
  controls: false,
  controlsContainer: '.user-gallery.is-mobile .user-gallery-controls',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  edgePadding: 16,
  loop: false,
  preventScrollOnTouch: true,
  arrowKeys: true,
  mouseDrag: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6,
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  edgePadding: 75,
  loop: false,
  preventScrollOnTouch: true,
  arrowKeys: true,
  mouseDrag: true,
})

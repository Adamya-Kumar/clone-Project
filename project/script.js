var crs = document.querySelector('#cursor')
var crs_blur = document.querySelector('#cursor-blur')
document.addEventListener('mousemove', function (event) {
  crs.style.left = event.x + 'px'
  crs.style.top = event.y + 'px'
  crs_blur.style.left = event.x - 200 + 'px'
  crs_blur.style.top = event.y - 200 + 'px'
})

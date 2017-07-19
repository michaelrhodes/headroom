var onscroll = require('on-scroll')
var min = Math.min
var max = Math.max

module.exports = headroom

function headroom (el, view) {
  if (!(view = view || el.parentNode)) return
  var eo = el.offsetHeight + el.offsetTop
  var y = 0, oy, hy = 0, t = 1.875
  return onscroll(view, function (ex, ey) {
    oy = y, y = max(0, ey)
    if (y > oy && hy < eo) hy += min((y - oy) / t, eo - hy)
    if (y < oy && hy > 0) hy -= min((oy - y) / t, hy)
    el.style.transform = 'translate3d(0, -' + hy + 'px, 0)'
  })
}

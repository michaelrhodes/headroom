var onscroll = require('on-scroll')
var min = Math.min
var max = Math.max

module.exports = headroom

function headroom (el, view) {
  if (!(view = view || el.parentNode)) return
  var eo = el.offsetHeight + el.offsetTop
  var dv = view.ownerDocument.defaultView
  var vh = view.scrollHeight - dv.innerHeight
  var y = 0, oy, hy = 0
  return onscroll(view, function (ex, ey) {
    oy = y, y = min(max(0, ey), vh)
    if (y > oy && hy < eo) hy += min((y - oy), eo - hy)
    if (y < oy && hy > 0) hy -= min((oy - y), hy)
    el.style.transform = 'translate3d(0, -' + hy + 'px, 0)'
  })
}

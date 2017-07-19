(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.headroom = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"on-scroll":2}],2:[function(require,module,exports){
module.exports = onscroll

function onscroll (view, cb) {
  var x, y, ox, oy, cx, cy, rid
  var stopped = false

  rid = requestAnimationFrame(init)

  function init () {
    x = view.scrollLeft
    y = view.scrollTop
    cb(x, y)
    rid = requestAnimationFrame(check)
  }

  function check () {
    if (stopped) return
    ox = x, oy = y
    x = view.scrollLeft
    y = view.scrollTop
    cx = ox !== x
    cy = oy !== y
    if (cx || cy) cb(x, y)
    rid = requestAnimationFrame(check)
  }

  return function stop () {
    cancelAnimationFrame(rid)
    stopped = true
  }
}

},{}]},{},[1])(1)
});
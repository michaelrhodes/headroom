# headroom
a tiny header-hiding module that works intuitively on mobile devices

## install
```sh
npm install michaelrhodes/headroom#1.1.1
```

## use
```js
var headroom = require('headroom')
var header = document.querySelector('header.fixed')

headroom(header, document.scrollingElement)
```

## obey
[MIT](http://opensource.org/licenses/MIT)

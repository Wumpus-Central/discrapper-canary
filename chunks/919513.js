r.d(n, {
    JP: function () {
        return s;
    },
    sM: function () {
        return l;
    },
    up: function () {
        return o;
    }
});
var i = r(573654);
function a(e) {
    return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function o(e) {
    (0, i.k)('function' == typeof e.canDrag, 'Expected canDrag to be a function.'), (0, i.k)('function' == typeof e.beginDrag, 'Expected beginDrag to be a function.'), (0, i.k)('function' == typeof e.endDrag, 'Expected endDrag to be a function.');
}
function s(e) {
    (0, i.k)('function' == typeof e.canDrop, 'Expected canDrop to be a function.'), (0, i.k)('function' == typeof e.hover, 'Expected hover to be a function.'), (0, i.k)('function' == typeof e.drop, 'Expected beginDrag to be a function.');
}
function l(e, n) {
    if (n && Array.isArray(e)) {
        e.forEach(function (e) {
            return l(e, !1);
        });
        return;
    }
    (0, i.k)('string' == typeof e || 'symbol' === a(e), n ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

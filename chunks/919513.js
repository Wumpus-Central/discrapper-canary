n.d(t, {
    JP: () => s,
    sM: () => o,
    up: () => a
});
var i = n(573654);
function r(e) {
    return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function a(e) {
    (0, i.k)('function' == typeof e.canDrag, 'Expected canDrag to be a function.'), (0, i.k)('function' == typeof e.beginDrag, 'Expected beginDrag to be a function.'), (0, i.k)('function' == typeof e.endDrag, 'Expected endDrag to be a function.');
}
function s(e) {
    (0, i.k)('function' == typeof e.canDrop, 'Expected canDrop to be a function.'), (0, i.k)('function' == typeof e.hover, 'Expected hover to be a function.'), (0, i.k)('function' == typeof e.drop, 'Expected beginDrag to be a function.');
}
function o(e, t) {
    if (t && Array.isArray(e)) {
        e.forEach(function (e) {
            return o(e, !1);
        });
        return;
    }
    (0, i.k)('string' == typeof e || 'symbol' === r(e), t ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

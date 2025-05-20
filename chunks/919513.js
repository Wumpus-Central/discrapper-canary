n.d(t, {
    JP: () => a,
    sM: () => s,
    up: () => o
});
var r = n(573654);
function i(e) {
    return (i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function o(e) {
    (0, r.k)('function' == typeof e.canDrag, 'Expected canDrag to be a function.'), (0, r.k)('function' == typeof e.beginDrag, 'Expected beginDrag to be a function.'), (0, r.k)('function' == typeof e.endDrag, 'Expected endDrag to be a function.');
}
function a(e) {
    (0, r.k)('function' == typeof e.canDrop, 'Expected canDrop to be a function.'), (0, r.k)('function' == typeof e.hover, 'Expected hover to be a function.'), (0, r.k)('function' == typeof e.drop, 'Expected beginDrag to be a function.');
}
function s(e, t) {
    if (t && Array.isArray(e))
        return void e.forEach(function (e) {
            return s(e, !1);
        });
    (0, r.k)('string' == typeof e || 'symbol' === i(e), t ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

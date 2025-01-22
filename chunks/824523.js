r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(571846),
    a = r(17851);
function o(e) {
    return (o =
        'function' == typeof i && 'symbol' == typeof a
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof i && e.constructor === i && e !== i.prototype ? 'symbol' : typeof e;
              })(e);
}

n.d(t, { Z: () => a });
var i = n(571846),
    r = n(17851);
function a(e) {
    return (a =
        'function' == typeof i && 'symbol' == typeof r
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof i && e.constructor === i && e !== i.prototype ? 'symbol' : typeof e;
              })(e);
}

n.d(t, { Z: () => a });
var r = n(571846),
    o = n(17851);
function a(e) {
    return (a =
        'function' == typeof r && 'symbol' == typeof o
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof r && e.constructor === r && e !== r.prototype ? 'symbol' : typeof e;
              })(e);
}

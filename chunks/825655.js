n.d(t, { Z: () => a });
var r = n(329569),
    o = n(305903);
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

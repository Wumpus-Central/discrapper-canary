n.d(t, { Z: () => o });
var r = n(571846),
    i = n(17851);
function o(e) {
    return (o =
        'function' == typeof r && 'symbol' == typeof i
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof r && e.constructor === r && e !== r.prototype ? 'symbol' : typeof e;
              })(e);
}

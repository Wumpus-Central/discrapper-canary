r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(725432),
    a = r(646391);
function o() {
    var e;
    return (o = i
        ? a((e = i)).call(e)
        : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
          }).apply(this, arguments);
}

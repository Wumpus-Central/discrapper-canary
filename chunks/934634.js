n.d(t, { Z: () => a });
var r = n(725432),
    o = n(646391);
function a() {
    return (a = r
        ? o(r).call(r)
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}

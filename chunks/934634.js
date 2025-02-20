n.d(t, { Z: () => o });
var r = n(725432),
    i = n(646391);
function o() {
    var e;
    return (o = r
        ? i((e = r)).call(e)
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}

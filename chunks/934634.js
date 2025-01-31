n.d(t, { Z: () => a });
var i = n(725432),
    r = n(646391);
function a() {
    var e;
    return (a = i
        ? r((e = i)).call(e)
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
          }).apply(this, arguments);
}

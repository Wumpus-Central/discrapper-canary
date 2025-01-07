function i() {
    return (i = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
          }).apply(null, arguments);
}
r.d(n, {
    Z: function () {
        return i;
    }
});

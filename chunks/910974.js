function i() {
    return (i = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
          }).apply(null, arguments);
}
n.d(t, { Z: () => i });

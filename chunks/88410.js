function t() {
    return (
        (e.exports = t =
            Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                      }
                      return e;
                  }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t.apply(null, arguments)
    );
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);

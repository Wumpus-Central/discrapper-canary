function t() {
    return (
        (e.exports = t =
            Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var r = arguments[t];
                          for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                      }
                      return e;
                  }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t.apply(null, arguments)
    );
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);

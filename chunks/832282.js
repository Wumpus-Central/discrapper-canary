var r = n(225063),
    i = n(993001);
function s(e, t) {
    var n;
    function a(n, i, s, o) {
        try {
            var l = e[n](i),
                u = l.value;
            return u instanceof r
                ? t.resolve(u.v).then(
                      function (e) {
                          a("next", e, s, o);
                      },
                      function (e) {
                          a("throw", e, s, o);
                      },
                  )
                : t.resolve(u).then(
                      function (e) {
                          (l.value = e), s(l);
                      },
                      function (e) {
                          return a("throw", e, s, o);
                      },
                  );
        } catch (e) {
            o(e);
        }
    }
    this.next ||
        (i(s.prototype),
        i(s.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
            return this;
        })),
        i(
            this,
            "_invoke",
            function (e, r, i) {
                function s() {
                    return new t(function (t, n) {
                        a(e, i, t, n);
                    });
                }
                return (n = n ? n.then(s, s) : s());
            },
            !0,
        );
}
(e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);

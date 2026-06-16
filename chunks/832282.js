var i = n(225063),
    r = n(993001);
(e.exports = function e(t, n) {
    var s;
    this.next ||
        (r(e.prototype),
        r(e.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
            return this;
        })),
        r(
            this,
            "_invoke",
            function (e, r, a) {
                function o() {
                    return new n(function (r, s) {
                        !(function e(r, s, a, o) {
                            try {
                                var l = t[r](s),
                                    u = l.value;
                                return u instanceof i
                                    ? n.resolve(u.v).then(
                                          function (t) {
                                              e("next", t, a, o);
                                          },
                                          function (t) {
                                              e("throw", t, a, o);
                                          },
                                      )
                                    : n.resolve(u).then(
                                          function (e) {
                                              (l.value = e), a(l);
                                          },
                                          function (t) {
                                              return e("throw", t, a, o);
                                          },
                                      );
                            } catch (e) {
                                o(e);
                            }
                        })(e, a, r, s);
                    });
                }
                return (s = s ? s.then(o, o) : o());
            },
            !0,
        );
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);

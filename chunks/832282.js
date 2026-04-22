var r = n(225063),
    i = n(993001);
(e.exports = function e(t, n) {
    var s;
    this.next ||
        (i(e.prototype),
        i(e.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
            return this;
        })),
        i(
            this,
            "_invoke",
            function (e, i, a) {
                function o() {
                    return new n(function (i, s) {
                        !(function e(i, s, a, o) {
                            try {
                                var l = t[i](s),
                                    u = l.value;
                                return u instanceof r
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
                        })(e, a, i, s);
                    });
                }
                return (s = s ? s.then(o, o) : o());
            },
            !0,
        );
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);

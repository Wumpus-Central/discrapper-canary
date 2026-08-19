var n = r(225063),
    o = r(993001);
(e.exports = function e(t, r) {
    var i;
    this.next ||
        (o(e.prototype),
        o(e.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
            return this;
        })),
        o(
            this,
            "_invoke",
            function (e, o, a) {
                function s() {
                    return new r(function (o, i) {
                        !(function e(o, i, a, s) {
                            try {
                                var l = t[o](i),
                                    u = l.value;
                                return u instanceof n
                                    ? r.resolve(u.v).then(
                                          function (t) {
                                              e("next", t, a, s);
                                          },
                                          function (t) {
                                              e("throw", t, a, s);
                                          },
                                      )
                                    : r.resolve(u).then(
                                          function (e) {
                                              (l.value = e), a(l);
                                          },
                                          function (t) {
                                              return e("throw", t, a, s);
                                          },
                                      );
                            } catch (e) {
                                s(e);
                            }
                        })(e, a, o, i);
                    });
                }
                return (i = i ? i.then(s, s) : s());
            },
            !0,
        );
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);

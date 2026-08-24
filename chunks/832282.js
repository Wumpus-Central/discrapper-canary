var n = r(225063),
    i = r(993001);
(e.exports = function e(t, r) {
    var o;
    this.next ||
        (i(e.prototype),
        i(e.prototype, ("function" == typeof Symbol && Symbol.asyncIterator) || "@asyncIterator", function () {
            return this;
        })),
        i(
            this,
            "_invoke",
            function (e, i, a) {
                function s() {
                    return new r(function (i, o) {
                        !(function e(i, o, a, s) {
                            try {
                                var l = t[i](o),
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
                        })(e, a, i, o);
                    });
                }
                return (o = o ? o.then(s, s) : s());
            },
            !0,
        );
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);

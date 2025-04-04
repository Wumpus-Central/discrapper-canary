var r = n(220159),
    o = n(253462),
    a = n(57100),
    i = n(779688),
    s = n(178476),
    c = n(971428),
    l = n(444529),
    u = n(933958),
    d = n(342930),
    p = a && a.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!a &&
                i(function () {
                    p.finally.call(
                        {
                            then: function () {}
                        },
                        function () {}
                    );
                })
        },
        {
            finally: function (e) {
                var t = l(this, s('Promise')),
                    n = c(e);
                return this.then(
                    n
                        ? function (n) {
                              return u(t, e()).then(function () {
                                  return n;
                              });
                          }
                        : e,
                    n
                        ? function (n) {
                              return u(t, e()).then(function () {
                                  throw n;
                              });
                          }
                        : e
                );
            }
        }
    ),
    !o && c(a))
) {
    var h = s('Promise').prototype.finally;
    p.finally !== h && d(p, 'finally', h, { unsafe: !0 });
}

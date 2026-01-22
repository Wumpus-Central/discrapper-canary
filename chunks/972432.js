n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(827343),
    o = n(430452),
    s = n(287809),
    d = n(824744),
    c = n(723702),
    u = n(731854),
    A = n(985018);

function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x.DEFAULT,
        f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        b = (0, i.bG)([o.A], () => o.A.getLocalVolume(e, n), [e, n]),
        g = e === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id),
        p = n === u.x.STREAM;
    return g
        ? null
        : (0, r.jsx)(l.aK1, {
              id: "user-volume",
              label: p ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
              control: (t, i) => {
                  var o, s;
                  return (0, r.jsx)(
                      l.i42,
                      ((o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, t)),
                      (s = s =
                          {
                              ref: i,
                              value: (0, d.M)(b),
                              maxValue: c.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => {
                                  a.A.setLocalVolume(e, (0, d.w)(t), n), null == f || f(t);
                              },
                              "aria-label": p ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      o),
                  );
              },
          });
}

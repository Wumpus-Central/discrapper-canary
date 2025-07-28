n.d(t, {
    T: () => c,
    Z: () => d
});
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(496675),
    o = n(388032);
function c(e, t, n) {
    let r = (0, l.e7)([s.Z], () => !s.Z.isRoleHigher(e, t, n), [e, t, n]);
    return i.useMemo(() => r && n.id === (null == t ? void 0 : t.id), [r, n, t]) ? o.intl.string(o.t.PQylOT) : r ? o.intl.string(o.t.UGIjx8) : null;
}
function d(e) {
    let { className: t, tooltipText: n, width: i = 16, height: l = 16 } = e;
    return (0, r.jsx)(a.ua7, {
        text: n,
        children: (e) => {
            var n, s;
            return (0, r.jsx)(
                'div',
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({ className: t }, e)),
                (s = s =
                    {
                        children: (0, r.jsx)(a.mBM, {
                            size: 'custom',
                            color: 'currentColor',
                            width: i,
                            height: l
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                n)
            );
        }
    });
}

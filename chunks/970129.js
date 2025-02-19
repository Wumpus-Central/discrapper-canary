n.d(t, {
    T: () => c,
    Z: () => d
});
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(496675),
    o = n(388032);
function c(e, t, n) {
    let r = (0, s.e7)([l.Z], () => !l.Z.isRoleHigher(e, t, n), [e, t, n]);
    return i.useMemo(() => r && n.id === (null == t ? void 0 : t.id), [r, n, t]) ? o.NW.string(o.t.PQylOT) : r ? o.NW.string(o.t.UGIjx8) : null;
}
function d(e) {
    let { className: t, tooltipText: n, width: i = 16, height: s = 16 } = e;
    return (0, r.jsx)(a.ua7, {
        text: n,
        children: (e) => {
            var n, l;
            return (0, r.jsx)(
                'div',
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({ className: t }, e)),
                (l = l =
                    {
                        children: (0, r.jsx)(a.mBM, {
                            size: 'custom',
                            color: 'currentColor',
                            width: i,
                            height: s
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n)
            );
        }
    });
}

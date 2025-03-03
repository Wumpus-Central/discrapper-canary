t.d(n, { Z: () => b });
var r = t(200651),
    i = t(192379),
    o = t(120356),
    a = t.n(o),
    s = t(481060),
    l = t(413335),
    c = t(157353),
    d = t(279604),
    u = t(730621),
    x = t(388032),
    p = t(423839);
function b(e) {
    let { className: n, guildId: t, powerup: o, onError: b } = e,
        { onActivate: v, isLoading: j, error: m, onDeactivate: h } = (0, d.Z)(t, o),
        _ = (0, c.Z)(t, o);
    return (
        i.useEffect(() => {
            null == b || b(m);
        }, [m, b]),
        (0, r.jsxs)('div', {
            className: a()(p.container, n),
            children: [
                _ &&
                    (0, r.jsx)(s.ua7, {
                        text: x.NW.string(u.Z.TZsu1d),
                        children: (e) => {
                            var n, t;
                            return (0, r.jsx)(
                                s.zxk,
                                ((n = (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            r = Object.keys(t);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (n) {
                                                var r;
                                                (r = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[n] = r);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (t = t =
                                    {
                                        className: p.secondaryButton,
                                        color: s.Ttl.PRIMARY,
                                        'aria-label': x.NW.string(u.Z.TZsu1d),
                                        grow: !1,
                                        onClick: h,
                                        children: (0, r.jsx)(l.Z, {})
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                                    : (function (e, n) {
                                          var t = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              t.push.apply(t, r);
                                          }
                                          return t;
                                      })(Object(t)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                                      }),
                                n)
                            );
                        }
                    }),
                (0, r.jsx)(s.zxk, {
                    className: p.primaryButton,
                    grow: !0,
                    onClick: _ ? () => {} : v,
                    submitting: !_ && j,
                    children: _ ? x.NW.string(u.Z['g5Ds6+']) : x.NW.string(u.Z.gSxlHR)
                })
            ]
        })
    );
}

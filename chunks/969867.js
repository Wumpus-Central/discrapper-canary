t.d(n, { Z: () => v });
var i = t(200651),
    r = t(192379),
    o = t(120356),
    a = t.n(o),
    s = t(481060),
    c = t(413335),
    l = t(279604),
    d = t(783684),
    u = t(388032),
    x = t(963158);
function v(e) {
    let { className: n, guildId: t, powerup: o, onError: v } = e,
        { onActivate: p, isLoading: _, error: b, onDeactivate: m } = (0, l.Z)(t, o);
    return (
        r.useEffect(() => {
            null == v || v(b);
        }, [b, v]),
        (0, i.jsxs)('div', {
            className: a()(x.container, n),
            children: [
                o.active &&
                    (0, i.jsx)(s.ua7, {
                        text: u.NW.string(d.Z.TZsu1d),
                        children: (e) => {
                            var n, t;
                            return (0, i.jsx)(
                                s.zxk,
                                ((n = (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            i = Object.keys(t);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (n) {
                                                var i;
                                                (i = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[n] = i);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (t = t =
                                    {
                                        className: x.secondaryButton,
                                        color: s.Ttl.PRIMARY,
                                        'aria-label': u.NW.string(d.Z.TZsu1d),
                                        grow: !1,
                                        onClick: m,
                                        children: (0, i.jsx)(c.Z, {})
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                                    : (function (e, n) {
                                          var t = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              t.push.apply(t, i);
                                          }
                                          return t;
                                      })(Object(t)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                                      }),
                                n)
                            );
                        }
                    }),
                (0, i.jsx)(s.zxk, {
                    className: x.primaryButton,
                    grow: !0,
                    onClick: o.active ? () => {} : p,
                    submitting: !o.active && _,
                    children: o.active ? u.NW.string(d.Z['g5Ds6+']) : u.NW.string(d.Z.gSxlHR)
                })
            ]
        })
    );
}

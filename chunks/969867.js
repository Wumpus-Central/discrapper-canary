t.d(n, { Z: () => x });
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(481060),
    l = t(413335),
    c = t(157353),
    d = t(279604),
    u = t(730621),
    p = t(388032),
    v = t(423839);
function x(e) {
    let { className: n, guildId: t, powerup: o, onError: x } = e,
        { onActivate: m, isLoading: b, error: j, onShowDeactivate: _ } = (0, d.ZP)(t, o),
        f = (0, c.Z)(t, o);
    return (
        i.useEffect(() => {
            null == x || x(j);
        }, [j, x]),
        (0, r.jsxs)('div', {
            className: s()(v.container, n),
            children: [
                f &&
                    (0, r.jsx)(a.ua7, {
                        'aria-label': p.NW.string(u.Z.TZsu1d),
                        text: (0, r.jsxs)('div', {
                            className: v.tooltipContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/semibold',
                                    children: p.NW.string(u.Z.TZsu1d)
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    children: p.NW.formatToPlainString(u.Z['5HQUzM'], { boostCount: o.cost })
                                })
                            ]
                        }),
                        children: (e) => {
                            var n, t;
                            return (0, r.jsx)(
                                a.zxk,
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
                                        className: v.secondaryButton,
                                        color: a.Ttl.PRIMARY,
                                        'aria-label': p.NW.string(u.Z.TZsu1d),
                                        grow: !1,
                                        onClick: _,
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
                (0, r.jsx)(a.zxk, {
                    className: v.primaryButton,
                    grow: !0,
                    onClick: f ? () => {} : m,
                    submitting: !f && b,
                    children: f ? p.NW.string(u.Z['g5Ds6+']) : p.NW.string(u.Z.gSxlHR)
                })
            ]
        })
    );
}

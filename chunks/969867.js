t.d(n, { Z: () => _ });
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(481060),
    l = t(413335),
    c = t(762762),
    d = t(157353),
    u = t(279604),
    x = t(730621),
    p = t(388032),
    v = t(423839);
function m(e) {
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
}
function b(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function _(e) {
    let { className: n, guildId: t, powerup: o, onError: _ } = e,
        { onActivate: j, isLoading: h, error: f, onShowDeactivate: g } = (0, u.ZP)(t, o),
        Z = (0, d.Z)(t, o);
    i.useEffect(() => {
        null == _ || _(f);
    }, [f, _]);
    let { disabled: C, reason: N } = (0, c.Z)(t, o, Z);
    return (0, r.jsxs)('div', {
        className: s()(v.container, n),
        children: [
            Z &&
                (0, r.jsx)(a.ua7, {
                    'aria-label': p.NW.string(x.Z.TZsu1d),
                    text: (0, r.jsxs)('div', {
                        className: v.tooltipContainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/semibold',
                                children: p.NW.string(x.Z.TZsu1d)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                children: p.NW.formatToPlainString(x.Z['5HQUzM'], { boostCount: o.cost })
                            })
                        ]
                    }),
                    children: (e) =>
                        (0, r.jsx)(
                            a.zxk,
                            b(m({}, e), {
                                className: v.secondaryButton,
                                color: a.Ttl.PRIMARY,
                                'aria-label': p.NW.string(x.Z.TZsu1d),
                                grow: !1,
                                onClick: g,
                                children: (0, r.jsx)(l.Z, {})
                            })
                        )
                }),
            (0, r.jsx)(a.ua7, {
                text: N,
                shouldShow: null != N,
                children: (e) =>
                    (0, r.jsxs)(
                        a.zxk,
                        b(m({}, e), {
                            disabled: C,
                            className: v.primaryButton,
                            innerClassName: v.buttonInner,
                            wrapperClassName: v.buttonWrapper,
                            grow: !0,
                            onClick: Z ? () => {} : j,
                            submitting: !Z && h,
                            children: [
                                Z ? p.NW.string(x.Z['g5Ds6+']) : p.NW.string(x.Z.gSxlHR),
                                !Z &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('span', {
                                                className: v.dot,
                                                children: '\u2022'
                                            }),
                                            (0, r.jsx)(l.Z, {
                                                size: 'sm',
                                                className: v.boost,
                                                fill: 'white'
                                            }),
                                            (0, r.jsx)('span', { children: o.cost })
                                        ]
                                    })
                            ]
                        })
                    )
            })
        ]
    });
}

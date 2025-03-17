t.d(n, { Z: () => _ });
var r = t(200651),
    i = t(192379),
    s = t(120356),
    o = t.n(s),
    a = t(481060),
    l = t(413335),
    c = t(762762),
    d = t(157353),
    u = t(279604),
    x = t(730621),
    m = t(388032),
    p = t(423839);
function v(e) {
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
    let { className: n, guildId: t, powerup: s, onError: _ } = e,
        { onActivate: j, isLoading: h, error: f, onShowDeactivate: g } = (0, u.ZP)(t, s),
        Z = (0, d.Z)(t, s);
    i.useEffect(() => {
        null == _ || _(f);
    }, [f, _]);
    let { disabled: C, reason: N } = (0, c.Z)(t, s, Z);
    return (0, r.jsxs)('div', {
        className: o()(p.container, n),
        children: [
            Z &&
                (0, r.jsx)(a.ua7, {
                    delay: 100,
                    'aria-label': m.NW.string(x.Z.TZsu1d),
                    text: (0, r.jsxs)('div', {
                        className: p.tooltipContainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/semibold',
                                children: m.NW.string(x.Z.TZsu1d)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                children: m.NW.formatToPlainString(x.Z['5HQUzM'], { boostCount: s.cost })
                            })
                        ]
                    }),
                    children: (e) =>
                        (0, r.jsxs)(
                            a.zxk,
                            b(v({}, e), {
                                className: p.secondaryButton,
                                innerClassName: o()(p.buttonInner, p.secondaryButtonInner),
                                color: a.Ttl.PRIMARY,
                                'aria-label': m.NW.string(x.Z.TZsu1d),
                                grow: !1,
                                onClick: g,
                                children: [
                                    (0, r.jsx)(a.mTd, { size: 'sm' }),
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/semibold',
                                        children: s.cost
                                    })
                                ]
                            })
                        )
                }),
            (0, r.jsx)(a.ua7, {
                delay: 100,
                text: N,
                shouldShow: null != N,
                children: (e) =>
                    (0, r.jsxs)(
                        a.zxk,
                        b(v({}, e), {
                            disabled: C,
                            className: p.primaryButton,
                            innerClassName: p.buttonInner,
                            wrapperClassName: p.buttonWrapper,
                            grow: !0,
                            onClick: Z ? () => {} : j,
                            submitting: !Z && h,
                            children: [
                                Z ? m.NW.string(x.Z['g5Ds6+']) : m.NW.string(x.Z.gSxlHR),
                                !Z &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('span', {
                                                className: p.dot,
                                                children: '\u2022'
                                            }),
                                            (0, r.jsx)(l.Z, {
                                                size: 'sm',
                                                className: p.boost,
                                                fill: 'white'
                                            }),
                                            (0, r.jsx)('span', { children: s.cost })
                                        ]
                                    })
                            ]
                        })
                    )
            })
        ]
    });
}

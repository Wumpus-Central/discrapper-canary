n.d(t, { Z: () => P }), n(230036);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    c = n(481060),
    l = n(120421),
    u = n(340078),
    d = n(702319),
    f = n(666884),
    p = n(763283),
    m = n(424984),
    g = n(477839),
    b = n(231338),
    y = n(884479),
    h = n(388032),
    v = n(860067),
    x = n(733),
    N = n(35356);
function O(e) {
    let { children: t } = e;
    return (0, r.jsx)('td', {
        className: v.statColumn,
        children: t
    });
}
function j(e) {
    let { name: t, iconSrc: n, valueTotal: s, valuePerSecond: o } = e,
        a = o >= 0 ? y.Z.QMkrPj : y.Z.VN4aTU;
    return (0, r.jsxs)('tr', {
        className: v.statRow,
        children: [
            (0, r.jsx)(O, {
                children: (0, r.jsx)('img', {
                    className: v.statIcon,
                    src: n,
                    alt: ''
                })
            }),
            (0, r.jsx)(O, {
                children: (0, r.jsx)(p.Z, {
                    variant: 'text-xs/medium',
                    className: v.statName,
                    children: t
                })
            }),
            (0, r.jsx)(O, {
                children: (0, r.jsxs)('div', {
                    className: v.statValue,
                    children: [
                        (0, r.jsx)('img', {
                            className: v.pointsIcon,
                            src: x,
                            alt: ''
                        }),
                        (0, r.jsx)(c.Text, {
                            className: v.monospace,
                            variant: 'text-xs/medium',
                            children: (0, u.v)(Math.floor(s))
                        })
                    ]
                })
            }),
            (0, r.jsx)(O, {
                children: (0, r.jsx)(c.Text, {
                    className: i()(v.statValuePerSecond, v.monospace),
                    variant: 'text-xs/medium',
                    children: h.NW.format(a, {
                        points: Math.abs(o),
                        grassIconHook: (e, t, n) => (0, d.Z)(e, t, n, v.pointsIcon)
                    })
                })
            })
        ]
    });
}
function Z(e) {
    let { itemId: t, isPaused: n } = e,
        s = (0, a.e7)([l.Z], () => {
            var e;
            return null !== (e = l.Z.pointsByItem[t]) && void 0 !== e ? e : 0;
        }),
        o = (0, g.w2)()[t],
        i = (0, f.Z)(s, n);
    return (0, r.jsx)(j, {
        name: o.name,
        valueTotal: s,
        valuePerSecond: i,
        iconSrc: o.purchaseIconSrc
    });
}
function _(e) {
    let { transitionState: t, isPaused: n } = e,
        o = (0, a.e7)([l.Z], () => l.Z.pointsByItem),
        i = (0, a.e7)([l.Z], () => l.Z.lifetimePoints),
        u = (0, f.Z)(i, n),
        d = (0, a.e7)([l.Z], () => l.Z.pointsByItem),
        m = (0, s.useMemo)(
            () =>
                Object.keys(o).sort((e, t) => {
                    var n, r;
                    return (null !== (n = null == d ? void 0 : d[t]) && void 0 !== n ? n : 0) - (null !== (r = null == d ? void 0 : d[e]) && void 0 !== r ? r : 0);
                }),
            []
        );
    return (0, r.jsx)(c.f6W, {
        theme: b.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsxs)(c.Y0X, {
                className: e,
                transitionState: t,
                children: [
                    (0, r.jsxs)(c.xBx, {
                        className: v.header,
                        separator: !1,
                        children: [
                            (0, r.jsx)(p.Z, {
                                variant: 'heading-lg/semibold',
                                children: h.NW.string(y.Z.bS8cBA)
                            }),
                            (0, r.jsx)(p.Z, {
                                className: v.subtitle,
                                variant: 'text-xs/medium',
                                children: h.NW.string(y.Z.fdvpl5)
                            })
                        ]
                    }),
                    (0, r.jsx)(c.hzk, {
                        children: (0, r.jsx)('table', {
                            className: v.statsTable,
                            children: (0, r.jsxs)('tbody', {
                                children: [
                                    (0, r.jsx)(j, {
                                        name: h.NW.string(y.Z.wAfrVl),
                                        iconSrc: x,
                                        valueTotal: i,
                                        valuePerSecond: u
                                    }),
                                    m.map((e) =>
                                        (0, r.jsx)(
                                            Z,
                                            {
                                                itemId: e,
                                                isPaused: n
                                            },
                                            e
                                        )
                                    )
                                ]
                            })
                        })
                    })
                ]
            })
    });
}
function P(e) {
    let { isPaused: t } = e;
    return (0, r.jsx)(m.O, {
        iconSrc: N,
        title: h.NW.string(y.Z.bS8cBA),
        onClick: () => {
            (0, c.ZDy)(() =>
                Promise.resolve((e) => {
                    var n, s;
                    return (0, r.jsx)(
                        _,
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
                        })({}, e)),
                        (s = s = { isPaused: t }),
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
                })
            );
        }
    });
}

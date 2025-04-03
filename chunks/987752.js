n.d(t, { Z: () => P }), n(230036);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(442837),
    c = n(481060),
    l = n(120421),
    u = n(340078),
    d = n(702319),
    f = n(666884),
    p = n(763283),
    m = n(424984),
    g = n(477839),
    b = n(231338),
    y = n(622802),
    h = n(388032),
    x = n(313273),
    N = n(733),
    v = n(35356);
function O(e) {
    let { children: t } = e;
    return (0, r.jsx)('td', {
        className: x.statColumn,
        children: t
    });
}
function j(e) {
    let { name: t, iconSrc: n, valueTotal: s, valuePerSecond: o } = e,
        i = o >= 0 ? y.Z.QMkrPj : y.Z.VN4aTU;
    return (0, r.jsxs)('tr', {
        className: x.statRow,
        children: [
            (0, r.jsx)(O, {
                children: (0, r.jsx)('img', {
                    className: x.statIcon,
                    src: n,
                    alt: ''
                })
            }),
            (0, r.jsx)(O, {
                children: (0, r.jsx)(p.Z, {
                    variant: 'text-xs/medium',
                    className: x.statName,
                    children: t
                })
            }),
            (0, r.jsx)(O, {
                children: (0, r.jsxs)('div', {
                    className: x.statValue,
                    children: [
                        (0, r.jsx)('img', {
                            className: x.pointsIcon,
                            src: N,
                            alt: ''
                        }),
                        (0, r.jsx)(c.Text, {
                            className: x.monospace,
                            variant: 'text-xs/medium',
                            children: (0, u.v)(Math.floor(s))
                        })
                    ]
                })
            }),
            (0, r.jsx)(O, {
                children: (0, r.jsx)(c.Text, {
                    className: a()(x.statValuePerSecond, x.monospace),
                    variant: 'text-xs/medium',
                    children: h.NW.format(i, {
                        points: Math.abs(o),
                        grassIconHook: (e, t, n) => (0, d.Z)(e, t, n, x.pointsIcon)
                    })
                })
            })
        ]
    });
}
function Z(e) {
    let { itemId: t, isPaused: n } = e,
        s = (0, i.e7)([l.Z], () => {
            var e;
            return null != (e = l.Z.pointsByItem[t]) ? e : 0;
        }),
        o = (0, g.w2)()[t],
        a = (0, f.Z)(s, n);
    return (0, r.jsx)(j, {
        name: o.name,
        valueTotal: s,
        valuePerSecond: a,
        iconSrc: o.purchaseIconSrc
    });
}
function _(e) {
    let { transitionState: t, isPaused: n } = e,
        o = (0, i.e7)([l.Z], () => l.Z.pointsByItem),
        a = (0, i.e7)([l.Z], () => l.Z.lifetimePoints),
        u = (0, f.Z)(a, n),
        d = (0, i.e7)([l.Z], () => l.Z.pointsByItem),
        m = (0, s.useMemo)(
            () =>
                Object.keys(o).sort((e, t) => {
                    var n, r;
                    return (null != (n = null == d ? void 0 : d[t]) ? n : 0) - (null != (r = null == d ? void 0 : d[e]) ? r : 0);
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
                        className: x.header,
                        separator: !1,
                        children: [
                            (0, r.jsx)(p.Z, {
                                variant: 'heading-lg/semibold',
                                children: h.NW.string(y.Z.bS8cBA)
                            }),
                            (0, r.jsx)(p.Z, {
                                className: x.subtitle,
                                variant: 'text-xs/medium',
                                children: h.NW.string(y.Z.fdvpl5)
                            })
                        ]
                    }),
                    (0, r.jsx)(c.hzk, {
                        children: (0, r.jsx)('table', {
                            className: x.statsTable,
                            children: (0, r.jsxs)('tbody', {
                                children: [
                                    (0, r.jsx)(j, {
                                        name: h.NW.string(y.Z.wAfrVl),
                                        iconSrc: N,
                                        valueTotal: a,
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
        iconSrc: v,
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

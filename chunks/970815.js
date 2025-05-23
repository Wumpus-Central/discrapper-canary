r.d(t, {
    A4: () => h,
    b6: () => u.b
}),
    r(388685);
var n = r(255367),
    a = r(73800),
    l = r(120356),
    i = r.n(l),
    o = r(481060),
    u = r(317257),
    c = r(583478),
    s = r(976845),
    d = r(738134);
let b = () =>
        (0, n.jsx)('img', {
            className: d.notificationBadge,
            src: r(808824),
            alt: ''
        }),
    f = (e, t) => (e === u.b.SELECTED ? d.selected : t ? d.highlighted : d.default),
    h = (0, a.forwardRef)(function (e, t) {
        let { id: r, balance: l, balanceWidgetMode: h = u.b.DEFAULT, showNotificationBadge: O, onClick: y, onMouseDown: p, disabled: m, isInModalOverlay: C, className: g } = e,
            [_, E] = (0, a.useState)(!1),
            R = (0, a.useMemo)(() => f(h, _), [h, _]),
            [j, v] = (0, a.useState)(!1),
            [P, S] = (0, a.useState)(!1),
            [w, A] = (0, a.useState)(0.9 * s.D2),
            L = null === l;
        (0, a.useEffect)(() => {
            L &&
                !j &&
                (v(!0),
                setTimeout(() => {
                    S(!0);
                }, 500));
        }, [L, v, j]),
            (0, a.useEffect)(() => {
                P && !L && v(!1);
            }, [L, P]);
        let D = L || j,
            k = j ? null : l,
            [N, U] = (0, a.useState)(null),
            I = (0, a.useRef)(null),
            T = (0, a.useCallback)(() => {
                (I.current = null), U(null);
            }, []),
            V = (0, a.useCallback)(
                (e) => {
                    let t = N === I.current;
                    e > 0 && ('earn' !== N || !t) && U('earn');
                },
                [U, N]
            );
        return (0, n.jsx)(o.P3F, {
            onClick: D ? void 0 : y,
            className: i()(d.clickable, { [d.disabled]: m }),
            id: null != r ? r : 'balance-widget-pill',
            children: (0, n.jsxs)('span', {
                onMouseDown: p,
                onMouseEnter: m ? void 0 : () => E(!0),
                onMouseLeave: m ? void 0 : () => E(!1),
                ref: t,
                className: i()(d.container, R, g, {
                    [d.containerLoading]: D,
                    [d.inModalOverlay]: C,
                    [d.disabled]: m
                }),
                children: [
                    (0, n.jsx)('div', {
                        className: i()(d.orbsLottieContainer, D ? d.orbIconloading : void 0),
                        children: (0, n.jsx)(
                            s.ZP,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })(
                                {},
                                {
                                    currentAnimationType: N,
                                    animationTypeRef: I,
                                    onSetAnimationDurationMS: A
                                }
                            )
                        )
                    }),
                    (0, n.jsx)(c.Z, {
                        value: k,
                        onValueChange: V,
                        onValueReached: T,
                        targetTotalCounterTime: w,
                        className: D ? d.counterLoading : void 0
                    }),
                    O && (0, n.jsx)(b, {})
                ]
            })
        });
    });

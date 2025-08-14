r.d(t, {
    A4: () => f,
    b6: () => u.b,
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
    d = r(647917);
let b = () =>
        (0, n.jsx)("img", {
            className: d.notificationBadge,
            src: r(808824),
            alt: "",
        }),
    f = (0, a.forwardRef)(function (e, t) {
        let {
                id: r,
                balance: l,
                balanceWidgetMode: f = u.b.DEFAULT,
                showNotificationBadge: h,
                onClick: O,
                onMouseDown: y,
                disabled: p,
                isInModalOverlay: m,
                className: C,
            } = e,
            [g, _] = (0, a.useState)(!1),
            E = (0, a.useMemo)(() => (f === u.b.SELECTED ? d.selected : g ? d.highlighted : d.default), [f, g]),
            [R, j] = (0, a.useState)(!1),
            [v, S] = (0, a.useState)(!1),
            [P, A] = (0, a.useState)(0.9 * s.D2),
            w = null === l;
        (0, a.useEffect)(() => {
            w &&
                !R &&
                (j(!0),
                setTimeout(() => {
                    S(!0);
                }, 500));
        }, [w, j, R]),
            (0, a.useEffect)(() => {
                v && !w && j(!1);
            }, [w, v]);
        let L = w || R,
            k = R ? null : l,
            [D, N] = (0, a.useState)(null),
            U = (0, a.useRef)(null),
            I = (0, a.useCallback)(() => {
                (U.current = null), N(null);
            }, []),
            T = (0, a.useCallback)(
                (e) => {
                    let t = D === U.current;
                    e > 0 && ("earn" !== D || !t) && N("earn");
                },
                [N, D],
            );
        return (0, n.jsx)(o.P3F, {
            onClick: L ? void 0 : O,
            className: i()(d.clickable, { [d.disabled]: p }),
            id: null != r ? r : "balance-widget-pill",
            children: (0, n.jsxs)("span", {
                onMouseDown: y,
                onMouseEnter: p ? void 0 : () => _(!0),
                onMouseLeave: p ? void 0 : () => _(!1),
                ref: t,
                className: i()(d.container, E, C, {
                    [d.containerLoading]: L,
                    [d.inModalOverlay]: m,
                    [d.disabled]: p,
                }),
                children: [
                    (0, n.jsx)("div", {
                        className: i()(d.orbsLottieContainer, L ? d.orbIconloading : void 0),
                        children: (0, n.jsx)(
                            s.ZP,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })(
                                {},
                                {
                                    currentAnimationType: D,
                                    animationTypeRef: U,
                                    onSetAnimationDurationMS: A,
                                },
                            ),
                        ),
                    }),
                    (0, n.jsx)(c.Z, {
                        value: k,
                        onValueChange: T,
                        onValueReached: I,
                        targetTotalCounterTime: P,
                        className: L ? d.counterLoading : void 0,
                    }),
                    h && (0, n.jsx)(b, {}),
                ],
            }),
        });
    });

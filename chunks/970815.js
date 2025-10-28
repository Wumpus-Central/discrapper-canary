r.d(t, {
    A4: () => O,
    b6: () => i.b,
}),
    r(388685);
var n = r(951288),
    l = r(647438),
    o = r(120356),
    u = r.n(o),
    a = r(481060),
    c = r(490093),
    i = r(317257),
    s = r(583478),
    b = r(976845),
    f = r(647917);
let p = () =>
        (0, n.jsx)("img", {
            className: f.notificationBadge,
            src: r(808824),
            alt: "",
        }),
    O = (0, l.forwardRef)(function (e, t) {
        let {
                id: r,
                balance: o,
                balanceWidgetMode: O = i.b.DEFAULT,
                showNotificationBadge: y,
                onClick: d,
                onMouseDown: m,
                disabled: g,
                isInModalOverlay: j,
                className: v,
            } = e,
            [h, P] = (0, l.useState)(!1),
            w = (0, l.useMemo)(() => (O === i.b.SELECTED ? f.selected : h ? f.highlighted : f.default), [O, h]),
            [D, C] = (0, l.useState)(!1),
            [S, x] = (0, l.useState)(!1),
            [k, E] = (0, l.useState)(0.9 * c.D2),
            M = null === o;
        (0, l.useEffect)(() => {
            M &&
                !D &&
                (C(!0),
                setTimeout(() => {
                    x(!0);
                }, 500));
        }, [M, C, D]),
            (0, l.useEffect)(() => {
                S && !M && C(!1);
            }, [M, S]);
        let L = M || D,
            N = D ? null : o,
            [R, A] = (0, l.useState)(null),
            T = (0, l.useRef)(null),
            F = (0, l.useCallback)(() => {
                (T.current = null), A(null);
            }, []),
            Z = (0, l.useCallback)(
                (e) => {
                    let t = R === T.current;
                    e > 0 && ("earn" !== R || !t) && A("earn");
                },
                [A, R],
            );
        return (0, n.jsx)(a.P3F, {
            onClick: L ? void 0 : d,
            className: u()(f.clickable, { [f.disabled]: g }),
            id: null != r ? r : "balance-widget-pill",
            children: (0, n.jsxs)("span", {
                onMouseDown: m,
                onMouseEnter: g ? void 0 : () => P(!0),
                onMouseLeave: g ? void 0 : () => P(!1),
                ref: t,
                className: u()(f.container, w, v, {
                    [f.containerLoading]: L,
                    [f.inModalOverlay]: j,
                    [f.disabled]: g,
                }),
                children: [
                    (0, n.jsx)("div", {
                        className: u()(f.orbsLottieContainer, L ? f.orbIconloading : void 0),
                        children: (0, n.jsx)(
                            b.ZP,
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
                                    currentAnimationType: R,
                                    animationTypeRef: T,
                                    onSetAnimationDurationMS: E,
                                },
                            ),
                        ),
                    }),
                    (0, n.jsx)(s.Z, {
                        value: N,
                        onValueChange: Z,
                        onValueReached: F,
                        targetTotalCounterTime: k,
                        className: L ? f.counterLoading : void 0,
                    }),
                    y && (0, n.jsx)(p, {}),
                ],
            }),
        });
    });

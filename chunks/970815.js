r.d(t, {
    A4: () => O,
    b6: () => i.b,
}),
    r(388685);
var n = r(951288),
    o = r(647438),
    l = r(120356),
    u = r.n(l),
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
    O = (0, o.forwardRef)(function (e, t) {
        let {
                id: r,
                balance: l,
                balanceWidgetMode: O = i.b.DEFAULT,
                showNotificationBadge: y,
                onClick: j,
                onMouseDown: d,
                disabled: g,
                isInModalOverlay: m,
                className: v,
            } = e,
            [P, h] = (0, o.useState)(!1),
            w = (0, o.useMemo)(() => (O === i.b.SELECTED ? f.selected : P ? f.highlighted : f.default), [O, P]),
            [D, S] = (0, o.useState)(!1),
            [x, C] = (0, o.useState)(!1),
            [E, k] = (0, o.useState)(0.9 * c.D2),
            R = null === l;
        (0, o.useEffect)(() => {
            R &&
                !D &&
                (S(!0),
                setTimeout(() => {
                    C(!0);
                }, 500));
        }, [R, S, D]),
            (0, o.useEffect)(() => {
                x && !R && S(!1);
            }, [R, x]);
        let M = R || D,
            N = D ? null : l,
            [L, A] = (0, o.useState)(null),
            Z = (0, o.useRef)(null),
            T = (0, o.useCallback)(() => {
                (Z.current = null), A(null);
            }, []),
            F = (0, o.useCallback)(
                (e) => {
                    let t = L === Z.current;
                    e > 0 && ("earn" !== L || !t) && A("earn");
                },
                [A, L],
            );
        return (0, n.jsx)(a.P3F, {
            onClick: M ? void 0 : j,
            className: u()(f.clickable, { [f.disabled]: g }),
            id: null != r ? r : "balance-widget-pill",
            children: (0, n.jsxs)("span", {
                onMouseDown: d,
                onMouseEnter: g ? void 0 : () => h(!0),
                onMouseLeave: g ? void 0 : () => h(!1),
                ref: t,
                className: u()(f.container, w, v, {
                    [f.containerLoading]: M,
                    [f.inModalOverlay]: m,
                    [f.disabled]: g,
                }),
                children: [
                    (0, n.jsx)("div", {
                        className: u()(f.orbsLottieContainer, M ? f.orbIconloading : void 0),
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
                                    currentAnimationType: L,
                                    animationTypeRef: Z,
                                    onSetAnimationDurationMS: k,
                                },
                            ),
                        ),
                    }),
                    (0, n.jsx)(s.Z, {
                        value: N,
                        onValueChange: F,
                        onValueReached: T,
                        targetTotalCounterTime: E,
                        className: M ? f.counterLoading : void 0,
                    }),
                    y && (0, n.jsx)(p, {}),
                ],
            }),
        });
    });

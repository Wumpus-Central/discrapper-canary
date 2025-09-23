r.d(t, {
    A4: () => p,
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
let O = () =>
        (0, n.jsx)("img", {
            className: f.notificationBadge,
            src: r(808824),
            alt: "",
        }),
    p = (0, o.forwardRef)(function (e, t) {
        let {
                id: r,
                balance: l,
                balanceWidgetMode: p = i.b.DEFAULT,
                showNotificationBadge: y,
                onClick: g,
                onMouseDown: j,
                disabled: d,
                isInModalOverlay: m,
                className: v,
            } = e,
            [P, h] = (0, o.useState)(!1),
            w = (0, o.useMemo)(() => (p === i.b.SELECTED ? f.selected : P ? f.highlighted : f.default), [p, P]),
            [S, D] = (0, o.useState)(!1),
            [C, x] = (0, o.useState)(!1),
            [E, k] = (0, o.useState)(0.9 * c.D2),
            L = null === l;
        (0, o.useEffect)(() => {
            L &&
                !S &&
                (D(!0),
                setTimeout(() => {
                    x(!0);
                }, 500));
        }, [L, D, S]),
            (0, o.useEffect)(() => {
                C && !L && D(!1);
            }, [L, C]);
        let R = L || S,
            M = S ? null : l,
            [N, A] = (0, o.useState)(null),
            Z = (0, o.useRef)(null),
            T = (0, o.useCallback)(() => {
                (Z.current = null), A(null);
            }, []),
            F = (0, o.useCallback)(
                (e) => {
                    let t = N === Z.current;
                    e > 0 && ("earn" !== N || !t) && A("earn");
                },
                [A, N],
            );
        return (0, n.jsx)(a.P3F, {
            onClick: R ? void 0 : g,
            className: u()(f.clickable, { [f.disabled]: d }),
            id: null != r ? r : "balance-widget-pill",
            children: (0, n.jsxs)("span", {
                onMouseDown: j,
                onMouseEnter: d ? void 0 : () => h(!0),
                onMouseLeave: d ? void 0 : () => h(!1),
                ref: t,
                className: u()(f.container, w, v, {
                    [f.containerLoading]: R,
                    [f.inModalOverlay]: m,
                    [f.disabled]: d,
                }),
                children: [
                    (0, n.jsx)("div", {
                        className: u()(f.orbsLottieContainer, R ? f.orbIconloading : void 0),
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
                                    currentAnimationType: N,
                                    animationTypeRef: Z,
                                    onSetAnimationDurationMS: k,
                                },
                            ),
                        ),
                    }),
                    (0, n.jsx)(s.Z, {
                        value: M,
                        onValueChange: F,
                        onValueReached: T,
                        targetTotalCounterTime: E,
                        className: R ? f.counterLoading : void 0,
                    }),
                    y && (0, n.jsx)(O, {}),
                ],
            }),
        });
    });

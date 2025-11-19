n.d(t, {
    A4: () => E,
    b6: () => c.b,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(490093),
    c = n(317257),
    u = n(583478),
    d = n(976845),
    f = n(647917);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = () =>
        (0, r.jsx)("img", {
            className: f.notificationBadge,
            src: n(808824),
            alt: "",
        }),
    m = "balance-widget-pill",
    g = (e, t) => (e === c.b.SELECTED ? f.selected : t ? f.highlighted : f.default),
    E = (0, i.forwardRef)(function (e, t) {
        let {
                id: n,
                balance: a,
                balanceWidgetMode: _ = c.b.DEFAULT,
                showNotificationBadge: E,
                onClick: b,
                onMouseDown: y,
                disabled: O,
                isInModalOverlay: v,
                className: I,
            } = e,
            [T, S] = (0, i.useState)(!1),
            A = (0, i.useMemo)(() => g(_, T), [_, T]),
            [C, N] = (0, i.useState)(!1),
            [R, P] = (0, i.useState)(!1),
            [D, w] = (0, i.useState)(0.9 * l.D2),
            L = null === a;
        (0, i.useEffect)(() => {
            L &&
                !C &&
                (N(!0),
                setTimeout(() => {
                    P(!0);
                }, 500));
        }, [L, N, C]),
            (0, i.useEffect)(() => {
                R && !L && N(!1);
            }, [L, R]);
        let x = L || C,
            M = C ? null : a,
            [k, j] = (0, i.useState)(null),
            U = (0, i.useRef)(null),
            G = (0, i.useCallback)(() => {
                (U.current = null), j(null);
            }, []),
            B = (0, i.useCallback)(
                (e) => {
                    let t = k === U.current;
                    e > 0 && ("earn" !== k || !t) && j("earn");
                },
                [j, k],
            ),
            Z = {
                currentAnimationType: k,
                animationTypeRef: U,
                onSetAnimationDurationMS: w,
            };
        return (0, r.jsx)(s.P3F, {
            onClick: x ? void 0 : b,
            className: o()(f.clickable, { [f.disabled]: O }),
            id: null != n ? n : m,
            children: (0, r.jsxs)("span", {
                onMouseDown: y,
                onMouseEnter: O ? void 0 : () => S(!0),
                onMouseLeave: O ? void 0 : () => S(!1),
                ref: t,
                className: o()(f.container, A, I, {
                    [f.containerLoading]: x,
                    [f.inModalOverlay]: v,
                    [f.disabled]: O,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: o()(f.orbsLottieContainer, x ? f.orbIconloading : void 0),
                        children: (0, r.jsx)(d.ZP, p({}, Z)),
                    }),
                    (0, r.jsx)(u.Z, {
                        value: M,
                        onValueChange: B,
                        onValueReached: G,
                        targetTotalCounterTime: D,
                        className: x ? f.counterLoading : void 0,
                    }),
                    E && (0, r.jsx)(h, {}),
                ],
            }),
        });
    });

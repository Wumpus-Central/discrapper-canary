n.d(t, {
    A4: () => g,
    b6: () => l.b,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(317257),
    c = n(583478),
    u = n(976845),
    d = n(647917);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = () =>
        (0, r.jsx)("img", {
            className: d.notificationBadge,
            src: n(808824),
            alt: "",
        }),
    h = "balance-widget-pill",
    m = (e, t) => (e === l.b.SELECTED ? d.selected : t ? d.highlighted : d.default),
    g = (0, i.forwardRef)(function (e, t) {
        let {
                id: n,
                balance: a,
                balanceWidgetMode: f = l.b.DEFAULT,
                showNotificationBadge: g,
                onClick: E,
                onMouseDown: b,
                disabled: y,
                isInModalOverlay: O,
                className: v,
            } = e,
            [I, T] = (0, i.useState)(!1),
            S = (0, i.useMemo)(() => m(f, I), [f, I]),
            [A, C] = (0, i.useState)(!1),
            [N, R] = (0, i.useState)(!1),
            [P, w] = (0, i.useState)(0.9 * u.D2),
            D = null === a;
        (0, i.useEffect)(() => {
            D &&
                !A &&
                (C(!0),
                setTimeout(() => {
                    R(!0);
                }, 500));
        }, [D, C, A]),
            (0, i.useEffect)(() => {
                N && !D && C(!1);
            }, [D, N]);
        let x = D || A,
            L = A ? null : a,
            [j, M] = (0, i.useState)(null),
            k = (0, i.useRef)(null),
            U = (0, i.useCallback)(() => {
                (k.current = null), M(null);
            }, []),
            G = (0, i.useCallback)(
                (e) => {
                    let t = j === k.current;
                    e > 0 && ("earn" !== j || !t) && M("earn");
                },
                [M, j],
            ),
            B = {
                currentAnimationType: j,
                animationTypeRef: k,
                onSetAnimationDurationMS: w,
            };
        return (0, r.jsx)(s.P3F, {
            onClick: x ? void 0 : E,
            className: o()(d.clickable, { [d.disabled]: y }),
            id: null != n ? n : h,
            children: (0, r.jsxs)("span", {
                onMouseDown: b,
                onMouseEnter: y ? void 0 : () => T(!0),
                onMouseLeave: y ? void 0 : () => T(!1),
                ref: t,
                className: o()(d.container, S, v, {
                    [d.containerLoading]: x,
                    [d.inModalOverlay]: O,
                    [d.disabled]: y,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: o()(d.orbsLottieContainer, x ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(u.ZP, _({}, B)),
                    }),
                    (0, r.jsx)(c.Z, {
                        value: L,
                        onValueChange: G,
                        onValueReached: U,
                        targetTotalCounterTime: P,
                        className: x ? d.counterLoading : void 0,
                    }),
                    g && (0, r.jsx)(p, {}),
                ],
            }),
        });
    });

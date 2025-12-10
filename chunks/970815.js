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
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = () =>
        (0, r.jsx)("img", {
            className: f.notificationBadge,
            src: n(808824),
            alt: "",
        }),
    h = "balance-widget-pill",
    g = (e, t) => (e === c.b.SELECTED ? f.selected : t ? f.highlighted : f.default),
    E = (0, i.forwardRef)(function (e, t) {
        let {
                id: n,
                balance: a,
                balanceWidgetMode: p = c.b.DEFAULT,
                showNotificationBadge: E,
                onClick: b,
                onMouseDown: y,
                disabled: O,
                isInModalOverlay: v,
                className: S,
            } = e,
            [I, T] = (0, i.useState)(!1),
            C = (0, i.useMemo)(() => g(p, I), [p, I]),
            [A, N] = (0, i.useState)(!1),
            [P, R] = (0, i.useState)(!1),
            [D, w] = (0, i.useState)(0.9 * l.D2),
            x = null === a;
        (0, i.useEffect)(() => {
            x &&
                !A &&
                (N(!0),
                setTimeout(() => {
                    R(!0);
                }, 500));
        }, [x, N, A]),
            (0, i.useEffect)(() => {
                P && !x && N(!1);
            }, [x, P]);
        let L = x || A,
            j = A ? null : a,
            [M, k] = (0, i.useState)(null),
            U = (0, i.useRef)(null),
            G = (0, i.useCallback)(() => {
                (U.current = null), k(null);
            }, []),
            Z = (0, i.useCallback)(
                (e) => {
                    let t = M === U.current;
                    e > 0 && ("earn" !== M || !t) && k("earn");
                },
                [k, M],
            ),
            B = {
                currentAnimationType: M,
                animationTypeRef: U,
                onSetAnimationDurationMS: w,
            };
        return (0, r.jsx)(s.P3F, {
            onClick: L ? void 0 : b,
            className: o()(f.clickable, { [f.disabled]: O }),
            id: null != n ? n : h,
            children: (0, r.jsxs)("span", {
                onMouseDown: y,
                onMouseEnter: O ? void 0 : () => T(!0),
                onMouseLeave: O ? void 0 : () => T(!1),
                ref: t,
                className: o()(f.container, C, S, {
                    [f.containerLoading]: L,
                    [f.inModalOverlay]: v,
                    [f.disabled]: O,
                }),
                children: [
                    (0, r.jsx)("div", {
                        className: o()(f.orbsLottieContainer, L ? f.orbIconloading : void 0),
                        children: (0, r.jsx)(d.ZP, _({}, B)),
                    }),
                    (0, r.jsx)(u.Z, {
                        value: j,
                        onValueChange: Z,
                        onValueReached: G,
                        targetTotalCounterTime: D,
                        className: L ? f.counterLoading : void 0,
                    }),
                    E && (0, r.jsx)(m, {}),
                ],
            }),
        });
    });

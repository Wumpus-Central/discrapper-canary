n.d(t, {
    A4: () => g,
    b6: () => l.b
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(317257),
    c = n(583478),
    u = n(976845),
    d = n(738134);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = () =>
        (0, r.jsx)('img', {
            className: d.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    h = 'balance-widget-pill',
    m = (e, t) => (e === l.b.SELECTED ? d.selected : t ? d.highlighted : d.default),
    g = (0, i.forwardRef)(function (e, t) {
        let { id: n, balance: a, balanceWidgetMode: f = l.b.DEFAULT, showNotificationBadge: g, onClick: E, onMouseDown: b, disabled: y, isInModalOverlay: O, className: v } = e,
            [I, S] = (0, i.useState)(!1),
            T = (0, i.useMemo)(() => m(f, I), [f, I]),
            [A, N] = (0, i.useState)(!1),
            [C, P] = (0, i.useState)(!1),
            [R, w] = (0, i.useState)(0.9 * u.D2),
            D = null === a;
        (0, i.useEffect)(() => {
            D &&
                !A &&
                (N(!0),
                setTimeout(() => {
                    P(!0);
                }, 500));
        }, [D, N, A]),
            (0, i.useEffect)(() => {
                C && !D && N(!1);
            }, [D, C]);
        let L = D || A,
            x = A ? null : a,
            [k, M] = (0, i.useState)(null),
            j = (0, i.useRef)(null),
            U = (0, i.useCallback)(() => {
                (j.current = null), M(null);
            }, []),
            G = (0, i.useCallback)(
                (e) => {
                    let t = k === j.current;
                    e > 0 && ('earn' !== k || !t) ? M('earn') : e < 0 && ('spend' !== k || !t) && M('spend');
                },
                [M, k]
            ),
            B = {
                currentAnimationType: k,
                animationTypeRef: j,
                onSetAnimationDurationMS: w
            };
        return (0, r.jsx)(s.P3F, {
            onClick: L ? void 0 : E,
            className: o()(d.clickable, { [d.disabled]: y }),
            id: null != n ? n : h,
            children: (0, r.jsxs)('span', {
                onMouseDown: b,
                onMouseEnter: y ? void 0 : () => S(!0),
                onMouseLeave: y ? void 0 : () => S(!1),
                ref: t,
                className: o()(d.container, T, v, {
                    [d.containerLoading]: L,
                    [d.inModalOverlay]: O,
                    [d.disabled]: y
                }),
                children: [
                    (0, r.jsx)('div', {
                        className: o()(d.orbsLottieContainer, L ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(u.ZP, _({}, B))
                    }),
                    (0, r.jsx)(c.Z, {
                        value: x,
                        onValueChange: G,
                        onValueReached: U,
                        targetTotalCounterTime: R,
                        className: L ? d.counterLoading : void 0
                    }),
                    g && (0, r.jsx)(p, {})
                ]
            })
        });
    });

n.d(t, {
    A4: () => E,
    b6: () => l.b,
    th: () => m
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
    m = {
        SHOP: 'collectibles-shop-'.concat(h),
        SHOP_FULLSCREEN: 'collectibles-'.concat(h)
    },
    g = (e, t) => (e === l.b.SELECTED ? d.selected : t ? d.highlighted : d.default),
    E = (0, i.forwardRef)(function (e, t) {
        let { id: n, balance: a, balanceWidgetMode: f = l.b.DEFAULT, showNotificationBadge: m, onClick: E, onMouseDown: b, isInModalOverlay: y, className: O } = e,
            [v, I] = (0, i.useState)(!1),
            S = (0, i.useMemo)(() => g(f, v), [f, v]),
            [T, A] = (0, i.useState)(!1),
            [N, C] = (0, i.useState)(!1),
            [P, R] = (0, i.useState)(0.9 * u.D2),
            w = null === a;
        (0, i.useEffect)(() => {
            w &&
                !T &&
                (A(!0),
                setTimeout(() => {
                    C(!0);
                }, 500));
        }, [w, A, T]),
            (0, i.useEffect)(() => {
                N && !w && A(!1);
            }, [w, N]);
        let D = w || T,
            L = T ? null : a,
            [x, k] = (0, i.useState)(null),
            M = (0, i.useRef)(null),
            j = (0, i.useCallback)(() => {
                (M.current = null), k(null);
            }, []),
            U = (0, i.useCallback)(
                (e) => {
                    let t = x === M.current;
                    e > 0 && ('earn' !== x || !t) ? k('earn') : e < 0 && ('spend' !== x || !t) && k('spend');
                },
                [k, x]
            ),
            G = {
                currentAnimationType: x,
                animationTypeRef: M,
                onSetAnimationDurationMS: R
            };
        return (0, r.jsx)(s.P3F, {
            onClick: D ? void 0 : E,
            className: d.clickable,
            id: null != n ? n : h,
            children: (0, r.jsxs)('span', {
                onMouseDown: b,
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                ref: t,
                className: o()(d.container, S, O, {
                    [d.containerLoading]: D,
                    [d.inModalOverlay]: y
                }),
                children: [
                    (0, r.jsx)('div', {
                        className: o()(d.orbsLottieContainer, D ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(u.ZP, _({}, G))
                    }),
                    (0, r.jsx)(c.Z, {
                        value: L,
                        onValueChange: U,
                        onValueReached: j,
                        targetTotalCounterTime: P,
                        className: D ? d.counterLoading : void 0
                    }),
                    m && (0, r.jsx)(p, {})
                ]
            })
        });
    });

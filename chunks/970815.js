n.d(t, {
    A4: () => E,
    b6: () => l.b,
    th: () => m
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
        let { id: n, balance: o, balanceWidgetMode: f = l.b.DEFAULT, showNotificationBadge: m, onClick: E, onMouseDown: b, className: y } = e,
            [O, v] = (0, i.useState)(!1),
            I = (0, i.useMemo)(() => g(f, O), [f, O]),
            [S, T] = (0, i.useState)(!1),
            [A, N] = (0, i.useState)(!1),
            [C, P] = (0, i.useState)(0.9 * u.D2),
            R = null === o;
        (0, i.useEffect)(() => {
            R &&
                !S &&
                (T(!0),
                setTimeout(() => {
                    N(!0);
                }, 500));
        }, [R, T, S]),
            (0, i.useEffect)(() => {
                A && !R && T(!1);
            }, [R, A]);
        let w = R || S,
            D = S ? null : o,
            [L, x] = (0, i.useState)(null),
            k = (0, i.useRef)(null),
            M = (0, i.useCallback)(() => {
                (k.current = null), x(null);
            }, []),
            j = (0, i.useCallback)(
                (e) => {
                    let t = L === k.current;
                    e > 0 && ('earn' !== L || !t) ? x('earn') : e < 0 && ('spend' !== L || !t) && x('spend');
                },
                [x, L]
            ),
            U = {
                currentAnimationType: L,
                animationTypeRef: k,
                onSetAnimationDurationMS: P
            };
        return (0, r.jsx)(s.P3F, {
            onClick: w ? void 0 : E,
            className: d.clickable,
            children: (0, r.jsxs)('span', {
                onMouseDown: b,
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                id: null != n ? n : h,
                ref: t,
                className: a()(d.container, I, y, { [d.containerLoading]: w }),
                children: [
                    (0, r.jsx)('div', {
                        className: a()(d.orbsLottieContainer, w ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(u.ZP, _({}, U))
                    }),
                    (0, r.jsx)(c.Z, {
                        value: D,
                        onValueChange: j,
                        onValueReached: M,
                        targetTotalCounterTime: C,
                        className: w ? d.counterLoading : void 0
                    }),
                    m && (0, r.jsx)(p, {})
                ]
            })
        });
    });

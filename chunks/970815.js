n.d(t, {
    A4: () => g,
    b6: () => l.b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
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
    m = (e, t) => (e === l.b.SELECTED ? d.selected : t ? d.highlighted : d.default),
    g = (0, i.forwardRef)(function (e, t) {
        let { balance: n, balanceWidgetMode: o = l.b.DEFAULT, showNotificationBadge: f, onClick: g, onMouseDown: E, className: b } = e,
            [y, v] = (0, i.useState)(!1),
            O = (0, i.useMemo)(() => m(o, y), [o, y]),
            [I, S] = (0, i.useState)(!1),
            [T, N] = (0, i.useState)(!1),
            [A, C] = (0, i.useState)(0.9 * u.D2),
            R = null === n;
        (0, i.useEffect)(() => {
            R &&
                !I &&
                (S(!0),
                setTimeout(() => {
                    N(!0);
                }, 500));
        }, [R, S, I]),
            (0, i.useEffect)(() => {
                T && !R && S(!1);
            }, [R, T]);
        let P = R || I,
            w = I ? null : n,
            [D, L] = (0, i.useState)(null),
            x = (0, i.useRef)(null),
            M = (0, i.useCallback)(() => {
                (x.current = null), L(null);
            }, []),
            k = (0, i.useCallback)(
                (e) => {
                    let t = D === x.current;
                    e > 0 && ('earn' !== D || !t) ? L('earn') : e < 0 && ('spend' !== D || !t) && L('spend');
                },
                [L, D]
            ),
            j = {
                currentAnimationType: D,
                animationTypeRef: x,
                onSetAnimationDurationMS: C
            };
        return (0, r.jsx)(s.P3F, {
            onClick: P ? void 0 : g,
            className: d.clickable,
            children: (0, r.jsxs)('span', {
                onMouseDown: E,
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                id: h,
                ref: t,
                className: a()(d.container, O, b, { [d.containerLoading]: P }),
                children: [
                    (0, r.jsx)('div', {
                        className: a()(d.orbsLottieContainer, P ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(u.ZP, _({}, j))
                    }),
                    (0, r.jsx)(c.Z, {
                        value: w,
                        onValueChange: k,
                        onValueReached: M,
                        targetTotalCounterTime: A,
                        className: P ? d.counterLoading : void 0
                    }),
                    f && (0, r.jsx)(p, {})
                ]
            })
        });
    });

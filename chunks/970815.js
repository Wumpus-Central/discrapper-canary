n.d(t, {
    A4: () => b,
    b6: () => c.b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(934248),
    l = n(481060),
    c = n(317257),
    u = n(583478),
    d = n(816202);
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
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = () =>
        (0, r.jsx)('img', {
            className: d.notificationBadge,
            src: n(808824),
            alt: ''
        }),
    g = 'balance-widget-pill',
    E = {
        width: 60,
        height: 60
    },
    v = 3000,
    b = (0, i.forwardRef)(function (e, t) {
        let { balance: n, balanceWidgetMode: o = c.b.DEFAULT, showNotificationBadge: f, onClick: p, onMouseEnter: b, onMouseLeave: y, onMouseDown: O, className: I } = e,
            S = d.default;
        switch (o) {
            case c.b.HIGHLIGHTED:
                S = d.highlighted;
                break;
            case c.b.SELECTED:
                S = d.selected;
        }
        let [T, N] = (0, i.useState)(!1),
            [A, C] = (0, i.useState)(!1),
            R = null === n;
        (0, i.useEffect)(() => {
            R &&
                !T &&
                (N(!0),
                setTimeout(() => {
                    C(!0);
                }, 500));
        }, [R, N, T]),
            (0, i.useEffect)(() => {
                A && !R && N(!1);
            }, [R, A]);
        let P = R || T,
            w = T ? null : n,
            [D, L] = (0, i.useState)(null),
            x = (0, i.useRef)(null),
            { Component: M, play: k, internalLottieRef: j } = (0, s.D)(null != D ? D : 'earn'),
            U = null !== j.current ? j.current.getDuration() : null,
            G = (null !== U ? 1000 * U : v) * 0.9;
        (0, i.useEffect)(() => {
            null !== D && D !== x.current && ((x.current = D), k());
        }, [D, k]);
        let B = (0, i.useCallback)(() => {
                (x.current = null), L(null);
            }, []),
            V = (0, i.useCallback)(
                (e) => {
                    let t = D === x.current;
                    e > 0 && ('earn' !== D || !t) ? L('earn') : e < 0 && ('spend' !== D || !t) && L('spend');
                },
                [L, D]
            );
        return (0, r.jsx)(l.P3F, {
            onClick: P ? void 0 : p,
            className: d.clickable,
            children: (0, r.jsxs)('span', {
                onMouseEnter: b,
                onMouseLeave: y,
                onMouseDown: O,
                id: g,
                ref: t,
                className: a()(d.container, S, I, { [d.containerLoading]: P }),
                children: [
                    (0, r.jsx)('div', {
                        className: a()(d.orbsLottieContainer, P ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(
                            M,
                            h(_({}, E), {
                                size: 'custom',
                                className: d.orbsLottie,
                                useLottieDefaultColors: !0
                            })
                        )
                    }),
                    (0, r.jsx)(u.Z, {
                        value: w,
                        onValueChange: V,
                        onValueReached: B,
                        targetTotalCounterTime: G,
                        className: P ? d.counterLoading : void 0
                    }),
                    f && (0, r.jsx)(m, {})
                ]
            })
        });
    });

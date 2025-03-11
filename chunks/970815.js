n.d(t, {
    A4: () => v,
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
    v = (0, i.forwardRef)(function (e, t) {
        let { balance: n, balanceWidgetMode: o = c.b.DEFAULT, showNotificationBadge: f, onClick: p, onMouseEnter: v, onMouseLeave: b, onMouseDown: y, className: O } = e,
            I = d.default;
        switch (o) {
            case c.b.HIGHLIGHTED:
                I = d.highlighted;
                break;
            case c.b.SELECTED:
                I = d.selected;
        }
        let [S, T] = (0, i.useState)(!1),
            N = null === n;
        (0, i.useEffect)(() => {
            N &&
                !S &&
                (T(!0),
                setTimeout(() => {
                    T(!1);
                }, 500));
        }, [N, T, S]);
        let A = N || S,
            C = S ? null : n,
            [R, P] = (0, i.useState)(null),
            w = (0, i.useRef)(null),
            { Component: D, play: L } = (0, s.D)(null != R ? R : 'earn');
        (0, i.useEffect)(() => {
            null !== R && R !== w.current && ((w.current = R), L());
        }, [R, L]);
        let x = (0, i.useCallback)(() => {
                (w.current = null), P(null);
            }, []),
            M = (0, i.useCallback)(
                (e) => {
                    let t = R === w.current;
                    e > 0 && ('earn' !== R || !t) ? P('earn') : e < 0 && ('spend' !== R || !t) && P('spend');
                },
                [P, R]
            );
        return (0, r.jsx)(l.P3F, {
            onClick: A ? void 0 : p,
            className: d.clickable,
            children: (0, r.jsxs)('span', {
                onMouseEnter: v,
                onMouseLeave: b,
                onMouseDown: y,
                id: g,
                ref: t,
                className: a()(d.container, I, O, { [d.containerLoading]: A }),
                children: [
                    (0, r.jsx)('div', {
                        className: a()(d.orbsLottieContainer, A ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(
                            D,
                            h(_({}, E), {
                                size: 'custom',
                                className: d.orbsLottie,
                                useLottieDefaultColors: !0
                            })
                        )
                    }),
                    (0, r.jsx)(u.Z, {
                        value: C,
                        onValueChange: M,
                        onValueReached: x,
                        className: A ? d.counterLoading : void 0
                    }),
                    f && (0, r.jsx)(m, {})
                ]
            })
        });
    });

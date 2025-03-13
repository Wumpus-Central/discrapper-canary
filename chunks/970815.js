n.d(t, {
    A4: () => y,
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
    b = (e, t) => (e === c.b.SELECTED ? d.selected : t ? d.highlighted : d.default),
    y = (0, i.forwardRef)(function (e, t) {
        let { balance: n, balanceWidgetMode: o = c.b.DEFAULT, showNotificationBadge: f, onClick: p, onMouseDown: y, className: O } = e,
            [I, S] = (0, i.useState)(!1),
            T = (0, i.useMemo)(() => b(o, I), [o, I]),
            [N, A] = (0, i.useState)(!1),
            [C, R] = (0, i.useState)(!1),
            P = null === n;
        (0, i.useEffect)(() => {
            P &&
                !N &&
                (A(!0),
                setTimeout(() => {
                    R(!0);
                }, 500));
        }, [P, A, N]),
            (0, i.useEffect)(() => {
                C && !P && A(!1);
            }, [P, C]);
        let w = P || N,
            D = N ? null : n,
            [L, x] = (0, i.useState)(null),
            M = (0, i.useRef)(null),
            { Component: k, play: j, internalLottieRef: U } = (0, s.D)(null != L ? L : 'earn'),
            G = null !== U.current ? U.current.getDuration() : null,
            B = (null !== G ? 1000 * G : v) * 0.9;
        (0, i.useEffect)(() => {
            null !== L && L !== M.current && ((M.current = L), j());
        }, [L, j]);
        let V = (0, i.useCallback)(() => {
                (M.current = null), x(null);
            }, []),
            F = (0, i.useCallback)(
                (e) => {
                    let t = L === M.current;
                    e > 0 && ('earn' !== L || !t) ? x('earn') : e < 0 && ('spend' !== L || !t) && x('spend');
                },
                [x, L]
            );
        return (0, r.jsx)(l.P3F, {
            onClick: w ? void 0 : p,
            className: d.clickable,
            children: (0, r.jsxs)('span', {
                onMouseDown: y,
                onMouseEnter: () => S(!0),
                onMouseLeave: () => S(!1),
                id: g,
                ref: t,
                className: a()(d.container, T, O, { [d.containerLoading]: w }),
                children: [
                    (0, r.jsx)('div', {
                        className: a()(d.orbsLottieContainer, w ? d.orbIconloading : void 0),
                        children: (0, r.jsx)(
                            k,
                            h(_({}, E), {
                                size: 'custom',
                                className: d.orbsLottie,
                                useLottieDefaultColors: !0
                            })
                        )
                    }),
                    (0, r.jsx)(u.Z, {
                        value: D,
                        onValueChange: F,
                        onValueReached: V,
                        targetTotalCounterTime: B,
                        className: w ? d.counterLoading : void 0
                    }),
                    f && (0, r.jsx)(m, {})
                ]
            })
        });
    });

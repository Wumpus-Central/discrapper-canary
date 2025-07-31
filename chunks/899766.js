(r.d(t, { J: () => h }), r(539854));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(66546),
    s = r(873546),
    c = r(435935),
    u = r(481060),
    d = r(774078),
    p = r(388032),
    f = r(698921);
function g(e) {
    let { endDate: t } = e,
        { days: r, hours: l, minutes: i, seconds: a } = (0, d.Z)(t),
        o = (function (e, t, r, n) {
            let l = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                i = [];
            return (e > 0 && i.push(l(e, p.intl.string(p.t.QJyuxc))), (t > 0 || i.length > 0) && i.push(l(t, p.intl.string(p.t['1LyF1t']))), (r > 0 || i.length > 0) && i.push(l(r, p.intl.string(p.t.n7dksL))), i.push(l(n, p.intl.string(p.t['6m/6nJ']))), i.join(':'));
        })(r, l, i, a);
    return (0, n.jsx)(u.Text, {
        variant: 'heading-md/medium',
        className: f.countdown,
        tag: 'div',
        color: 'always-white',
        children: (0, n.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: o
        })
    });
}
let h = l.memo(function (e) {
    let { record: t, isVisible: r, isFullScreen: l } = e,
        i = (0, u.q_F)({
            transform: 'translateX(-50%) '.concat(r ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: +!!r,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, n.jsxs)(o.animated.div, {
        className: a()([f.countDownWrapper, l && f.fullScreenWrapper, s.tq && f.mobileWrapper]),
        role: 'status',
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })(
            {},
            i,
            null != t.bannerUrl &&
                '' !== t.bannerUrl && {
                    backgroundImage: 'url('.concat(t.bannerUrl, ')'),
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                }
        ),
        children: [
            (0, n.jsxs)(c.k, {
                direction: c.k.Direction.VERTICAL,
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: 'text-md/medium',
                        className: f.countdownLabel,
                        style: null != t.textColor && '' !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title
                    }),
                    null != t.body &&
                        '' !== t.body &&
                        (0, n.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            className: f.countdownBody,
                            style: null != t.textColor && '' !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body
                        })
                ]
            }),
            (0, n.jsx)(g, { endDate: t.endTime })
        ]
    });
});

(n.d(t, { J: () => h }), n(539854));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(264738),
    s = n(873546),
    c = n(435935),
    u = n(481060),
    d = n(774078),
    p = n(388032),
    g = n(698921);
function f(e) {
    let { endDate: t } = e,
        { days: n, hours: l, minutes: o, seconds: i } = (0, d.Z)(t),
        a = (function (e, t, n, r) {
            let l = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                o = [];
            return (e > 0 && o.push(l(e, p.intl.string(p.t.QJyuxc))), (t > 0 || o.length > 0) && o.push(l(t, p.intl.string(p.t['1LyF1t']))), (n > 0 || o.length > 0) && o.push(l(n, p.intl.string(p.t.n7dksL))), o.push(l(r, p.intl.string(p.t['6m/6nJ']))), o.join(':'));
        })(n, l, o, i);
    return (0, r.jsx)(u.Text, {
        variant: 'heading-md/medium',
        className: g.countdown,
        tag: 'div',
        color: 'always-white',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: a
        })
    });
}
let h = l.memo(function (e) {
    let { record: t, isVisible: n, isFullScreen: l } = e,
        o = (0, u.q_F)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: +!!n,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(a.animated.div, {
        className: i()([g.countDownWrapper, l && g.fullScreenWrapper, s.tq && g.mobileWrapper]),
        role: 'status',
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {},
            o,
            null != t.bannerUrl &&
                '' !== t.bannerUrl && {
                    backgroundImage: 'url('.concat(t.bannerUrl, ')'),
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                }
        ),
        children: [
            (0, r.jsxs)(c.k, {
                direction: c.k.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-md/medium',
                        className: g.countdownLabel,
                        style: null != t.textColor && '' !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title
                    }),
                    null != t.body &&
                        '' !== t.body &&
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            className: g.countdownBody,
                            style: null != t.textColor && '' !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body
                        })
                ]
            }),
            (0, r.jsx)(f, { endDate: t.endTime })
        ]
    });
});

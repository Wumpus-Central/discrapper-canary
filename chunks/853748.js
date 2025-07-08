(n.d(t, { $: () => b }), n(539854));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(451463),
    s = n(873546),
    c = n(481060),
    u = n(774078),
    d = n(388032),
    p = n(894948),
    f = n(781385),
    g = n(585616);
function h(e) {
    let { endDate: t } = e,
        { days: n, hours: l, minutes: o, seconds: i } = (0, u.Z)(t),
        a = (function (e, t, n, r) {
            let l = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                o = [];
            return (e > 0 && o.push(l(e, d.intl.string(d.t.QJyuxc))), (t > 0 || o.length > 0) && o.push(l(t, d.intl.string(d.t['1LyF1t']))), (n > 0 || o.length > 0) && o.push(l(n, d.intl.string(d.t.n7dksL))), o.push(l(r, d.intl.string(d.t['6m/6nJ']))), o.join(':'));
        })(n, l, o, i);
    return (0, r.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: p.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: a
        })
    });
}
let b = l.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: l, isFullScreen: o } = e,
        u = (0, c.q_F)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: +!!n,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(a.animated.div, {
        className: i()([p.countDownWrapper, o && p.fullScreenWrapper, s.tq && p.mobileWrapper]),
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
        })({}, l.style, u),
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: p.countdownLabel,
                children: l.label()
            }),
            null != l.iconSrc &&
                (0, r.jsx)('img', {
                    src: l.iconSrc,
                    className: p.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(h, { endDate: t }),
            (0, r.jsx)('img', {
                src: f.Z,
                className: i()(p.sparkles, p.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: g.Z,
                className: i()(p.sparkles, p.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});

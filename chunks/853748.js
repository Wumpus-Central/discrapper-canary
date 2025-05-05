n.d(t, { $: () => h }), n(539854);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(481752),
    s = n(873546),
    c = n(481060),
    u = n(774078),
    d = n(388032),
    b = n(894948),
    p = n(781385),
    f = n(585616);
function g(e) {
    let { endDate: t } = e,
        { days: n, hours: l, minutes: a, seconds: i } = (0, u.Z)(t),
        o = (function (e, t, n, r) {
            let l = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                a = [];
            return e > 0 && a.push(l(e, d.intl.string(d.t.QJyuxc))), (t > 0 || a.length > 0) && a.push(l(t, d.intl.string(d.t['1LyF1t']))), (n > 0 || a.length > 0) && a.push(l(n, d.intl.string(d.t.n7dksL))), a.push(l(r, d.intl.string(d.t['6m/6nJ']))), a.join(':');
        })(n, l, a, i);
    return (0, r.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: b.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: o
        })
    });
}
let h = l.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: l, isFullScreen: a } = e,
        u = (0, c.q_F)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: +!!n,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(o.animated.div, {
        className: i()([b.countDownWrapper, a && b.fullScreenWrapper, s.tq && b.mobileWrapper]),
        role: 'status',
        style: (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, l.style, u),
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: b.countdownLabel,
                children: l.label()
            }),
            null != l.iconSrc &&
                (0, r.jsx)('img', {
                    src: l.iconSrc,
                    className: b.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(g, { endDate: t }),
            (0, r.jsx)('img', {
                src: p.Z,
                className: i()(b.sparkles, b.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: f.Z,
                className: i()(b.sparkles, b.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});

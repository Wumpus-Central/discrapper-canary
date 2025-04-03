n.d(t, { $: () => h }), n(653041);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    s = n(873546),
    c = n(481060),
    u = n(774078),
    d = n(388032),
    b = n(894948),
    p = n(781385),
    f = n(585616);
function g(e) {
    let { endDate: t } = e,
        { days: n, hours: l, minutes: a, seconds: o } = (0, u.Z)(t),
        i = (function (e, t, n, r) {
            let l = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                a = [];
            return e > 0 && a.push(l(e, d.NW.string(d.t.QJyuxc))), (t > 0 || a.length > 0) && a.push(l(t, d.NW.string(d.t['1LyF1t']))), (n > 0 || a.length > 0) && a.push(l(n, d.NW.string(d.t.n7dksL))), a.push(l(r, d.NW.string(d.t['6m/6nJ']))), a.join(':');
        })(n, l, a, o);
    return (0, r.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: b.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: i
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
    return (0, r.jsxs)(i.animated.div, {
        className: o()([b.countDownWrapper, a && b.fullScreenWrapper, s.tq && b.mobileWrapper]),
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
                className: o()(b.sparkles, b.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: f.Z,
                className: o()(b.sparkles, b.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});

r.d(t, { $: () => m }), r(653041);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(642128),
    s = r(873546),
    c = r(481060),
    d = r(774078),
    u = r(388032),
    p = r(108912),
    f = r(781385),
    h = r(585616);
function C(e) {
    let { endDate: t } = e,
        { days: r, hours: l, minutes: i, seconds: a } = (0, d.Z)(t),
        o = (function (e, t, r, n) {
            let l = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                i = [];
            return e > 0 && i.push(l(e, u.NW.string(u.t.QJyuxc))), (t > 0 || i.length > 0) && i.push(l(t, u.NW.string(u.t['1LyF1t']))), (r > 0 || i.length > 0) && i.push(l(r, u.NW.string(u.t.n7dksL))), i.push(l(n, u.NW.string(u.t['6m/6nJ']))), i.join(':');
        })(r, l, i, a);
    return (0, n.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: p.countdown,
        tag: 'div',
        children: (0, n.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: o
        })
    });
}
let m = l.memo(function (e) {
    let { unpublishedAt: t, isVisible: r, displayOptions: l, isFullScreen: i } = e,
        d = (0, c.q_F)({
            transform: 'translateX(-50%) '.concat(r ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: +!!r,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, n.jsxs)(o.animated.div, {
        className: a()([p.countDownWrapper, i && p.fullScreenWrapper, s.tq && p.mobileWrapper]),
        role: 'status',
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, l.style, d),
        children: [
            (0, n.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: p.countdownLabel,
                children: l.label()
            }),
            null != l.iconSrc &&
                (0, n.jsx)('img', {
                    src: l.iconSrc,
                    className: p.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, n.jsx)(C, { endDate: t }),
            (0, n.jsx)('img', {
                src: f.Z,
                className: a()(p.sparkles, p.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, n.jsx)('img', {
                src: h.Z,
                className: a()(p.sparkles, p.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});

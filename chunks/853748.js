n.d(t, {
    $: function () {
        return f;
    }
}),
    n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(666912),
    o = n(873546),
    c = n(481060),
    d = n(774078),
    u = n(388032),
    m = n(962528),
    h = n(781385),
    g = n(585616);
function p(e) {
    let { endDate: t } = e,
        { days: n, hours: a, minutes: i, seconds: l } = (0, d.Z)(t),
        s = (function (e, t, n, r) {
            let a = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                i = [];
            return e > 0 && i.push(a(e, u.intl.string(u.t.QJyuxc))), (t > 0 || i.length > 0) && i.push(a(t, u.intl.string(u.t['1LyF1t']))), (n > 0 || i.length > 0) && i.push(a(n, u.intl.string(u.t.n7dksL))), i.push(a(r, u.intl.string(u.t['6m/6nJ']))), i.join(':');
        })(n, a, i, l);
    return (0, r.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: m.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: s
        })
    });
}
let f = a.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: a, isFullScreen: i } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(s.animated.div, {
        className: l()([m.countDownWrapper, i && m.fullScreenWrapper, o.tq && m.mobileWrapper]),
        role: 'status',
        style: {
            ...a.style,
            ...d
        },
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: m.countdownLabel,
                children: a.label()
            }),
            null != a.iconSrc &&
                (0, r.jsx)('img', {
                    src: a.iconSrc,
                    className: m.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(p, { endDate: t }),
            (0, r.jsx)('img', {
                src: h.Z,
                className: l()(m.sparkles, m.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: g.Z,
                className: l()(m.sparkles, m.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});

n.d(t, {
    $: function () {
        return m;
    }
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(642128),
    o = n(873546),
    c = n(481060),
    d = n(774078),
    u = n(388032),
    C = n(962528),
    h = n(781385),
    p = n(585616);
function f(e) {
    let { endDate: t } = e,
        { days: n, hours: i, minutes: l, seconds: a } = (0, d.Z)(t),
        s = (function (e, t, n, r) {
            let i = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                l = [];
            return e > 0 && l.push(i(e, u.intl.string(u.t.QJyuxc))), (t > 0 || l.length > 0) && l.push(i(t, u.intl.string(u.t['1LyF1t']))), (n > 0 || l.length > 0) && l.push(i(n, u.intl.string(u.t.n7dksL))), l.push(i(r, u.intl.string(u.t['6m/6nJ']))), l.join(':');
        })(n, i, l, a);
    return (0, r.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: C.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: s
        })
    });
}
let m = i.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: i, isFullScreen: l } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(s.animated.div, {
        className: a()([C.countDownWrapper, l && C.fullScreenWrapper, o.tq && C.mobileWrapper]),
        role: 'status',
        style: {
            ...i.style,
            ...d
        },
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: C.countdownLabel,
                children: i.label()
            }),
            null != i.iconSrc &&
                (0, r.jsx)('img', {
                    src: i.iconSrc,
                    className: C.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(f, { endDate: t }),
            (0, r.jsx)('img', {
                src: h.Z,
                className: a()(C.sparkles, C.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: p.Z,
                className: a()(C.sparkles, C.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});

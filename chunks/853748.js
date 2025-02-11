n.d(t, { $: () => f }), n(653041);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(642128),
    o = n(873546),
    d = n(481060),
    c = n(774078),
    u = n(388032),
    C = n(304624),
    h = n(781385),
    p = n(585616);
function m(e) {
    let { endDate: t } = e,
        { days: n, hours: r, minutes: i, seconds: s } = (0, c.Z)(t),
        a = (function (e, t, n, l) {
            let r = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                i = [];
            return e > 0 && i.push(r(e, u.intl.string(u.t.QJyuxc))), (t > 0 || i.length > 0) && i.push(r(t, u.intl.string(u.t['1LyF1t']))), (n > 0 || i.length > 0) && i.push(r(n, u.intl.string(u.t.n7dksL))), i.push(r(l, u.intl.string(u.t['6m/6nJ']))), i.join(':');
        })(n, r, i, s);
    return (0, l.jsx)(d.Text, {
        variant: 'heading-md/medium',
        className: C.countdown,
        tag: 'div',
        children: (0, l.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: a
        })
    });
}
let f = r.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: r, isFullScreen: i } = e,
        c = (0, d.q_F)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, l.jsxs)(a.animated.div, {
        className: s()([C.countDownWrapper, i && C.fullScreenWrapper, o.tq && C.mobileWrapper]),
        role: 'status',
        style: {
            ...r.style,
            ...c
        },
        children: [
            (0, l.jsx)(d.Text, {
                variant: 'text-md/medium',
                className: C.countdownLabel,
                children: r.label()
            }),
            null != r.iconSrc &&
                (0, l.jsx)('img', {
                    src: r.iconSrc,
                    className: C.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, l.jsx)(m, { endDate: t }),
            (0, l.jsx)('img', {
                src: h.Z,
                className: s()(C.sparkles, C.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, l.jsx)('img', {
                src: p.Z,
                className: s()(C.sparkles, C.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});

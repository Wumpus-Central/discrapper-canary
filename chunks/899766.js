(r.d(t, { J: () => g }), r(539854), r(35282));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(66546),
    s = r(873546),
    c = r(435935),
    u = r(481060),
    d = r(774078),
    p = r(698921);
function f(e) {
    let { endDate: t } = e,
        { days: r, hours: l, minutes: i } = (0, d.Z)(t),
        o = (function (e, t, r) {
            let n = (e) => ''.concat(e.toString().padStart(2, '0')),
                l = [];
            return (l.push(n(e)), l.push(n(t)), l.push(n(r)), l.join(':'));
        })(r, l, i);
    return (0, n.jsx)('div', {
        className: p.timerNumContainer,
        role: 'timer',
        'aria-relevant': 'all',
        children: o.split('').map((e, t) =>
            (0, n.jsx)(
                u.X6q,
                {
                    variant: 'heading-md/medium',
                    className: a()({
                        [p.timerDelineator]: ':' === e,
                        [p.timerNum]: ':' !== e
                    }),
                    children: e
                },
                t
            )
        )
    });
}
let g = l.memo(function (e) {
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
        className: a()([p.countDownWrapper, l && p.fullScreenWrapper, s.tq && p.mobileWrapper]),
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
                        className: p.countdownLabel,
                        style: null != t.textColor && '' !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title
                    }),
                    null != t.body &&
                        '' !== t.body &&
                        (0, n.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            className: p.countdownBody,
                            style: null != t.textColor && '' !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body
                        })
                ]
            }),
            (0, n.jsx)(f, { endDate: t.endTime })
        ]
    });
});

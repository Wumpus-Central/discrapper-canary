n(47120);
var i = n(200651),
    r = n(192379),
    s = n(780384),
    a = n(410030),
    l = n(119269),
    o = n(692592);
let c = 'url(#gradient)',
    d = (e, t) => {
        switch (e) {
            case l.Qo.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case l.Qo.NITRO_GEM:
            case l.Qo.AVATAR_DECO:
            default:
                return;
        }
    },
    u = (e) => {
        switch (e) {
            case l.Qo.NITRO_GEM:
            case l.Qo.AVATAR_DECO:
                return 'var(--background-primary)';
            case l.Qo.NITRO_LOGO:
                return 'var(--premium-tier-2-purple)';
            default:
                return;
        }
    },
    m = (e, t) => {
        switch (t) {
            case l.Qo.NITRO_GEM:
            case l.Qo.AVATAR_DECO:
                return c;
            case l.Qo.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    };
t.Z = (e) => {
    let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: g = 0, progressCircleStrokeSize: h = 2, progressCircleVariation: p, progressCircleStroke: x } = e,
        f = 43 + h / 2,
        _ = 2 * Math.PI * f,
        [E, C] = r.useState(g);
    r.useEffect(() => {
        let e = setTimeout(() => {
            C(t);
        }, 200);
        return () => clearTimeout(e);
    }, [t]);
    let T = (0, a.ZP)(),
        S = (0, s.ap)(T),
        b = u(p),
        I = d(p, S),
        N = null != x ? x : m(S, p);
    return (0, i.jsxs)('div', {
        className: o.circleContainer,
        children: [
            (0, i.jsxs)('svg', {
                viewBox: '0 0 100 100',
                className: o.circleSVG,
                children: [
                    (0, i.jsx)('circle', {
                        className: p === l.Qo.NITRO_GEM || p === l.Qo.AVATAR_DECO ? o.baseProgressCircle : void 0,
                        fill: 'transparent',
                        strokeWidth: h,
                        r: ''.concat(f),
                        cx: '50%',
                        cy: '50%',
                        stroke: b,
                        strokeOpacity: I
                    }),
                    (0, i.jsx)('circle', {
                        stroke: N,
                        strokeWidth: h,
                        strokeLinecap: 'round',
                        strokeDasharray: ''.concat(_, ' ').concat(_),
                        className: c,
                        style: { strokeDashoffset: (1 - E / 100) * _ },
                        r: ''.concat(f),
                        cx: '50%',
                        cy: '50%'
                    })
                ]
            }),
            (0, i.jsxs)('svg', {
                width: '0',
                height: '0',
                children: [
                    (0, i.jsxs)('linearGradient', {
                        id: 'gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '100%',
                        children: [
                            (0, i.jsx)('stop', {
                                offset: '0%',
                                style: { stopColor: '#FFBDF2' }
                            }),
                            (0, i.jsx)('stop', {
                                offset: '100%',
                                style: { stopColor: '#E742E1' }
                            })
                        ]
                    }),
                    (0, i.jsxs)('linearGradient', {
                        id: 'gradient_nitro_logo',
                        x1: '2.99995',
                        y1: '67.6298',
                        x2: '132.55',
                        y2: '67.6298',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', { stopColor: '#F9A0E8' }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E742E1'
                            })
                        ]
                    }),
                    (0, i.jsxs)('linearGradient', {
                        id: 'dark-purple-gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '0%',
                        children: [
                            (0, i.jsx)('stop', {
                                offset: '0%',
                                style: {
                                    stopColor: '#241731',
                                    stopOpacity: 1
                                }
                            }),
                            (0, i.jsx)('stop', {
                                offset: '100%',
                                style: {
                                    stopColor: '#241731',
                                    stopOpacity: 1
                                }
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: o.childrenContainer,
                children: n
            })
        ]
    });
};

s(47120);
var n = s(200651),
    r = s(192379),
    i = s(780384),
    a = s(410030),
    o = s(119269),
    l = s(697303);
let c = 'url(#gradient)',
    u = (e, t) => {
        switch (e) {
            case o.Qo.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case o.Qo.NITRO_GEM:
            case o.Qo.AVATAR_DECO:
            default:
                return;
        }
    },
    d = (e) => {
        switch (e) {
            case o.Qo.NITRO_GEM:
            case o.Qo.AVATAR_DECO:
                return 'var(--background-primary)';
            case o.Qo.NITRO_LOGO:
                return 'var(--premium-tier-2-purple)';
            default:
                return;
        }
    },
    p = (e, t) => {
        switch (t) {
            case o.Qo.NITRO_GEM:
            case o.Qo.AVATAR_DECO:
                return c;
            case o.Qo.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    };
t.Z = (e) => {
    let { percentage: t = 0, children: s, animationClassName: c, initialPercentage: f = 0, progressCircleStrokeSize: x = 2, progressCircleVariation: g, progressCircleStroke: C } = e,
        _ = 43 + x / 2,
        m = 2 * Math.PI * _,
        [h, v] = r.useState(f);
    r.useEffect(() => {
        let e = setTimeout(() => {
            v(t);
        }, 200);
        return () => clearTimeout(e);
    }, [t]);
    let L = (0, a.ZP)(),
        A = (0, i.ap)(L),
        E = d(g),
        j = u(g, A),
        O = null != C ? C : p(A, g);
    return (0, n.jsxs)('div', {
        className: l.circleContainer,
        children: [
            (0, n.jsxs)('svg', {
                viewBox: '0 0 100 100',
                className: l.circleSVG,
                children: [
                    (0, n.jsx)('circle', {
                        className: g === o.Qo.NITRO_GEM || g === o.Qo.AVATAR_DECO ? l.baseProgressCircle : void 0,
                        fill: 'transparent',
                        strokeWidth: x,
                        r: ''.concat(_),
                        cx: '50%',
                        cy: '50%',
                        stroke: E,
                        strokeOpacity: j
                    }),
                    (0, n.jsx)('circle', {
                        stroke: O,
                        strokeWidth: x,
                        strokeLinecap: 'round',
                        strokeDasharray: ''.concat(m, ' ').concat(m),
                        className: c,
                        style: { strokeDashoffset: (1 - h / 100) * m },
                        r: ''.concat(_),
                        cx: '50%',
                        cy: '50%'
                    })
                ]
            }),
            (0, n.jsxs)('svg', {
                width: '0',
                height: '0',
                children: [
                    (0, n.jsxs)('linearGradient', {
                        id: 'gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '100%',
                        children: [
                            (0, n.jsx)('stop', {
                                offset: '0%',
                                style: { stopColor: '#FFBDF2' }
                            }),
                            (0, n.jsx)('stop', {
                                offset: '100%',
                                style: { stopColor: '#E742E1' }
                            })
                        ]
                    }),
                    (0, n.jsxs)('linearGradient', {
                        id: 'gradient_nitro_logo',
                        x1: '2.99995',
                        y1: '67.6298',
                        x2: '132.55',
                        y2: '67.6298',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, n.jsx)('stop', { stopColor: '#F9A0E8' }),
                            (0, n.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E742E1'
                            })
                        ]
                    }),
                    (0, n.jsxs)('linearGradient', {
                        id: 'dark-purple-gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '0%',
                        children: [
                            (0, n.jsx)('stop', {
                                offset: '0%',
                                style: {
                                    stopColor: '#241731',
                                    stopOpacity: 1
                                }
                            }),
                            (0, n.jsx)('stop', {
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
            (0, n.jsx)('div', {
                className: l.childrenContainer,
                children: s
            })
        ]
    });
};

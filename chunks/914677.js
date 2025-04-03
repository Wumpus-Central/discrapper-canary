s.d(t, { Z: () => f }), s(47120);
var r = s(200651),
    n = s(192379),
    i = s(780384),
    o = s(410030),
    l = s(119269),
    a = s(3504);
let c = 'url(#gradient)',
    u = (e, t) => {
        switch (e) {
            case l.Qo.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case l.Qo.NITRO_GEM:
            case l.Qo.AVATAR_DECO:
            default:
                return;
        }
    },
    d = (e) => {
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
    p = (e, t) => {
        switch (t) {
            case l.Qo.NITRO_GEM:
            case l.Qo.AVATAR_DECO:
                return c;
            case l.Qo.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    },
    f = (e) => {
        let { percentage: t = 0, children: s, animationClassName: c, initialPercentage: f = 0, progressCircleStrokeSize: b = 2, progressCircleVariation: g, progressCircleStroke: O } = e,
            x = 43 + b / 2,
            m = 2 * Math.PI * x,
            [h, j] = n.useState(f);
        n.useEffect(() => {
            let e = setTimeout(() => {
                j(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let y = (0, o.ZP)(),
            C = (0, i.ap)(y),
            v = d(g),
            P = u(g, C),
            S = null != O ? O : p(C, g);
        return (0, r.jsxs)('div', {
            className: a.circleContainer,
            children: [
                (0, r.jsxs)('svg', {
                    viewBox: '0 0 100 100',
                    className: a.circleSVG,
                    children: [
                        (0, r.jsx)('circle', {
                            className: g === l.Qo.NITRO_GEM || g === l.Qo.AVATAR_DECO ? a.baseProgressCircle : void 0,
                            fill: 'transparent',
                            strokeWidth: b,
                            r: ''.concat(x),
                            cx: '50%',
                            cy: '50%',
                            stroke: v,
                            strokeOpacity: P
                        }),
                        (0, r.jsx)('circle', {
                            stroke: S,
                            strokeWidth: b,
                            strokeLinecap: 'round',
                            strokeDasharray: ''.concat(m, ' ').concat(m),
                            className: c,
                            style: { strokeDashoffset: (1 - h / 100) * m },
                            r: ''.concat(x),
                            cx: '50%',
                            cy: '50%'
                        })
                    ]
                }),
                (0, r.jsxs)('svg', {
                    width: '0',
                    height: '0',
                    children: [
                        (0, r.jsxs)('linearGradient', {
                            id: 'gradient',
                            x1: '0%',
                            y1: '0%',
                            x2: '100%',
                            y2: '100%',
                            children: [
                                (0, r.jsx)('stop', {
                                    offset: '0%',
                                    style: { stopColor: '#FFBDF2' }
                                }),
                                (0, r.jsx)('stop', {
                                    offset: '100%',
                                    style: { stopColor: '#E742E1' }
                                })
                            ]
                        }),
                        (0, r.jsxs)('linearGradient', {
                            id: 'gradient_nitro_logo',
                            x1: '2.99995',
                            y1: '67.6298',
                            x2: '132.55',
                            y2: '67.6298',
                            gradientUnits: 'userSpaceOnUse',
                            children: [
                                (0, r.jsx)('stop', { stopColor: '#F9A0E8' }),
                                (0, r.jsx)('stop', {
                                    offset: '1',
                                    stopColor: '#E742E1'
                                })
                            ]
                        }),
                        (0, r.jsxs)('linearGradient', {
                            id: 'dark-purple-gradient',
                            x1: '0%',
                            y1: '0%',
                            x2: '100%',
                            y2: '0%',
                            children: [
                                (0, r.jsx)('stop', {
                                    offset: '0%',
                                    style: {
                                        stopColor: '#241731',
                                        stopOpacity: 1
                                    }
                                }),
                                (0, r.jsx)('stop', {
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
                (0, r.jsx)('div', {
                    className: a.childrenContainer,
                    children: s
                })
            ]
        });
    };

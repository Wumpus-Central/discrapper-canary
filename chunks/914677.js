r.d(t, { Z: () => f }), r(388685);
var n = r(200651),
    i = r(192379),
    s = r(780384),
    o = r(410030),
    l = r(119269),
    a = r(820136);
let c = 'url(#gradient)',
    h = (e, t) => {
        switch (e) {
            case l.Qo.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case l.Qo.NITRO_GEM:
            case l.Qo.AVATAR_DECO:
            default:
                return;
        }
    },
    v = (e) => {
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
    u = (e, t) => {
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
        let { percentage: t = 0, children: r, animationClassName: c, initialPercentage: f = 0, progressCircleStrokeSize: p = 2, progressCircleVariation: d, progressCircleStroke: b } = e,
            g = 43 + p / 2,
            Z = 2 * Math.PI * g,
            [j, M] = i.useState(f);
        i.useEffect(() => {
            let e = setTimeout(() => {
                M(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let O = (0, o.ZP)(),
            y = (0, s.ap)(O),
            m = v(d),
            H = h(d, y),
            x = null != b ? b : u(y, d);
        return (0, n.jsxs)('div', {
            className: a.circleContainer,
            children: [
                (0, n.jsxs)('svg', {
                    viewBox: '0 0 100 100',
                    className: a.circleSVG,
                    children: [
                        (0, n.jsx)('circle', {
                            className: d === l.Qo.NITRO_GEM || d === l.Qo.AVATAR_DECO ? a.baseProgressCircle : void 0,
                            fill: 'transparent',
                            strokeWidth: p,
                            r: ''.concat(g),
                            cx: '50%',
                            cy: '50%',
                            stroke: m,
                            strokeOpacity: H
                        }),
                        (0, n.jsx)('circle', {
                            stroke: x,
                            strokeWidth: p,
                            strokeLinecap: 'round',
                            strokeDasharray: ''.concat(Z, ' ').concat(Z),
                            className: c,
                            style: { strokeDashoffset: (1 - j / 100) * Z },
                            r: ''.concat(g),
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
                    className: a.childrenContainer,
                    children: r
                })
            ]
        });
    };

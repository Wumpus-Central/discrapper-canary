(n.d(t, { Z: () => p }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(780384),
    a = n(410030),
    l = n(119269),
    o = n(3504);
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
                return 'var(--background-base-low)';
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
    },
    p = (e) => {
        let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: p = 0, progressCircleStrokeSize: g = 2, progressCircleVariation: h, progressCircleStroke: f } = e,
            b = 43 + g / 2,
            x = 2 * Math.PI * b,
            [_, j] = r.useState(p);
        r.useEffect(() => {
            let e = setTimeout(() => {
                j(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let O = (0, a.ZP)(),
            C = (0, s.ap)(O),
            E = u(h),
            v = d(h, C),
            S = null != f ? f : m(C, h);
        return (0, i.jsxs)('div', {
            className: o.circleContainer,
            children: [
                (0, i.jsxs)('svg', {
                    viewBox: '0 0 100 100',
                    className: o.circleSVG,
                    children: [
                        (0, i.jsx)('circle', {
                            className: h === l.Qo.NITRO_GEM || h === l.Qo.AVATAR_DECO ? o.baseProgressCircle : void 0,
                            fill: 'transparent',
                            strokeWidth: g,
                            r: ''.concat(b),
                            cx: '50%',
                            cy: '50%',
                            stroke: E,
                            strokeOpacity: v
                        }),
                        (0, i.jsx)('circle', {
                            stroke: S,
                            strokeWidth: g,
                            strokeLinecap: 'round',
                            strokeDasharray: ''.concat(x, ' ').concat(x),
                            className: c,
                            style: { strokeDashoffset: (1 - _ / 100) * x },
                            r: ''.concat(b),
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

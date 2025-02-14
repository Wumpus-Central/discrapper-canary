n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(780384),
    l = n(410030),
    a = n(119269),
    o = n(933304);
let c = 'url(#gradient)',
    d = (e, t) => {
        switch (e) {
            case a.Qo.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case a.Qo.NITRO_GEM:
            case a.Qo.AVATAR_DECO:
            default:
                return;
        }
    },
    u = (e) => {
        switch (e) {
            case a.Qo.NITRO_GEM:
            case a.Qo.AVATAR_DECO:
                return 'var(--background-primary)';
            case a.Qo.NITRO_LOGO:
                return 'var(--premium-tier-2-purple)';
            default:
                return;
        }
    },
    m = (e, t) => {
        switch (t) {
            case a.Qo.NITRO_GEM:
            case a.Qo.AVATAR_DECO:
                return c;
            case a.Qo.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    },
    h = (e) => {
        let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: h = 0, progressCircleStrokeSize: g = 2, progressCircleVariation: x, progressCircleStroke: _ } = e,
            p = 43 + g / 2,
            E = 2 * Math.PI * p,
            [C, f] = s.useState(h);
        s.useEffect(() => {
            let e = setTimeout(() => {
                f(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let T = (0, l.ZP)(),
            N = (0, r.ap)(T),
            S = u(x),
            I = d(x, N),
            b = null != _ ? _ : m(N, x);
        return (0, i.jsxs)('div', {
            className: o.circleContainer,
            children: [
                (0, i.jsxs)('svg', {
                    viewBox: '0 0 100 100',
                    className: o.circleSVG,
                    children: [
                        (0, i.jsx)('circle', {
                            className: x === a.Qo.NITRO_GEM || x === a.Qo.AVATAR_DECO ? o.baseProgressCircle : void 0,
                            fill: 'transparent',
                            strokeWidth: g,
                            r: ''.concat(p),
                            cx: '50%',
                            cy: '50%',
                            stroke: S,
                            strokeOpacity: I
                        }),
                        (0, i.jsx)('circle', {
                            stroke: b,
                            strokeWidth: g,
                            strokeLinecap: 'round',
                            strokeDasharray: ''.concat(E, ' ').concat(E),
                            className: c,
                            style: { strokeDashoffset: (1 - C / 100) * E },
                            r: ''.concat(p),
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

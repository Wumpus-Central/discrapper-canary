n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(780384),
    a = n(410030),
    l = n(119269),
    o = n(652523);
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
    },
    g = (e) => {
        let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: g = 0, progressCircleStrokeSize: p = 2, progressCircleVariation: h, progressCircleStroke: f } = e,
            b = 43 + p / 2,
            N = 2 * Math.PI * b,
            [x, _] = i.useState(g);
        i.useEffect(() => {
            let e = setTimeout(() => {
                _(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let E = (0, a.ZP)(),
            j = (0, s.ap)(E),
            C = u(h),
            O = d(h, j),
            v = null != f ? f : m(j, h);
        return (0, r.jsxs)('div', {
            className: o.circleContainer,
            children: [
                (0, r.jsxs)('svg', {
                    viewBox: '0 0 100 100',
                    className: o.circleSVG,
                    children: [
                        (0, r.jsx)('circle', {
                            className: h === l.Qo.NITRO_GEM || h === l.Qo.AVATAR_DECO ? o.baseProgressCircle : void 0,
                            fill: 'transparent',
                            strokeWidth: p,
                            r: ''.concat(b),
                            cx: '50%',
                            cy: '50%',
                            stroke: C,
                            strokeOpacity: O
                        }),
                        (0, r.jsx)('circle', {
                            stroke: v,
                            strokeWidth: p,
                            strokeLinecap: 'round',
                            strokeDasharray: ''.concat(N, ' ').concat(N),
                            className: c,
                            style: { strokeDashoffset: (1 - x / 100) * N },
                            r: ''.concat(b),
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
                    className: o.childrenContainer,
                    children: n
                })
            ]
        });
    };

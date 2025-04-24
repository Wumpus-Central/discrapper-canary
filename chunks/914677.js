n.d(t, { Z: () => p }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(780384),
    l = n(410030),
    a = n(119269),
    o = n(3504);
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
    p = (e) => {
        let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: p = 0, progressCircleStrokeSize: g = 2, progressCircleVariation: h, progressCircleStroke: f } = e,
            b = 43 + g / 2,
            _ = 2 * Math.PI * b,
            [x, E] = r.useState(p);
        r.useEffect(() => {
            let e = setTimeout(() => {
                E(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let C = (0, l.ZP)(),
            j = (0, s.ap)(C),
            O = u(h),
            S = d(h, j),
            v = null != f ? f : m(j, h);
        return (0, i.jsxs)('div', {
            className: o.circleContainer,
            children: [
                (0, i.jsxs)('svg', {
                    viewBox: '0 0 100 100',
                    className: o.circleSVG,
                    children: [
                        (0, i.jsx)('circle', {
                            className: h === a.Qo.NITRO_GEM || h === a.Qo.AVATAR_DECO ? o.baseProgressCircle : void 0,
                            fill: 'transparent',
                            strokeWidth: g,
                            r: ''.concat(b),
                            cx: '50%',
                            cy: '50%',
                            stroke: O,
                            strokeOpacity: S
                        }),
                        (0, i.jsx)('circle', {
                            stroke: v,
                            strokeWidth: g,
                            strokeLinecap: 'round',
                            strokeDasharray: ''.concat(_, ' ').concat(_),
                            className: c,
                            style: { strokeDashoffset: (1 - x / 100) * _ },
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

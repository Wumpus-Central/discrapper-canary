n.d(t, { Z: () => p }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(780384),
    o = n(410030),
    s = n(119269),
    a = n(3504);
let c = 'url(#gradient)',
    u = (e, t) => {
        switch (e) {
            case s.Qo.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case s.Qo.NITRO_GEM:
            case s.Qo.AVATAR_DECO:
            default:
                return;
        }
    },
    d = (e) => {
        switch (e) {
            case s.Qo.NITRO_GEM:
            case s.Qo.AVATAR_DECO:
                return 'var(--background-primary)';
            case s.Qo.NITRO_LOGO:
                return 'var(--premium-tier-2-purple)';
            default:
                return;
        }
    },
    h = (e, t) => {
        switch (t) {
            case s.Qo.NITRO_GEM:
            case s.Qo.AVATAR_DECO:
                return c;
            case s.Qo.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    },
    p = (e) => {
        let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: p = 0, progressCircleStrokeSize: f = 2, progressCircleVariation: g, progressCircleStroke: m } = e,
            b = 43 + f / 2,
            y = 2 * Math.PI * b,
            [_, O] = i.useState(p);
        i.useEffect(() => {
            let e = setTimeout(() => {
                O(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let v = (0, o.ZP)(),
            C = (0, l.ap)(v),
            j = d(g),
            S = u(g, C),
            x = null != m ? m : h(C, g);
        return (0, r.jsxs)('div', {
            className: a.circleContainer,
            children: [
                (0, r.jsxs)('svg', {
                    viewBox: '0 0 100 100',
                    className: a.circleSVG,
                    children: [
                        (0, r.jsx)('circle', {
                            className: g === s.Qo.NITRO_GEM || g === s.Qo.AVATAR_DECO ? a.baseProgressCircle : void 0,
                            fill: 'transparent',
                            strokeWidth: f,
                            r: ''.concat(b),
                            cx: '50%',
                            cy: '50%',
                            stroke: j,
                            strokeOpacity: S
                        }),
                        (0, r.jsx)('circle', {
                            stroke: x,
                            strokeWidth: f,
                            strokeLinecap: 'round',
                            strokeDasharray: ''.concat(y, ' ').concat(y),
                            className: c,
                            style: { strokeDashoffset: (1 - _ / 100) * y },
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
                    className: a.childrenContainer,
                    children: n
                })
            ]
        });
    };

s(47120);
var n = s(200651),
    r = s(192379),
    i = s(780384),
    a = s(410030),
    o = s(119269),
    c = s(697303);
let l = 'url(#gradient)',
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
                return l;
            case o.Qo.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : l;
            default:
                return;
        }
    };
t.Z = (e) => {
    let { percentage: t = 0, children: s, animationClassName: l, initialPercentage: f = 0, progressCircleStrokeSize: g = 2, progressCircleVariation: x, progressCircleStroke: C } = e,
        _ = 43 + g / 2,
        h = 2 * Math.PI * _,
        [m, v] = r.useState(f);
    r.useEffect(() => {
        let e = setTimeout(() => {
            v(t);
        }, 200);
        return () => clearTimeout(e);
    }, [t]);
    let L = (0, a.ZP)(),
        b = (0, i.ap)(L),
        E = d(x),
        A = u(x, b),
        j = null != C ? C : p(b, x);
    return (0, n.jsxs)('div', {
        className: c.circleContainer,
        children: [
            (0, n.jsxs)('svg', {
                viewBox: '0 0 100 100',
                className: c.circleSVG,
                children: [
                    (0, n.jsx)('circle', {
                        className: x === o.Qo.NITRO_GEM || x === o.Qo.AVATAR_DECO ? c.baseProgressCircle : void 0,
                        fill: 'transparent',
                        strokeWidth: g,
                        r: ''.concat(_),
                        cx: '50%',
                        cy: '50%',
                        stroke: E,
                        strokeOpacity: A
                    }),
                    (0, n.jsx)('circle', {
                        stroke: j,
                        strokeWidth: g,
                        strokeLinecap: 'round',
                        strokeDasharray: ''.concat(h, ' ').concat(h),
                        className: l,
                        style: { strokeDashoffset: (1 - m / 100) * h },
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
                className: c.childrenContainer,
                children: s
            })
        ]
    });
};

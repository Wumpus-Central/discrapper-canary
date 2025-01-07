n(47120);
var i = n(200651),
    r = n(192379),
    a = n(780384),
    s = n(410030),
    l = n(119269),
    o = n(697303);
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
    g = (e, t) => {
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
    let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: m = 0, progressCircleStrokeSize: f = 2, progressCircleVariation: p, progressCircleStroke: _ } = e,
        h = 43 + f / 2,
        x = 2 * Math.PI * h,
        [E, b] = r.useState(m);
    r.useEffect(() => {
        let e = setTimeout(() => {
            b(t);
        }, 200);
        return () => clearTimeout(e);
    }, [t]);
    let C = (0, s.ZP)(),
        v = (0, a.ap)(C),
        T = u(p),
        N = d(p, v),
        I = null != _ ? _ : g(v, p);
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
                        strokeWidth: f,
                        r: ''.concat(h),
                        cx: '50%',
                        cy: '50%',
                        stroke: T,
                        strokeOpacity: N
                    }),
                    (0, i.jsx)('circle', {
                        stroke: I,
                        strokeWidth: f,
                        strokeLinecap: 'round',
                        strokeDasharray: ''.concat(x, ' ').concat(x),
                        className: c,
                        style: { strokeDashoffset: (1 - E / 100) * x },
                        r: ''.concat(h),
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

n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(249849),
    l = n(907561),
    a = n(388032),
    s = n(408263);
let o = ['#00ff00'],
    c = ['#000000', '#ed1c24'],
    d = [0.7],
    u = [
        {
            base: 1,
            tint: 2
        }
    ],
    m = [0, 0.2],
    h = [
        {
            base: 1,
            tint: 0
        },
        {
            base: 1,
            tint: 4
        }
    ];
function g(e) {
    let { width: t, height: n, primaryTintColor: g, secondaryTintColor: x, ...p } = e,
        { primaryColorsTransformed: f, secondaryColorsTransformed: C } = (0, r.s)({
            primaryBaseColors: o,
            primaryTintColor: g,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: h
        }),
        { styleContent: v, containerId: _ } = (0, l.bC)(f, C);
    return (0, i.jsxs)('svg', {
        ...p,
        'aria-label': a.intl.string(a.t.nH6S2d),
        width: t,
        height: n,
        viewBox: '0 0 '.concat(l.Km, ' ').concat(l.md),
        children: [
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsx)('defs', {
                        children: (0, i.jsxs)('linearGradient', {
                            id: 'line-gradient',
                            x1: '0',
                            x2: '1',
                            y1: '0',
                            y2: '1',
                            children: [
                                (0, i.jsx)('stop', {
                                    stopColor: C[1],
                                    offset: '0%'
                                }),
                                (0, i.jsx)('stop', {
                                    stopColor: f[0],
                                    offset: '50%'
                                }),
                                (0, i.jsx)('stop', {
                                    stopColor: f[0],
                                    offset: '80%'
                                }),
                                (0, i.jsx)('stop', {
                                    stopColor: C[1],
                                    offset: '100%'
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('style', { children: v })
                ]
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#wrapper-layer'),
                id: _
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#heightmap-lines-0'),
                style: { fill: 'url(#line-gradient)' }
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#heightmap-lines-1'),
                style: { fill: 'url(#line-gradient)' }
            }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#heightmap-lines-2'),
                style: { fill: 'url(#line-gradient)' }
            })
        ]
    });
}

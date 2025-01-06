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
    s = n(114266);
let o = ['#0089d9'],
    c = ['#ff9e32', '#b4eefc', '#ffffff', '#804f19'],
    d = [0.2],
    u = [
        {
            base: 8,
            tint: 1
        }
    ],
    m = [0.45, 0.7, 1, 0.3],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 10,
            tint: 1
        },
        {
            base: 8,
            tint: 1
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
            (0, i.jsx)('defs', { children: (0, i.jsx)('style', { children: v }) }),
            (0, i.jsx)('use', {
                href: ''.concat(s, '#wrapper-layer'),
                id: _
            })
        ]
    });
}

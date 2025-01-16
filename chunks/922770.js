r.d(n, {
    $: function () {
        return _;
    },
    R: function () {
        return i;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(186325),
    c = r(388032),
    d = r(595252);
function f(e) {
    switch (e) {
        case 'wanderingCubes':
        case 'chasingDots':
            return 'lowMotion';
        default:
            return e;
    }
}
function _(e) {
    let { type: n = 'wanderingCubes', animated: r = !0, className: i, itemClassName: o, 'aria-label': _, ...h } = e,
        { reducedMotion: p } = s.useContext(u.S),
        m = p.enabled ? f(n) : n;
    if (((_ = null != _ ? _ : c.intl.string(c.t.ZTNur6)), 'spinningCircle' === m || 'spinningCircleSimple' === m))
        return (0, a.jsx)('div', {
            className: l()(d.spinner, d[m], i, { [d.stopAnimation]: !r }),
            role: 'img',
            'aria-label': _,
            ...h,
            children: (0, a.jsx)('div', {
                className: d.spinningCircleInner,
                children: (0, a.jsxs)('svg', {
                    className: d.circular,
                    viewBox: '25 25 50 50',
                    children: [
                        'spinningCircle' === m &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('circle', {
                                        className: l()(d.path, d.path3, o),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    }),
                                    (0, a.jsx)('circle', {
                                        className: l()(d.path, d.path2, o),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    })
                                ]
                            }),
                        (0, a.jsx)('circle', {
                            className: l()(d.path, o),
                            cx: '50',
                            cy: '50',
                            r: '20'
                        })
                    ]
                })
            })
        });
    let g = l()(d.item, o);
    return (0, a.jsx)('span', {
        className: l()(d.spinner, i, { [d.stopAnimation]: !r }),
        role: 'img',
        'aria-label': _,
        ...h,
        children: (0, a.jsxs)('span', {
            className: l()(d.inner, d[m]),
            children: [(0, a.jsx)('span', { className: g }), (0, a.jsx)('span', { className: g }), 'pulsingEllipsis' === m || 'lowMotion' === m ? (0, a.jsx)('span', { className: g }) : null]
        })
    });
}
!(function (e) {
    (e.WANDERING_CUBES = 'wanderingCubes'), (e.CHASING_DOTS = 'chasingDots'), (e.PULSING_ELLIPSIS = 'pulsingEllipsis'), (e.SPINNING_CIRCLE = 'spinningCircle'), (e.SPINNING_CIRCLE_SIMPLE = 'spinningCircleSimple'), (e.LOW_MOTION = 'lowMotion');
})(i || (i = {})),
    (_.Type = i);

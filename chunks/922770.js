r.d(n, {
    $: function () {
        return p;
    },
    R: function () {
        return i;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
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
function p(e) {
    let { type: n = 'wanderingCubes', animated: r = !0, className: i, itemClassName: s, 'aria-label': p, ...h } = e,
        { reducedMotion: _ } = o.useContext(u.S),
        m = _.enabled ? f(n) : n;
    if (((p = null != p ? p : c.intl.string(c.t.ZTNur6)), 'spinningCircle' === m || 'spinningCircleSimple' === m))
        return (0, a.jsx)('div', {
            className: l()(d.spinner, d[m], i, { [d.stopAnimation]: !r }),
            role: 'img',
            'aria-label': p,
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
                                        className: l()(d.path, d.path3, s),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    }),
                                    (0, a.jsx)('circle', {
                                        className: l()(d.path, d.path2, s),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    })
                                ]
                            }),
                        (0, a.jsx)('circle', {
                            className: l()(d.path, s),
                            cx: '50',
                            cy: '50',
                            r: '20'
                        })
                    ]
                })
            })
        });
    let g = l()(d.item, s);
    return (0, a.jsx)('span', {
        className: l()(d.spinner, i, { [d.stopAnimation]: !r }),
        role: 'img',
        'aria-label': p,
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
    (p.Type = i);

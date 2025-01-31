n.d(t, {
    $: () => f,
    R: () => c
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(186325),
    l = n(388032),
    u = n(595252),
    c = (function (e) {
        return (e.WANDERING_CUBES = 'wanderingCubes'), (e.CHASING_DOTS = 'chasingDots'), (e.PULSING_ELLIPSIS = 'pulsingEllipsis'), (e.SPINNING_CIRCLE = 'spinningCircle'), (e.SPINNING_CIRCLE_SIMPLE = 'spinningCircleSimple'), (e.LOW_MOTION = 'lowMotion'), e;
    })({});
function d(e) {
    switch (e) {
        case 'wanderingCubes':
        case 'chasingDots':
            return 'lowMotion';
        default:
            return e;
    }
}
function f(e) {
    let { type: t = 'wanderingCubes', animated: n = !0, className: a, itemClassName: c, 'aria-label': f, ..._ } = e,
        { reducedMotion: p } = r.useContext(o.S),
        h = p.enabled ? d(t) : t;
    if (((f = null != f ? f : l.intl.string(l.t.ZTNur6)), 'spinningCircle' === h || 'spinningCircleSimple' === h))
        return (0, i.jsx)('div', {
            className: s()(u.spinner, u[h], a, { [u.stopAnimation]: !n }),
            role: 'img',
            'aria-label': f,
            ..._,
            children: (0, i.jsx)('div', {
                className: u.spinningCircleInner,
                children: (0, i.jsxs)('svg', {
                    className: u.circular,
                    viewBox: '25 25 50 50',
                    children: [
                        'spinningCircle' === h &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('circle', {
                                        className: s()(u.path, u.path3, c),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    }),
                                    (0, i.jsx)('circle', {
                                        className: s()(u.path, u.path2, c),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    })
                                ]
                            }),
                        (0, i.jsx)('circle', {
                            className: s()(u.path, c),
                            cx: '50',
                            cy: '50',
                            r: '20'
                        })
                    ]
                })
            })
        });
    let m = s()(u.item, c);
    return (0, i.jsx)('span', {
        className: s()(u.spinner, a, { [u.stopAnimation]: !n }),
        role: 'img',
        'aria-label': f,
        ..._,
        children: (0, i.jsxs)('span', {
            className: s()(u.inner, u[h]),
            children: [(0, i.jsx)('span', { className: m }), (0, i.jsx)('span', { className: m }), 'pulsingEllipsis' === h || 'lowMotion' === h ? (0, i.jsx)('span', { className: m }) : null]
        })
    });
}
f.Type = c;

n.d(t, {
    $: () => E,
    R: () => m
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(186325),
    l = n(388032),
    c = n(228614);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var m = (function (e) {
    return (e.WANDERING_CUBES = 'wanderingCubes'), (e.CHASING_DOTS = 'chasingDots'), (e.PULSING_ELLIPSIS = 'pulsingEllipsis'), (e.SPINNING_CIRCLE = 'spinningCircle'), (e.SPINNING_CIRCLE_SIMPLE = 'spinningCircleSimple'), (e.LOW_MOTION = 'lowMotion'), e;
})({});
function g(e) {
    switch (e) {
        case 'wanderingCubes':
        case 'chasingDots':
            return 'lowMotion';
        default:
            return e;
    }
}
function E(e) {
    var { type: t = 'wanderingCubes', animated: n = !0, className: o, itemClassName: u, 'aria-label': f } = e,
        h = p(e, ['type', 'animated', 'className', 'itemClassName', 'aria-label']);
    let { reducedMotion: m } = i.useContext(s.S),
        E = m.enabled ? g(t) : t;
    if (((f = null != f ? f : l.NW.string(l.t.ZTNur6)), 'spinningCircle' === E || 'spinningCircleSimple' === E))
        return (0, r.jsx)(
            'div',
            _(
                d(
                    {
                        className: a()(c.spinner, c[E], o, { [c.stopAnimation]: !n }),
                        role: 'img',
                        'aria-label': f
                    },
                    h
                ),
                {
                    children: (0, r.jsx)('div', {
                        className: c.spinningCircleInner,
                        children: (0, r.jsxs)('svg', {
                            className: c.circular,
                            viewBox: '25 25 50 50',
                            children: [
                                'spinningCircle' === E &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('circle', {
                                                className: a()(c.path, c.path3, u),
                                                cx: '50',
                                                cy: '50',
                                                r: '20'
                                            }),
                                            (0, r.jsx)('circle', {
                                                className: a()(c.path, c.path2, u),
                                                cx: '50',
                                                cy: '50',
                                                r: '20'
                                            })
                                        ]
                                    }),
                                (0, r.jsx)('circle', {
                                    className: a()(c.path, u),
                                    cx: '50',
                                    cy: '50',
                                    r: '20'
                                })
                            ]
                        })
                    })
                }
            )
        );
    let b = a()(c.item, u);
    return (0, r.jsx)(
        'span',
        _(
            d(
                {
                    className: a()(c.spinner, o, { [c.stopAnimation]: !n }),
                    role: 'img',
                    'aria-label': f
                },
                h
            ),
            {
                children: (0, r.jsxs)('span', {
                    className: a()(c.inner, c[E]),
                    children: [(0, r.jsx)('span', { className: b }), (0, r.jsx)('span', { className: b }), 'pulsingEllipsis' === E || 'lowMotion' === E ? (0, r.jsx)('span', { className: b }) : null]
                })
            }
        )
    );
}
E.Type = m;

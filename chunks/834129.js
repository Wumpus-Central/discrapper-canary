n.d(t, { Z: () => u });
var s = n(255367);
n(73800);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    i = n(318713),
    o = n(614507);
function c(e) {
    let { icon: t, iconNode: n, timestamp: a, timestampFormat: l, className: c, children: u, contentClassName: m, iconClassName: d, iconContainerClassName: p, timestampClassName: g, compact: h = !1 } = e;
    return (0, s.jsxs)('div', {
        className: r()(c, {
            [o.container]: !0,
            [o.compact]: h,
            [o.cozy]: !h
        }),
        children: [
            null != n &&
                (0, s.jsx)('div', {
                    className: r()(o.iconContainer, p),
                    children: n
                }),
            null != t &&
                (0, s.jsx)('div', {
                    className: o.iconContainer,
                    children: (0, s.jsx)('div', {
                        'data-accessibility': 'desaturate',
                        className: r()(o.icon, o.iconSize, d),
                        style: { backgroundImage: "url('".concat(t, "')") }
                    })
                }),
            (0, s.jsxs)('div', {
                className: r()(m, o.content),
                children: [
                    u,
                    null != a &&
                        (0, s.jsx)(i.Z, {
                            timestamp: a,
                            timestampFormat: l,
                            className: g
                        })
                ]
            })
        ]
    });
}
c.Action = (e) => {
    let { onClick: t, children: n } = e;
    return (0, s.jsxs)('span', {
        className: o.action,
        children: [
            '\u2014',
            (0, s.jsx)(l.eee, {
                onClick: t,
                className: o.actionAnchor,
                children: n
            })
        ]
    });
};
let u = c;

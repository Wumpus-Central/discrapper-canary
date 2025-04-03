n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(318713),
    s = n(614507);
function c(e) {
    let { icon: t, iconNode: n, timestamp: i, className: l, children: c, contentClassName: u, iconClassName: d, iconContainerClassName: p, timestampClassName: m, compact: f = !1 } = e;
    return (0, r.jsxs)('div', {
        className: a()(l, {
            [s.container]: !0,
            [s.compact]: f,
            [s.cozy]: !f
        }),
        children: [
            null != n &&
                (0, r.jsx)('div', {
                    className: a()(s.iconContainer, p),
                    children: n
                }),
            null != t &&
                (0, r.jsx)('div', {
                    className: s.iconContainer,
                    children: (0, r.jsx)('div', {
                        'data-accessibility': 'desaturate',
                        className: a()(s.icon, s.iconSize, d),
                        style: { backgroundImage: "url('".concat(t, "')") }
                    })
                }),
            (0, r.jsxs)('div', {
                className: a()(u, s.content),
                children: [
                    c,
                    null != i &&
                        (0, r.jsx)(o.Z, {
                            timestamp: i,
                            className: m
                        })
                ]
            })
        ]
    });
}
c.Action = (e) => {
    let { onClick: t, children: n } = e;
    return (0, r.jsxs)('span', {
        className: s.action,
        children: [
            '\u2014',
            (0, r.jsx)(l.eee, {
                onClick: t,
                className: s.actionAnchor,
                children: n
            })
        ]
    });
};
let u = c;

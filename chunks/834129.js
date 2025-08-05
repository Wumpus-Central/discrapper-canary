n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(318713),
    l = n(614507);
function c(e) {
    let { icon: t, iconNode: n, timestamp: i, timestampFormat: o, className: c, children: u, contentClassName: d, iconClassName: f, iconContainerClassName: _, timestampClassName: p, compact: h = !1 } = e;
    return (0, r.jsxs)('div', {
        className: a()(c, {
            [l.container]: !0,
            [l.compact]: h,
            [l.cozy]: !h
        }),
        children: [
            null != n &&
                (0, r.jsx)('div', {
                    className: a()(l.iconContainer, _),
                    children: n
                }),
            null != t &&
                (0, r.jsx)('div', {
                    className: l.iconContainer,
                    children: (0, r.jsx)('div', {
                        'data-accessibility': 'desaturate',
                        className: a()(l.icon, l.iconSize, f),
                        style: { backgroundImage: "url('".concat(t, "')") }
                    })
                }),
            (0, r.jsxs)('div', {
                className: a()(d, l.content),
                children: [
                    u,
                    null != i &&
                        (0, r.jsx)(s.Z, {
                            timestamp: i,
                            timestampFormat: o,
                            className: p
                        })
                ]
            })
        ]
    });
}
c.Action = (e) => {
    let { onClick: t, children: n } = e;
    return (0, r.jsxs)('span', {
        className: l.action,
        children: [
            '\u2014',
            (0, r.jsx)(o.eee, {
                onClick: t,
                className: l.actionAnchor,
                children: n
            })
        ]
    });
};
let u = c;

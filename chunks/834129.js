n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(318713),
    s = n(614507);
function c(e) {
    let { icon: t, iconNode: n, timestamp: i, timestampFormat: a, className: c, children: u, contentClassName: d, iconClassName: p, iconContainerClassName: m, timestampClassName: f, compact: h = !1 } = e;
    return (0, r.jsxs)('div', {
        className: l()(c, {
            [s.container]: !0,
            [s.compact]: h,
            [s.cozy]: !h
        }),
        children: [
            null != n &&
                (0, r.jsx)('div', {
                    className: l()(s.iconContainer, m),
                    children: n
                }),
            null != t &&
                (0, r.jsx)('div', {
                    className: s.iconContainer,
                    children: (0, r.jsx)('div', {
                        'data-accessibility': 'desaturate',
                        className: l()(s.icon, s.iconSize, p),
                        style: { backgroundImage: "url('".concat(t, "')") }
                    })
                }),
            (0, r.jsxs)('div', {
                className: l()(d, s.content),
                children: [
                    u,
                    null != i &&
                        (0, r.jsx)(o.Z, {
                            timestamp: i,
                            timestampFormat: a,
                            className: f
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
            (0, r.jsx)(a.eee, {
                onClick: t,
                className: s.actionAnchor,
                children: n
            })
        ]
    });
};
let u = c;

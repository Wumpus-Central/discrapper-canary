n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(318713),
    o = n(712307);
function c(e) {
    let { icon: t, iconNode: n, timestamp: l, className: r, children: c, contentClassName: d, iconClassName: u, iconContainerClassName: m, compact: _ = !1 } = e;
    return (0, i.jsxs)('div', {
        className: a()(r, {
            [o.container]: !0,
            [o.compact]: _,
            [o.cozy]: !_
        }),
        children: [
            null != n &&
                (0, i.jsx)('div', {
                    className: a()(o.iconContainer, m),
                    children: n
                }),
            null != t &&
                (0, i.jsx)('div', {
                    className: o.iconContainer,
                    children: (0, i.jsx)('div', {
                        'data-accessibility': 'desaturate',
                        className: a()(o.icon, o.iconSize, u),
                        style: { backgroundImage: "url('".concat(t, "')") }
                    })
                }),
            (0, i.jsxs)('div', {
                className: a()(d, o.content),
                children: [c, null != l && (0, i.jsx)(s.Z, { timestamp: l })]
            })
        ]
    });
}
c.Action = (e) => {
    let { onClick: t, children: n } = e;
    return (0, i.jsxs)('span', {
        className: o.action,
        children: [
            '\u2014',
            (0, i.jsx)(r.eee, {
                onClick: t,
                className: o.actionAnchor,
                children: n
            })
        ]
    });
};
let d = c;

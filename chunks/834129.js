var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(318713),
    s = n(251753);
function c(e) {
    let { icon: t, iconNode: n, timestamp: r, className: a, children: c, contentClassName: d, iconClassName: u, iconContainerClassName: m, compact: h = !1 } = e;
    return (0, i.jsxs)('div', {
        className: l()(a, {
            [s.container]: !0,
            [s.compact]: h,
            [s.cozy]: !h
        }),
        children: [
            null != n &&
                (0, i.jsx)('div', {
                    className: l()(s.iconContainer, m),
                    children: n
                }),
            null != t &&
                (0, i.jsx)('div', {
                    className: s.iconContainer,
                    children: (0, i.jsx)('div', {
                        'data-accessibility': 'desaturate',
                        className: l()(s.icon, s.iconSize, u),
                        style: { backgroundImage: "url('".concat(t, "')") }
                    })
                }),
            (0, i.jsxs)('div', {
                className: l()(d, s.content),
                children: [c, null != r && (0, i.jsx)(o.Z, { timestamp: r })]
            })
        ]
    });
}
(c.Action = (e) => {
    let { onClick: t, children: n } = e;
    return (0, i.jsxs)('span', {
        className: s.action,
        children: [
            '\u2014',
            (0, i.jsx)(a.Anchor, {
                onClick: t,
                className: s.actionAnchor,
                children: n
            })
        ]
    });
}),
    (t.Z = c);

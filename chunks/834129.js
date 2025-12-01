n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(318713),
    l = n(686487);
function c(e) {
    let {
        icon: t,
        iconNode: n,
        timestamp: i,
        timestampFormat: o,
        className: c,
        children: u,
        contentClassName: d,
        iconClassName: f,
        iconContainerClassName: p,
        timestampClassName: _,
        compact: m = !1,
        additionalContent: h,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c, {
            [l.container]: !0,
            [l.compact]: m,
            [l.cozy]: !m,
        }),
        children: [
            null != n &&
                (0, r.jsx)("div", {
                    className: a()(l.iconContainer, p),
                    children: n,
                }),
            null != t &&
                (0, r.jsx)("div", {
                    className: l.iconContainer,
                    children: (0, r.jsx)("div", {
                        "data-accessibility": "desaturate",
                        className: a()(l.icon, l.iconSize, f),
                        style: { backgroundImage: "url('".concat(t, "')") },
                    }),
                }),
            (0, r.jsxs)("div", {
                className: a()(d, l.content),
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            u,
                            null != i &&
                                (0, r.jsx)(s.Z, {
                                    timestamp: i,
                                    timestampFormat: o,
                                    className: _,
                                }),
                        ],
                    }),
                    h,
                ],
            }),
        ],
    });
}
c.Action = (e) => {
    let { onClick: t, children: n } = e;
    return (0, r.jsxs)("span", {
        className: l.action,
        children: [
            "\u2014",
            (0, r.jsx)(o.Anchor, {
                onClick: t,
                className: l.actionAnchor,
                children: n,
            }),
        ],
    });
};
let u = c;

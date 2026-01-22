l.d(t, {
    A: () => p,
});
var r = l(627968);
l(64700);
var n = l(158954),
    i = l(435371),
    s = l(397927),
    o = l(449859),
    a = l(777347),
    u = l(967144),
    d = l(333354),
    c = l(985018),
    f = l(445735);

function p(e) {
    let { boost: t } = e,
        { timestamp: l, username: p, roleColor: m, roleColorStrings: v } = (0, a.U)(t),
        A = (0, u.gn)(t.guildId, t.userId, null != v ? v : null);
    return (0, r.jsxs)("div", {
        className: f.og,
        children: [
            (0, r.jsx)(s._Jp, {
                className: f.Kk,
                color: "currentColor",
                size: "sm",
            }),
            (0, r.jsx)("span", {
                className: f.x$,
                children: (0, r.jsxs)(n.EYj, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(i.m_, {
                            text: p,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, r.jsx)(s.gyj, {
                                className: f.IP,
                                variant: "text-md/semibold",
                                name: p,
                                colorString: null != m ? m : null,
                                colorStrings: A,
                            }),
                        }),
                        c.intl.string(d.default.plwH8d),
                    ],
                }),
            }),
            (0, r.jsx)(o.A, {
                timestamp: l,
                timestampFormat: "L",
                className: f.vE,
            }),
        ],
    });
}

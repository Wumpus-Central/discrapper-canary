n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(435371),
    s = n(397927),
    a = n(449859),
    o = n(777347),
    d = n(967144),
    u = n(333354),
    c = n(985018),
    m = n(445735);
function p(e) {
    let { boost: t } = e,
        { timestamp: n, username: p, roleColor: _, roleColorStrings: x } = (0, o.U)(t),
        A = (0, d.gn)(t.guildId, t.userId, x ?? null);
    return (0, r.jsxs)("div", {
        className: m.og,
        children: [
            (0, r.jsx)(s._Jp, { className: m.Kk, color: "currentColor", size: "sm" }),
            (0, r.jsx)("span", {
                className: m.x$,
                children: (0, r.jsxs)(i.EYj, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.m_, {
                            text: p,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, r.jsx)(s.gyj, {
                                className: m.IP,
                                variant: "text-md/semibold",
                                name: p,
                                colorString: _ ?? null,
                                colorStrings: A,
                            }),
                        }),
                        c.intl.string(u.default.plwH8d),
                    ],
                }),
            }),
            (0, r.jsx)(a.A, { timestamp: n, timestampFormat: "L", className: m.vE }),
        ],
    });
}

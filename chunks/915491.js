n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(834730),
    l = n(990078),
    s = n(104510),
    a = n(463930),
    o = n(449859),
    d = n(777347),
    u = n(967144),
    c = n(853513),
    _ = n(985018),
    m = n(168642);
function p(e) {
    let { boost: t } = e,
        { timestamp: n, username: p, roleColor: A, roleColorStrings: x } = (0, d.U)(t),
        g = (0, u.gn)(t.guildId, t.userId, x ?? null);
    return (0, r.jsxs)("div", {
        className: m.og,
        children: [
            (0, r.jsx)(s._, { className: m.Kk, color: "currentColor", size: "sm" }),
            (0, r.jsx)("span", {
                className: m.x$,
                children: (0, r.jsxs)(i.E, {
                    tag: "span",
                    variant: "text-md/medium",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.m, {
                            text: p,
                            shouldShow: !0,
                            asContainer: !0,
                            delay: 1e3,
                            children: (0, r.jsx)(a.g, {
                                className: m.IP,
                                variant: "text-md/semibold",
                                name: p,
                                colorString: A ?? null,
                                colorStrings: g,
                            }),
                        }),
                        _.intl.string(c.default.plwH8d),
                    ],
                }),
            }),
            (0, r.jsx)(o.A, { timestamp: n, timestampFormat: "L", className: m.vE }),
        ],
    });
}

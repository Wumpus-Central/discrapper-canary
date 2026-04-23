n.d(t, { l: () => g });
var i = n(627968),
    l = n(534514),
    s = n(834730),
    r = n(975571),
    a = n(249202),
    o = n(445567),
    d = n(627011),
    c = n(652215),
    u = n(985018),
    m = n(475842);
function g(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsxs)("div", {
                className: m.fi,
                children: [
                    (0, i.jsxs)(l.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: m.DD,
                        children: [u.intl.string(u.t["0r0AzF"]), (0, i.jsx)(d.B6, { guild: t })],
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: m.Qq,
                        children: u.intl.string(u.t.UfqmIb),
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: m.Qq,
                        children: u.intl.format(u.t.vBcWUv, {
                            articleURL: r.A.getArticleURL(c.MVz.GUILD_BANNER_SPLASH),
                        }),
                    }),
                    (0, i.jsx)(a.E, { guild: t, canManageGuild: n, buttonClassName: m.x6 }),
                ],
            }),
            (0, i.jsx)("div", { className: m.fi, children: (0, i.jsx)(o.B, { guild: t, canManageGuild: n }) }),
        ],
    });
}

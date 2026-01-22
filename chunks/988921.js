n.d(t, {
    l: () => f,
});
var r = n(627968),
    i = n(397927),
    l = n(975571),
    s = n(249202),
    a = n(445567),
    c = n(627011),
    o = n(652215),
    d = n(985018),
    u = n(815873);

function f(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [
            (0, r.jsxs)("div", {
                className: u.fi,
                children: [
                    (0, r.jsxs)(i.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: u.DD,
                        children: [
                            d.intl.string(d.t["0r0AzF"]),
                            (0, r.jsx)(c.B6, {
                                guild: t,
                            }),
                        ],
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: d.intl.string(d.t.UfqmIb),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: d.intl.format(d.t.vBcWUv, {
                            articleURL: l.A.getArticleURL(o.MVz.GUILD_BANNER_SPLASH),
                        }),
                    }),
                    (0, r.jsx)(s.E, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: u.x6,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.fi,
                children: (0, r.jsx)(a.B, {
                    guild: t,
                    canManageGuild: n,
                }),
            }),
        ],
    });
}

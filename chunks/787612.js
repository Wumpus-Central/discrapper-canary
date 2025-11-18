n.d(t, { A: () => g });
var r = n(54381),
    i = n(481060),
    l = n(63063),
    a = n(295051),
    s = n(273282),
    o = n(194774),
    c = n(981631),
    d = n(388032),
    u = n(479447);
function g(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsxs)("div", {
                className: u.column,
                children: [
                    (0, r.jsxs)(i.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        className: u.title,
                        children: [d.intl.string(d.t.tzGY0q), (0, r.jsx)(a.hH, { guild: t })],
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        className: u.text,
                        children: d.intl.string(d.t.F7bbrh),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        className: u.text,
                        children: d.intl.format(d.t.ZYA9PV, {
                            articleURL: l.Z.getArticleURL(c.BhN.GUILD_INVITE_SPLASH),
                        }),
                    }),
                    (0, r.jsx)(s.c, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: u.button,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.column,
                children: (0, r.jsx)(o.h, {
                    guild: t,
                    canManageGuild: n,
                }),
            }),
        ],
    });
}

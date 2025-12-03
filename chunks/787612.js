n.d(t, { A: () => g });
var r = n(54381),
    i = n(481060),
    l = n(63063),
    a = n(295051),
    s = n(273282),
    o = n(194774),
    c = n(981631),
    u = n(388032),
    d = n(64929);
function g(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsxs)("div", {
                className: d.column,
                children: [
                    (0, r.jsxs)(i.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        className: d.title,
                        children: [u.intl.string(u.t.tzGY0q), (0, r.jsx)(a.hH, { guild: t })],
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: d.text,
                        children: u.intl.string(u.t.F7bbrh),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: d.text,
                        children: u.intl.format(u.t.ZYA9PV, {
                            articleURL: l.Z.getArticleURL(c.BhN.GUILD_INVITE_SPLASH),
                        }),
                    }),
                    (0, r.jsx)(s.c, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: d.button,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)(o.h, {
                    guild: t,
                    canManageGuild: n,
                }),
            }),
        ],
    });
}

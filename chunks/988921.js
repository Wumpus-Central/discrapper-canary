"use strict";
n.d(t, { l: () => m });
var i = n(627968),
    s = n(397927),
    l = n(975571),
    r = n(249202),
    a = n(445567),
    o = n(627011),
    d = n(652215),
    c = n(985018),
    u = n(815873);
function m(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsxs)("div", {
                className: u.fi,
                children: [
                    (0, i.jsxs)(s.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: u.DD,
                        children: [c.intl.string(c.t["0r0AzF"]), (0, i.jsx)(o.B6, { guild: t })],
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: c.intl.string(c.t.UfqmIb),
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: u.Qq,
                        children: c.intl.format(c.t.vBcWUv, {
                            articleURL: l.A.getArticleURL(d.MVz.GUILD_BANNER_SPLASH),
                        }),
                    }),
                    (0, i.jsx)(r.E, { guild: t, canManageGuild: n, buttonClassName: u.x6 }),
                ],
            }),
            (0, i.jsx)("div", { className: u.fi, children: (0, i.jsx)(a.B, { guild: t, canManageGuild: n }) }),
        ],
    });
}

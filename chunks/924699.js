n.d(t, { A: () => m });
var i = n(627968),
    s = n(397927),
    l = n(182859),
    a = n(975571),
    r = n(652215),
    o = n(985018),
    d = n(333354),
    c = n(175968),
    u = n(696312);
function m() {
    let e = a.A.getArticleURL(r.MVz.GUILD_SUBSCRIPTIONS);
    return (0, i.jsxs)("div", {
        className: c.wx,
        children: [
            (0, i.jsxs)("div", {
                className: c.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: c.B5,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: c.F8, src: u }),
                            (0, i.jsx)(s.Heading, {
                                variant: "heading-xl/normal",
                                children: o.intl.string(d.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: o.intl.format(o.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, i.jsx)(l.A, {
                variant: "member",
                className: c.iO,
                analyticsLocation: {
                    page: r.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: r.JJy.HERO,
                    object: r.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}

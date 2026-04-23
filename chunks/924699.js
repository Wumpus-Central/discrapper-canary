n.d(t, { A: () => m });
var i = n(627968),
    s = n(534514),
    l = n(834730),
    a = n(182859),
    r = n(975571),
    o = n(652215),
    d = n(985018),
    u = n(853513),
    c = n(849744),
    g = n(696312);
function m() {
    let e = r.A.getArticleURL(o.MVz.GUILD_SUBSCRIPTIONS);
    return (0, i.jsxs)("div", {
        className: c.wx,
        children: [
            (0, i.jsxs)("div", {
                className: c.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: c.B5,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: c.F8, src: g }),
                            (0, i.jsx)(s.D, {
                                variant: "heading-xl/normal",
                                children: d.intl.string(u.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, i.jsx)(l.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: d.intl.format(d.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, i.jsx)(a.A, {
                variant: "member",
                className: c.iO,
                analyticsLocation: {
                    page: o.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: o.JJy.HERO,
                    object: o.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}

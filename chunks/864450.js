n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var i = n(834730),
    l = n(311907),
    s = n(862482),
    a = n(104510),
    o = n(827734),
    d = n(721923),
    u = n(71393),
    c = n(975571),
    _ = n(864310),
    m = n(931936),
    p = n(289588),
    A = n(568065),
    x = n(652215),
    g = n(853513),
    f = n(985018),
    h = n(685293);
function v(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        { available: v, spent: E, total: S } = (0, _.A)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: h.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: h.N1,
                    children: [
                        (0, r.jsx)(i.E, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: f.intl.string(g.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.E, {
                            className: h.C2,
                            variant: "text-xs/semibold",
                            children: f.intl.format(g.default.fXE30d, {
                                helpDeskArticle: c.A.getArticleURL(x.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: h.hQ,
                    children: [
                        (0, r.jsx)(p.A, { count: v, type: A.yG.AVAILABLE }),
                        (0, r.jsx)(p.A, { count: E, type: A.yG.SPENT }),
                        (0, r.jsx)(p.A, { count: S, type: A.yG.TOTAL }),
                    ],
                }),
                (0, r.jsx)(d.A, {
                    className: h.S6,
                    guild: n,
                    analyticsLocation: {
                        page: x.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: x.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: s.XD.CUSTOM,
                    size: s.lO.LARGE,
                    icon: (0, r.jsx)(a._, {
                        className: h.Ng,
                        size: "sm",
                        color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(m.A, { guildId: t }),
            ],
        });
}

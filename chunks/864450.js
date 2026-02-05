n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(311907),
    s = n(421380),
    o = n(397927),
    a = n(721923),
    u = n(71393),
    d = n(975571),
    c = n(864310),
    p = n(931936),
    m = n(289588),
    A = n(568065),
    _ = n(652215),
    g = n(333354),
    f = n(985018),
    x = n(958920);
function h(e) {
    let { guildId: t } = e,
        n = (0, i.bG)([u.A], () => u.A.getGuild(t)),
        { available: h, spent: v, total: j } = (0, c.A)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: x.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: x.N1,
                    children: [
                        (0, r.jsx)(l.EYj, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: f.intl.string(g.default.hjvcLO),
                        }),
                        (0, r.jsx)(l.EYj, {
                            className: x.C2,
                            variant: "text-xs/semibold",
                            children: f.intl.format(g.default.fXE30d, {
                                helpDeskArticle: d.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: x.hQ,
                    children: [
                        (0, r.jsx)(m.A, { count: h, type: A.yG.AVAILABLE }),
                        (0, r.jsx)(m.A, { count: v, type: A.yG.SPENT }),
                        (0, r.jsx)(m.A, { count: j, type: A.yG.TOTAL }),
                    ],
                }),
                (0, r.jsx)(a.A, {
                    className: x.S6,
                    guild: n,
                    analyticsLocation: {
                        page: _.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: _.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: s.XD.CUSTOM,
                    size: s.lO.LARGE,
                    icon: (0, r.jsx)(o._Jp, {
                        className: x.Ng,
                        size: "sm",
                        color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(p.A, { guildId: t }),
            ],
        });
}

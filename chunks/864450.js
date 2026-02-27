n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    s = n(421380),
    a = n(397927),
    o = n(721923),
    d = n(71393),
    u = n(975571),
    c = n(953382),
    m = n(864310),
    p = n(931936),
    _ = n(289588),
    x = n(568065),
    A = n(652215),
    f = n(333354),
    g = n(985018),
    v = n(958920);
function h(e) {
    let { guildId: t, showVideoCard: n } = e,
        h = (0, l.bG)([d.A], () => d.A.getGuild(t)),
        { available: b, spent: j, total: E } = (0, m.A)(t),
        I = (0, c.q)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != h)
        return (0, r.jsxs)("div", {
            className: v.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: v.N1,
                    children: [
                        (0, r.jsx)(i.EYj, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: g.intl.string(f.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.EYj, {
                            className: v.C2,
                            variant: "text-xs/semibold",
                            children: g.intl.format(f.default.fXE30d, {
                                helpDeskArticle: u.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: v.hQ,
                    children: [
                        (0, r.jsx)(_.A, { count: b, type: x.yG.AVAILABLE }),
                        (0, r.jsx)(_.A, { count: j, type: x.yG.SPENT }),
                        (0, r.jsx)(_.A, { count: E, type: x.yG.TOTAL }),
                    ],
                }),
                (0, r.jsx)(o.A, {
                    className: I ? void 0 : v.S6,
                    guild: h,
                    analyticsLocation: {
                        page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: A.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: s.XD.CUSTOM,
                    size: s.lO.LARGE,
                    fullWidth: I,
                    useExpressiveButton: I,
                    icon: (0, r.jsx)(a._Jp, {
                        className: v.Ng,
                        size: "sm",
                        color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(p.A, { guildId: t, showVideoCard: n }),
            ],
        });
}

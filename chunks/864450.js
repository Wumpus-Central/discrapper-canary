n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    s = n(421380),
    o = n(397927),
    a = n(721923),
    u = n(71393),
    d = n(975571),
    c = n(953382),
    p = n(864310),
    _ = n(931936),
    m = n(289588),
    f = n(568065),
    A = n(652215),
    g = n(333354),
    x = n(985018),
    v = n(204861);
function h(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        { available: h, spent: E, total: I } = (0, p.A)(t),
        b = (0, c.q)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != n)
        return (0, r.jsxs)("div", {
            className: v.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: v.N1,
                    children: [
                        (0, r.jsx)(i.EYj, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: x.intl.string(g.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.EYj, {
                            className: v.C2,
                            variant: "text-xs/semibold",
                            children: x.intl.format(g.default.fXE30d, {
                                helpDeskArticle: d.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: v.hQ,
                    children: [
                        (0, r.jsx)(m.A, { count: h, type: f.yG.AVAILABLE }),
                        (0, r.jsx)(m.A, { count: E, type: f.yG.SPENT }),
                        (0, r.jsx)(m.A, { count: I, type: f.yG.TOTAL }),
                    ],
                }),
                (0, r.jsx)(a.A, {
                    className: b ? void 0 : v.S6,
                    guild: n,
                    analyticsLocation: {
                        page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: A.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: s.XD.CUSTOM,
                    size: s.lO.LARGE,
                    fullWidth: b,
                    useExpressiveButton: b,
                    icon: (0, r.jsx)(o._Jp, {
                        className: v.Ng,
                        size: "sm",
                        color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(_.A, { guildId: t }),
            ],
        });
}

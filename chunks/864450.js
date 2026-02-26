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
    c = n(953382),
    p = n(864310),
    m = n(931936),
    A = n(289588),
    _ = n(568065),
    f = n(652215),
    g = n(136708),
    x = n(985018),
    v = n(117738);
function h(e) {
    let { guildId: t } = e,
        n = (0, i.bG)([u.A], () => u.A.getGuild(t)),
        { available: h, spent: b, total: j } = (0, p.A)(t),
        E = (0, c.q)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != n)
        return (0, r.jsxs)("div", {
            className: v.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: v.N1,
                    children: [
                        (0, r.jsx)(l.EYj, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: x.intl.string(g.default.hjvcLO),
                        }),
                        (0, r.jsx)(l.EYj, {
                            className: v.C2,
                            variant: "text-xs/semibold",
                            children: x.intl.format(g.default.fXE30d, {
                                helpDeskArticle: d.A.getArticleURL(f.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: v.hQ,
                    children: [
                        (0, r.jsx)(A.A, { count: h, type: _.yG.AVAILABLE }),
                        (0, r.jsx)(A.A, { count: b, type: _.yG.SPENT }),
                        (0, r.jsx)(A.A, { count: j, type: _.yG.TOTAL }),
                    ],
                }),
                (0, r.jsx)(a.A, {
                    className: E ? void 0 : v.S6,
                    guild: n,
                    analyticsLocation: {
                        page: f.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: f.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: s.XD.CUSTOM,
                    size: s.lO.LARGE,
                    fullWidth: E,
                    useExpressiveButton: E,
                    icon: (0, r.jsx)(o._Jp, {
                        className: v.Ng,
                        size: "sm",
                        color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(m.A, { guildId: t }),
            ],
        });
}

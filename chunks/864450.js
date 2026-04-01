n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    s = n(421380),
    o = n(397927),
    a = n(721923),
    u = n(71393),
    d = n(975571),
    c = n(864310),
    p = n(931936),
    _ = n(289588),
    m = n(568065),
    A = n(652215),
    f = n(333354),
    g = n(985018),
    x = n(204861);
function v(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        { available: v, spent: h, total: E } = (0, c.A)(t);
    if (null != n)
        return (0, r.jsxs)("div", {
            className: x.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: x.N1,
                    children: [
                        (0, r.jsx)(i.EYj, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: g.intl.string(f.default.hjvcLO),
                        }),
                        (0, r.jsx)(i.EYj, {
                            className: x.C2,
                            variant: "text-xs/semibold",
                            children: g.intl.format(f.default.fXE30d, {
                                helpDeskArticle: d.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: x.hQ,
                    children: [
                        (0, r.jsx)(_.A, { count: v, type: m.yG.AVAILABLE }),
                        (0, r.jsx)(_.A, { count: h, type: m.yG.SPENT }),
                        (0, r.jsx)(_.A, { count: E, type: m.yG.TOTAL }),
                    ],
                }),
                (0, r.jsx)(a.A, {
                    className: x.S6,
                    guild: n,
                    analyticsLocation: {
                        page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: A.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
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

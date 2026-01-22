l.d(t, {
    A: () => b,
});
var r = l(627968);
l(64700);
var n = l(158954),
    i = l(311907),
    s = l(421380),
    o = l(397927),
    a = l(721923),
    u = l(71393),
    d = l(975571),
    c = l(864310),
    f = l(931936),
    p = l(289588),
    m = l(568065),
    v = l(652215),
    A = l(333354),
    g = l(985018),
    x = l(958920);

function b(e) {
    let { guildId: t } = e,
        l = (0, i.bG)([u.A], () => u.A.getGuild(t)),
        { available: b, spent: h, total: j } = (0, c.A)(t);
    if (null != l)
        return (0, r.jsxs)("div", {
            className: x.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: x.N1,
                    children: [
                        (0, r.jsx)(n.EYj, {
                            variant: "eyebrow",
                            color: "text-subtle",
                            children: g.intl.string(A.default.hjvcLO),
                        }),
                        (0, r.jsx)(n.EYj, {
                            className: x.C2,
                            variant: "text-xs/semibold",
                            children: g.intl.format(A.default.fXE30d, {
                                helpDeskArticle: d.A.getArticleURL(v.MVz.GUILD_BOOSTING_FAQ),
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: x.hQ,
                    children: [
                        (0, r.jsx)(p.A, {
                            count: b,
                            type: m.yG.AVAILABLE,
                        }),
                        (0, r.jsx)(p.A, {
                            count: h,
                            type: m.yG.SPENT,
                        }),
                        (0, r.jsx)(p.A, {
                            count: j,
                            type: m.yG.TOTAL,
                        }),
                    ],
                }),
                (0, r.jsx)(a.A, {
                    className: x.S6,
                    guild: l,
                    analyticsLocation: {
                        page: v.liQ.GUILD_POWERUPS_OVERVIEW,
                        section: v.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                    },
                    color: s.XD.CUSTOM,
                    size: s.lO.LARGE,
                    icon: (0, r.jsx)(o._Jp, {
                        className: x.Ng,
                        size: "sm",
                        color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                }),
                (0, r.jsx)(f.A, {
                    guildId: t,
                }),
            ],
        });
}

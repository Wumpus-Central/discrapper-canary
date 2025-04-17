t.d(n, { Z: () => g });
var r = t(200651);
t(192379);
var o = t(793030),
    i = t(442837),
    s = t(481060),
    a = t(678558),
    l = t(343649),
    c = t(430824),
    d = t(63063),
    u = t(317169),
    p = t(639660),
    m = t(767218),
    x = t(981631),
    _ = t(680278),
    v = t(388032),
    f = t(658585);
function g(e) {
    let { guildId: n } = e,
        t = (0, i.e7)([c.Z], () => c.Z.getGuild(n)),
        { available: g, spent: j, total: h } = (0, u.Z)(n);
    if (null != t)
        return (0, r.jsxs)('div', {
            className: f.container,
            children: [
                (0, r.jsxs)('div', {
                    className: f.headerContainer,
                    children: [
                        (0, r.jsx)(o.xv, {
                            variant: 'eyebrow',
                            children: v.NW.string(_.Z.hjvcLC)
                        }),
                        (0, r.jsx)(o.xv, {
                            className: f.learnMore,
                            variant: 'text-xs/semibold',
                            children: v.NW.format(_.Z.fXE30d, { helpDeskArticle: d.Z.getArticleURL(x.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: f.contentContainer,
                    children: [
                        (0, r.jsx)(m.Z, {
                            count: g,
                            type: m.b.AVAILABLE
                        }),
                        (0, r.jsx)(m.Z, {
                            count: j,
                            type: m.b.SPENT
                        }),
                        (0, r.jsx)(m.Z, {
                            count: h,
                            type: m.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(a.Z, {
                    className: f.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: x.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: x.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: s.Ttl.CUSTOM,
                    size: s.PhG.LARGE,
                    intent: l.P.NONE,
                    icon: (0, r.jsx)(s.$Eu, {
                        className: f.boostButtonIcon,
                        size: 'sm',
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                    })
                }),
                (0, r.jsx)(p.Z, { guildId: n })
            ]
        });
}

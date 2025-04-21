t.d(n, { Z: () => g });
var r = t(200651);
t(192379);
var i = t(793030),
    o = t(442837),
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
    f = t(388032),
    v = t(658585);
function g(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([c.Z], () => c.Z.getGuild(n)),
        { available: g, spent: j, total: h } = (0, u.Z)(n);
    if (null != t)
        return (0, r.jsxs)('div', {
            className: v.container,
            children: [
                (0, r.jsxs)('div', {
                    className: v.headerContainer,
                    children: [
                        (0, r.jsx)(i.xv, {
                            variant: 'eyebrow',
                            children: f.intl.string(_.default.hjvcLC)
                        }),
                        (0, r.jsx)(i.xv, {
                            className: v.learnMore,
                            variant: 'text-xs/semibold',
                            children: f.intl.format(_.default.fXE30d, { helpDeskArticle: d.Z.getArticleURL(x.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: v.contentContainer,
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
                    className: v.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: x.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: x.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: s.Ttl.CUSTOM,
                    size: s.PhG.LARGE,
                    intent: l.P.NONE,
                    icon: (0, r.jsx)(s.$Eu, {
                        className: v.boostButtonIcon,
                        size: 'sm',
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                    })
                }),
                (0, r.jsx)(p.Z, { guildId: n })
            ]
        });
}

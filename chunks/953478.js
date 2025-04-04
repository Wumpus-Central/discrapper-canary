t.d(n, { Z: () => b });
var r = t(200651);
t(192379);
var o = t(793030),
    i = t(442837),
    s = t(481060),
    a = t(678558),
    l = t(343649),
    c = t(413335),
    d = t(430824),
    u = t(63063),
    m = t(317169),
    p = t(639660),
    x = t(767218),
    _ = t(981631),
    v = t(680278),
    g = t(388032),
    f = t(658585);
function b(e) {
    let { guildId: n } = e,
        t = (0, i.e7)([d.Z], () => d.Z.getGuild(n)),
        { available: b, spent: j, total: h } = (0, m.Z)(n);
    if (null != t)
        return (0, r.jsxs)('div', {
            className: f.container,
            children: [
                (0, r.jsxs)('div', {
                    className: f.headerContainer,
                    children: [
                        (0, r.jsx)(o.xv, {
                            variant: 'eyebrow',
                            children: g.NW.string(v.Z.hjvcLC)
                        }),
                        (0, r.jsx)(o.xv, {
                            className: f.learnMore,
                            variant: 'text-xs/semibold',
                            children: g.NW.format(v.Z.fXE30d, { helpDeskArticle: u.Z.getArticleURL(_.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: f.contentContainer,
                    children: [
                        (0, r.jsx)(x.Z, {
                            count: b,
                            type: x.b.AVAILABLE
                        }),
                        (0, r.jsx)(x.Z, {
                            count: j,
                            type: x.b.SPENT
                        }),
                        (0, r.jsx)(x.Z, {
                            count: h,
                            type: x.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(p.Z, { guildId: n }),
                (0, r.jsx)(a.Z, {
                    className: f.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: _.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: s.Ttl.CUSTOM,
                    size: s.PhG.LARGE,
                    intent: l.P.NONE,
                    icon: (0, r.jsx)(c.Z, { className: f.boostButtonIcon })
                })
            ]
        });
}

t.d(n, { Z: () => g });
var r = t(200651);
t(192379);
var i = t(793030),
    o = t(442837),
    s = t(481060),
    a = t(678558),
    l = t(343649),
    c = t(413335),
    d = t(430824),
    u = t(63063),
    p = t(317169),
    _ = t(639660),
    x = t(767218),
    m = t(981631),
    b = t(730621),
    v = t(388032),
    f = t(785947);
function g(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([d.Z], () => d.Z.getGuild(n)),
        { available: g, spent: h, total: j } = (0, p.Z)(n);
    if (null != t)
        return (0, r.jsxs)('div', {
            className: f.container,
            children: [
                (0, r.jsxs)('div', {
                    className: f.headerContainer,
                    children: [
                        (0, r.jsx)(i.xv, {
                            variant: 'eyebrow',
                            children: v.NW.string(b.Z.hjvcLC)
                        }),
                        (0, r.jsx)(i.xv, {
                            className: f.learnMore,
                            variant: 'text-xs/semibold',
                            children: v.NW.format(b.Z.fXE30d, { helpDeskArticle: u.Z.getArticleURL(m.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: f.contentContainer,
                    children: [
                        (0, r.jsx)(x.Z, {
                            count: g,
                            type: x.b.AVAILABLE
                        }),
                        (0, r.jsx)(x.Z, {
                            count: h,
                            type: x.b.SPENT
                        }),
                        (0, r.jsx)(x.Z, {
                            count: j,
                            type: x.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(_.Z, { guildId: n }),
                (0, r.jsx)(a.Z, {
                    className: f.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: m.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: m.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: s.Ttl.CUSTOM,
                    size: s.PhG.LARGE,
                    intent: l.P.NONE,
                    icon: (0, r.jsx)(c.Z, { className: f.boostButtonIcon })
                })
            ]
        });
}

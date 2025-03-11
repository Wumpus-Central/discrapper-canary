t.d(n, { Z: () => _ });
var r = t(200651);
t(192379);
var i = t(793030),
    o = t(442837),
    a = t(481060),
    s = t(678558),
    l = t(413335),
    c = t(430824),
    d = t(63063),
    u = t(317169),
    v = t(639660),
    p = t(767218),
    x = t(981631),
    b = t(730621),
    m = t(388032),
    j = t(785947);
function _(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([c.Z], () => c.Z.getGuild(n)),
        { available: _, spent: h, total: f } = (0, u.Z)(n);
    if (null != t)
        return (0, r.jsxs)('div', {
            className: j.container,
            children: [
                (0, r.jsxs)('div', {
                    className: j.headerContainer,
                    children: [
                        (0, r.jsx)(i.xv, {
                            variant: 'eyebrow',
                            children: m.NW.string(b.Z.hjvcLC)
                        }),
                        (0, r.jsx)(i.xv, {
                            className: j.learnMore,
                            variant: 'text-xs/semibold',
                            children: m.NW.format(b.Z.fXE30d, { helpDeskArticle: d.Z.getArticleURL(x.BhN.GUILD_BOOSTING_FAQ) })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: j.contentContainer,
                    children: [
                        (0, r.jsx)(p.Z, {
                            count: _,
                            type: p.b.AVAILABLE
                        }),
                        (0, r.jsx)(p.Z, {
                            count: h,
                            type: p.b.SPENT
                        }),
                        (0, r.jsx)(p.Z, {
                            count: f,
                            type: p.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(v.Z, { guildId: n }),
                (0, r.jsx)(s.Z, {
                    className: j.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: x.ZY5.GUILD_POWERUPS_OVERVIEW,
                        section: x.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                    },
                    color: a.Ttl.CUSTOM,
                    size: a.PhG.LARGE,
                    icon: (0, r.jsx)(l.Z, { className: j.boostButtonIcon })
                })
            ]
        });
}

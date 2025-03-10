t.d(n, { Z: () => h });
var r = t(200651);
t(192379);
var i = t(793030),
    o = t(442837),
    a = t(481060),
    s = t(678558),
    l = t(413335),
    c = t(690221),
    d = t(430824),
    u = t(317169),
    v = t(639660),
    p = t(767218),
    x = t(981631),
    b = t(730621),
    m = t(388032),
    j = t(785947);
function h(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([d.Z], () => d.Z.getGuild(n)),
        { available: h, spent: _, total: f } = (0, u.Z)(n);
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
                        (0, r.jsx)(c.Z, {
                            onClick: () => {},
                            children: (0, r.jsx)(i.xv, {
                                variant: 'text-xs/semibold',
                                color: 'currentColor',
                                children: m.NW.string(m.t.hvVgAQ)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: j.contentContainer,
                    children: [
                        (0, r.jsx)(p.Z, {
                            count: h,
                            type: p.b.AVAILABLE
                        }),
                        (0, r.jsx)(p.Z, {
                            count: _,
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
                        page: x.ZY5.POWERUPS_OVERVIEW,
                        section: x.jXE.POWERUPS_OVERVIEW_SIDEABAR
                    },
                    color: a.Ttl.CUSTOM,
                    size: a.PhG.LARGE,
                    icon: (0, r.jsx)(l.Z, { className: j.boostButtonIcon })
                })
            ]
        });
}

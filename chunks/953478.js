t.d(n, { Z: () => j });
var r = t(200651);
t(192379);
var i = t(793030),
    o = t(442837),
    s = t(481060),
    a = t(678558),
    l = t(413335),
    c = t(690221),
    d = t(430824),
    u = t(639660),
    v = t(767218),
    x = t(981631),
    p = t(730621),
    b = t(388032),
    m = t(785947);
function j(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([d.Z], () => d.Z.getGuild(n));
    if (null != t)
        return (0, r.jsxs)('div', {
            className: m.container,
            children: [
                (0, r.jsxs)('div', {
                    className: m.headerContainer,
                    children: [
                        (0, r.jsx)(i.xv, {
                            variant: 'eyebrow',
                            children: b.NW.string(p.Z.hjvcLC)
                        }),
                        (0, r.jsx)(c.Z, {
                            onClick: () => {},
                            children: (0, r.jsx)(i.xv, {
                                variant: 'text-xs/semibold',
                                color: 'currentColor',
                                children: b.NW.string(b.t.hvVgAQ)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: m.contentContainer,
                    children: [
                        (0, r.jsx)(v.Z, {
                            count: 3,
                            type: v.b.AVAILABLE
                        }),
                        (0, r.jsx)(v.Z, {
                            count: 2,
                            type: v.b.SPENT
                        }),
                        (0, r.jsx)(v.Z, {
                            count: 5,
                            type: v.b.TOTAL
                        })
                    ]
                }),
                (0, r.jsx)(u.Z, { guildId: n }),
                (0, r.jsx)(a.Z, {
                    className: m.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: x.ZY5.POWERUPS_OVERVIEW,
                        section: x.jXE.POWERUPS_OVERVIEW_SIDEABAR
                    },
                    color: s.Ttl.CUSTOM,
                    size: s.PhG.LARGE,
                    icon: (0, r.jsx)(l.Z, { className: m.boostButtonIcon })
                })
            ]
        });
}

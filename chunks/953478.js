t.d(n, { Z: () => j });
var i = t(200651);
t(192379);
var r = t(793030),
    a = t(442837),
    o = t(481060),
    s = t(678558),
    c = t(413335),
    l = t(690221),
    d = t(430824),
    u = t(800869),
    x = t(767218),
    v = t(981631),
    m = t(783684),
    p = t(388032),
    b = t(599985);
function j(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([d.Z], () => d.Z.getGuild(n));
    if (null != t)
        return (0, i.jsxs)('div', {
            className: b.container,
            children: [
                (0, i.jsxs)('div', {
                    className: b.headerContainer,
                    children: [
                        (0, i.jsx)(r.xv, {
                            variant: 'eyebrow',
                            children: p.NW.string(m.Z.hjvcLC)
                        }),
                        (0, i.jsx)(l.Z, {
                            onClick: () => {},
                            children: (0, i.jsx)(r.xv, {
                                variant: 'text-xs/semibold',
                                color: 'currentColor',
                                children: p.NW.string(p.t.hvVgAQ)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: b.contentContainer,
                    children: [
                        (0, i.jsx)(x.Z, {
                            count: 3,
                            type: x.b.AVAILABLE
                        }),
                        (0, i.jsx)(x.Z, {
                            count: 2,
                            type: x.b.SPENT
                        }),
                        (0, i.jsx)(x.Z, {
                            count: 5,
                            type: x.b.TOTAL
                        })
                    ]
                }),
                (0, i.jsx)(s.Z, {
                    className: b.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: v.ZY5.POWERUPS_OVERVIEW,
                        section: v.jXE.POWERUPS_OVERVIEW_SIDEABAR
                    },
                    color: o.Ttl.CUSTOM,
                    size: o.PhG.LARGE,
                    icon: (0, i.jsx)(c.Z, { className: b.boostButtonIcon })
                }),
                (0, i.jsx)(u.Z, {})
            ]
        });
}

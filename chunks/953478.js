t.d(n, { Z: () => j });
var i = t(200651);
t(192379);
var a = t(793030),
    o = t(442837),
    s = t(481060),
    r = t(678558),
    c = t(413335),
    l = t(690221),
    d = t(430824),
    u = t(800869),
    x = t(767218),
    m = t(981631),
    p = t(947494),
    v = t(388032),
    h = t(155337);
function j(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([d.Z], () => d.Z.getGuild(n));
    if (null != t)
        return (0, i.jsxs)('div', {
            className: h.container,
            children: [
                (0, i.jsxs)('div', {
                    className: h.headerContainer,
                    children: [
                        (0, i.jsx)(a.xv, {
                            variant: 'eyebrow',
                            children: v.intl.string(p.Z.hjvcLC)
                        }),
                        (0, i.jsx)(l.Z, {
                            onClick: () => {},
                            children: (0, i.jsx)(a.xv, {
                                variant: 'text-xs/semibold',
                                color: 'currentColor',
                                children: v.intl.string(v.t.hvVgAQ)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: h.contentContainer,
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
                (0, i.jsx)(r.Z, {
                    className: h.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: m.ZY5.POWERUPS_OVERVIEW,
                        section: m.jXE.POWERUPS_OVERVIEW_SIDEABAR
                    },
                    color: s.Ttl.CUSTOM,
                    size: s.PhG.LARGE,
                    icon: (0, i.jsx)(c.Z, { className: h.boostButtonIcon })
                }),
                (0, i.jsx)(u.Z, {})
            ]
        });
}

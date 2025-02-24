t.d(n, { Z: () => C });
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
    v = t(309945),
    m = t(953476),
    p = t(981631),
    j = t(783684),
    b = t(388032),
    h = t(599985);
function C(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([d.Z], () => d.Z.getGuild(n));
    if (null != t)
        return (0, i.jsxs)('div', {
            className: h.container,
            children: [
                (0, i.jsxs)('div', {
                    className: h.headerContainer,
                    children: [
                        (0, i.jsx)(r.xv, {
                            variant: 'eyebrow',
                            children: b.NW.string(j.Z.hjvcLC)
                        }),
                        (0, i.jsx)(l.Z, {
                            onClick: () => {},
                            children: (0, i.jsx)(r.xv, {
                                variant: 'text-xs/semibold',
                                color: 'currentColor',
                                children: b.NW.string(b.t.hvVgAQ)
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
                (0, i.jsx)(u.Z, {}),
                (0, i.jsx)(v.Z, { powerup: m.O['0'] }),
                (0, i.jsx)(s.Z, {
                    className: h.boostButton,
                    guild: t,
                    analyticsLocation: {
                        page: p.ZY5.POWERUPS_OVERVIEW,
                        section: p.jXE.POWERUPS_OVERVIEW_SIDEABAR
                    },
                    color: o.Ttl.CUSTOM,
                    size: o.PhG.LARGE,
                    icon: (0, i.jsx)(c.Z, { className: h.boostButtonIcon })
                })
            ]
        });
}

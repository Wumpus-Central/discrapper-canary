n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    l = n(793030),
    s = n(194594),
    o = n(359993),
    c = n(424472),
    d = n(682807),
    u = n(691703),
    p = n(953989),
    m = n(388032),
    h = n(553094);
function g(e) {
    let { className: t, view: n, application: i } = e,
        g = 'embedded' === n,
        _ = (0, o.Z)({ application: i });
    return (0, r.jsxs)('div', {
        className: a()(t, {
            [h.sideContainer]: !g,
            [h.gridContainer]: g
        }),
        children: [
            (0, r.jsxs)('div', {
                className: a()(h.sectionContainer, { [h.reducedGap]: g }),
                children: [
                    (0, r.jsxs)('div', {
                        className: h.infoSection,
                        children: [
                            (0, r.jsx)(l.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'header-primary',
                                children: m.intl.string(m.t['3NxHCw'])
                            }),
                            (0, r.jsx)(s.Z, {
                                application: i,
                                mutualGuilds: _,
                                mutualGuildShownMax: 3,
                                className: h.guildCountContainer,
                                guildIconSize: s.x.SMALL,
                                guildsClassName: h.guildsIconContainer,
                                compact: !0
                            })
                        ]
                    }),
                    (0, r.jsx)(c.Z, {
                        application: i,
                        className: h.infoSection
                    }),
                    (0, r.jsx)(p.Z, {
                        application: i,
                        className: h.infoSection
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(h.sectionContainer, { [h.reducedGap]: g }),
                children: [
                    (0, r.jsx)(d.Z, {
                        application: i,
                        className: h.infoSection,
                        innerClassName: g ? h.linkGrid : void 0
                    }),
                    (0, r.jsx)(u.Z, {
                        application: i,
                        className: h.infoSection
                    })
                ]
            })
        ]
    });
}

n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(793030),
    o = n(194594),
    s = n(359993),
    c = n(424472),
    d = n(682807),
    u = n(691703),
    p = n(953989),
    m = n(388032),
    h = n(553094);
function g(e) {
    let { className: t, view: n, application: a } = e,
        g = 'embedded' === n,
        f = (0, s.Z)({ application: a });
    return (0, r.jsxs)('div', {
        className: i()(t, {
            [h.sideContainer]: !g,
            [h.gridContainer]: g
        }),
        children: [
            (0, r.jsxs)('div', {
                className: i()(h.sectionContainer, { [h.reducedGap]: g }),
                children: [
                    (0, r.jsxs)('div', {
                        className: h.infoSection,
                        children: [
                            (0, r.jsx)(l.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'header-primary',
                                children: m.NW.string(m.t['3NxHCw'])
                            }),
                            (0, r.jsx)(o.Z, {
                                application: a,
                                mutualGuilds: f,
                                mutualGuildShownMax: 3,
                                className: h.guildCountContainer,
                                guildIconSize: o.x.SMALL,
                                guildsClassName: h.guildsIconContainer,
                                compact: !0
                            })
                        ]
                    }),
                    (0, r.jsx)(c.Z, {
                        application: a,
                        className: h.infoSection
                    }),
                    (0, r.jsx)(p.Z, {
                        application: a,
                        className: h.infoSection
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: i()(h.sectionContainer, { [h.reducedGap]: g }),
                children: [
                    (0, r.jsx)(d.Z, {
                        application: a,
                        className: h.infoSection,
                        innerClassName: g ? h.linkGrid : void 0
                    }),
                    (0, r.jsx)(u.Z, {
                        application: a,
                        className: h.infoSection
                    })
                ]
            })
        ]
    });
}

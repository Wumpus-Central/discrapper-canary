n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(793030),
    s = n(924489),
    o = n(824606),
    c = n(424472),
    d = n(682807),
    u = n(691703),
    m = n(953989),
    h = n(388032),
    p = n(886397);
function g(e) {
    let { className: t, view: n, application: a } = e,
        g = 'embedded' === n,
        _ = (0, o.Z)({ application: a });
    return (0, i.jsxs)('div', {
        className: r()(t, {
            [p.sideContainer]: !g,
            [p.gridContainer]: g
        }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(p.sectionContainer, { [p.reducedGap]: g }),
                children: [
                    (0, i.jsxs)('div', {
                        className: p.infoSection,
                        children: [
                            (0, i.jsx)(l.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'header-primary',
                                children: h.intl.string(h.t['3NxHCw'])
                            }),
                            (0, i.jsx)(s.Z, {
                                application: a,
                                mutualGuilds: _,
                                mutualGuildShownMax: 3,
                                className: p.guildCountContainer,
                                guildIconSize: s.x.SMALL,
                                guildsClassName: p.guildsIconContainer,
                                compact: !0
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z, {
                        application: a,
                        className: p.infoSection
                    }),
                    (0, i.jsx)(m.Z, {
                        application: a,
                        className: p.infoSection
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(p.sectionContainer, { [p.reducedGap]: g }),
                children: [
                    (0, i.jsx)(d.Z, {
                        application: a,
                        className: p.infoSection,
                        innerClassName: g ? p.linkGrid : void 0
                    }),
                    (0, i.jsx)(u.Z, {
                        application: a,
                        className: p.infoSection
                    })
                ]
            })
        ]
    });
}

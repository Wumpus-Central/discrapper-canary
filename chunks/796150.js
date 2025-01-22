n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(793030),
    o = n(924489),
    s = n(824606),
    c = n(424472),
    d = n(682807),
    u = n(691703),
    m = n(953989),
    p = n(388032),
    h = n(75655);
function g(e) {
    let { className: t, view: n, application: a } = e,
        g = 'embedded' === n,
        C = (0, s.Z)({ application: a });
    return (0, i.jsxs)('div', {
        className: r()(t, {
            [h.sideContainer]: !g,
            [h.gridContainer]: g
        }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(h.sectionContainer, { [h.reducedGap]: g }),
                children: [
                    (0, i.jsxs)('div', {
                        className: h.infoSection,
                        children: [
                            (0, i.jsx)(l.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'header-primary',
                                children: p.intl.string(p.t['3NxHCw'])
                            }),
                            (0, i.jsx)(o.Z, {
                                application: a,
                                mutualGuilds: C,
                                mutualGuildShownMax: 3,
                                className: h.guildCountContainer,
                                guildIconSize: o.x.SMALL,
                                guildsClassName: h.guildsIconContainer,
                                compact: !0
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z, {
                        application: a,
                        className: h.infoSection
                    }),
                    (0, i.jsx)(m.Z, {
                        application: a,
                        className: h.infoSection
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(h.sectionContainer, { [h.reducedGap]: g }),
                children: [
                    (0, i.jsx)(d.Z, {
                        application: a,
                        className: h.infoSection,
                        innerClassName: g ? h.linkGrid : void 0
                    }),
                    (0, i.jsx)(u.Z, {
                        application: a,
                        className: h.infoSection
                    })
                ]
            })
        ]
    });
}

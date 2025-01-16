t.d(n, {
    Z: function () {
        return g;
    }
});
var a = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    l = t(793030),
    o = t(924489),
    s = t(824606),
    c = t(424472),
    d = t(682807),
    u = t(691703),
    m = t(953989),
    p = t(388032),
    _ = t(75655);
function g(e) {
    let { className: n, view: t, application: i } = e,
        g = 'embedded' === t,
        f = (0, s.Z)({ application: i });
    return (0, a.jsxs)('div', {
        className: r()(n, {
            [_.sideContainer]: !g,
            [_.gridContainer]: g
        }),
        children: [
            (0, a.jsxs)('div', {
                className: r()(_.sectionContainer, { [_.reducedGap]: g }),
                children: [
                    (0, a.jsxs)('div', {
                        className: _.infoSection,
                        children: [
                            (0, a.jsx)(l.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'header-primary',
                                children: p.intl.string(p.t['3NxHCw'])
                            }),
                            (0, a.jsx)(o.Z, {
                                application: i,
                                mutualGuilds: f,
                                mutualGuildShownMax: 3,
                                className: _.guildCountContainer,
                                guildIconSize: o.x.SMALL,
                                guildsClassName: _.guildsIconContainer,
                                compact: !0
                            })
                        ]
                    }),
                    (0, a.jsx)(c.Z, {
                        application: i,
                        className: _.infoSection
                    }),
                    (0, a.jsx)(m.Z, {
                        application: i,
                        className: _.infoSection
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: r()(_.sectionContainer, { [_.reducedGap]: g }),
                children: [
                    (0, a.jsx)(d.Z, {
                        application: i,
                        className: _.infoSection,
                        innerClassName: g ? _.linkGrid : void 0
                    }),
                    (0, a.jsx)(u.Z, {
                        application: i,
                        className: _.infoSection
                    })
                ]
            })
        ]
    });
}

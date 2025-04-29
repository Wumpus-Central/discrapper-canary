n.d(t, { Z: () => j }), n(388685);
var i = n(255367),
    s = n(73800),
    l = n(481060),
    r = n(230711),
    a = n(2052),
    o = n(434650),
    d = n(906732),
    c = n(436774),
    u = n(690221),
    h = n(626135),
    g = n(197115),
    m = n(474936),
    x = n(981631),
    p = n(388032),
    v = n(749044);
function j(e) {
    let { onClose: t } = e,
        n = (0, a.O)(),
        { analyticsLocations: j } = (0, d.ZP)(),
        [S, N] = s.useState(!1),
        f = s.useCallback(
            (e) => {
                !S &&
                    e &&
                    (h.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: m.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
                        location: n.location,
                        location_stack: j
                    }),
                    N(!0));
            },
            [n.location, j, S]
        ),
        b = (0, o.O)(f, 0.8, !0);
    return (0, i.jsxs)('div', {
        ref: b,
        className: v.container,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2,
                className: v.nitroWheel
            }),
            (0, i.jsxs)(l.Text, {
                className: v.text,
                variant: 'text-sm/normal',
                children: [
                    p.intl.string(p.t['Pb0O6+']),
                    ' ',
                    (0, i.jsx)(u.Z, {
                        onClick: () => {
                            t(), r.Z.open(x.oAB.PREMIUM);
                        },
                        children: p.intl.string(p.t.hvVgAQ)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: v.nitroButton,
                children: (0, i.jsx)(g.Z, {
                    showGradient: !0,
                    buttonText: p.intl.string(p.t.pj0XBA),
                    size: l.zxk.Sizes.SMALL,
                    shinyButtonClassName: v.nitroButton,
                    subscriptionTier: m.Si.TIER_2,
                    premiumModalAnalyticsLocation: { section: x.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL }
                })
            })
        ]
    });
}

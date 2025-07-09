(n.d(t, { Z: () => S }), n(388685));
var i = n(255367),
    s = n(73800),
    l = n(755721),
    r = n(481060),
    a = n(230711),
    o = n(2052),
    d = n(434650),
    c = n(906732),
    u = n(436774),
    h = n(690221),
    g = n(626135),
    m = n(767714),
    x = n(474936),
    p = n(981631),
    v = n(388032),
    j = n(749044);
function S(e) {
    let { onClose: t } = e,
        n = (0, o.O)(),
        { analyticsLocations: S } = (0, c.ZP)(),
        [N, f] = s.useState(!1),
        b = s.useCallback(
            (e) => {
                !N &&
                    e &&
                    (g.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: x.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
                        location: n.location,
                        location_stack: S
                    }),
                    f(!0));
            },
            [n.location, S, N]
        ),
        C = (0, d.O)(b, 0.8, !0);
    return (0, i.jsxs)('div', {
        ref: C,
        className: j.container,
        children: [
            (0, i.jsx)(r.SrA, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2,
                className: j.nitroWheel
            }),
            (0, i.jsxs)(r.Text, {
                className: j.text,
                variant: 'text-sm/normal',
                children: [
                    v.intl.string(v.t['Pb0O6+']),
                    ' ',
                    (0, i.jsx)(h.Z, {
                        onClick: () => {
                            (t(), a.Z.open(p.oAB.PREMIUM));
                        },
                        children: v.intl.string(v.t.hvVgAQ)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: j.nitroButton,
                children: (0, i.jsx)(m.Z, {
                    showGradient: !0,
                    textOptions: { textOverride: v.intl.string(v.t.pj0XBA) },
                    size: l.zx.Sizes.SMALL,
                    shinyButtonClassName: j.nitroButton,
                    subscriptionTier: x.Si.TIER_2,
                    premiumModalAnalyticsLocation: { section: p.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL }
                })
            })
        ]
    });
}

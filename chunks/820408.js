n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    s = n(192379),
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
    N = n(388032),
    p = n(749044);
function v(e) {
    let { onClose: t } = e,
        n = (0, a.O)(),
        { analyticsLocations: v } = (0, d.ZP)(),
        [j, S] = s.useState(!1),
        f = s.useCallback(
            (e) => {
                !j &&
                    e &&
                    (h.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: m.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
                        location: n.location,
                        location_stack: v
                    }),
                    S(!0));
            },
            [n.location, v, j]
        ),
        b = (0, o.O)(f, 0.8, !0);
    return (0, i.jsxs)('div', {
        ref: b,
        className: p.container,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2,
                className: p.nitroWheel
            }),
            (0, i.jsxs)(l.Text, {
                className: p.text,
                variant: 'text-sm/normal',
                children: [
                    N.NW.string(N.t['Pb0O6+']),
                    ' ',
                    (0, i.jsx)(u.Z, {
                        onClick: () => {
                            t(), r.Z.open(x.oAB.PREMIUM);
                        },
                        children: N.NW.string(N.t.hvVgAQ)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: p.nitroButton,
                children: (0, i.jsx)(g.Z, {
                    showGradient: !0,
                    buttonText: N.NW.string(N.t.pj0XBA),
                    size: l.zxk.Sizes.SMALL,
                    shinyButtonClassName: p.nitroButton,
                    subscriptionTier: m.Si.TIER_2,
                    premiumModalAnalyticsLocation: { section: x.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL }
                })
            })
        ]
    });
}

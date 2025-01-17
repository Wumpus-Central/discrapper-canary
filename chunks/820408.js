n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
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
    m = n(197115),
    g = n(474936),
    x = n(981631),
    S = n(388032),
    p = n(205459);
function N(e) {
    let { onClose: t } = e,
        n = (0, a.O)(),
        { analyticsLocations: N } = (0, d.ZP)(),
        [v, j] = s.useState(!1),
        C = s.useCallback(
            (e) => {
                if (!v && !!e)
                    h.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: g.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
                        location: n.location,
                        location_stack: N
                    }),
                        j(!0);
            },
            [n.location, N, v]
        ),
        f = (0, o.O)(C, 0.8, !0);
    return (0, i.jsxs)('div', {
        ref: f,
        className: p.container,
        children: [
            (0, i.jsx)(l.NitroWheelIcon, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2,
                className: p.nitroWheel
            }),
            (0, i.jsxs)(l.Text, {
                className: p.text,
                variant: 'text-sm/normal',
                children: [
                    S.intl.string(S.t['Pb0O6+']),
                    ' ',
                    (0, i.jsx)(u.Z, {
                        onClick: () => {
                            t(), r.Z.open(x.oAB.PREMIUM);
                        },
                        children: S.intl.string(S.t.hvVgAQ)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: p.nitroButton,
                children: (0, i.jsx)(m.Z, {
                    showGradient: !0,
                    buttonText: S.intl.string(S.t.pj0XBA),
                    size: l.Button.Sizes.SMALL,
                    shinyButtonClassName: p.nitroButton,
                    subscriptionTier: g.Si.TIER_2,
                    premiumModalAnalyticsLocation: { section: x.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL }
                })
            })
        ]
    });
}

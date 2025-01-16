n.d(t, {
    Z: function () {
        return v;
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
    g = n(197115),
    m = n(474936),
    x = n(981631),
    S = n(388032),
    p = n(205459);
function v(e) {
    let { onClose: t } = e,
        n = (0, a.O)(),
        { analyticsLocations: v } = (0, d.ZP)(),
        [N, j] = s.useState(!1),
        C = s.useCallback(
            (e) => {
                if (!N && !!e)
                    h.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: m.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
                        location: n.location,
                        location_stack: v
                    }),
                        j(!0);
            },
            [n.location, v, N]
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
                children: (0, i.jsx)(g.Z, {
                    showGradient: !0,
                    buttonText: S.intl.string(S.t.pj0XBA),
                    size: l.Button.Sizes.SMALL,
                    shinyButtonClassName: p.nitroButton,
                    subscriptionTier: m.Si.TIER_2,
                    premiumModalAnalyticsLocation: { section: x.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL }
                })
            })
        ]
    });
}

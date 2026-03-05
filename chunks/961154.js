n.d(t, { U6: () => E, kp: () => T, yG: () => S });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(964486),
    r = n(793574),
    o = n(688810),
    d = n(526162),
    c = n(848971),
    u = n(793943),
    _ = n(792656),
    g = n(954571),
    m = n(12901),
    A = n(652215),
    h = n(788868),
    p = n(985018),
    x = n(567856);
let E = () => {
    (0, u.nf)(u.HP.APP_ICON), (0, m.default)();
};
function T() {
    return (0, i.jsx)(_.A, {
        subscriptionTier: h.pe.TIER_2,
        defaultTextOverride: p.intl.string(p.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let S = () => {
    let { analyticsLocations: e } = (0, o.Ay)(r.A.USER_SETTINGS),
        t = (0, s.bG)([d.A], () => d.A.isUpsellPreview);
    return (
        (0, a.Ay)(() => {
            t && g.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, { type: h.e.APP_ICON_UPSELL, location_stack: e });
        }),
        (0, i.jsx)("div", {
            className: x.Gg,
            children: (0, i.jsx)(c.A, {
                disabled: t,
                renderCTAButtons: () =>
                    (0, i.jsxs)("div", {
                        className: x.gY,
                        children: [
                            (0, i.jsx)(l.Button, {
                                variant: t ? "secondary" : "primary",
                                text: p.intl.string(p.t["hb/wE0"]),
                                onClick: () => E(),
                            }),
                            t && (0, i.jsx)(T, {}),
                        ],
                    }),
            }),
        })
    );
};

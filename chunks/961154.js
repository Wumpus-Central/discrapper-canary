n.d(t, { U6: () => C, kp: () => T, yG: () => S });
var i = n(627968);
n(64700);
var s = n(311907),
    a = n(397927),
    l = n(964486),
    r = n(793574),
    o = n(688810),
    c = n(526162),
    d = n(848971),
    u = n(793943),
    _ = n(792656),
    m = n(954571),
    A = n(358776),
    g = n(12901),
    h = n(652215),
    x = n(788868),
    p = n(985018),
    E = n(567856);
let C = () => {
    (0, u.nf)(u.HP.APP_ICON), (0, g.default)();
};
function T() {
    return (0, i.jsx)(_.A, {
        subscriptionTier: x.pe.TIER_2,
        defaultTextOverride: p.intl.string(p.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: h.ZSU.BUTTON_CTA, objectType: h.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let S = () => {
    let { analyticsLocations: e } = (0, o.Ay)(r.A.USER_SETTINGS),
        t = (0, s.bG)([c.A], () => c.A.isUpsellPreview),
        n = (0, A.dk)("UserSettingsAppearanceInAppIcon");
    return (
        (0, l.Ay)(() => {
            t && m.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, { type: x.e.APP_ICON_UPSELL, location_stack: e });
        }),
        (0, i.jsxs)("div", {
            className: E.Gg,
            children: [
                (0, i.jsx)(d.A, {
                    disabled: t,
                    renderCTAButtons: () =>
                        (0, i.jsxs)("div", {
                            className: E.gY,
                            children: [
                                (0, i.jsx)(a.Button, {
                                    variant: t ? "secondary" : "primary",
                                    text: p.intl.string(p.t["hb/wE0"]),
                                    onClick: () => C(),
                                }),
                                t && (0, i.jsx)(T, {}),
                            ],
                        }),
                }),
                !n && (0, i.jsx)(a.cGx, { className: E.yF }),
            ],
        })
    );
};

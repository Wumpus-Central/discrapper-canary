n.d(t, { y: () => x });
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    a = n(964486),
    l = n(793574),
    o = n(688810),
    c = n(526162),
    d = n(848971),
    u = n(793943),
    _ = n(792656),
    m = n(954571),
    A = n(358776),
    g = n(12901),
    E = n(652215),
    h = n(788868),
    p = n(985018),
    C = n(567856);
let x = () => {
    let { analyticsLocations: e } = (0, o.Ay)(l.A.USER_SETTINGS),
        t = (0, s.bG)([c.A], () => c.A.isUpsellPreview),
        n = (0, A.dk)("UserSettingsAppearanceInAppIcon");
    return (
        (0, a.Ay)(() => {
            t && m.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, { type: h.e.APP_ICON_UPSELL, location_stack: e });
        }),
        (0, i.jsxs)("div", {
            className: C.Gg,
            children: [
                (0, i.jsx)(d.A, {
                    disabled: t,
                    renderCTAButtons: () =>
                        (0, i.jsxs)("div", {
                            className: C.gY,
                            children: [
                                (0, i.jsx)(r.Button, {
                                    variant: t ? "secondary" : "primary",
                                    text: p.intl.string(p.t["hb/wE0"]),
                                    onClick: () => void ((0, u.nf)(u.HP.APP_ICON), (0, g.default)()),
                                }),
                                t
                                    ? (0, i.jsx)(_.A, {
                                          subscriptionTier: h.pe.TIER_2,
                                          defaultTextOverride: p.intl.string(p.t.mr4K7D),
                                          premiumModalAnalyticsLocation: {
                                              object: E.ZSU.BUTTON_CTA,
                                              objectType: E.AnalyticsObjectTypes.BUY,
                                          },
                                          fullWidth: !0,
                                      })
                                    : null,
                            ],
                        }),
                }),
                !n && (0, i.jsx)(r.cGx, { className: C.yF }),
            ],
        })
    );
};

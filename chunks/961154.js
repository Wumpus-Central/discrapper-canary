n.d(t, { y: () => O });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(964486),
    o = n(793574),
    l = n(688810),
    c = n(526162),
    u = n(848971),
    d = n(793943),
    f = n(792656),
    p = n(954571),
    _ = n(358776),
    h = n(12901),
    m = n(652215),
    g = n(788868),
    E = n(985018),
    b = n(567856);
let y = () => {
        (0, d.nf)(d.HP.APP_ICON), (0, h.default)();
    },
    O = () => {
        let { analyticsLocations: e } = (0, l.Ay)(o.A.USER_SETTINGS),
            t = (0, i.bG)([c.A], () => c.A.isUpsellPreview),
            n = (0, _.dk)("UserSettingsAppearanceInAppIcon");
        (0, s.Ay)(() => {
            t &&
                p.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: g.e.APP_ICON_UPSELL,
                    location_stack: e,
                });
        });
        let d = () =>
            (0, r.jsxs)("div", {
                className: b.gY,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: t ? "secondary" : "primary",
                        text: E.intl.string(E.t["hb/wE0"]),
                        onClick: () => y(),
                    }),
                    t
                        ? (0, r.jsx)(f.A, {
                              subscriptionTier: g.pe.TIER_2,
                              defaultTextOverride: E.intl.string(E.t.mr4K7D),
                              premiumModalAnalyticsLocation: {
                                  object: m.ZSU.BUTTON_CTA,
                                  objectType: m.AnalyticsObjectTypes.BUY,
                              },
                              fullWidth: !0,
                          })
                        : null,
                ],
            });
        return (0, r.jsxs)("div", {
            className: b.Gg,
            children: [
                (0, r.jsx)(u.A, {
                    disabled: t,
                    renderCTAButtons: d,
                }),
                !n && (0, r.jsx)(a.cGx, { className: b.yF }),
            ],
        });
    };

n.d(t, { J3: () => y, sB: () => D });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(554146),
    r = n(821609),
    o = n(331322),
    d = n(793574),
    u = n(688810),
    c = n(47671),
    g = n(692798),
    _ = n(793943),
    m = n(826673),
    h = n(422936),
    A = n(234419),
    p = n(792656),
    E = n(511484),
    T = n(811611),
    S = n(954571),
    x = n(779733),
    f = n(652215),
    b = n(385803),
    N = n(49999),
    C = n(788868),
    I = n(985018),
    v = n(254604);
let y = () => {
    (0, m.Dr)(a.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: N.i.PRIMARY, forceTrack: !0 }),
        (0, _.nf)(_.HP.CLIENT_THEMES),
        (0, x.default)();
};
function j() {
    let e = (0, h.O)(),
        t = (0, E.U9)(e, C.pe.TIER_2)
            ? I.intl.formatToPlainString(I.t.bkQ4bH, { percent: e?.discount.amount })
            : I.intl.string(I.t.mr4K7D);
    return (0, i.jsx)(p.A, {
        subscriptionTier: C.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: f.ZSU.BUTTON_CTA, objectType: f.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function O() {
    let e = (0, s.bG)([c.A], () => c.A.isPreview),
        t = (0, A.V)()?.subscription_trial?.sku_id === C.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: v.gY,
              children: [
                  (0, i.jsx)(r.$, { variant: "secondary", text: I.intl.string(I.t["E+COuA"]), onClick: y }),
                  (0, i.jsx)(j, {}),
              ],
          });
}
function R(e) {
    let { children: t } = e,
        n = (0, s.bG)([c.A], () => c.A.isPreview),
        { analyticsLocations: a } = (0, u.Ay)(d.A.USER_SETTINGS);
    return (l.useEffect(() => {
        n &&
            S.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
                type: C.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: a,
            });
    }, [n, a]),
    n)
        ? (0, i.jsx)("div", { className: v._$, children: t })
        : t;
}
function L() {
    let e = (0, s.bG)([c.A], () => c.A.isPreview),
        t = (0, A.V)()?.subscription_trial?.sku_id === C.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: v.c7,
                      children: (0, i.jsx)(r.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: I.intl.string(I.t["E+COuA"]),
                          onClick: () => y(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: v.BU }),
                  (0, i.jsx)(T.Ay, { type: C.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: C.pe.TIER_2 }),
              ],
          })
        : null;
}
function D() {
    return (0, i.jsx)(g.Ay, {
        type: g.v0.SETTINGS,
        children: (0, i.jsxs)(R, {
            children: [
                (0, i.jsx)(g.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(O, {}),
                    headingClassName: v.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: v.cI,
                    titleIconClassName: v.Hq,
                }),
                (0, i.jsx)(o.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, i.jsx)(g.Zg, { disabled: !1, size: b.ni.SIZE_48 }),
                }),
                (0, i.jsx)(L, {}),
            ],
        }),
    });
}

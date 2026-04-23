n.d(t, { J3: () => y, sB: () => D });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(554146),
    r = n(821609),
    o = n(331322),
    d = n(793574),
    u = n(688810),
    c = n(47671),
    g = n(692798),
    m = n(793943),
    _ = n(826673),
    A = n(422936),
    h = n(234419),
    p = n(792656),
    x = n(511484),
    E = n(811611),
    T = n(954571),
    S = n(779733),
    f = n(652215),
    b = n(385803),
    C = n(49999),
    v = n(788868),
    N = n(985018),
    I = n(254604);
let y = () => {
    (0, _.Dr)(a.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: C.i.PRIMARY, forceTrack: !0 }),
        (0, m.nf)(m.HP.CLIENT_THEMES),
        (0, S.default)();
};
function j() {
    let e = (0, A.O)(),
        t = (0, x.U9)(e, v.pe.TIER_2)
            ? N.intl.formatToPlainString(N.t.bkQ4bH, { percent: e?.discount.amount })
            : N.intl.string(N.t.mr4K7D);
    return (0, i.jsx)(p.A, {
        subscriptionTier: v.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: f.ZSU.BUTTON_CTA, objectType: f.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function O() {
    let e = (0, l.bG)([c.A], () => c.A.isPreview),
        t = (0, h.V)()?.subscription_trial?.sku_id === v.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: I.gY,
              children: [
                  (0, i.jsx)(r.$, { variant: "secondary", text: N.intl.string(N.t["E+COuA"]), onClick: y }),
                  (0, i.jsx)(j, {}),
              ],
          });
}
function R(e) {
    let { children: t } = e,
        n = (0, l.bG)([c.A], () => c.A.isPreview),
        { analyticsLocations: a } = (0, u.Ay)(d.A.USER_SETTINGS);
    return (s.useEffect(() => {
        n &&
            T.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
                type: v.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: a,
            });
    }, [n, a]),
    n)
        ? (0, i.jsx)("div", { className: I._$, children: t })
        : t;
}
function L() {
    let e = (0, l.bG)([c.A], () => c.A.isPreview),
        t = (0, h.V)()?.subscription_trial?.sku_id === v.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: I.c7,
                      children: (0, i.jsx)(r.$, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: N.intl.string(N.t["E+COuA"]),
                          onClick: () => y(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: I.BU }),
                  (0, i.jsx)(E.Ay, { type: v.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: v.pe.TIER_2 }),
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
                    headingClassName: I.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: I.cI,
                    titleIconClassName: I.Hq,
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

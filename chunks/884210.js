n.d(t, { J3: () => I, sB: () => L });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(47671),
    u = n(692798),
    m = n(793943),
    g = n(826673),
    _ = n(422936),
    x = n(234419),
    h = n(792656),
    A = n(511484),
    p = n(811611),
    T = n(954571),
    f = n(779733),
    S = n(652215),
    E = n(385803),
    b = n(49999),
    C = n(788868),
    v = n(985018),
    N = n(254604);
let I = () => {
    (0, g.Dr)(r.M.CLIENT_THEMES_SPARKLE_PREVIEW, { dismissAction: b.i.PRIMARY, forceTrack: !0 }),
        (0, m.nf)(m.HP.CLIENT_THEMES),
        (0, f.default)();
};
function j() {
    let e = (0, _.O)(),
        t = (0, A.U9)(e, C.pe.TIER_2)
            ? v.intl.formatToPlainString(v.t.bkQ4bH, { percent: e?.discount.amount })
            : v.intl.string(v.t.mr4K7D);
    return (0, i.jsx)(h.A, {
        subscriptionTier: C.pe.TIER_2,
        defaultTextOverride: t,
        premiumModalAnalyticsLocation: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
function y() {
    let e = (0, l.bG)([c.A], () => c.A.isPreview),
        t = (0, x.V)()?.subscription_trial?.sku_id === C.pe.TIER_2;
    return !e || t
        ? null
        : (0, i.jsxs)("div", {
              className: N.gY,
              children: [
                  (0, i.jsx)(a.Button, { variant: "secondary", text: v.intl.string(v.t["E+COuA"]), onClick: I }),
                  (0, i.jsx)(j, {}),
              ],
          });
}
function O(e) {
    let { children: t } = e,
        n = (0, l.bG)([c.A], () => c.A.isPreview),
        { analyticsLocations: r } = (0, d.Ay)(o.A.USER_SETTINGS);
    return (s.useEffect(() => {
        n &&
            T.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: C.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: r,
            });
    }, [n, r]),
    n)
        ? (0, i.jsx)("div", { className: N._$, children: t })
        : t;
}
function R() {
    let e = (0, l.bG)([c.A], () => c.A.isPreview),
        t = (0, x.V)()?.subscription_trial?.sku_id === C.pe.TIER_2;
    return e && t
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: N.c7,
                      children: (0, i.jsx)(a.Button, {
                          variant: "secondary",
                          fullWidth: !0,
                          text: v.intl.string(v.t["E+COuA"]),
                          onClick: () => I(),
                      }),
                  }),
                  (0, i.jsx)("div", { className: N.BU }),
                  (0, i.jsx)(p.Ay, { type: C.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL, subscriptionTier: C.pe.TIER_2 }),
              ],
          })
        : null;
}
function L() {
    return (0, i.jsx)(u.Ay, {
        type: u.v0.SETTINGS,
        children: (0, i.jsxs)(O, {
            children: [
                (0, i.jsx)(u.ew, {
                    isCoachmark: !1,
                    renderCTAButtons: () => (0, i.jsx)(y, {}),
                    headingClassName: N.EK,
                    titleTextVariant: "text-md/semibold",
                    titleClassName: N.cI,
                    titleIconClassName: N.Hq,
                }),
                (0, i.jsx)(a.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    padding: { top: 24 },
                    children: (0, i.jsx)(u.Zg, { disabled: !1, size: E.ni.SIZE_48 }),
                }),
                (0, i.jsx)(R, {}),
            ],
        }),
    });
}

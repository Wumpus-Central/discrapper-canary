n.d(t, { A: () => U });
var i = n(627968),
    s = n(64700),
    a = n(284009),
    r = n.n(a),
    l = n(311907),
    o = n(230109),
    c = n(397927),
    d = n(73153),
    u = n(631670),
    _ = n(974544),
    m = n(793574),
    A = n(688810),
    g = n(429619),
    h = n(451909),
    x = n(550111),
    p = n(202639),
    E = n(407217),
    C = n(919395),
    T = n(884546),
    S = n(287070),
    I = n(196291),
    f = n(101058),
    N = n(836602),
    b = n(299947),
    j = n(814390),
    v = n(351906),
    O = n(287809),
    R = n(954571),
    y = n(927578),
    P = n(606532),
    L = n(161290),
    D = n(652215),
    G = n(985018),
    M = n(166378);
function U() {
    let e = (0, l.bG)([O.default], () => {
            let e = O.default.getCurrentUser();
            return r()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, l.bG)([v.A], () => v.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: a,
            pendingNameplate: U,
            showNotice: k,
            ...V
        } = (0, l.cf)([N.A], () => ({ ...N.A.getPendingChanges(), showNotice: N.A.showNotice() })),
        w = (0, f.V7)({ userId: e.id, image: a }),
        H = (0, C.lw)({ pendingValue: U, userValue: e?.collectibles?.nameplate }),
        B = (0, j.A)() && null != n ? h.Ay.parse(void 0, n).content : n,
        Y = y.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: F, newestAnalyticsLocation: z } = (0, A.Ay)(m.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => d.h.wait(u.IM), []);
    let [W, K] = s.useState(!1),
        { updatedButtonEnabled: Z } = (0, b.W)("UserSettingsProfileCustomization"),
        q = !Y,
        X = s.useRef(null);
    return t
        ? (0, i.jsx)(_.A, {})
        : (0, i.jsxs)(A.f5, {
              value: F,
              children: [
                  (0, i.jsx)(g.A, {}),
                  (0, i.jsx)(T.A, {
                      profilePreview: (0, i.jsx)(S.A, {
                          user: e,
                          canUsePremiumCustomization: Y,
                          onUpsellClick: P.A,
                          pendingBio: B,
                          ...V,
                          pendingAvatar: w,
                      }),
                      nameplatePreview: (0, i.jsx)(x.A, {
                          user: e,
                          nameplate: H,
                          ...V,
                          className: null == H ? M.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(L.A, {}),
                  }),
                  (0, i.jsx)(o.L, {
                      innerRef: X,
                      onChange: (e) => K(e),
                      threshold: 0.25,
                      active: q,
                      children: (0, i.jsx)("div", {
                          ref: X,
                          children: (0, i.jsx)(I.A, { user: e, shouldShow: q, isVisible: W }),
                      }),
                  }),
                  q &&
                      !k &&
                      (0, i.jsx)(p.d, {
                          className: M.EL,
                          showUpsell: q && !W,
                          text: G.intl.format(G.t.TmfgI2, { onClick: () => (0, E.K)({ analyticsSource: z }) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: Z,
                          button: Z
                              ? (0, i.jsx)("div", {
                                    className: M.Xl,
                                    children: (0, i.jsx)(c.Button, {
                                        variant: "overlay-primary",
                                        onClick: () => {
                                            R.default.track(D.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                                cta_variant: "floating_action_button",
                                            }),
                                                X?.current?.scrollIntoView({ behavior: "smooth" });
                                        },
                                        text: G.intl.string(G.t.uw9zI7),
                                        icon: c.tvc,
                                    }),
                                })
                              : (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    onClick: () => {
                                        R.default.track(D.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                            cta_variant: "floating_action_button",
                                        }),
                                            X?.current?.scrollIntoView({ behavior: "smooth" });
                                    },
                                    text: G.intl.string(G.t.uw9zI7),
                                    icon: c.tvc,
                                }),
                      }),
              ],
          });
}

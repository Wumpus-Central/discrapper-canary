n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    a = n(284009),
    l = n.n(a),
    r = n(311907),
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
    b = n(814390),
    j = n(351906),
    v = n(287809),
    O = n(954571),
    R = n(927578),
    y = n(606532),
    P = n(161290),
    L = n(652215),
    D = n(985018),
    M = n(683380);
function G() {
    let e = (0, r.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return l()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, r.bG)([j.A], () => j.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: a,
            pendingNameplate: G,
            showNotice: U,
            ...k
        } = (0, r.cf)([N.A], () => ({ ...N.A.getPendingChanges(), showNotice: N.A.showNotice() })),
        V = (0, f.V7)({ userId: e.id, image: a }),
        H = (0, C.lw)({ pendingValue: G, userValue: e?.collectibles?.nameplate }),
        w = (0, b.A)() && null != n ? h.Ay.parse(void 0, n).content : n,
        B = R.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: Y, newestAnalyticsLocation: F } = (0, A.Ay)(m.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => d.h.wait(u.IM), []);
    let [z, W] = s.useState(!1),
        K = !B,
        Z = s.useRef(null);
    return t
        ? (0, i.jsx)(_.A, {})
        : (0, i.jsxs)(A.f5, {
              value: Y,
              children: [
                  (0, i.jsx)(g.A, {}),
                  (0, i.jsx)(T.A, {
                      profilePreview: (0, i.jsx)(S.A, {
                          user: e,
                          canUsePremiumCustomization: B,
                          onUpsellClick: y.A,
                          pendingBio: w,
                          ...k,
                          pendingAvatar: V,
                      }),
                      nameplatePreview: (0, i.jsx)(x.A, {
                          user: e,
                          nameplate: H,
                          ...k,
                          className: null == H ? M.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(P.A, {}),
                  }),
                  (0, i.jsx)(o.L, {
                      innerRef: Z,
                      onChange: (e) => W(e),
                      threshold: 0.25,
                      active: K,
                      children: (0, i.jsx)("div", {
                          ref: Z,
                          children: (0, i.jsx)(I.A, { user: e, shouldShow: K, isVisible: z }),
                      }),
                  }),
                  K &&
                      !U &&
                      (0, i.jsx)(p.d, {
                          className: M.EL,
                          showUpsell: K && !z,
                          text: D.intl.format(D.t.TmfgI2, { onClick: () => (0, E.K)({ analyticsSource: F }) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          button: (0, i.jsx)("div", {
                              className: M.Xl,
                              children: (0, i.jsx)(c.Button, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      O.default.track(L.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          Z?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: D.intl.string(D.t.uw9zI7),
                                  icon: c.tvc,
                              }),
                          }),
                      }),
              ],
          });
}

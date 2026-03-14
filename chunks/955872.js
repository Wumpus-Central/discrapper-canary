n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(230109),
    d = n(397927),
    c = n(73153),
    u = n(631670),
    _ = n(974544),
    m = n(793574),
    g = n(688810),
    A = n(429619),
    h = n(451909),
    x = n(550111),
    p = n(202639),
    T = n(407217),
    E = n(919395),
    C = n(884546),
    S = n(287070),
    f = n(196291),
    N = n(101058),
    b = n(836602),
    I = n(814390),
    v = n(351906),
    j = n(287809),
    O = n(954571),
    y = n(927578),
    R = n(606532),
    P = n(161290),
    D = n(652215),
    L = n(985018),
    M = n(683380);
function G() {
    let e = (0, a.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return r()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, a.bG)([v.A], () => v.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: l,
            pendingNameplate: G,
            showNotice: U,
            ...k
        } = (0, a.cf)([b.A], () => ({ ...b.A.getPendingChanges(), showNotice: b.A.showNotice() })),
        V = (0, N.V7)({ userId: e.id, image: l }),
        w = (0, E.lw)({ pendingValue: G, userValue: e?.collectibles?.nameplate }),
        B = (0, I.A)() && null != n ? h.Ay.parse(void 0, n).content : n,
        H = y.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: F, newestAnalyticsLocation: Y } = (0, g.Ay)(m.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => c.h.wait(u.IM), []);
    let [z, X] = s.useState(!1),
        W = !H,
        K = s.useRef(null);
    return t
        ? (0, i.jsx)(_.A, {})
        : (0, i.jsxs)(g.f5, {
              value: F,
              children: [
                  (0, i.jsx)(A.A, {}),
                  (0, i.jsx)(C.A, {
                      profilePreview: (0, i.jsx)(S.A, {
                          user: e,
                          canUsePremiumCustomization: H,
                          onUpsellClick: R.A,
                          pendingBio: B,
                          ...k,
                          pendingAvatar: V,
                      }),
                      nameplatePreview: (0, i.jsx)(x.A, {
                          user: e,
                          nameplate: w,
                          ...k,
                          className: null == w ? M.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(P.A, {}),
                  }),
                  (0, i.jsx)(o.L, {
                      innerRef: K,
                      onChange: (e) => X(e),
                      threshold: 0.25,
                      active: W,
                      children: (0, i.jsx)("div", {
                          ref: K,
                          children: (0, i.jsx)(f.A, { user: e, shouldShow: W, isVisible: z }),
                      }),
                  }),
                  W &&
                      !U &&
                      (0, i.jsx)(p.d, {
                          className: M.EL,
                          showUpsell: !z,
                          text: L.intl.format(L.t.TmfgI2, { onClick: () => (0, T.K)({ analyticsSource: Y }) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          button: (0, i.jsx)("div", {
                              className: M.Xl,
                              children: (0, i.jsx)(d.Button, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      O.default.track(D.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          K?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: L.intl.string(L.t.uw9zI7),
                                  icon: d.tvc,
                              }),
                          }),
                      }),
              ],
          });
}

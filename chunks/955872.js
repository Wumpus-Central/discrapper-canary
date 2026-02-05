n.d(t, { A: () => B });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(311907),
    o = n(230109),
    c = n(397927),
    d = n(73153),
    u = n(631670),
    _ = n(974544),
    m = n(793574),
    A = n(688810),
    g = n(429619),
    E = n(451909),
    h = n(550111),
    p = n(202639),
    C = n(407217),
    x = n(919395),
    T = n(884546),
    I = n(287070),
    S = n(158358),
    f = n(196291),
    N = n(101058),
    b = n(836602),
    R = n(299947),
    v = n(814390),
    O = n(351906),
    j = n(287809),
    P = n(954571),
    y = n(927578),
    L = n(897358),
    D = n(606532),
    M = n(161290),
    G = n(652215),
    U = n(985018),
    k = n(166378);
function B() {
    let e = (0, l.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, l.bG)([O.A], () => O.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: r,
            pendingNameplate: B,
            showNotice: w,
            ...H
        } = (0, l.cf)([b.A], () => ({ ...b.A.getPendingChanges(), showNotice: b.A.showNotice() })),
        V = (0, N.V7)({ userId: e.id, image: r }),
        F = (0, x.lw)({ pendingValue: B, userValue: e?.collectibles?.nameplate }),
        Y = (0, v.A)() && null != n ? E.Ay.parse(void 0, n).content : n,
        W = y.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: z, newestAnalyticsLocation: K } = (0, A.Ay)(m.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => d.h.wait(u.IM), []);
    let [Z, X] = s.useState(!1),
        { showRedesign: q } = L.X.useExperiment({ location: "profile customization" }),
        { updatedButtonEnabled: J } = (0, R.W)("UserSettingsProfileCustomization"),
        Q = !W,
        $ = s.useRef(null);
    return t
        ? (0, i.jsx)(_.A, {})
        : (0, i.jsxs)(A.f5, {
              value: z,
              children: [
                  (0, i.jsx)(g.A, {}),
                  (0, i.jsx)(T.A, {
                      profilePreview: (0, i.jsx)(I.A, {
                          user: e,
                          canUsePremiumCustomization: W,
                          onUpsellClick: D.A,
                          pendingBio: Y,
                          ...H,
                          pendingAvatar: V,
                      }),
                      nameplatePreview: (0, i.jsx)(h.A, {
                          user: e,
                          nameplate: F,
                          ...H,
                          className: null == F ? k.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, i.jsx)(M.A, {}),
                  }),
                  q && (0, i.jsx)(S.A, {}),
                  (0, i.jsx)(o.L, {
                      innerRef: $,
                      onChange: (e) => X(e),
                      threshold: 0.25,
                      active: Q,
                      children: (0, i.jsx)("div", {
                          ref: $,
                          children: (0, i.jsx)(f.A, { user: e, shouldShow: Q, isVisible: Z }),
                      }),
                  }),
                  Q &&
                      !w &&
                      (0, i.jsx)(p.d, {
                          className: k.EL,
                          showUpsell: Q && !Z,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, C.K)({ analyticsSource: K }) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: J,
                          button: J
                              ? (0, i.jsx)("div", {
                                    className: k.Xl,
                                    children: (0, i.jsx)(c.Button, {
                                        variant: "overlay-primary",
                                        onClick: () => {
                                            P.default.track(G.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                                cta_variant: "floating_action_button",
                                            }),
                                                $?.current?.scrollIntoView({ behavior: "smooth" });
                                        },
                                        text: U.intl.string(U.t.uw9zI7),
                                        icon: c.tvc,
                                    }),
                                })
                              : (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    onClick: () => {
                                        P.default.track(G.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                            cta_variant: "floating_action_button",
                                        }),
                                            $?.current?.scrollIntoView({ behavior: "smooth" });
                                    },
                                    text: U.intl.string(U.t.uw9zI7),
                                    icon: c.tvc,
                                }),
                      }),
              ],
          });
}

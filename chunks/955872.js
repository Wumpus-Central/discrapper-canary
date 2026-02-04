n.d(t, {
    A: () => H,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    o = n(230109),
    c = n(397927),
    d = n(73153),
    u = n(631670),
    _ = n(974544),
    p = n(793574),
    m = n(688810),
    g = n(429619),
    A = n(451909),
    f = n(550111),
    b = n(202639),
    h = n(407217),
    E = n(919395),
    O = n(884546),
    x = n(287070),
    C = n(158358),
    S = n(196291),
    T = n(101058),
    I = n(836602),
    N = n(299947),
    y = n(814390),
    j = n(351906),
    v = n(287809),
    P = n(954571),
    R = n(927578),
    D = n(897358),
    L = n(606532),
    w = n(161290),
    M = n(652215),
    G = n(985018),
    U = n(166378);

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function H() {
    var e;
    let t = (0, a.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return s()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        n = (0, a.bG)([j.A], () => j.A.hidePersonalInformation),
        l = (0, a.cf)([I.A], () =>
            B(k({}, I.A.getPendingChanges()), {
                showNotice: I.A.showNotice(),
            }),
        ),
        { pendingBio: H, pendingAvatar: V, pendingNameplate: F, showNotice: Y } = l,
        W = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(l, ["pendingBio", "pendingAvatar", "pendingNameplate", "showNotice"]),
        K = (0, T.V7)({
            userId: t.id,
            image: V,
        }),
        z = (0, E.lw)({
            pendingValue: F,
            userValue: null == t || null == (e = t.collectibles) ? void 0 : e.nameplate,
        }),
        Z = (0, y.A)() && null != H ? A.Ay.parse(void 0, H).content : H,
        X = R.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: q, newestAnalyticsLocation: J } = (0, m.Ay)(p.A.USER_SETTINGS_USER_PROFILE);
    i.useEffect(() => () => d.h.wait(u.IM), []);
    let [Q, $] = i.useState(!1),
        { showRedesign: ee } = D.X.useExperiment({
            location: "profile customization",
        }),
        { updatedButtonEnabled: et } = (0, N.W)("UserSettingsProfileCustomization"),
        en = !X,
        er = i.useRef(null);
    return n
        ? (0, r.jsx)(_.A, {})
        : (0, r.jsxs)(m.f5, {
              value: q,
              children: [
                  (0, r.jsx)(g.A, {}),
                  (0, r.jsx)(O.A, {
                      profilePreview: (0, r.jsx)(
                          x.A,
                          B(
                              k(
                                  {
                                      user: t,
                                      canUsePremiumCustomization: X,
                                      onUpsellClick: L.A,
                                      pendingBio: Z,
                                  },
                                  W,
                              ),
                              {
                                  pendingAvatar: K,
                              },
                          ),
                      ),
                      nameplatePreview: (0, r.jsx)(
                          f.A,
                          B(
                              k(
                                  {
                                      user: t,
                                      nameplate: z,
                                  },
                                  W,
                              ),
                              {
                                  className: null == z ? U.t : void 0,
                                  isHighlighted: !0,
                              },
                          ),
                      ),
                      children: (0, r.jsx)(w.A, {}),
                  }),
                  ee && (0, r.jsx)(C.A, {}),
                  (0, r.jsx)(o.L, {
                      innerRef: er,
                      onChange: (e) => $(e),
                      threshold: 0.25,
                      active: en,
                      children: (0, r.jsx)("div", {
                          ref: er,
                          children: (0, r.jsx)(S.A, {
                              user: t,
                              shouldShow: en,
                              isVisible: Q,
                          }),
                      }),
                  }),
                  en &&
                      !Y &&
                      (0, r.jsx)(b.d, {
                          className: U.E,
                          showUpsell: en && !Q,
                          text: G.intl.format(G.t.TmfgI2, {
                              onClick: () =>
                                  (0, h.K)({
                                      analyticsSource: J,
                                  }),
                          }),
                          textVariant: "heading-md/medium",
                          button: (0, r.jsx)(c.Button, {
                              variant: et ? "overlay-primary" : "expressive",
                              onClick: () => {
                                  var e;
                                  P.default.track(M.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == er ||
                                          null == (e = er.current) ||
                                          e.scrollIntoView({
                                              behavior: "smooth",
                                          });
                              },
                              text: G.intl.string(G.t.uw9zI7),
                              icon: c.tvc,
                          }),
                      }),
              ],
          });
}

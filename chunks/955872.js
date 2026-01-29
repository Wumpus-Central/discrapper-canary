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
    p = n(974544),
    _ = n(793574),
    m = n(688810),
    g = n(429619),
    f = n(451909),
    b = n(550111),
    h = n(202639),
    A = n(407217),
    E = n(919395),
    x = n(884546),
    O = n(287070),
    C = n(158358),
    y = n(196291),
    j = n(101058),
    T = n(836602),
    v = n(814390),
    S = n(351906),
    I = n(287809),
    N = n(954571),
    P = n(927578),
    R = n(897358),
    D = n(606532),
    w = n(161290),
    L = n(652215),
    M = n(985018),
    G = n(166378);

function U(e) {
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

function k(e, t) {
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
    let t = (0, a.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return s()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        n = (0, a.bG)([S.A], () => S.A.hidePersonalInformation),
        l = (0, a.cf)([T.A], () =>
            k(U({}, T.A.getPendingChanges()), {
                showNotice: T.A.showNotice(),
            }),
        ),
        { pendingBio: H, pendingAvatar: B, pendingNameplate: V, showNotice: F } = l,
        Y = (function (e, t) {
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
        W = (0, j.V7)({
            userId: t.id,
            image: B,
        }),
        K = (0, E.lw)({
            pendingValue: V,
            userValue: null == t || null == (e = t.collectibles) ? void 0 : e.nameplate,
        }),
        z = (0, v.A)() && null != H ? f.Ay.parse(void 0, H).content : H,
        Z = P.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: q, newestAnalyticsLocation: X } = (0, m.Ay)(_.A.USER_SETTINGS_USER_PROFILE);
    i.useEffect(() => () => d.h.wait(u.IM), []);
    let [J, Q] = i.useState(!1),
        { showRedesign: $ } = R.X.useExperiment({
            location: "profile customization",
        }),
        ee = !Z,
        et = i.useRef(null);
    return n
        ? (0, r.jsx)(p.A, {})
        : (0, r.jsxs)(m.f5, {
              value: q,
              children: [
                  (0, r.jsx)(g.A, {}),
                  (0, r.jsx)(x.A, {
                      profilePreview: (0, r.jsx)(
                          O.A,
                          k(
                              U(
                                  {
                                      user: t,
                                      canUsePremiumCustomization: Z,
                                      onUpsellClick: D.A,
                                      pendingBio: z,
                                  },
                                  Y,
                              ),
                              {
                                  pendingAvatar: W,
                              },
                          ),
                      ),
                      nameplatePreview: (0, r.jsx)(
                          b.A,
                          k(
                              U(
                                  {
                                      user: t,
                                      nameplate: K,
                                  },
                                  Y,
                              ),
                              {
                                  className: null == K ? G.t : void 0,
                                  isHighlighted: !0,
                              },
                          ),
                      ),
                      children: (0, r.jsx)(w.A, {}),
                  }),
                  $ && (0, r.jsx)(C.A, {}),
                  (0, r.jsx)(o.L, {
                      innerRef: et,
                      onChange: (e) => Q(e),
                      threshold: 0.25,
                      active: ee,
                      children: (0, r.jsx)("div", {
                          ref: et,
                          children: (0, r.jsx)(y.A, {
                              user: t,
                              shouldShow: ee,
                              isVisible: J,
                          }),
                      }),
                  }),
                  ee &&
                      !F &&
                      (0, r.jsx)(h.d, {
                          className: G.E,
                          showUpsell: ee && !J,
                          text: M.intl.format(M.t.TmfgI2, {
                              onClick: () =>
                                  (0, A.K)({
                                      analyticsSource: X,
                                  }),
                          }),
                          textVariant: "heading-md/medium",
                          button: (0, r.jsx)(c.Button, {
                              variant: "expressive",
                              onClick: () => {
                                  var e;
                                  N.default.track(L.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == et ||
                                          null == (e = et.current) ||
                                          e.scrollIntoView({
                                              behavior: "smooth",
                                          });
                              },
                              text: M.intl.string(M.t.uw9zI7),
                              icon: c.tvc,
                          }),
                      }),
              ],
          });
}

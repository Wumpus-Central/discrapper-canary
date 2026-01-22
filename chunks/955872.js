n.d(t, {
    A: () => Y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(397927),
    u = n(73153),
    d = n(631670),
    f = n(974544),
    p = n(793574),
    _ = n(688810),
    h = n(429619),
    m = n(451909),
    g = n(550111),
    E = n(202639),
    b = n(407217),
    y = n(919395),
    O = n(884546),
    A = n(287070),
    v = n(158358),
    S = n(196291),
    I = n(101058),
    T = n(814390),
    C = n(351906),
    N = n(752319),
    R = n(287809),
    w = n(954571),
    P = n(927578),
    D = n(897358),
    x = n(606532),
    L = n(161290),
    j = n(652215),
    M = n(985018),
    k = n(166378);

function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}

function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = H(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function Y() {
    var e;
    let t = (0, o.bG)([R.default], () => {
            let e = R.default.getCurrentUser();
            return s()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        n = (0, o.bG)([C.A], () => C.A.hidePersonalInformation),
        a = (0, o.cf)([N.A], () => N.A.getAllPending()),
        { pendingBio: U, pendingAvatar: V, pendingNameplate: H } = a,
        Y = B(a, ["pendingBio", "pendingAvatar", "pendingNameplate"]),
        W = (0, I.V7)({
            userId: t.id,
            image: V,
        }),
        K = (0, y.lw)({
            pendingValue: H,
            userValue: null == t || null == (e = t.collectibles) ? void 0 : e.nameplate,
        }),
        z = (0, o.bG)([N.A], () => N.A.showNotice()),
        q = (0, T.A)() && null != U ? m.Ay.parse(void 0, U).content : U,
        X = P.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: Z, newestAnalyticsLocation: Q } = (0, _.Ay)(p.A.USER_SETTINGS_USER_PROFILE);
    i.useEffect(() => () => u.h.wait(d.IM), []);
    let [$, J] = i.useState(!1),
        { showRedesign: ee } = D.X.useExperiment({
            location: "profile customization",
        }),
        et = !X,
        en = i.useRef(null);
    return n
        ? (0, r.jsx)(f.A, {})
        : (0, r.jsxs)(_.f5, {
              value: Z,
              children: [
                  (0, r.jsx)(h.A, {}),
                  (0, r.jsx)(O.A, {
                      profilePreview: (0, r.jsx)(
                          A.A,
                          F(
                              G(
                                  {
                                      user: t,
                                      canUsePremiumCustomization: X,
                                      onUpsellClick: x.A,
                                      pendingBio: q,
                                  },
                                  Y,
                              ),
                              {
                                  pendingAvatar: W,
                              },
                          ),
                      ),
                      nameplatePreview: (0, r.jsx)(
                          g.A,
                          F(
                              G(
                                  {
                                      user: t,
                                      nameplate: K,
                                  },
                                  Y,
                              ),
                              {
                                  className: null == K ? k.t : void 0,
                                  isHighlighted: !0,
                              },
                          ),
                      ),
                      children: (0, r.jsx)(L.A, {}),
                  }),
                  ee && (0, r.jsx)(v.A, {}),
                  (0, r.jsx)(l.L, {
                      innerRef: en,
                      onChange: (e) => J(e),
                      threshold: 0.25,
                      active: et,
                      children: (0, r.jsx)("div", {
                          ref: en,
                          children: (0, r.jsx)(S.A, {
                              user: t,
                              shouldShow: et,
                              isVisible: $,
                          }),
                      }),
                  }),
                  et &&
                      !z &&
                      (0, r.jsx)(E.d, {
                          className: k.E,
                          showUpsell: et && !$,
                          text: M.intl.format(M.t.TmfgI2, {
                              onClick: () =>
                                  (0, b.K)({
                                      analyticsSource: Q,
                                  }),
                          }),
                          textVariant: "heading-md/medium",
                          button: (0, r.jsx)(c.Button, {
                              variant: "expressive",
                              onClick: () => {
                                  var e;
                                  w.default.track(j.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                      cta_variant: "floating_action_button",
                                  }),
                                      null == en ||
                                          null == (e = en.current) ||
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

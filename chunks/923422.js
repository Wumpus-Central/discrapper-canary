n.d(t, { default: () => x }), n(388685), n(704826), n(35282);
var a = n(951288),
    l = n(647438),
    r = n(481060),
    i = n(239091),
    o = n(230711),
    c = n(493544),
    s = n(108843),
    u = n(100527),
    d = n(906732),
    g = n(386506),
    b = n(366953),
    p = n(991346),
    y = n(606669),
    O = n(53432),
    f = n(226884),
    E = n(74869),
    v = n(45570),
    S = n(308512),
    h = n(594791),
    j = n(393431),
    P = n(69021),
    w = n(981631),
    A = n(388032);
let x = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: s } = e,
            [u, x] = l.useState(!1),
            D = (0, v.Z)(),
            I = (0, S.Z)(),
            _ = (0, O.Z)(),
            N = (0, y.Z)(),
            T = (0, j.Z)(),
            Z = (0, h.Z)(),
            m = (0, E.Z)(),
            k = (0, P.Z)(),
            C = (0, f.Z)(),
            { analyticsLocations: R } = (0, d.ZP)(),
            L = l.useMemo(() => (0, b.j)(), []);
        async function B() {
            try {
                x(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                x(!1);
            }
        }
        let V = (0, p.VO)()
            .filter((e) => {
                let { section: t } = e;
                return t !== c.ID.HEADER && t !== c.ID.CUSTOM && t !== c.ID.DIVIDER && "logout" !== t;
            })
            .filter((e) => null == e.predicate || e.predicate());
        return (0, a.jsx)(d.Gt, {
            value: R,
            children: (0, a.jsxs)(r.v2r, {
                navId: "user-settings-cog",
                onClose: i.Zy,
                "aria-label": A.intl.string(A.t.opYYHh),
                onSelect: n,
                onInteraction: s,
                children: [
                    V.map((e) => {
                        var t, n;
                        let { section: l, label: i, onClick: c } = e,
                            s = l.replace(/\W/gi, "_");
                        return (0, a.jsx)(
                            r.sNh,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        a.forEach(function (t) {
                                            var a;
                                            (a = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: a,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = a);
                                        });
                                }
                                return e;
                            })(
                                { id: s },
                                {
                                    label: i,
                                    action: () =>
                                        null != c
                                            ? c()
                                            : (function (e, t) {
                                                  let n = Object.values(w.oAB).filter((t) => t === e)[0];
                                                  null != n && o.Z.open(n, void 0, { analyticsLocations: t });
                                              })(l, R),
                                },
                            )),
                            (n = n =
                                {
                                    children: ((e) => {
                                        switch (e) {
                                            case w.oAB.GAMES:
                                                return D;
                                            case w.oAB.STREAMER_MODE:
                                                return I;
                                            case w.oAB.APPEARANCE:
                                                return _;
                                            case w.oAB.ACCESSIBILITY:
                                                return N;
                                            case w.oAB.VOICE:
                                                return T;
                                            case w.oAB.TEXT:
                                                return Z;
                                            case w.oAB.EXPERIMENTS:
                                                return m;
                                            case w.oAB.DEVELOPER_OPTIONS:
                                                return k;
                                            case w.oAB.DESIGN_SYSTEMS:
                                                return C;
                                            default:
                                                return null;
                                        }
                                    })(l),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var a = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, a);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                            s,
                        );
                    }),
                    e.user.isStaff() && L.length > 0
                        ? (0, a.jsx)(r.sNh, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, a.jsx)(r.kSQ, {
                                  children: L.map((e) =>
                                      (0, a.jsx)(
                                          r.k5B,
                                          {
                                              id: "input-".concat(e.payload),
                                              group: "build_overrides",
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  (null == t ? void 0 : t.id) !== e.id &&
                                                      200 === (await (0, g.f0)(e.payload)).status &&
                                                      window.location.reload(!0);
                                              },
                                          },
                                          "input-".concat(e.payload),
                                      ),
                                  ),
                              }),
                          })
                        : null,
                    null != t
                        ? (0, a.jsx)(r.kSQ, {
                              children: (0, a.jsx)(r.sNh, {
                                  id: "clear-build-override",
                                  disabled: u,
                                  label: A.intl.string(A.t["/Nz9ra"]),
                                  action: B,
                                  color: "danger",
                              }),
                          })
                        : null,
                ],
            }),
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.USER_SETTINGS_MENU],
);

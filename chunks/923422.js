n.d(t, { default: () => N }), n(388685), n(704826), n(35282);
var a = n(951288),
    l = n(647438),
    r = n(481060),
    i = n(239091),
    o = n(493544),
    s = n(108843),
    c = n(100527),
    u = n(906732),
    d = n(386506),
    g = n(366953),
    b = n(313789),
    p = n(526665),
    y = n(991346),
    O = n(518596),
    f = n(606669),
    v = n(53432),
    E = n(74869),
    S = n(45570),
    h = n(478057),
    j = n(308512),
    P = n(594791),
    A = n(393431),
    w = n(69021),
    x = n(981631),
    D = n(388032);
let N = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: s } = e,
            [c, N] = l.useState(!1),
            _ = (0, S.Z)(),
            I = (0, j.Z)(),
            C = (0, v.Z)(),
            T = (0, f.Z)(),
            Z = (0, A.Z)(),
            m = (0, P.Z)(),
            k = (0, E.Z)(),
            R = (0, w.Z)(),
            L = (0, h.Z)(),
            { analyticsLocations: B } = (0, u.ZP)(),
            M = l.useMemo(() => (0, g.j)(), []);
        async function V() {
            try {
                N(!0), await (0, d.bF)(), window.location.reload(!0);
            } catch (e) {
                N(!1);
            }
        }
        let G = (0, p.wy)("UserSettingsCogContextMenu"),
            U = (0, O.getWebUserSettingsByUserSettingsSections)(),
            z = (0, y.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== o.ID.HEADER && t !== o.ID.CUSTOM && t !== o.ID.DIVIDER && "logout" !== t;
                })
                .filter((e) => (null == e.predicate || e.predicate()) && (!G || null != U[e.section]));
        return (0, a.jsx)(u.Gt, {
            value: B,
            children: (0, a.jsxs)(r.v2r, {
                navId: "user-settings-cog",
                onClose: i.Zy,
                "aria-label": D.intl.string(D.t.opYYHh),
                onSelect: n,
                onInteraction: s,
                children: [
                    z.map((e) => {
                        var t, n;
                        let { section: l, label: i, onClick: o } = e,
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
                                    action: () => {
                                        var e;
                                        return null != o
                                            ? o()
                                            : (function (e, t, n) {
                                                  let a = Object.values(x.oAB).filter((e) => e === t)[0];
                                                  null != a &&
                                                      (0, O.openUserSettings)(e, {
                                                          section: a,
                                                          analyticsLocations: n,
                                                      });
                                              })(null != (e = U[l]) ? e : b.n.ACCOUNT_PANEL, l, B);
                                    },
                                },
                            )),
                            (n = n =
                                {
                                    children: ((e) => {
                                        switch (e) {
                                            case x.oAB.GAMES:
                                                return _;
                                            case x.oAB.STREAMER_MODE:
                                                return I;
                                            case x.oAB.APPEARANCE:
                                                return C;
                                            case x.oAB.ACCESSIBILITY:
                                                return T;
                                            case x.oAB.VOICE:
                                                return Z;
                                            case x.oAB.TEXT:
                                                return m;
                                            case x.oAB.EXPERIMENTS:
                                                return k;
                                            case x.oAB.DEVELOPER_OPTIONS:
                                                return R;
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
                    e.user.isStaff() && L,
                    e.user.isStaff() && M.length > 0
                        ? (0, a.jsx)(r.sNh, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, a.jsx)(r.kSQ, {
                                  children: M.map((e) =>
                                      (0, a.jsx)(
                                          r.k5B,
                                          {
                                              id: "input-".concat(e.payload),
                                              group: "build_overrides",
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  (null == t ? void 0 : t.id) !== e.id &&
                                                      200 === (await (0, d.f0)(e.payload)).status &&
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
                                  disabled: c,
                                  label: D.intl.string(D.t["/Nz9ra"]),
                                  action: V,
                                  color: "danger",
                              }),
                          })
                        : null,
                ],
            }),
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.USER_SETTINGS_MENU],
);

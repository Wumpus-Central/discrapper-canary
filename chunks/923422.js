n.d(t, { default: () => D }), n(388685), n(290780), n(539854), n(704826), n(35282);
var a = n(951288),
    i = n(647438),
    l = n(481060),
    r = n(239091),
    o = n(493544),
    s = n(108843),
    c = n(100527),
    u = n(906732),
    d = n(386506),
    g = n(366953),
    b = n(313789),
    p = n(526665),
    O = n(991346),
    E = n(518596),
    y = n(606669),
    f = n(53432),
    S = n(74869),
    v = n(45570),
    P = n(478057),
    h = n(308512),
    j = n(594791),
    A = n(393431),
    N = n(69021),
    _ = n(981631),
    w = n(388032);
let D = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: s } = e,
            [c, D] = i.useState(!1),
            x = (0, v.Z)(),
            I = (0, h.Z)(),
            T = (0, f.Z)(),
            R = (0, y.Z)(),
            C = (0, A.Z)(),
            L = (0, j.Z)(),
            m = (0, S.Z)(),
            Z = (0, N.Z)(),
            k = (0, P.Z)(),
            { analyticsLocations: V } = (0, u.ZP)(),
            M = i.useMemo(() => (0, g.j)(), []);
        async function U() {
            try {
                D(!0), await (0, d.bF)(), window.location.reload(!0);
            } catch (e) {
                D(!1);
            }
        }
        let B = (0, p.wy)("UserSettingsCogContextMenu"),
            G = (0, E.getWebUserSettingsByUserSettingsSections)(),
            Y = (0, O.VO)(),
            z = i.useMemo(() => {
                let e = [];
                return (
                    Y.forEach((t) => {
                        let { section: n, predicate: a } = t;
                        n !== o.ID.HEADER &&
                            n !== o.ID.CUSTOM &&
                            n !== o.ID.DIVIDER &&
                            "logout" !== n &&
                            (null == a || a()) &&
                            ((B && null == G.get(n)) ||
                                (B && n === _.oAB.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t)));
                    }),
                    e
                );
            }, [Y, B, G]);
        return (0, a.jsx)(u.Gt, {
            value: V,
            children: (0, a.jsxs)(l.v2r, {
                navId: "user-settings-cog",
                onClose: r.Zy,
                "aria-label": w.intl.string(w.t.opYYHn),
                onSelect: n,
                onInteraction: s,
                children: [
                    z.map((e) => {
                        var t, n;
                        let { section: i, label: r, onClick: o } = e,
                            s = i.replace(/\W/gi, "_");
                        return (0, a.jsx)(
                            l.sNh,
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
                                    label: r,
                                    action: () => {
                                        var e;
                                        return null != o
                                            ? o()
                                            : (function (e, t, n) {
                                                  let a = Object.values(_.oAB).filter((e) => e === t)[0];
                                                  null != a &&
                                                      (0, E.openUserSettings)(e, {
                                                          section: a,
                                                          analyticsLocations: n,
                                                      });
                                              })(null != (e = G.get(i)) ? e : b.n.ACCOUNT_PANEL, i, V);
                                    },
                                },
                            )),
                            (n = n =
                                {
                                    children: ((e) => {
                                        switch (e) {
                                            case _.oAB.GAMES:
                                                return x;
                                            case _.oAB.STREAMER_MODE:
                                                return I;
                                            case _.oAB.APPEARANCE:
                                                return T;
                                            case _.oAB.ACCESSIBILITY:
                                                return R;
                                            case _.oAB.VOICE:
                                                return C;
                                            case _.oAB.TEXT:
                                                return L;
                                            case _.oAB.EXPERIMENTS:
                                                return m;
                                            case _.oAB.DEVELOPER_OPTIONS:
                                                return Z;
                                            default:
                                                return null;
                                        }
                                    })(i),
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
                    e.user.isStaff() && k,
                    e.user.isStaff() && M.length > 0
                        ? (0, a.jsx)(l.sNh, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, a.jsx)(l.kSQ, {
                                  children: M.map((e) =>
                                      (0, a.jsx)(
                                          l.k5B,
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
                        ? (0, a.jsx)(l.kSQ, {
                              children: (0, a.jsx)(l.sNh, {
                                  id: "clear-build-override",
                                  disabled: c,
                                  label: w.intl.string(w.t["/Nz9rY"]),
                                  action: U,
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

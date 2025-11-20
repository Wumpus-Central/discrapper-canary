n.d(t, { default: () => _ }), n(388685), n(290780), n(539854), n(704826), n(35282);
var l = n(54381),
    i = n(473749),
    a = n(481060),
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
    I = n(981631),
    w = n(388032);
let _ = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: s } = e,
            [c, _] = i.useState(!1),
            x = (0, v.Z)(),
            D = (0, h.Z)(),
            T = (0, f.Z)(),
            C = (0, y.Z)(),
            m = (0, A.Z)(),
            L = (0, j.Z)(),
            R = (0, S.Z)(),
            Z = (0, N.Z)(),
            k = (0, P.Z)(),
            { analyticsLocations: V } = (0, u.ZP)(),
            B = i.useMemo(() => (0, g.j)(), []);
        async function M() {
            try {
                _(!0), await (0, d.bF)(), window.location.reload(!0);
            } catch (e) {
                _(!1);
            }
        }
        let U = (0, p.wy)("UserSettingsCogContextMenu"),
            G = (0, p.gj)("UserSettingsCogContextMenu"),
            F = (0, E.getWebUserSettingsByUserSettingsSections)(),
            z = (0, O.VO)(),
            Y = i.useMemo(() => {
                let e = [];
                if (
                    (z.forEach((t) => {
                        let { section: n, predicate: l } = t;
                        n !== o.ID.HEADER &&
                            n !== o.ID.CUSTOM &&
                            n !== o.ID.DIVIDER &&
                            "logout" !== n &&
                            (null == l || l()) &&
                            ((U && null == F.get(n)) ||
                                (U && n === I.oAB.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t)));
                    }),
                    G)
                ) {
                    let t = e.findIndex((e) => e.section === I.oAB.NOTIFICATIONS),
                        n = e.findIndex((e) => e.section === I.oAB.CONNECTIONS);
                    if (-1 !== t && -1 !== n && t > n) {
                        let [l] = e.splice(t, 1);
                        e.splice(n + 1, 0, l);
                    }
                }
                return e;
            }, [z, U, F, G]);
        return (0, l.jsx)(u.Gt, {
            value: V,
            children: (0, l.jsxs)(a.v2r, {
                navId: "user-settings-cog",
                onClose: r.Zy,
                "aria-label": w.intl.string(w.t.opYYHn),
                onSelect: n,
                onInteraction: s,
                children: [
                    Y.map((e) => {
                        var t, n;
                        let { section: i, label: r, onClick: o } = e,
                            s = i.replace(/\W/gi, "_");
                        return (0, l.jsx)(
                            a.sNh,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        l = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (l = l.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        l.forEach(function (t) {
                                            var l;
                                            (l = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: l,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = l);
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
                                                  let l = Object.values(I.oAB).filter((e) => e === t)[0];
                                                  null != l &&
                                                      (0, E.openUserSettings)(e, {
                                                          section: l,
                                                          analyticsLocations: n,
                                                      });
                                              })(null != (e = F.get(i)) ? e : b.n.ACCOUNT_PANEL, i, V);
                                    },
                                },
                            )),
                            (n = n =
                                {
                                    children: ((e) => {
                                        switch (e) {
                                            case I.oAB.GAMES:
                                                return x;
                                            case I.oAB.STREAMER_MODE:
                                                return D;
                                            case I.oAB.APPEARANCE:
                                                return T;
                                            case I.oAB.ACCESSIBILITY:
                                                return C;
                                            case I.oAB.VOICE:
                                                return m;
                                            case I.oAB.TEXT:
                                                return L;
                                            case I.oAB.EXPERIMENTS:
                                                return R;
                                            case I.oAB.DEVELOPER_OPTIONS:
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
                                          var l = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, l);
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
                    e.user.isStaff() && B.length > 0
                        ? (0, l.jsx)(a.sNh, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, l.jsx)(a.kSQ, {
                                  children: B.map((e) =>
                                      (0, l.jsx)(
                                          a.k5B,
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
                        ? (0, l.jsx)(a.kSQ, {
                              children: (0, l.jsx)(a.sNh, {
                                  id: "clear-build-override",
                                  disabled: c,
                                  label: w.intl.string(w.t["/Nz9rY"]),
                                  action: M,
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

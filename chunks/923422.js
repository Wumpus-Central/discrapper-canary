n.d(t, { default: () => A }), n(388685), n(704826), n(35282);
var a = n(255367),
    l = n(73800),
    i = n(481060),
    r = n(239091),
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
    E = n(74869),
    f = n(45570),
    v = n(308512),
    S = n(594791),
    h = n(393431),
    j = n(69021),
    P = n(981631),
    w = n(388032);
let A = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: s } = e,
            [u, A] = l.useState(!1),
            x = (0, f.Z)(),
            D = (0, v.Z)(),
            I = (0, O.Z)(),
            _ = (0, y.Z)(),
            T = (0, h.Z)(),
            Z = (0, S.Z)(),
            N = (0, E.Z)(),
            m = (0, j.Z)(),
            { analyticsLocations: k } = (0, d.ZP)(),
            C = l.useMemo(() => (0, b.j)(), []);
        async function R() {
            try {
                A(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                A(!1);
            }
        }
        let L = (0, p.VO)()
            .filter((e) => {
                let { section: t } = e;
                return t !== c.ID.HEADER && t !== c.ID.CUSTOM && t !== c.ID.DIVIDER && "logout" !== t;
            })
            .filter((e) => null == e.predicate || e.predicate());
        return (0, a.jsx)(d.Gt, {
            value: k,
            children: (0, a.jsxs)(i.v2r, {
                navId: "user-settings-cog",
                onClose: r.Zy,
                "aria-label": w.intl.string(w.t.opYYHh),
                onSelect: n,
                onInteraction: s,
                children: [
                    L.map((e) => {
                        var t, n;
                        let { section: l, label: r, onClick: c } = e,
                            s = l.replace(/\W/gi, "_");
                        return (0, a.jsx)(
                            i.sNh,
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
                                    action: () =>
                                        null != c
                                            ? c()
                                            : (function (e, t) {
                                                  let n = Object.values(P.oAB).filter((t) => t === e)[0];
                                                  null != n && o.Z.open(n, void 0, { analyticsLocations: t });
                                              })(l, k),
                                },
                            )),
                            (n = n =
                                {
                                    children: ((e) => {
                                        switch (e) {
                                            case P.oAB.GAMES:
                                                return x;
                                            case P.oAB.STREAMER_MODE:
                                                return D;
                                            case P.oAB.APPEARANCE:
                                                return I;
                                            case P.oAB.ACCESSIBILITY:
                                                return _;
                                            case P.oAB.VOICE:
                                                return T;
                                            case P.oAB.TEXT:
                                                return Z;
                                            case P.oAB.EXPERIMENTS:
                                                return N;
                                            case P.oAB.DEVELOPER_OPTIONS:
                                                return m;
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
                    e.user.isStaff() && C.length > 0
                        ? (0, a.jsx)(i.sNh, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, a.jsx)(i.kSQ, {
                                  children: C.map((e) =>
                                      (0, a.jsx)(
                                          i.k5B,
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
                        ? (0, a.jsx)(i.kSQ, {
                              children: (0, a.jsx)(i.sNh, {
                                  id: "clear-build-override",
                                  disabled: u,
                                  label: w.intl.string(w.t["/Nz9ra"]),
                                  action: R,
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

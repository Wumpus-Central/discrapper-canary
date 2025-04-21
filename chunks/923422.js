r.d(t, { default: () => x }), r(388685), r(704826), r(35282);
var n = r(200651),
    i = r(192379),
    o = r(481060),
    l = r(239091),
    c = r(230711),
    a = r(493544),
    s = r(108843),
    u = r(100527),
    d = r(906732),
    p = r(386506),
    b = r(366953),
    g = r(991346),
    f = r(606669),
    j = r(53432),
    O = r(74869),
    y = r(45570),
    h = r(308512),
    m = r(594791),
    v = r(393431),
    S = r(69021),
    P = r(981631),
    Z = r(388032);
let x = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: r, onInteraction: s } = e,
            [u, x] = i.useState(!1),
            w = (0, y.Z)(),
            E = (0, h.Z)(),
            k = (0, j.Z)(),
            D = (0, f.Z)(),
            C = (0, v.Z)(),
            I = (0, m.Z)(),
            B = (0, O.Z)(),
            T = (0, S.Z)(),
            { analyticsLocations: N } = (0, d.ZP)(),
            A = i.useMemo(() => (0, b.j)(), []);
        async function M() {
            try {
                x(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
                x(!1);
            }
        }
        let _ = (e) => {
                switch (e) {
                    case P.oAB.GAMES:
                        return w;
                    case P.oAB.STREAMER_MODE:
                        return E;
                    case P.oAB.APPEARANCE:
                        return k;
                    case P.oAB.ACCESSIBILITY:
                        return D;
                    case P.oAB.VOICE:
                        return C;
                    case P.oAB.TEXT:
                        return I;
                    case P.oAB.EXPERIMENTS:
                        return B;
                    case P.oAB.DEVELOPER_OPTIONS:
                        return T;
                    default:
                        return null;
                }
            },
            R = (0, g.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== a.ID.HEADER && t !== a.ID.CUSTOM && t !== a.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, n.jsx)(d.Gt, {
            value: N,
            children: (0, n.jsxs)(o.v2r, {
                navId: 'user-settings-cog',
                onClose: l.Zy,
                'aria-label': Z.intl.string(Z.t.opYYHh),
                onSelect: r,
                onInteraction: s,
                children: [
                    R.map((e) => {
                        var t, r;
                        let { section: i, label: l, onClick: a } = e,
                            s = i.replace(/\W/gi, '_');
                        return (0, n.jsx)(
                            o.sNh,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })(
                                { id: s },
                                {
                                    label: l,
                                    action: () =>
                                        null != a
                                            ? a()
                                            : (function (e, t) {
                                                  let r = Object.values(P.oAB).filter((t) => t === e)[0];
                                                  null != r && c.Z.open(r, void 0, { analyticsLocations: t });
                                              })(i, N)
                                }
                            )),
                            (r = r = { children: _(i) }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            t),
                            s
                        );
                    }),
                    e.user.isStaff() && A.length > 0
                        ? (0, n.jsx)(o.sNh, {
                              label: 'Build Overrides',
                              id: 'build_overrides',
                              children: (0, n.jsx)(o.kSQ, {
                                  children: A.map((e) =>
                                      (0, n.jsx)(
                                          o.k5B,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  (null == t ? void 0 : t.id) !== e.id && 200 === (await (0, p.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != t
                        ? (0, n.jsx)(o.kSQ, {
                              children: (0, n.jsx)(o.sNh, {
                                  id: 'clear-build-override',
                                  disabled: u,
                                  label: Z.intl.string(Z.t['/Nz9ra']),
                                  action: M,
                                  color: 'danger'
                              })
                          })
                        : null
                ]
            })
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.USER_SETTINGS_MENU]
);

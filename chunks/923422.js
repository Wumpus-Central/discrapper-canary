n.d(t, { default: () => x }), n(388685), n(704826), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(239091),
    o = n(230711),
    c = n(493544),
    s = n(108843),
    u = n(100527),
    d = n(906732),
    p = n(386506),
    g = n(366953),
    b = n(991346),
    y = n(606669),
    O = n(53432),
    f = n(74869),
    j = n(45570),
    h = n(308512),
    v = n(594791),
    S = n(393431),
    E = n(69021),
    P = n(981631),
    m = n(388032);
let x = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: s } = e,
            [u, x] = i.useState(!1),
            w = (0, j.Z)(),
            k = (0, h.Z)(),
            Z = (0, O.Z)(),
            D = (0, y.Z)(),
            A = (0, S.Z)(),
            C = (0, v.Z)(),
            I = (0, f.Z)(),
            T = (0, E.Z)(),
            { analyticsLocations: _ } = (0, d.ZP)(),
            N = i.useMemo(() => (0, g.j)(), []);
        async function R() {
            try {
                x(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
                x(!1);
            }
        }
        let B = (e) => {
                switch (e) {
                    case P.oAB.GAMES:
                        return w;
                    case P.oAB.STREAMER_MODE:
                        return k;
                    case P.oAB.APPEARANCE:
                        return Z;
                    case P.oAB.ACCESSIBILITY:
                        return D;
                    case P.oAB.VOICE:
                        return A;
                    case P.oAB.TEXT:
                        return C;
                    case P.oAB.EXPERIMENTS:
                        return I;
                    case P.oAB.DEVELOPER_OPTIONS:
                        return T;
                    default:
                        return null;
                }
            },
            M = (0, b.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== c.ID.HEADER && t !== c.ID.CUSTOM && t !== c.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, r.jsx)(d.Gt, {
            value: _,
            children: (0, r.jsxs)(l.v2r, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': m.intl.string(m.t.opYYHh),
                onSelect: n,
                onInteraction: s,
                children: [
                    M.map((e) => {
                        var t, n;
                        let { section: i, label: a, onClick: c } = e,
                            s = i.replace(/\W/gi, '_');
                        return (0, r.jsx)(
                            l.sNh,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                { id: s },
                                {
                                    label: a,
                                    action: () =>
                                        null != c
                                            ? c()
                                            : (function (e, t) {
                                                  let n = Object.values(P.oAB).filter((t) => t === e)[0];
                                                  null != n && o.Z.open(n, void 0, { analyticsLocations: t });
                                              })(i, _)
                                }
                            )),
                            (n = n = { children: B(i) }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                            s
                        );
                    }),
                    e.user.isStaff() && N.length > 0
                        ? (0, r.jsx)(l.sNh, {
                              label: 'Build Overrides',
                              id: 'build_overrides',
                              children: (0, r.jsx)(l.kSQ, {
                                  children: N.map((e) =>
                                      (0, r.jsx)(
                                          l.k5B,
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
                        ? (0, r.jsx)(l.kSQ, {
                              children: (0, r.jsx)(l.sNh, {
                                  id: 'clear-build-override',
                                  disabled: u,
                                  label: m.intl.string(m.t['/Nz9ra']),
                                  action: R,
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

r.d(t, { default: () => Z }), r(47120), r(757143), r(301563);
var n = r(200651),
    i = r(192379),
    o = r(481060),
    c = r(239091),
    a = r(230711),
    l = r(493544),
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
    S = r(393431),
    v = r(69021),
    P = r(981631),
    x = r(388032);
let Z = (0, s.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: r } = e,
            [s, u] = i.useState(!1),
            Z = (0, y.Z)(),
            w = (0, h.Z)(),
            k = (0, j.Z)(),
            E = (0, f.Z)(),
            N = (0, S.Z)(),
            D = (0, m.Z)(),
            C = (0, O.Z)(),
            W = (0, v.Z)(),
            { analyticsLocations: I } = (0, d.ZP)(),
            B = i.useMemo(() => (0, b.j)(), []);
        async function R() {
            try {
                u(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
                u(!1);
            }
        }
        let T = (e) => {
                switch (e) {
                    case P.oAB.GAMES:
                        return Z;
                    case P.oAB.STREAMER_MODE:
                        return w;
                    case P.oAB.APPEARANCE:
                        return k;
                    case P.oAB.ACCESSIBILITY:
                        return E;
                    case P.oAB.VOICE:
                        return N;
                    case P.oAB.TEXT:
                        return D;
                    case P.oAB.EXPERIMENTS:
                        return C;
                    case P.oAB.DEVELOPER_OPTIONS:
                        return W;
                    default:
                        return null;
                }
            },
            _ = (0, g.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== l.ID.HEADER && t !== l.ID.CUSTOM && t !== l.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, n.jsx)(d.Gt, {
            value: I,
            children: (0, n.jsxs)(o.v2r, {
                navId: 'user-settings-cog',
                onClose: c.Zy,
                'aria-label': x.NW.string(x.t.opYYHh),
                onSelect: r,
                children: [
                    _.map((e) => {
                        var t, r;
                        let { section: i, label: c, onClick: l } = e,
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
                                    label: c,
                                    action: () =>
                                        null != l
                                            ? l()
                                            : (function (e, t) {
                                                  let r = Object.values(P.oAB).filter((t) => t === e)[0];
                                                  null != r && a.Z.open(r, void 0, { analyticsLocations: t });
                                              })(i, I)
                                }
                            )),
                            (r = r = { children: T(i) }),
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
                    e.user.isStaff() && B.length > 0
                        ? (0, n.jsx)(o.sNh, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, n.jsx)(o.kSQ, {
                                  children: B.map((e) =>
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
                                  disabled: s,
                                  label: x.NW.string(x.t['/Nz9ra']),
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

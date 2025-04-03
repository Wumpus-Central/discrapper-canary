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
        let { webBuildOverride: t, onSelect: r, onInteraction: s } = e,
            [u, Z] = i.useState(!1),
            w = (0, y.Z)(),
            k = (0, h.Z)(),
            E = (0, j.Z)(),
            N = (0, f.Z)(),
            D = (0, S.Z)(),
            C = (0, m.Z)(),
            W = (0, O.Z)(),
            I = (0, v.Z)(),
            { analyticsLocations: B } = (0, d.ZP)(),
            T = i.useMemo(() => (0, b.j)(), []);
        async function A() {
            try {
                Z(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
                Z(!1);
            }
        }
        let M = (e) => {
                switch (e) {
                    case P.oAB.GAMES:
                        return w;
                    case P.oAB.STREAMER_MODE:
                        return k;
                    case P.oAB.APPEARANCE:
                        return E;
                    case P.oAB.ACCESSIBILITY:
                        return N;
                    case P.oAB.VOICE:
                        return D;
                    case P.oAB.TEXT:
                        return C;
                    case P.oAB.EXPERIMENTS:
                        return W;
                    case P.oAB.DEVELOPER_OPTIONS:
                        return I;
                    default:
                        return null;
                }
            },
            R = (0, g.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== l.ID.HEADER && t !== l.ID.CUSTOM && t !== l.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, n.jsx)(d.Gt, {
            value: B,
            children: (0, n.jsxs)(o.v2r, {
                navId: 'user-settings-cog',
                onClose: c.Zy,
                'aria-label': x.NW.string(x.t.opYYHh),
                onSelect: r,
                onInteraction: s,
                children: [
                    R.map((e) => {
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
                                              })(i, B)
                                }
                            )),
                            (r = r = { children: M(i) }),
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
                    e.user.isStaff() && T.length > 0
                        ? (0, n.jsx)(o.sNh, {
                              label: 'Build Overrides',
                              id: 'build_overrides',
                              children: (0, n.jsx)(o.kSQ, {
                                  children: T.map((e) =>
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
                                  label: x.NW.string(x.t['/Nz9ra']),
                                  action: A,
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

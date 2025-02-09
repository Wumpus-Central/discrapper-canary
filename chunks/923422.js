n.d(t, { default: () => B }), n(47120), n(757143);
var i = n(200651),
    o = n(192379),
    r = n(481060),
    a = n(239091),
    l = n(230711),
    s = n(493544),
    c = n(108843),
    d = n(100527),
    u = n(906732),
    _ = n(386506),
    g = n(366953),
    b = n(991346),
    m = n(606669),
    E = n(53432),
    h = n(74869),
    p = n(45570),
    S = n(308512),
    f = n(594791),
    R = n(393431),
    C = n(69021),
    k = n(981631),
    x = n(388032);
let B = (0, c.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [c, d] = o.useState(!1),
            B = (0, p.Z)(),
            T = (0, S.Z)(),
            Z = (0, E.Z)(),
            j = (0, m.Z)(),
            N = (0, R.Z)(),
            D = (0, f.Z)(),
            O = (0, h.Z)(),
            I = (0, C.Z)(),
            { analyticsLocations: v } = (0, u.ZP)(),
            A = o.useMemo(() => (0, g.j)(), []);
        async function y() {
            try {
                d(!0), await (0, _.bF)(), window.location.reload(!0);
            } catch (e) {
                d(!1);
            }
        }
        let M = (e) => {
                switch (e) {
                    case k.oAB.GAMES:
                        return B;
                    case k.oAB.STREAMER_MODE:
                        return T;
                    case k.oAB.APPEARANCE:
                        return Z;
                    case k.oAB.ACCESSIBILITY:
                        return j;
                    case k.oAB.VOICE:
                        return N;
                    case k.oAB.TEXT:
                        return D;
                    case k.oAB.EXPERIMENTS:
                        return O;
                    case k.oAB.DEVELOPER_OPTIONS:
                        return I;
                    default:
                        return null;
                }
            },
            U = (0, b.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== s.ID.HEADER && t !== s.ID.CUSTOM && t !== s.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, i.jsx)(u.Gt, {
            value: v,
            children: (0, i.jsxs)(r.v2r, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': x.intl.string(x.t.opYYHh),
                onSelect: n,
                children: [
                    U.map((e) => {
                        let { section: t, label: n, onClick: o } = e,
                            a = t.replace(/\W/gi, '_');
                        return (0, i.jsx)(
                            r.sNh,
                            {
                                id: a,
                                label: n,
                                action: () =>
                                    null != o
                                        ? o()
                                        : (function (e, t) {
                                              let n = Object.values(k.oAB).filter((t) => t === e)[0];
                                              null != n && l.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, v),
                                children: M(t)
                            },
                            a
                        );
                    }),
                    e.user.isStaff() && A.length > 0
                        ? (0, i.jsx)(r.sNh, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, i.jsx)(r.kSQ, {
                                  children: A.map((e) =>
                                      (0, i.jsx)(
                                          r.k5B,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  (null == t ? void 0 : t.id) !== e.id && 200 === (await (0, _.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(r.kSQ, {
                              children: (0, i.jsx)(r.sNh, {
                                  id: 'clear-build-override',
                                  disabled: c,
                                  label: x.intl.string(x.t['/Nz9ra']),
                                  action: y,
                                  color: 'danger'
                              })
                          })
                        : null
                ]
            })
        });
    },
    [d.Z.CONTEXT_MENU, d.Z.USER_SETTINGS_MENU]
);

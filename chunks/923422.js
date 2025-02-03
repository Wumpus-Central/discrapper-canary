n.d(t, { default: () => y }), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(239091),
    s = n(230711),
    c = n(493544),
    o = n(108843),
    u = n(100527),
    d = n(906732),
    g = n(386506),
    p = n(366953),
    h = n(991346),
    x = n(606669),
    j = n(53432),
    m = n(74869),
    S = n(45570),
    Z = n(308512),
    b = n(594791),
    f = n(393431),
    v = n(69021),
    k = n(981631),
    E = n(388032);
let y = (0, o.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [o, u] = r.useState(!1),
            y = (0, S.Z)(),
            C = (0, Z.Z)(),
            I = (0, j.Z)(),
            N = (0, x.Z)(),
            B = (0, f.Z)(),
            D = (0, b.Z)(),
            O = (0, m.Z)(),
            P = (0, v.Z)(),
            { analyticsLocations: R } = (0, d.ZP)(),
            T = r.useMemo(() => (0, p.j)(), []);
        async function _() {
            try {
                u(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                u(!1);
            }
        }
        let M = (e) => {
                switch (e) {
                    case k.oAB.GAMES:
                        return y;
                    case k.oAB.STREAMER_MODE:
                        return C;
                    case k.oAB.APPEARANCE:
                        return I;
                    case k.oAB.ACCESSIBILITY:
                        return N;
                    case k.oAB.VOICE:
                        return B;
                    case k.oAB.TEXT:
                        return D;
                    case k.oAB.EXPERIMENTS:
                        return O;
                    case k.oAB.DEVELOPER_OPTIONS:
                        return P;
                    default:
                        return null;
                }
            },
            A = (0, h.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== c.ID.HEADER && t !== c.ID.CUSTOM && t !== c.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, i.jsx)(d.Gt, {
            value: R,
            children: (0, i.jsxs)(l.v2r, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': E.intl.string(E.t.opYYHh),
                onSelect: n,
                children: [
                    A.map((e) => {
                        let { section: t, label: n, onClick: r } = e,
                            a = t.replace(/\W/gi, '_');
                        return (0, i.jsx)(
                            l.sNh,
                            {
                                id: a,
                                label: n,
                                action: () =>
                                    null != r
                                        ? r()
                                        : (function (e, t) {
                                              let n = Object.values(k.oAB).filter((t) => t === e)[0];
                                              null != n && s.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, R),
                                children: M(t)
                            },
                            a
                        );
                    }),
                    e.user.isStaff() && T.length > 0
                        ? (0, i.jsx)(l.sNh, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, i.jsx)(l.kSQ, {
                                  children: T.map((e) =>
                                      (0, i.jsx)(
                                          l.k5B,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  (null == t ? void 0 : t.id) !== e.id && 200 === (await (0, g.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(l.kSQ, {
                              children: (0, i.jsx)(l.sNh, {
                                  id: 'clear-build-override',
                                  disabled: o,
                                  label: E.intl.string(E.t['/Nz9ra']),
                                  action: _,
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

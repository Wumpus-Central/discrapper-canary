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
    h = n(366953),
    p = n(991346),
    x = n(606669),
    j = n(53432),
    S = n(74869),
    Z = n(45570),
    m = n(308512),
    b = n(594791),
    f = n(393431),
    k = n(69021),
    v = n(981631),
    E = n(388032);
let y = (0, o.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [o, u] = r.useState(!1),
            y = (0, Z.Z)(),
            C = (0, m.Z)(),
            I = (0, j.Z)(),
            D = (0, x.Z)(),
            N = (0, f.Z)(),
            B = (0, b.Z)(),
            O = (0, S.Z)(),
            P = (0, k.Z)(),
            { analyticsLocations: R } = (0, d.ZP)(),
            T = r.useMemo(() => (0, h.j)(), []);
        async function M() {
            try {
                u(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                u(!1);
            }
        }
        let _ = (e) => {
                switch (e) {
                    case v.oAB.GAMES:
                        return y;
                    case v.oAB.STREAMER_MODE:
                        return C;
                    case v.oAB.APPEARANCE:
                        return I;
                    case v.oAB.ACCESSIBILITY:
                        return D;
                    case v.oAB.VOICE:
                        return N;
                    case v.oAB.TEXT:
                        return B;
                    case v.oAB.EXPERIMENTS:
                        return O;
                    case v.oAB.DEVELOPER_OPTIONS:
                        return P;
                    default:
                        return null;
                }
            },
            A = (0, p.VO)()
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
                                              let n = Object.values(v.oAB).filter((t) => t === e)[0];
                                              null != n && s.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, R),
                                children: _(t)
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

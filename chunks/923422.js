n.r(t), n(47120), n(757143);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(239091),
    u = n(230711),
    o = n(493544),
    c = n(108843),
    s = n(100527),
    d = n(906732),
    p = n(386506),
    g = n(366953),
    h = n(991346),
    m = n(606669),
    x = n(53432),
    f = n(74869),
    M = n(45570),
    b = n(308512),
    j = n(594791),
    Z = n(393431),
    C = n(69021),
    S = n(981631),
    v = n(388032);
t.default = (0, c.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [c, s] = i.useState(!1),
            I = (0, M.Z)(),
            E = (0, b.Z)(),
            y = (0, x.Z)(),
            k = (0, m.Z)(),
            R = (0, Z.Z)(),
            D = (0, j.Z)(),
            O = (0, f.Z)(),
            T = (0, C.Z)(),
            { analyticsLocations: P } = (0, d.ZP)(),
            A = i.useMemo(() => (0, g.j)(), []);
        async function G() {
            try {
                s(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
                s(!1);
            }
        }
        let B = (e) => {
                switch (e) {
                    case S.oAB.GAMES:
                        return I;
                    case S.oAB.STREAMER_MODE:
                        return E;
                    case S.oAB.APPEARANCE:
                        return y;
                    case S.oAB.ACCESSIBILITY:
                        return k;
                    case S.oAB.VOICE:
                        return R;
                    case S.oAB.TEXT:
                        return D;
                    case S.oAB.EXPERIMENTS:
                        return O;
                    case S.oAB.DEVELOPER_OPTIONS:
                        return T;
                    default:
                        return null;
                }
            },
            N = (0, h.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== o.ID.HEADER && t !== o.ID.CUSTOM && t !== o.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, r.jsx)(d.Gt, {
            value: P,
            children: (0, r.jsxs)(l.Menu, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': v.intl.string(v.t.opYYHh),
                onSelect: n,
                children: [
                    N.map((e) => {
                        let { section: t, label: n, onClick: i } = e,
                            a = t.replace(/\W/gi, '_');
                        return (0, r.jsx)(
                            l.MenuItem,
                            {
                                id: a,
                                label: n,
                                action: () =>
                                    null != i
                                        ? i()
                                        : (function (e, t) {
                                              let n = Object.values(S.oAB).filter((t) => t === e)[0];
                                              null != n && u.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, P),
                                children: B(t)
                            },
                            a
                        );
                    }),
                    e.user.isStaff() && A.length > 0
                        ? (0, r.jsx)(l.MenuItem, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, r.jsx)(l.MenuGroup, {
                                  children: A.map((e) =>
                                      (0, r.jsx)(
                                          l.MenuRadioItem,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  if ((null == t ? void 0 : t.id) !== e.id) 200 === (await (0, p.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != t
                        ? (0, r.jsx)(l.MenuGroup, {
                              children: (0, r.jsx)(l.MenuItem, {
                                  id: 'clear-build-override',
                                  disabled: c,
                                  label: v.intl.string(v.t['/Nz9ra']),
                                  action: G,
                                  color: 'danger'
                              })
                          })
                        : null
                ]
            })
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.USER_SETTINGS_MENU]
);

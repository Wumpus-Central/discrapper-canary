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
    S = n(69021),
    I = n(981631),
    v = n(388032);
t.default = (0, c.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [c, s] = i.useState(!1),
            C = (0, M.Z)(),
            E = (0, b.Z)(),
            y = (0, x.Z)(),
            k = (0, m.Z)(),
            R = (0, Z.Z)(),
            D = (0, j.Z)(),
            O = (0, f.Z)(),
            T = (0, S.Z)(),
            { analyticsLocations: A } = (0, d.ZP)(),
            G = i.useMemo(() => (0, g.j)(), []);
        async function N() {
            try {
                s(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
                s(!1);
            }
        }
        let P = (e) => {
                switch (e) {
                    case I.oAB.GAMES:
                        return C;
                    case I.oAB.STREAMER_MODE:
                        return E;
                    case I.oAB.APPEARANCE:
                        return y;
                    case I.oAB.ACCESSIBILITY:
                        return k;
                    case I.oAB.VOICE:
                        return R;
                    case I.oAB.TEXT:
                        return D;
                    case I.oAB.EXPERIMENTS:
                        return O;
                    case I.oAB.DEVELOPER_OPTIONS:
                        return T;
                    default:
                        return null;
                }
            },
            B = (0, h.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== o.ID.HEADER && t !== o.ID.CUSTOM && t !== o.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, r.jsx)(d.Gt, {
            value: A,
            children: (0, r.jsxs)(l.Menu, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': v.intl.string(v.t.opYYHh),
                onSelect: n,
                children: [
                    B.map((e) => {
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
                                              let n = Object.values(I.oAB).filter((t) => t === e)[0];
                                              null != n && u.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, A),
                                children: P(t)
                            },
                            a
                        );
                    }),
                    e.user.isStaff() && G.length > 0
                        ? (0, r.jsx)(l.MenuItem, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, r.jsx)(l.MenuGroup, {
                                  children: G.map((e) =>
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
                                  action: N,
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

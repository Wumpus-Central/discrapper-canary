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
    M = n(74869),
    f = n(45570),
    b = n(308512),
    j = n(594791),
    Z = n(393431),
    S = n(69021),
    C = n(981631),
    I = n(388032);
t.default = (0, c.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [c, s] = i.useState(!1),
            E = (0, f.Z)(),
            v = (0, b.Z)(),
            y = (0, x.Z)(),
            k = (0, m.Z)(),
            R = (0, Z.Z)(),
            P = (0, j.Z)(),
            D = (0, M.Z)(),
            O = (0, S.Z)(),
            { analyticsLocations: T } = (0, d.ZP)(),
            A = i.useMemo(() => (0, g.j)(), []);
        async function G() {
            try {
                s(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
                s(!1);
            }
        }
        let N = (e) => {
                switch (e) {
                    case C.oAB.GAMES:
                        return E;
                    case C.oAB.STREAMER_MODE:
                        return v;
                    case C.oAB.APPEARANCE:
                        return y;
                    case C.oAB.ACCESSIBILITY:
                        return k;
                    case C.oAB.VOICE:
                        return R;
                    case C.oAB.TEXT:
                        return P;
                    case C.oAB.EXPERIMENTS:
                        return D;
                    case C.oAB.DEVELOPER_OPTIONS:
                        return O;
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
            value: T,
            children: (0, r.jsxs)(l.Menu, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': I.intl.string(I.t.opYYHh),
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
                                              let n = Object.values(C.oAB).filter((t) => t === e)[0];
                                              null != n && u.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, T),
                                children: N(t)
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
                                  label: I.intl.string(I.t['/Nz9ra']),
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

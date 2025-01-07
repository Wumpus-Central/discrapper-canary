n.r(t), n(47120), n(757143);
var i = n(200651),
    o = n(192379),
    r = n(481060),
    a = n(239091),
    l = n(230711),
    c = n(493544),
    u = n(108843),
    s = n(100527),
    d = n(906732),
    g = n(386506),
    m = n(366953),
    b = n(991346),
    p = n(606669),
    f = n(53432),
    h = n(74869),
    _ = n(45570),
    S = n(308512),
    x = n(594791),
    M = n(393431),
    C = n(69021),
    Z = n(981631),
    j = n(388032);
t.default = (0, u.Z)(
    function (e) {
        let { webBuildOverride: t, onSelect: n } = e,
            [u, s] = o.useState(!1),
            k = (0, _.Z)(),
            I = (0, S.Z)(),
            v = (0, f.Z)(),
            B = (0, p.Z)(),
            E = (0, M.Z)(),
            R = (0, x.Z)(),
            y = (0, h.Z)(),
            T = (0, C.Z)(),
            { analyticsLocations: D } = (0, d.ZP)(),
            G = o.useMemo(() => (0, m.j)(), []);
        async function U() {
            try {
                s(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
                s(!1);
            }
        }
        let O = (e) => {
                switch (e) {
                    case Z.oAB.GAMES:
                        return k;
                    case Z.oAB.STREAMER_MODE:
                        return I;
                    case Z.oAB.APPEARANCE:
                        return v;
                    case Z.oAB.ACCESSIBILITY:
                        return B;
                    case Z.oAB.VOICE:
                        return E;
                    case Z.oAB.TEXT:
                        return R;
                    case Z.oAB.EXPERIMENTS:
                        return y;
                    case Z.oAB.DEVELOPER_OPTIONS:
                        return T;
                    default:
                        return null;
                }
            },
            w = (0, b.VO)()
                .filter((e) => {
                    let { section: t } = e;
                    return t !== c.ID.HEADER && t !== c.ID.CUSTOM && t !== c.ID.DIVIDER && 'logout' !== t;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, i.jsx)(d.Gt, {
            value: D,
            children: (0, i.jsxs)(r.Menu, {
                navId: 'user-settings-cog',
                onClose: a.Zy,
                'aria-label': j.intl.string(j.t.opYYHh),
                onSelect: n,
                children: [
                    w.map((e) => {
                        let { section: t, label: n, onClick: o } = e,
                            a = t.replace(/\W/gi, '_');
                        return (0, i.jsx)(
                            r.MenuItem,
                            {
                                id: a,
                                label: n,
                                action: () =>
                                    null != o
                                        ? o()
                                        : (function (e, t) {
                                              let n = Object.values(Z.oAB).filter((t) => t === e)[0];
                                              null != n && l.Z.open(n, void 0, { analyticsLocations: t });
                                          })(t, D),
                                children: O(t)
                            },
                            a
                        );
                    }),
                    e.user.isStaff() && G.length > 0
                        ? (0, i.jsx)(r.MenuItem, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, i.jsx)(r.MenuGroup, {
                                  children: G.map((e) =>
                                      (0, i.jsx)(
                                          r.MenuRadioItem,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  if ((null == t ? void 0 : t.id) !== e.id) 200 === (await (0, g.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(r.MenuGroup, {
                              children: (0, i.jsx)(r.MenuItem, {
                                  id: 'clear-build-override',
                                  disabled: u,
                                  label: j.intl.string(j.t['/Nz9ra']),
                                  action: U,
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

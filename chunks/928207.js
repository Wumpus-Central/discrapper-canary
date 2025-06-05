n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(114858),
    o = n(674746),
    s = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(410575),
    p = n(730749),
    h = n(666743),
    f = n(410030),
    g = n(100527),
    m = n(906732),
    b = n(600164),
    _ = n(984370),
    E = n(299657),
    O = n(594174),
    I = n(74538),
    y = n(981631),
    v = n(474936),
    C = n(388032),
    S = n(881207);
let N = s.ZP.connectStores([O.default], () => ({ user: O.default.getCurrentUser() }))(
    (0, h.Z)(
        (0, p.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: i } = (0, m.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                s = (0, I.I5)(n, v.p9.TIER_2),
                p = (0, f.ZP)();
            return t
                ? (0, r.jsxs)('div', {
                      className: S.homeWrapperNormal,
                      children: [
                          (0, r.jsx)(d.Z, {
                              section: y.jXE.NAVIGATION,
                              children: (0, r.jsx)(u.f6W, {
                                  theme: p,
                                  children: (e) =>
                                      (0, r.jsxs)(_.Z, {
                                          isAuthenticated: t,
                                          className: l()(S.headerBar, e, {
                                              [S.headerBarV2LightBackground]: !s && !(0, c.wj)(p),
                                              [S.headerBarV2DarkBackground]: !s && (0, c.wj)(p)
                                          }),
                                          role: 'navigation',
                                          children: [
                                              (0, r.jsx)(_.Z.Icon, {
                                                  icon: u.SrA,
                                                  'aria-hidden': !0,
                                                  color: s ? void 0 : o.Z.PREMIUM_TIER_2_PINK
                                              }),
                                              (0, r.jsx)(_.Z.Title, { children: C.intl.string(C.t.Ipxkoq) })
                                          ]
                                      })
                              })
                          }),
                          (0, r.jsx)(m.Gt, {
                              value: i,
                              children:
                                  null == n
                                      ? (0, r.jsx)(b.Z, {
                                            align: b.Z.Align.CENTER,
                                            justify: b.Z.Justify.CENTER,
                                            children: (0, r.jsx)(u.$jN, { className: S.spinner })
                                        })
                                      : (0, r.jsx)(E.Z, { entrypoint: v.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, r.jsx)(a.l_, { to: y.Z5c.LOGIN });
        })
    )
);

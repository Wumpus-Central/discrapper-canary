n.d(t, { Z: () => T });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(512969),
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
    E = n(278605),
    O = n(299657),
    N = n(594174),
    y = n(74538),
    I = n(981631),
    v = n(474936),
    C = n(388032),
    S = n(881207);
let T = s.ZP.connectStores([N.default], () => ({ user: N.default.getCurrentUser() }))(
    (0, h.Z)(
        (0, p.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: i } = (0, m.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                s = (0, E.xP)('ApplicationStoreHome'),
                p = (0, y.I5)(n),
                h = s && !p,
                N = (0, f.ZP)();
            return t
                ? (0, r.jsxs)('div', {
                      className: S.homeWrapperNormal,
                      children: [
                          (0, r.jsx)(d.Z, {
                              section: I.jXE.NAVIGATION,
                              children: (0, r.jsx)(u.f6W, {
                                  theme: N,
                                  children: (e) =>
                                      (0, r.jsxs)(_.Z, {
                                          isAuthenticated: t,
                                          className: l()(S.headerBar, e, {
                                              [S.headerBarV2LightBackground]: h && !(0, c.wj)(N),
                                              [S.headerBarV2DarkBackground]: h && (0, c.wj)(N)
                                          }),
                                          role: 'navigation',
                                          children: [
                                              (0, r.jsx)(_.Z.Icon, {
                                                  icon: u.SrA,
                                                  'aria-hidden': !0,
                                                  color: h ? o.Z.PREMIUM_TIER_2_PINK : void 0
                                              }),
                                              (0, r.jsx)(_.Z.Title, { children: C.NW.string(C.t.Ipxkoq) })
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
                                      : (0, r.jsx)(O.Z, { entrypoint: v.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, r.jsx)(a.l_, { to: I.Z5c.LOGIN });
        })
    )
);

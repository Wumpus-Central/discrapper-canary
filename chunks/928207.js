n.d(t, { Z: () => P });
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
    O = n(585612),
    N = n(299657),
    y = n(594174),
    I = n(74538),
    v = n(981631),
    C = n(474936),
    S = n(388032),
    T = n(881207);
let P = s.ZP.connectStores([y.default], () => ({ user: y.default.getCurrentUser() }))(
    (0, h.Z)(
        (0, p.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: i } = (0, m.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                s = (0, E.xP)('ApplicationStoreHome'),
                p = (0, O.C)('ApplicationStoreHome'),
                h = (0, I.I5)(n),
                y = (s && !h) || p,
                P = (0, f.ZP)();
            return t
                ? (0, r.jsxs)('div', {
                      className: T.homeWrapperNormal,
                      children: [
                          (0, r.jsx)(d.Z, {
                              section: v.jXE.NAVIGATION,
                              children: (0, r.jsx)(u.f6W, {
                                  theme: P,
                                  children: (e) =>
                                      (0, r.jsxs)(_.Z, {
                                          isAuthenticated: t,
                                          className: l()(T.headerBar, e, {
                                              [T.headerBarV2LightBackground]: y && !(0, c.wj)(P),
                                              [T.headerBarV2DarkBackground]: y && (0, c.wj)(P)
                                          }),
                                          role: 'navigation',
                                          children: [
                                              (0, r.jsx)(_.Z.Icon, {
                                                  icon: u.SrA,
                                                  'aria-hidden': !0,
                                                  color: y ? o.Z.PREMIUM_TIER_2_PINK : void 0
                                              }),
                                              (0, r.jsx)(_.Z.Title, { children: S.NW.string(S.t.Ipxkoq) })
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
                                            children: (0, r.jsx)(u.$jN, { className: T.spinner })
                                        })
                                      : (0, r.jsx)(N.Z, { entrypoint: C.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, r.jsx)(a.l_, { to: v.Z5c.LOGIN });
        })
    )
);

n.d(t, { Z: () => P });
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
    E = n(278605),
    O = n(585612),
    y = n(299657),
    I = n(594174),
    v = n(74538),
    C = n(981631),
    S = n(474936),
    N = n(388032),
    T = n(881207);
let P = s.ZP.connectStores([I.default], () => ({ user: I.default.getCurrentUser() }))(
    (0, h.Z)(
        (0, p.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: i } = (0, m.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                s = (0, E.xP)('ApplicationStoreHome'),
                p = (0, O.C)('ApplicationStoreHome'),
                h = (0, v.I5)(n),
                I = (s && !h) || p,
                P = (0, f.ZP)();
            return t
                ? (0, r.jsxs)('div', {
                      className: T.homeWrapperNormal,
                      children: [
                          (0, r.jsx)(d.Z, {
                              section: C.jXE.NAVIGATION,
                              children: (0, r.jsx)(u.f6W, {
                                  theme: P,
                                  children: (e) =>
                                      (0, r.jsxs)(_.Z, {
                                          isAuthenticated: t,
                                          className: l()(T.headerBar, e, {
                                              [T.headerBarV2LightBackground]: I && !(0, c.wj)(P),
                                              [T.headerBarV2DarkBackground]: I && (0, c.wj)(P)
                                          }),
                                          role: 'navigation',
                                          children: [
                                              (0, r.jsx)(_.Z.Icon, {
                                                  icon: u.SrA,
                                                  'aria-hidden': !0,
                                                  color: I ? o.Z.PREMIUM_TIER_2_PINK : void 0
                                              }),
                                              (0, r.jsx)(_.Z.Title, { children: N.intl.string(N.t.Ipxkoq) })
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
                                      : (0, r.jsx)(y.Z, { entrypoint: S.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, r.jsx)(a.l_, { to: C.Z5c.LOGIN });
        })
    )
);

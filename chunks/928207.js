n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(512969),
    s = n(674746),
    o = n(442837),
    d = n(780384),
    c = n(481060),
    u = n(410575),
    h = n(730749),
    m = n(666743),
    p = n(410030),
    g = n(100527),
    _ = n(906732),
    f = n(600164),
    E = n(984370),
    I = n(278605),
    C = n(299657),
    N = n(594174),
    v = n(74538),
    T = n(981631),
    S = n(474936),
    A = n(388032),
    Z = n(829311);
let x = o.ZP.connectStores([N.default], () => ({ user: N.default.getCurrentUser() }))(
    (0, m.Z)(
        (0, h.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: l } = (0, _.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                o = (0, I.xP)('ApplicationStoreHome'),
                h = (0, v.I5)(n),
                m = o && !h,
                N = (0, p.ZP)();
            return t
                ? (0, i.jsxs)('div', {
                      className: Z.homeWrapperNormal,
                      children: [
                          (0, i.jsx)(u.Z, {
                              section: T.jXE.NAVIGATION,
                              children: (0, i.jsx)(c.f6W, {
                                  theme: N,
                                  children: (e) =>
                                      (0, i.jsxs)(E.Z, {
                                          isAuthenticated: t,
                                          className: r()(Z.headerBar, e, {
                                              [Z.headerBarV2LightBackground]: m && !(0, d.wj)(N),
                                              [Z.headerBarV2DarkBackground]: m && (0, d.wj)(N)
                                          }),
                                          role: 'navigation',
                                          children: [
                                              (0, i.jsx)(E.Z.Icon, {
                                                  icon: c.SrA,
                                                  'aria-hidden': !0,
                                                  color: m ? s.Z.PREMIUM_TIER_2_PINK : void 0
                                              }),
                                              (0, i.jsx)(E.Z.Title, { children: A.intl.string(A.t.Ipxkoq) }),
                                              (0, i.jsx)(E.Z.Divider, {})
                                          ]
                                      })
                              })
                          }),
                          (0, i.jsx)(_.Gt, {
                              value: l,
                              children:
                                  null == n
                                      ? (0, i.jsx)(f.Z, {
                                            align: f.Z.Align.CENTER,
                                            justify: f.Z.Justify.CENTER,
                                            children: (0, i.jsx)(c.$jN, { className: Z.spinner })
                                        })
                                      : (0, i.jsx)(C.Z, { entrypoint: S.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, i.jsx)(a.l_, { to: T.Z5c.LOGIN });
        })
    )
);

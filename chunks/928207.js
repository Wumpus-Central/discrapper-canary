var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(512969),
    s = n(674746),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(410575),
    h = n(730749),
    m = n(666743),
    p = n(410030),
    g = n(100527),
    f = n(906732),
    _ = n(600164),
    E = n(984370),
    I = n(278605),
    C = n(299657),
    N = n(594174),
    v = n(74538),
    S = n(981631),
    T = n(474936),
    A = n(388032),
    b = n(707858);
let Z = o.ZP.connectStores([N.default], () => ({ user: N.default.getCurrentUser() }))(
    (0, m.Z)(
        (0, h.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: r } = (0, f.ZP)(g.Z.HOME_PAGE_PREMIUM_TAB),
                o = (0, I.xP)('ApplicationStoreHome'),
                h = (0, v.I5)(n),
                m = o && !h,
                N = (0, p.ZP)();
            return t
                ? (0, i.jsxs)('div', {
                      className: b.homeWrapperNormal,
                      children: [
                          (0, i.jsx)(u.Z, {
                              section: S.jXE.NAVIGATION,
                              children: (0, i.jsxs)(E.Z, {
                                  isAuthenticated: t,
                                  className: l()(b.headerBar, {
                                      [b.headerBarV2LightBackground]: m && !(0, c.wj)(N),
                                      [b.headerBarV2DarkBackground]: m && (0, c.wj)(N)
                                  }),
                                  children: [
                                      (0, i.jsx)(E.Z.Icon, {
                                          icon: d.NitroWheelIcon,
                                          'aria-hidden': !0,
                                          color: m ? s.Z.PREMIUM_TIER_2_PINK : void 0
                                      }),
                                      (0, i.jsx)(E.Z.Title, { children: A.intl.string(A.t.Ipxkoq) })
                                  ]
                              })
                          }),
                          (0, i.jsx)(f.Gt, {
                              value: r,
                              children:
                                  null == n
                                      ? (0, i.jsx)(_.Z, {
                                            align: _.Z.Align.CENTER,
                                            justify: _.Z.Justify.CENTER,
                                            children: (0, i.jsx)(d.Spinner, { className: b.spinner })
                                        })
                                      : (0, i.jsx)(C.Z, { entrypoint: T.EZ.ApplicationStoreHome })
                          })
                      ]
                  })
                : (0, i.jsx)(a.l_, { to: S.Z5c.LOGIN });
        })
    )
);
t.Z = Z;

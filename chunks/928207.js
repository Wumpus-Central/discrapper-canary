n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(828700),
    l = n(442837),
    a = n(481060),
    o = n(730749),
    s = n(666743),
    c = n(100527),
    u = n(906732),
    d = n(600164),
    p = n(299657),
    f = n(594174),
    g = n(632257),
    h = n(981631),
    m = n(474936),
    b = n(845761);
let _ = l.ZP.connectStores([f.default], () => ({ user: f.default.getCurrentUser() }))(
    (0, s.Z)(
        (0, o.Z)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: l } = (0, u.ZP)(c.Z.HOME_PAGE_PREMIUM_TAB);
            return t
                ? (0, r.jsxs)("div", {
                      className: b.homeWrapperNormal,
                      children: [
                          null == n && (0, r.jsx)(g.Z, {}),
                          (0, r.jsx)(u.Gt, {
                              value: l,
                              children:
                                  null == n
                                      ? (0, r.jsx)(d.Z, {
                                            align: d.Z.Align.CENTER,
                                            justify: d.Z.Justify.CENTER,
                                            children: (0, r.jsx)(a.$jN, { className: b.spinner }),
                                        })
                                      : (0, r.jsx)(p.Z, { entrypoint: m.EZ.ApplicationStoreHome }),
                          }),
                      ],
                  })
                : (0, r.jsx)(i.l_, { to: h.Z5c.LOGIN });
        }),
    ),
);

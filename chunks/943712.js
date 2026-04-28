s.d(t, { A: () => N });
var i = s(627968),
    r = s(64700),
    l = s(607399),
    a = s(17928),
    n = s(289873),
    d = s(396478),
    c = s(313281),
    h = s(499373),
    o = s(192308),
    u = s(331322),
    p = s(144165),
    x = s(821609),
    j = s(793574),
    f = s(688810),
    g = s(792656),
    m = s(422258),
    b = s(788868),
    v = s(335993),
    y = s(985018),
    A = s(14505),
    _ = s(988572);
function k(e) {
    let { theme: t } = e,
        { hasAccess: l } = (0, c.TW)("favorites_empty_state"),
        { analyticsLocations: a } = (0, f.Ay)(j.A.FAVORITES_GUILD_HOME),
        n = r.useCallback(() => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    s.e("24092"),
                    s.e("94494"),
                    s.e("36946"),
                    s.e("92639"),
                    s.e("40963"),
                    s.e("66031"),
                    s.e("59839"),
                ]).then(s.bind(s, 889186));
                return (t) => (0, i.jsx)(e, { ...t, source: "favorites_empty_state" });
            });
        }, []);
    return (0, i.jsx)(f.f5, {
        value: a,
        children: (0, i.jsx)(d.pp, {
            theme: t,
            children: (0, i.jsxs)(u.B, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(p._, { zoomable: !1, src: _.A, width: 197, height: 107 }),
                    (0, i.jsx)(d.SG, {
                        className: A.Y,
                        noteClassName: A.A,
                        note: y.intl.string(v.default["+SuGKb"]),
                        children: y.intl.string(v.default["wh+Rz1"]),
                    }),
                    l
                        ? (0, i.jsx)(x.$, { text: y.intl.string(v.default["6kk0gM"]), onClick: n, icon: h.T })
                        : (0, i.jsx)(g.A, {
                              subscriptionTier: b.pe.TIER_2,
                              defaultTextOverride: y.intl.string(v.default.yYVbdv),
                              onSubscribeModalClose: (e) => {
                                  e && (0, m.tV)(!0, "favorites_empty_state");
                              },
                          }),
                ],
            }),
        }),
    });
}
var T = s(58736),
    C = s(353202),
    S = s(363195),
    G = s(768142);
function N(e) {
    let t,
        { channelId: h } = e;
    r.useEffect(() => {
        C.A.loadThread(h);
    });
    let o = (0, c.DZ)(),
        u = (0, a.bG)([S.A], () => S.A.theme);
    return o
        ? (0, i.jsxs)("div", {
              className: G.A,
              children: [l.Fr && (0, i.jsx)(T.Ay, { children: null }), (0, i.jsx)(k, { theme: u })],
          })
        : ((t =
              null != h
                  ? (0, i.jsx)(n.y, { type: n.y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(d.SG, { note: y.intl.string(y.t["LTr+x9"]), children: y.intl.string(y.t.ai6Lbr) })),
          (0, i.jsxs)("div", {
              className: G.j,
              children: [
                  l.Fr && (0, i.jsx)(T.Ay, { children: null }),
                  (0, i.jsxs)(d.pp, {
                      theme: u,
                      children: [
                          (0, i.jsx)(d.G8, { darkSrc: s(355937), lightSrc: s(332327), width: 272, height: 222 }),
                          t,
                      ],
                  }),
              ],
          }));
}

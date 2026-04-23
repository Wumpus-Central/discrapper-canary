n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    r = n(17928),
    a = n(289873),
    o = n(396478),
    d = n(313281),
    c = n(499373),
    u = n(192308),
    h = n(331322),
    A = n(144165),
    _ = n(821609),
    g = n(793574),
    m = n(688810),
    p = n(792656),
    f = n(422258),
    E = n(788868),
    C = n(335993),
    x = n(985018),
    I = n(14505),
    b = n(988572);
function S(e) {
    let { theme: t } = e,
        { hasAccess: s } = (0, d.TW)("favorites_empty_state"),
        { analyticsLocations: r } = (0, m.Ay)(g.A.FAVORITES_GUILD_HOME),
        a = l.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                return (t) => (0, i.jsx)(e, { ...t, source: "favorites_empty_state" });
            });
        }, []);
    return (0, i.jsx)(m.f5, {
        value: r,
        children: (0, i.jsx)(o.pp, {
            theme: t,
            children: (0, i.jsxs)(h.B, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(A._, { zoomable: !1, src: b.A, width: 197, height: 107 }),
                    (0, i.jsx)(o.SG, {
                        className: I.Y,
                        noteClassName: I.A,
                        note: x.intl.string(C.default["+SuGKb"]),
                        children: x.intl.string(C.default["wh+Rz1"]),
                    }),
                    s
                        ? (0, i.jsx)(_.$, { text: x.intl.string(C.default["6kk0gM"]), onClick: a, icon: c.T })
                        : (0, i.jsx)(p.A, {
                              subscriptionTier: E.pe.TIER_2,
                              defaultTextOverride: x.intl.string(C.default.yYVbdv),
                              onSubscribeModalClose: (e) => {
                                  e && (0, f.tV)(!0, "favorites_empty_state");
                              },
                          }),
                ],
            }),
        }),
    });
}
var N = n(58736),
    T = n(353202),
    v = n(363195),
    y = n(768142);
function R(e) {
    let t,
        { channelId: c } = e;
    l.useEffect(() => {
        T.A.loadThread(c);
    });
    let u = (0, d.DZ)(),
        h = (0, r.bG)([v.A], () => v.A.theme);
    return u
        ? (0, i.jsxs)("div", {
              className: y.A,
              children: [s.Fr && (0, i.jsx)(N.Ay, { children: null }), (0, i.jsx)(S, { theme: h })],
          })
        : ((t =
              null != c
                  ? (0, i.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(o.SG, { note: x.intl.string(x.t["LTr+x9"]), children: x.intl.string(x.t.ai6Lbr) })),
          (0, i.jsxs)("div", {
              className: y.j,
              children: [
                  s.Fr && (0, i.jsx)(N.Ay, { children: null }),
                  (0, i.jsxs)(o.pp, {
                      theme: h,
                      children: [
                          (0, i.jsx)(o.G8, { darkSrc: n(355937), lightSrc: n(332327), width: 272, height: 222 }),
                          t,
                      ],
                  }),
              ],
          }));
}

s.d(t, { A: () => N });
var i = s(477900),
    r = s(582128),
    l = s(607399),
    n = s(17928),
    a = s(289873),
    d = s(396478),
    c = s(93055),
    h = s(499373),
    o = s(331322),
    u = s(144165),
    p = s(821609),
    x = s(793574),
    j = s(688810),
    f = s(792656),
    g = s(16236),
    A = s(17839),
    m = s(202541),
    v = s(22277),
    _ = s(375708),
    b = s(630942),
    y = s(988572);
function k(e) {
    let { theme: t } = e,
        { hasAccess: s } = (0, c.TW)("favorites_empty_state"),
        { analyticsLocations: l } = (0, j.Ay)(x.A.FAVORITES_GUILD_HOME),
        n = r.useCallback(() => {
            (0, A.A)({ source: "favorites_empty_state" });
        }, []);
    return (0, i.jsx)(j.f5, {
        value: l,
        children: (0, i.jsx)(d.pp, {
            theme: t,
            children: (0, i.jsxs)(o.B, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(u._, { zoomable: !1, src: y.A, width: 197, height: 107 }),
                    (0, i.jsx)(d.SG, {
                        className: b.Y,
                        noteClassName: b.A3,
                        note: _.intl.string(v.default["+SuGKb"]),
                        children: _.intl.string(v.default["wh+Rz1"]),
                    }),
                    s
                        ? (0, i.jsx)(p.$, { text: _.intl.string(v.default["6kk0gM"]), onClick: n, icon: h.T })
                        : (0, i.jsx)(f.A, {
                              subscriptionTier: m.pe.TIER_2,
                              defaultTextOverride: _.intl.string(v.default.yYVbdv),
                              onSubscribeModalClose: (e) => {
                                  e && (0, g.tV)(!0, "favorites_empty_state");
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
    G = s(326879);
function N(e) {
    let t,
        { channelId: h } = e;
    r.useEffect(() => {
        C.A.loadThread(h);
    });
    let o = (0, c.DZ)(),
        u = (0, n.bG)([S.A], () => S.A.theme);
    return o
        ? (0, i.jsxs)("div", {
              className: G.A,
              children: [l.Fr && (0, i.jsx)(T.Ay, { children: null }), (0, i.jsx)(k, { theme: u })],
          })
        : ((t =
              null != h
                  ? (0, i.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(d.SG, { note: _.intl.string(_.t["LTr+x9"]), children: _.intl.string(_.t.ai6Lbr) })),
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

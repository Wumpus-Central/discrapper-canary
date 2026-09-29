s.d(t, { A: () => I });
var i = s(477900),
    l = s(582128),
    n = s(607399),
    r = s(17928),
    a = s(289873),
    c = s(396478),
    d = s(93055),
    h = s(499373),
    u = s(331322),
    o = s(144165),
    p = s(821609),
    x = s(793574),
    j = s(688810),
    A = s(792656),
    f = s(16236),
    m = s(17839),
    _ = s(202541),
    b = s(384539),
    v = s(375708),
    y = s(630942),
    g = s(988572);
function T(e) {
    let { theme: t } = e,
        { hasAccess: s } = (0, d.TW)("favorites_empty_state"),
        { analyticsLocations: n } = (0, j.Ay)(x.A.FAVORITES_GUILD_HOME),
        r = l.useCallback(() => {
            (0, m.A)({ source: "favorites_empty_state" });
        }, []);
    return (0, i.jsx)(j.f5, {
        value: n,
        children: (0, i.jsx)(c.pp, {
            theme: t,
            children: (0, i.jsxs)(u.B, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, i.jsx)(o._, { zoomable: !1, src: g.A, width: 197, height: 107 }),
                    (0, i.jsx)(c.SG, {
                        className: y.Y,
                        noteClassName: y.A3,
                        note: v.intl.string(b.default["+SuGKb"]),
                        children: v.intl.string(b.default["wh+Rz1"]),
                    }),
                    s
                        ? (0, i.jsx)(p.$, { text: v.intl.string(b.default["6kk0gM"]), onClick: r, icon: h.T })
                        : (0, i.jsx)(A.A, {
                              subscriptionTier: _.pe.TIER_2,
                              defaultTextOverride: v.intl.string(b.default.yYVbdv),
                              onSubscribeModalClose: (e) => {
                                  e && (0, f.tV)(!0, "favorites_empty_state");
                              },
                          }),
                ],
            }),
        }),
    });
}
var k = s(58736),
    C = s(353202),
    N = s(363195),
    G = s(326879);
function I(e) {
    let t,
        { channelId: s } = e;
    l.useEffect(() => {
        C.A.loadThread(s);
    });
    let h = (0, d.DZ)(),
        u = (0, r.bG)([N.A], () => N.A.theme);
    return h
        ? (0, i.jsxs)("div", {
              className: G.A,
              children: [n.Fr && (0, i.jsx)(k.Ay, { children: null }), (0, i.jsx)(T, { theme: u })],
          })
        : ((t =
              null != s
                  ? (0, i.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(c.SG, { note: v.intl.string(v.t["LTr+x9"]), children: v.intl.string(v.t.ai6Lbr) })),
          (0, i.jsxs)("div", {
              className: G.j,
              children: [n.Fr && (0, i.jsx)(k.Ay, { children: null }), (0, i.jsx)(c.pp, { theme: u, children: t })],
          }));
}

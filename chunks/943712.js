s.d(t, { A: () => N });
var l = s(477900),
    i = s(582128),
    n = s(607399),
    r = s(17928),
    a = s(289873),
    c = s(396478),
    d = s(93055),
    h = s(499373),
    o = s(331322),
    u = s(144165),
    p = s(821609),
    x = s(793574),
    j = s(688810),
    A = s(17839),
    m = s(384539),
    k = s(105292),
    f = s(630942),
    g = s(988572);
function y(e) {
    let { theme: t } = e,
        { analyticsLocations: s } = (0, j.Ay)(x.A.FAVORITES_GUILD_HOME),
        n = i.useCallback(() => {
            (0, A.A)({ source: "favorites_empty_state" });
        }, []);
    return (0, l.jsx)(j.f5, {
        value: s,
        children: (0, l.jsx)(c.pp, {
            theme: t,
            children: (0, l.jsxs)(o.B, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, l.jsx)(u._, { zoomable: !1, src: g.A, width: 197, height: 107 }),
                    (0, l.jsx)(c.SG, {
                        className: f.Y,
                        noteClassName: f.A3,
                        note: k.intl.string(m.default["+SuGKb"]),
                        children: k.intl.string(m.default["wh+Rz1"]),
                    }),
                    (0, l.jsx)(p.$, { text: k.intl.string(m.default["6kk0gM"]), onClick: n, icon: h.T }),
                ],
            }),
        }),
    });
}
var _ = s(58736),
    b = s(353202),
    v = s(363195),
    C = s(326879);
function N(e) {
    let t,
        { channelId: s } = e;
    i.useEffect(() => {
        b.A.loadThread(s);
    });
    let h = (0, d.DZ)(),
        o = (0, r.bG)([v.A], () => v.A.theme);
    return h
        ? (0, l.jsxs)("div", {
              className: C.A,
              children: [
                  n.Fr && (0, l.jsx)(_.Ay, { keepToastsBelow: !0, children: null }),
                  (0, l.jsx)(y, { theme: o }),
              ],
          })
        : ((t =
              null != s
                  ? (0, l.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE })
                  : (0, l.jsx)(c.SG, { note: k.intl.string(k.t["LTr+x9"]), children: k.intl.string(k.t.ai6Lbr) })),
          (0, l.jsxs)("div", {
              className: C.j,
              children: [
                  n.Fr && (0, l.jsx)(_.Ay, { keepToastsBelow: !0, children: null }),
                  (0, l.jsx)(c.pp, { theme: o, children: t }),
              ],
          }));
}

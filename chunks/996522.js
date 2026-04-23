n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(939249),
    o = n(531142),
    d = n(140735),
    c = n(834730),
    u = n(442433),
    m = n(47167),
    _ = n(143413),
    h = n(734057),
    p = n(661191),
    g = n(321045),
    A = n(456874),
    f = n(707539),
    x = n(519397),
    C = n(747926),
    E = n(650583),
    I = n(985018),
    v = n(74791);
function b(e) {
    let { message: t, compact: n } = e,
        l = (0, s.bG)([h.A], () => h.A.getChannel(p.default.castMessageIdAsChannelId(t.id)));
    return null == l ? null : (0, i.jsx)(T, { channel: l, compact: n, isSystemMessage: (0, _.A)(t) });
}
function T(e) {
    var t;
    let l,
        _,
        h,
        { channel: p, compact: b, isSystemMessage: T } = e,
        S = (0, m.Ay)(p),
        y = (0, s.bG)([A.A], () => A.A.getCount(p.id)),
        N =
            ((t = p),
            (l = (0, s.bG)([A.A], () => A.A.getMostRecentMessage(t.id))),
            (_ = (0, s.bG)([A.A], () => A.A.getCount(t.id))),
            (h = (0, f.JO)(t)),
            t.threadMetadata?.archived
                ? I.intl.string(I.t.ZTo4HS)
                : null == _ || 0 === _
                  ? I.intl.string(I.t.HYtNyE)
                  : null == l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("span", { children: I.intl.string(I.t.ZTo4HS) }),
                              (0, i.jsx)("span", { className: v.vE, children: (0, f.aK)(h) }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.A, { message: l, channel: t }),
                              (0, i.jsx)("span", { className: v.vE, children: (0, f.aK)(h) }),
                          ],
                      })),
        j = null != y && y > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: a()(v.GI, { [v.E]: !b, [v.E_]: T }) }),
            (0, i.jsx)(r.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, C.JA)(p, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === E.dh.SPACE || e.key === E.dh.ENTER) && (e.preventDefault(), (t || n) && (0, C.JA)(p, n));
                },
                onContextMenu: function (e) {
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("95834"),
                            n.e("99011"),
                            n.e("94989"),
                            n.e("219"),
                        ]).then(n.bind(n, 44536));
                        return (t) => (0, i.jsx)(e, { channel: p, ...t });
                    });
                },
                "aria-roledescription": I.intl.string(I.t["8ipxiY"]),
                className: a()(v.kL, { [v.og]: T }),
                children: (0, i.jsxs)(o.R, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.kq,
                            children: [
                                (0, i.jsx)(d.A, { children: I.intl.string(I.t["7Xm5QI"]) }),
                                (0, i.jsx)("span", { className: v.UU, children: S }),
                                (0, i.jsx)("span", {
                                    className: v.lO,
                                    "aria-hidden": !j,
                                    children: (0, g.ub)(y, p.id),
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: v.sb,
                            children: N,
                        }),
                    ],
                }),
            }),
        ],
    });
}

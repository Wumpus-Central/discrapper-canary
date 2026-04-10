n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(397927),
    o = n(442433),
    d = n(47167),
    c = n(143413),
    u = n(734057),
    m = n(661191),
    _ = n(321045),
    h = n(456874),
    p = n(707539),
    g = n(519397),
    A = n(747926),
    x = n(652215),
    f = n(985018),
    C = n(208503);
function E(e) {
    let { message: t, compact: n } = e,
        l = (0, r.bG)([u.A], () => u.A.getChannel(m.default.castMessageIdAsChannelId(t.id)));
    return null == l ? null : (0, i.jsx)(I, { channel: l, compact: n, isSystemMessage: (0, c.A)(t) });
}
function I(e) {
    var t;
    let l,
        c,
        u,
        { channel: m, compact: E, isSystemMessage: I } = e,
        v = (0, d.Ay)(m),
        b = (0, r.bG)([h.A], () => h.A.getCount(m.id)),
        T =
            ((t = m),
            (l = (0, r.bG)([h.A], () => h.A.getMostRecentMessage(t.id))),
            (c = (0, r.bG)([h.A], () => h.A.getCount(t.id))),
            (u = (0, p.JO)(t)),
            t.threadMetadata?.archived
                ? f.intl.string(f.t.ZTo4HS)
                : null == c || 0 === c
                  ? f.intl.string(f.t.HYtNyE)
                  : null == l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("span", { children: f.intl.string(f.t.ZTo4HS) }),
                              (0, i.jsx)("span", { className: C.vE, children: (0, p.aK)(u) }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.A, { message: l, channel: t }),
                              (0, i.jsx)("span", { className: C.vE, children: (0, p.aK)(u) }),
                          ],
                      })),
        y = null != b && b > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: s()(C.GI, { [C.E]: !E, [C.E_]: I }) }),
            (0, i.jsx)(a.DUT, {
                onClick: function (e) {
                    e.stopPropagation(), (0, A.JA)(m, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === x.Ks6.SPACE || e.which === x.Ks6.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, A.JA)(m, n));
                },
                onContextMenu: function (e) {
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("94989"), n.e("1798")]).then(n.bind(n, 44536));
                        return (t) => (0, i.jsx)(e, { channel: m, ...t });
                    });
                },
                "aria-roledescription": f.intl.string(f.t["8ipxiY"]),
                className: s()(C.kL, { [C.og]: I }),
                children: (0, i.jsxs)(a.RDc, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.kq,
                            children: [
                                (0, i.jsx)(a.AC4, { children: f.intl.string(f.t["7Xm5QI"]) }),
                                (0, i.jsx)("span", { className: C.UU, children: v }),
                                (0, i.jsx)("span", {
                                    className: C.lO,
                                    "aria-hidden": !y,
                                    children: (0, _.ub)(b, m.id),
                                }),
                            ],
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: C.sb,
                            children: T,
                        }),
                    ],
                }),
            }),
        ],
    });
}

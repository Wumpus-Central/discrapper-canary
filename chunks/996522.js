n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(311907),
    s = n(397927),
    o = n(442433),
    d = n(47167),
    c = n(143413),
    u = n(734057),
    _ = n(661191),
    m = n(321045),
    h = n(456874),
    p = n(707539),
    g = n(519397),
    A = n(747926),
    x = n(650583),
    f = n(985018),
    C = n(74791);
function E(e) {
    let { message: t, compact: n } = e,
        a = (0, r.bG)([u.A], () => u.A.getChannel(_.default.castMessageIdAsChannelId(t.id)));
    return null == a ? null : (0, i.jsx)(I, { channel: a, compact: n, isSystemMessage: (0, c.A)(t) });
}
function I(e) {
    var t;
    let a,
        c,
        u,
        { channel: _, compact: E, isSystemMessage: I } = e,
        v = (0, d.Ay)(_),
        b = (0, r.bG)([h.A], () => h.A.getCount(_.id)),
        T =
            ((t = _),
            (a = (0, r.bG)([h.A], () => h.A.getMostRecentMessage(t.id))),
            (c = (0, r.bG)([h.A], () => h.A.getCount(t.id))),
            (u = (0, p.JO)(t)),
            t.threadMetadata?.archived
                ? f.intl.string(f.t.ZTo4HS)
                : null == c || 0 === c
                  ? f.intl.string(f.t.HYtNyE)
                  : null == a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("span", { children: f.intl.string(f.t.ZTo4HS) }),
                              (0, i.jsx)("span", { className: C.vE, children: (0, p.aK)(u) }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.A, { message: a, channel: t }),
                              (0, i.jsx)("span", { className: C.vE, children: (0, p.aK)(u) }),
                          ],
                      })),
        y = null != b && b > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: l()(C.GI, { [C.E]: !E, [C.E_]: I }) }),
            (0, i.jsx)(s.DUT, {
                onClick: function (e) {
                    e.stopPropagation(), (0, A.JA)(_, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === x.dh.SPACE || e.key === x.dh.ENTER) && (e.preventDefault(), (t || n) && (0, A.JA)(_, n));
                },
                onContextMenu: function (e) {
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("95834"), n.e("94989"), n.e("9")]).then(
                            n.bind(n, 44536),
                        );
                        return (t) => (0, i.jsx)(e, { channel: _, ...t });
                    });
                },
                "aria-roledescription": f.intl.string(f.t["8ipxiY"]),
                className: l()(C.kL, { [C.og]: I }),
                children: (0, i.jsxs)(s.RDc, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.kq,
                            children: [
                                (0, i.jsx)(s.AC4, { children: f.intl.string(f.t["7Xm5QI"]) }),
                                (0, i.jsx)("span", { className: C.UU, children: v }),
                                (0, i.jsx)("span", {
                                    className: C.lO,
                                    "aria-hidden": !y,
                                    children: (0, m.ub)(b, _.id),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.Text, {
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

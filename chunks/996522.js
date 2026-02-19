n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(442433),
    d = n(143413),
    c = n(734057),
    u = n(661191),
    m = n(321045),
    _ = n(456874),
    h = n(707539),
    p = n(519397),
    g = n(747926),
    A = n(652215),
    f = n(985018),
    x = n(868320);
function C(e) {
    let { message: t, compact: n } = e,
        l = (0, r.bG)([c.A], () => c.A.getChannel(u.default.castMessageIdAsChannelId(t.id)));
    return null == l ? null : (0, i.jsx)(E, { channel: l, compact: n, isSystemMessage: (0, d.A)(t) });
}
function E(e) {
    var t;
    let l,
        d,
        c,
        { channel: u, compact: C, isSystemMessage: E } = e,
        I = (0, r.bG)([_.A], () => _.A.getCount(u.id)),
        T =
            ((t = u),
            (l = (0, r.bG)([_.A], () => _.A.getMostRecentMessage(t.id))),
            (d = (0, r.bG)([_.A], () => _.A.getCount(t.id))),
            (c = (0, h.JO)(t)),
            t.threadMetadata?.archived
                ? f.intl.string(f.t.ZTo4HS)
                : null == d || 0 === d
                  ? f.intl.string(f.t.HYtNyE)
                  : null == l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("span", { children: f.intl.string(f.t.ZTo4HS) }),
                              (0, i.jsx)("span", { className: x.vE, children: (0, h.aK)(c) }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p.A, { message: l, channel: t }),
                              (0, i.jsx)("span", { className: x.vE, children: (0, h.aK)(c) }),
                          ],
                      })),
        v = null != I && I > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: a()(x.GI, { [x.E]: !C, [x.E_]: E }) }),
            (0, i.jsx)(s.DUT, {
                onClick: function (e) {
                    e.stopPropagation(), (0, g.JA)(u, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === A.Ks6.SPACE || e.which === A.Ks6.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, g.JA)(u, n));
                },
                onContextMenu: function (e) {
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("74192"), n.e("13223")]).then(n.bind(n, 44536));
                        return (t) => (0, i.jsx)(e, { channel: u, ...t });
                    });
                },
                "aria-roledescription": f.intl.string(f.t["8ipxiY"]),
                className: a()(x.kL, { [x.og]: E }),
                children: (0, i.jsxs)(s.RDc, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.kq,
                            children: [
                                (0, i.jsx)(s.AC4, { children: f.intl.string(f.t["7Xm5QI"]) }),
                                (0, i.jsx)("span", { className: x.UU, children: u.name }),
                                (0, i.jsx)("span", {
                                    className: x.lO,
                                    "aria-hidden": !v,
                                    children: (0, m.ub)(I, u.id),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: x.sb,
                            children: T,
                        }),
                    ],
                }),
            }),
        ],
    });
}

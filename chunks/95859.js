n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(158954),
    r = n(998304),
    o = n(764231),
    c = n(112848),
    d = n(627380),
    u = n(149757),
    _ = n(985018),
    m = n(706627);
let A = () => {
    let e = (0, c.$F)(),
        t = (0, c.Xb)() ?? new Date(),
        n = (0, u.N)(e?.id);
    if (null == e || null == n) return null;
    let { id: s, nameUnformatted: A, tenureReqNumMonths: g, hasWideArt: h } = e,
        x = _.intl.string(A),
        p = (0, o.T)(s, g),
        E = { "--custom-badge-glow-color": (0, r.KU)(e.glowColor, 0.5) };
    return (0, i.jsxs)("div", {
        className: m.kL,
        style: E,
        children: [
            (0, i.jsx)("div", {}),
            " ",
            (0, i.jsx)("img", {
                src: n.standard,
                alt: x,
                className: a()(m.pq, { [m.kQ]: e.status === c.Wo.UPCOMING, [m.U]: h }),
            }),
            (0, i.jsxs)("div", {
                className: m._u,
                children: [
                    (0, i.jsx)(l.EYj, { variant: "text-lg/semibold", className: m.Vv, children: x }),
                    (0, i.jsx)(l.EYj, { variant: "text-md/normal", className: m.Vv, children: p }),
                    (0, i.jsx)(l.EYj, {
                        variant: "text-xs/normal",
                        children:
                            e?.status === c.Wo.EARNED
                                ? _.intl.format(_.t.Hu4jfi, { date: t })
                                : e?.status === c.Wo.UPCOMING
                                  ? _.intl.format(_.t.E85fll, { date: t, days: (0, d.x)(t, e.tenureReqNumMonths) })
                                  : null,
                    }),
                ],
            }),
        ],
    });
};

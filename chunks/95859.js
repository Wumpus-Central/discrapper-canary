n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(158954),
    l = n(998304),
    o = n(764231),
    c = n(112848),
    d = n(149757),
    u = n(985018),
    _ = n(706627);
let m = () => {
    let e = (0, c.$F)(),
        t = (0, c.Xb)() ?? new Date(),
        n = (0, d.N)(e?.id);
    if (null == e || null == n) return null;
    let { id: s, nameUnformatted: m, tenureReqNumMonths: A, hasWideArt: g } = e,
        E = u.intl.string(m),
        h = (0, o.T)(s, A),
        p = { "--custom-badge-glow-color": (0, l.KU)(e.glowColor, 0.5) };
    return (0, i.jsxs)("div", {
        className: _.kL,
        style: p,
        children: [
            (0, i.jsx)("div", {}),
            " ",
            (0, i.jsx)("img", {
                src: n,
                alt: E,
                className: r()(_.pq, { [_.kQ]: e.status === c.Wo.UPCOMING, [_.U]: g }),
            }),
            (0, i.jsxs)("div", {
                className: _._u,
                children: [
                    (0, i.jsx)(a.EYj, { variant: "text-lg/semibold", className: _.Vv, children: E }),
                    (0, i.jsx)(a.EYj, { variant: "text-md/normal", className: _.Vv, children: h }),
                    (0, i.jsx)(a.EYj, {
                        variant: "text-xs/normal",
                        children:
                            e?.status === c.Wo.EARNED
                                ? u.intl.format(u.t.Hu4jfi, { date: t ?? new Date() })
                                : e?.status === c.Wo.UPCOMING
                                  ? u.intl.format(u.t.E85fll, { date: t ?? new Date(), days: e.daysLeft })
                                  : null,
                    }),
                ],
            }),
        ],
    });
};

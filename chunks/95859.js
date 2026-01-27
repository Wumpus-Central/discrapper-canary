n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(158954),
    a = n(998304),
    o = n(764231),
    c = n(112848),
    d = n(149757),
    u = n(985018),
    _ = n(706627);
let p = () => {
    var e;
    let t = (0, c.$F)(),
        n = null != (e = (0, c.Xb)()) ? e : new Date(),
        i = (0, d.N)(null == t ? void 0 : t.id);
    if (null == t || null == i) return null;
    let { id: p, nameUnformatted: m, tenureReqNumMonths: g, hasWideArt: A } = t,
        f = u.intl.string(m),
        h = (0, o.T)(p, g),
        b = {
            "--custom-badge-glow-color": (0, a.KU)(t.glowColor, 0.5),
        };
    return (0, r.jsxs)("div", {
        className: _.kL,
        style: b,
        children: [
            (0, r.jsx)("div", {}),
            " ",
            (0, r.jsx)("img", {
                src: i,
                alt: f,
                className: l()(_.pq, {
                    [_.kQ]: t.status === c.Wo.UPCOMING,
                    [_.U]: A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: _._u,
                children: [
                    (0, r.jsx)(s.EYj, {
                        variant: "text-lg/semibold",
                        className: _.Vv,
                        children: f,
                    }),
                    (0, r.jsx)(s.EYj, {
                        variant: "text-md/normal",
                        className: _.Vv,
                        children: h,
                    }),
                    (0, r.jsx)(s.EYj, {
                        variant: "text-xs/normal",
                        children:
                            (null == t ? void 0 : t.status) === c.Wo.EARNED
                                ? u.intl.format(u.t.Hu4jfi, {
                                      date: null != n ? n : new Date(),
                                  })
                                : (null == t ? void 0 : t.status) === c.Wo.UPCOMING
                                  ? u.intl.format(u.t.E85fll, {
                                        date: null != n ? n : new Date(),
                                        days: t.daysLeft,
                                    })
                                  : null,
                    }),
                ],
            }),
        ],
    });
};

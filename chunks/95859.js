n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(998304),
    l = n(764231),
    c = n(112848),
    u = n(149757),
    d = n(985018),
    f = n(706627);
let p = (e, t) =>
        (null == e ? void 0 : e.status) === c.Wo.EARNED
            ? d.intl.format(d.t.Hu4jfi, {
                  date: null != t ? t : new Date(),
              })
            : (null == e ? void 0 : e.status) === c.Wo.UPCOMING
              ? d.intl.format(d.t.E85fll, {
                    date: null != t ? t : new Date(),
                    days: e.daysLeft,
                })
              : null,
    _ = () => {
        var e;
        let t = (0, c.$F)(),
            n = null != (e = (0, c.Xb)()) ? e : new Date(),
            i = (0, u.N)(null == t ? void 0 : t.id);
        if (null == t || null == i) return null;
        let { id: _, nameUnformatted: h, tenureReqNumMonths: m, hasWideArt: g } = t,
            E = d.intl.string(h),
            b = (0, l.T)(_, m),
            y = {
                "--custom-badge-glow-color": (0, o.KU)(t.glowColor, 0.5),
            };
        return (0, r.jsxs)("div", {
            className: f.kL,
            style: y,
            children: [
                (0, r.jsx)("div", {}),
                " ",
                (0, r.jsx)("img", {
                    src: i,
                    alt: E,
                    className: a()(f.pq, {
                        [f.kQ]: t.status === c.Wo.UPCOMING,
                        [f.U]: g,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: f._u,
                    children: [
                        (0, r.jsx)(s.EYj, {
                            variant: "text-lg/semibold",
                            className: f.Vv,
                            children: E,
                        }),
                        (0, r.jsx)(s.EYj, {
                            variant: "text-md/normal",
                            className: f.Vv,
                            children: b,
                        }),
                        (0, r.jsx)(s.EYj, {
                            variant: "text-xs/normal",
                            children: p(t, n),
                        }),
                    ],
                }),
            ],
        });
    };

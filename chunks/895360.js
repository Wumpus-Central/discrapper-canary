t.d(n, { D: () => v });
var s = t(477900),
    o = t(503698),
    r = t.n(o),
    a = t(933832),
    c = t(661531),
    i = t(834730),
    d = t(858899),
    u = t(739187),
    l = t(857250),
    f = t(97483),
    b = t(973283),
    m = t(375708),
    h = t(819296),
    p = t(655214);
function g() {
    return (0, s.jsxs)("div", {
        className: r()(p.oR, h.o),
        children: [
            (0, s.jsx)(a.CheckmarkLargeIcon, { size: "custom", className: h.K, color: c.A.colors.STATUS_POSITIVE.css }),
            (0, s.jsx)(i.E, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: m.intl.string(m.t["3T2jbf"]),
            }),
        ],
    });
}
function v() {
    (0, b.WD)("showWishlistNuxToast")
        ? (0, d.P0)({ text: m.intl.string(m.t["3T2jbf"]), variant: "success" })
        : (0, u.P)((0, l.o)("", f.Ck.CUSTOM, { component: (0, s.jsx)(g, {}) }));
}

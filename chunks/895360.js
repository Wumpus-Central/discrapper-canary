t.d(n, { D: () => v });
var s = t(477900),
    a = t(503698),
    i = t.n(a),
    r = t(933832),
    l = t(661531),
    d = t(834730),
    o = t(858899),
    c = t(739187),
    u = t(857250),
    m = t(97483),
    f = t(973283),
    b = t(660183),
    h = t(819296),
    x = t(655214);
function g() {
    return (0, s.jsxs)("div", {
        className: i()(x.oR, h.o),
        children: [
            (0, s.jsx)(r.CheckmarkLargeIcon, { size: "custom", className: h.K, color: l.A.colors.STATUS_POSITIVE.css }),
            (0, s.jsx)(d.E, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: b.intl.string(b.t["3T2jbf"]),
            }),
        ],
    });
}
function v() {
    (0, f.WD)("showWishlistNuxToast")
        ? (0, o.P0)({ text: b.intl.string(b.t["3T2jbf"]), variant: "success" })
        : (0, c.P)((0, u.o)("", m.Ck.CUSTOM, { component: (0, s.jsx)(g, {}) }));
}

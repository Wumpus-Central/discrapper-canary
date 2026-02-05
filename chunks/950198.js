r.d(t, { Jq: () => d, mP: () => u, mw: () => o });
var n = r(627968);
r(64700);
var l = r(503698),
    a = r.n(l),
    i = r(573648),
    c = r(652215),
    s = r(955964);
function o(e) {
    return null != e && Object.values(c.fg2).includes(e) ? e : null;
}
function u(e) {
    let { children: t, platformType: r } = e,
        l = i.A.get(r);
    return (0, n.jsx)("div", {
        className: s.uX,
        children: (0, n.jsxs)("div", { children: [(0, n.jsx)(d, { platform: l }), t] }),
    });
}
function d(e) {
    let { platform: t, className: r } = e;
    return (0, n.jsxs)("div", {
        className: a()(s.ry, r),
        children: [
            (0, n.jsx)("div", { className: a()(s.wm, s.Sn) }),
            (0, n.jsx)("div", { className: s.mM }),
            (0, n.jsx)("div", { className: s.wm, style: { backgroundImage: `url("${t.icon.whiteSVG}")` } }),
        ],
    });
}

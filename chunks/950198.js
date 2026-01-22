r.d(t, {
    Jq: () => d,
    mP: () => s,
    mw: () => u,
});
var n = r(627968);
r(64700);
var c = r(503698),
    l = r.n(c),
    a = r(573648),
    o = r(652215),
    i = r(955964);
function u(e) {
    return null != e && Object.values(o.fg2).includes(e) ? e : null;
}
function s(e) {
    let { children: t, platformType: r } = e,
        c = a.A.get(r);
    return (0, n.jsx)("div", {
        className: i.uX,
        children: (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d, { platform: c }), t],
        }),
    });
}
function d(e) {
    let { platform: t, className: r } = e;
    return (0, n.jsxs)("div", {
        className: l()(i.ry, r),
        children: [
            (0, n.jsx)("div", { className: l()(i.wm, i.Sn) }),
            (0, n.jsx)("div", { className: i.mM }),
            (0, n.jsx)("div", {
                className: i.wm,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') },
            }),
        ],
    });
}

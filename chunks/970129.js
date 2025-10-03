n.d(t, {
    T: () => d,
    Z: () => u,
});
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(28664),
    a = n(481060),
    o = n(496675),
    c = n(388032);
function d(e, t, n) {
    let r = (0, l.e7)([o.Z], () => !o.Z.isRoleHigher(e, t, n), [e, t, n]);
    return i.useMemo(() => r && n.id === (null == t ? void 0 : t.id), [r, n, t])
        ? c.intl.string(c.t.PQylOT)
        : r
          ? c.intl.string(c.t.UGIjx8)
          : null;
}
function u(e) {
    let { className: t, tooltipText: n, width: i = 16, height: l = 16 } = e;
    return (0, r.jsx)(s.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsx)(a.mBM, {
                size: "custom",
                color: "currentColor",
                width: i,
                height: l,
            }),
        }),
    });
}

n.d(t, { Q: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(573435),
    o = n(933297),
    d = n(959166);
function c(e) {
    let { sizePx: t } = e,
        n = 0.5 / t,
        s = `translate(${n}, ${n}) scale(${1 - 2 * n})`;
    return (0, i.jsx)("svg", {
        className: d.v9,
        width: t,
        height: t,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            d: a.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / t,
            transform: s,
        }),
    });
}
function u(e) {
    let { icon: t, sizePx: n, positionClassName: l } = e,
        u = s.useMemo(() => ({ width: `${n}px`, height: `${n}px` }), [n]);
    switch (t.shape) {
        case o.NF.SQUIRCLE:
            return (0, i.jsxs)("div", {
                className: r()(d.Gt, l),
                style: u,
                children: [
                    (0, i.jsx)(a.Ay, {
                        mask: a.Ay.Masks.SQUIRCLE,
                        width: n,
                        height: n,
                        children: (0, i.jsx)("div", { className: d.pU, style: u, children: t.icon }),
                    }),
                    (0, i.jsx)(c, { sizePx: n }),
                ],
            });
        case o.NF.ROUNDED:
            return (0, i.jsx)("div", { className: r()(d.Gt, l, d.Nb), style: u, children: t.icon });
    }
}
function m(e) {
    let { decoration: t } = e,
        n = t.useIcons();
    if (null == n) return null;
    let { frontIcon: s, backIcon: l } = n;
    return (0, i.jsxs)("div", {
        className: d.VD,
        "aria-hidden": !0,
        children: [
            null != l && (0, i.jsx)(u, { icon: l, sizePx: 40, positionClassName: d.j2 }),
            (0, i.jsx)(u, { icon: s, sizePx: 48, positionClassName: d.hU }),
        ],
    });
}
function g(e) {
    let { decoration: t } = e;
    if (t.type === o.wF.STACKED_ICONS) return (0, i.jsx)(m, { decoration: t });
}

t.d(n, { Q: () => j });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(573435),
    o = t(933297),
    c = t(959166);
function d(e) {
    let { sizePx: n } = e,
        t = 0.5 / n,
        r = `translate(${t}, ${t}) scale(${1 - 2 * t})`;
    return (0, l.jsx)("svg", {
        className: c.v9,
        width: n,
        height: n,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, l.jsx)("path", {
            d: a.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / n,
            transform: r,
        }),
    });
}
function u(e) {
    let { icon: n, sizePx: t, positionClassName: i } = e,
        u = r.useMemo(() => ({ width: `${t}px`, height: `${t}px` }), [t]);
    switch (n.shape) {
        case o.NF.SQUIRCLE:
            return (0, l.jsxs)("div", {
                className: s()(c.Gt, i),
                style: u,
                children: [
                    (0, l.jsx)(a.Ay, {
                        mask: a.Ay.Masks.SQUIRCLE,
                        width: t,
                        height: t,
                        children: (0, l.jsx)("div", { className: c.pU, style: u, children: n.icon }),
                    }),
                    (0, l.jsx)(d, { sizePx: t }),
                ],
            });
        case o.NF.ROUNDED:
            return (0, l.jsx)("div", { className: s()(c.Gt, i, c.Nb), style: u, children: n.icon });
    }
}
function x(e) {
    let { decoration: n } = e,
        t = n.useIcons();
    if (null == t) return null;
    let { frontIcon: r, backIcon: i } = t;
    return (0, l.jsxs)("div", {
        className: c.VD,
        "aria-hidden": !0,
        children: [
            null != i && (0, l.jsx)(u, { icon: i, sizePx: 40, positionClassName: c.j2 }),
            (0, l.jsx)(u, { icon: r, sizePx: 48, positionClassName: c.hU }),
        ],
    });
}
function j(e) {
    let { decoration: n } = e;
    if (n.type === o.wF.STACKED_ICONS) return (0, l.jsx)(x, { decoration: n });
}

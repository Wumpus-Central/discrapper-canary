n.d(t, { Q: () => _ });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(573435),
    o = n(933297),
    c = n(535717);
function d(e) {
    let { icon: t, sizePx: n, positionClassName: a } = e,
        d = (function (e) {
            switch (e) {
                case o.NF.ROUNDED:
                    return c.Nb;
                case o.NF.SQUIRCLE:
                    return c.uk;
            }
        })(t.shape),
        u = s.useMemo(() => ({ width: `${n}px`, height: `${n}px` }), [n]);
    switch (t.shape) {
        case o.NF.SQUIRCLE:
            return (0, i.jsx)("div", {
                className: l()(c.Gt, a),
                style: u,
                children: (0, i.jsx)(r.Ay, {
                    className: c.uk,
                    mask: r.Ay.Masks.SQUIRCLE,
                    width: n,
                    height: n,
                    children: (0, i.jsx)("div", {
                        className: c.A3,
                        children: (0, i.jsx)("div", { className: c.ZY, children: t.icon }),
                    }),
                }),
            });
        case o.NF.ROUNDED:
            return (0, i.jsx)("div", {
                className: l()(c.Gt, a, d),
                style: u,
                children: (0, i.jsx)("div", { className: c.ZY, children: t.icon }),
            });
    }
}
function u(e) {
    let { decoration: t } = e,
        n = t.useIcons();
    if (null == n) return null;
    let { frontIcon: s, backIcon: a } = n;
    return (0, i.jsxs)("div", {
        className: c.VD,
        "aria-hidden": !0,
        children: [
            null != a && (0, i.jsx)(d, { icon: a, sizePx: 40, positionClassName: c.j2 }),
            (0, i.jsx)(d, { icon: s, sizePx: 48, positionClassName: c.hU }),
        ],
    });
}
function _(e) {
    let { decoration: t } = e;
    if (t.type === o.wF.STACKED_ICONS) return (0, i.jsx)(u, { decoration: t });
}

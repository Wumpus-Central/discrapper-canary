r.d(e, { A: () => s });
var n = r(477900);
r(582128);
var i = r(503698),
    o = r.n(i),
    l = r(403581),
    a = r(834730),
    u = r(336089);
function s(t) {
    let { discountedPrice: e, normalPrice: r, wrap: i = !1 } = t;
    return (0, n.jsxs)("div", {
        className: o()(u.kL, { [u.LV]: i }),
        children: [
            (0, n.jsx)(l.t, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(a.E, { variant: "text-md/bold", color: "currentColor", lineClamp: i ? void 0 : 1, children: e }),
            null != r &&
                (0, n.jsx)(a.E, {
                    className: u.of,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: i ? void 0 : 1,
                    children: r,
                }),
        ],
    });
}

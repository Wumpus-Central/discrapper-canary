n.d(e, { A: () => l });
var r = n(477900);
n(582128);
var i = n(503698),
    o = n.n(i),
    s = n(403581),
    a = n(834730),
    u = n(336089);
function l(t) {
    let { discountedPrice: e, normalPrice: n, wrap: i = !1 } = t;
    return (0, r.jsxs)("div", {
        className: o()(u.kL, { [u.LV]: i }),
        children: [
            (0, r.jsx)(s.t, { size: "xs", color: "currentColor" }),
            (0, r.jsx)(a.E, { variant: "text-md/bold", color: "currentColor", lineClamp: i ? void 0 : 1, children: e }),
            null != n &&
                (0, r.jsx)(a.E, {
                    className: u.of,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: i ? void 0 : 1,
                    children: n,
                }),
        ],
    });
}

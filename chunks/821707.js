r.d(e, { A: () => a });
var n = r(477900);
r(582128);
var i = r(403581),
    o = r(834730),
    l = r(336089);
function a(t) {
    let { discountedPrice: e, normalPrice: r } = t;
    return (0, n.jsxs)("div", {
        className: l.k,
        children: [
            (0, n.jsx)(i.t, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(o.E, { variant: "text-md/bold", color: "currentColor", lineClamp: 1, children: e }),
            null != r &&
                (0, n.jsx)(o.E, {
                    className: l.o,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
        ],
    });
}

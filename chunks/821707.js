r.d(e, { A: () => a });
var i = r(477900);
r(582128);
var n = r(403581),
    l = r(834730),
    u = r(336089);
function a(t) {
    let { discountedPrice: e, normalPrice: r } = t;
    return (0, i.jsxs)("div", {
        className: u.k,
        children: [
            (0, i.jsx)(n.t, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(l.E, { variant: "text-md/bold", color: "currentColor", lineClamp: 1, children: e }),
            null != r &&
                (0, i.jsx)(l.E, {
                    className: u.o,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
        ],
    });
}

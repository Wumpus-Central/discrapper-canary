r.d(e, { A: () => u });
var i = r(477900);
r(582128);
var n = r(403581),
    l = r(834730),
    o = r(841196);
function u(t) {
    let { discountedPrice: e, normalPrice: r } = t;
    return (0, i.jsxs)("div", {
        className: o.k,
        children: [
            (0, i.jsx)(n.t, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(l.E, { variant: "text-md/bold", color: "currentColor", lineClamp: 1, children: e }),
            null != r &&
                (0, i.jsx)(l.E, {
                    className: o.o,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
        ],
    });
}

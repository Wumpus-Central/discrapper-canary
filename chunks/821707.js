r.d(t, { A: () => s });
var i = r(477900);
r(582128);
var l = r(403581),
    a = r(834730),
    n = r(336089);
function s(e) {
    let { discountedPrice: t, normalPrice: r } = e;
    return (0, i.jsxs)("div", {
        className: n.k,
        children: [
            (0, i.jsx)(l.t, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(a.E, { variant: "text-md/bold", color: "currentColor", lineClamp: 1, children: t }),
            null != r &&
                (0, i.jsx)(a.E, {
                    className: n.o,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
        ],
    });
}

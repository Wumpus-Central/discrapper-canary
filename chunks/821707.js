n.d(e, { A: () => u });
var r = n(477900);
n(582128);
var o = n(503698),
    i = n.n(o),
    s = n(403581),
    a = n(834730),
    l = n(336089);
function u(t) {
    let { discountedPrice: e, normalPrice: n, wrap: o = !1 } = t;
    return (0, r.jsxs)("div", {
        className: i()(l.kL, { [l.LV]: o }),
        children: [
            (0, r.jsx)(s.t, { size: "xs", color: "currentColor" }),
            (0, r.jsx)(a.E, {
                variant: "body-md/semibold",
                color: "currentColor",
                lineClamp: o ? void 0 : 1,
                children: e,
            }),
            null != n &&
                (0, r.jsx)(a.E, {
                    className: l.of,
                    variant: "body-xs/medium",
                    color: "text-muted",
                    lineClamp: o ? void 0 : 1,
                    children: n,
                }),
        ],
    });
}

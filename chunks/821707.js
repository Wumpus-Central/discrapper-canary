var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(403581),
    s = n(834730),
    o = n(336089);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { discountedPrice: t, normalPrice: n, wrap: i = !1 } = e;
            return (0, l.jsxs)("div", {
                className: r()(o.kL, { [o.LV]: i }),
                children: [
                    (0, l.jsx)(a.t, { size: "xs", color: "currentColor" }),
                    (0, l.jsx)(s.E, {
                        variant: "body-md/semibold",
                        color: "currentColor",
                        lineClamp: i ? void 0 : 1,
                        children: t,
                    }),
                    null != n &&
                        (0, l.jsx)(s.E, {
                            className: o.of,
                            variant: "body-xs/medium",
                            color: "text-muted",
                            lineClamp: i ? void 0 : 1,
                            children: n,
                        }),
                ],
            });
        },
    },
);

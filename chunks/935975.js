"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(939249),
    s = n(834730),
    o = n(696048);
function d(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: d } = e;
    return (0, r.jsxs)("div", {
        className: l()(o.UD, i),
        children: [
            (0, r.jsx)(a.D, {
                className: o.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(d, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(s.E, {
                      className: o.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}

n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(397927),
    r = n(994322),
    o = n(584111);
function d(e) {
    let { onClick: t, keybind: n, className: l, IconComponent: d } = e,
        u = (0, r.F)();
    return (0, i.jsxs)("div", {
        className: a()(o.UD, l),
        children: [
            (0, i.jsx)(s.DUT, {
                className: o.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, i.jsx)(d, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n && u
                ? (0, i.jsx)(s.Text, {
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

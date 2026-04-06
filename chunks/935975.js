n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(994322),
    o = n(780768);
function d(e) {
    let { onClick: t, keybind: n, className: s, IconComponent: d } = e,
        u = (0, a.F)();
    return (0, i.jsxs)("div", {
        className: l()(o.UD, s),
        children: [
            (0, i.jsx)(r.DUT, {
                className: o.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, i.jsx)(d, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n && u
                ? (0, i.jsx)(r.Text, {
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

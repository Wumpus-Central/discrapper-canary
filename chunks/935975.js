n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(939249),
    o = n(834730),
    d = n(696048);
function s(e) {
    let { onClick: t, keybind: n, className: i, IconComponent: s } = e;
    return (0, r.jsxs)("div", {
        className: a()(d.UD, i),
        children: [
            (0, r.jsx)(l.D, {
                className: d.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, r.jsx)(s, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, r.jsx)(o.E, {
                      className: d.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}

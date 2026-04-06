n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(397927),
    s = n(780768);
function o(e) {
    let { onClick: t, keybind: n, className: a, IconComponent: o } = e;
    return (0, i.jsxs)("div", {
        className: r()(s.UD, a),
        children: [
            (0, i.jsx)(l.DUT, {
                className: s.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, i.jsx)(o, { size: "md", color: "currentColor", "aria-hidden": !0 }),
            }),
            null != n
                ? (0, i.jsx)(l.Text, {
                      className: s.P,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}

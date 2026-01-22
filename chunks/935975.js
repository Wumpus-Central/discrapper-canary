n.d(t, {
    A: () => c,
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(994322),
    s = n(584111);

function c(e) {
    let { onClick: t, keybind: n, className: r, IconComponent: c } = e,
        u = (0, o.F)();
    return (0, i.jsxs)("div", {
        className: l()(s.UD, r),
        children: [
            (0, i.jsx)(a.DUT, {
                className: s.x6,
                onClick: t,
                "aria-hidden": !0,
                children: (0, i.jsx)(c, {
                    size: "md",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
            null != n && u
                ? (0, i.jsx)(a.Text, {
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

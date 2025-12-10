n.d(t, { Z: () => c });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(809357),
    s = n(795482);
function c(e) {
    let { onClick: t, keybind: n, className: r, IconComponent: c } = e,
        u = (0, a.o)();
    return (0, i.jsxs)("div", {
        className: l()(s.buttonContainer, r),
        children: [
            (0, i.jsx)(o.P3F, {
                className: s.button,
                onClick: t,
                "aria-hidden": !0,
                children: (0, i.jsx)(c, {
                    size: "md",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
            null != n && u
                ? (0, i.jsx)(o.Text, {
                      className: s.keybind,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-text-default",
                      children: n,
                  })
                : null,
        ],
    });
}

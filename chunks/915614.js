n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(809357),
    s = n(795482);
function u(e) {
    let { onClick: t, keybind: n, className: r, IconComponent: u } = e,
        c = (0, o.o)();
    return (0, i.jsxs)("div", {
        className: l()(s.buttonContainer, r),
        children: [
            (0, i.jsx)(a.P3F, {
                className: s.button,
                onClick: t,
                "aria-hidden": !0,
                children: (0, i.jsx)(u, {
                    size: "md",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
            null != n && c
                ? (0, i.jsx)(a.Text, {
                      className: s.keybind,
                      "aria-hidden": !0,
                      variant: "text-xxs/bold",
                      color: "interactive-normal",
                      children: n,
                  })
                : null,
        ],
    });
}

n.d(t, {
    J: () => s,
    p: () => o,
});
var r = n(595707),
    i = n(156748),
    a = n(473749);
let o = (0, a.createContext)({ isSelected: !1 }),
    s = (0, a.forwardRef)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, o);
        let { isSelected: n, ...s } = e;
        return a.createElement(i.r, {
            ...s,
            ref: t,
            className: e.className || "react-aria-SelectionIndicator",
            name: "SelectionIndicator",
            isVisible: n,
        });
    });

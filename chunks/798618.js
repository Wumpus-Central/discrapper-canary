r.d(t, { F: () => f });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(312640),
    o = r(824078);
function c() {
    return (0, n.jsxs)("svg", {
        width: "22",
        height: "14",
        viewBox: "0 0 22 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: o.caretIcon,
        children: [
            (0, n.jsx)("path", {
                className: o.caretFill,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, n.jsx)("path", {
                className: o.caretGradient,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, n.jsx)("mask", {
                id: "mask0_caret",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "22",
                height: "11",
                children: (0, n.jsx)("path", {
                    d: "M14.0535 9.39126C12.4557 11.2796 9.54425 11.2796 7.94646 9.39126L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39126Z",
                    className: o.caretFill,
                }),
            }),
            (0, n.jsx)("g", {
                mask: "url(#mask0_caret)",
                children: (0, n.jsx)("path", {
                    className: o.caretStroke,
                    d: "M13.6572 9.13184C12.2604 10.761 9.73957 10.761 8.34277 9.13184L1.0869141 0.5Q0.0869141 -0.5 1.0869141 -0.5L20.9131 -0.5Q21.9131 -0.5 20.9131 0.5L13.6572 9.13184Z",
                }),
            }),
        ],
    });
}
var u = r(795127),
    d = r(638671);
let h = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        r = t / 2 - 12;
    return Math.max(-r, Math.min(r, e));
};
function f(e) {
    let { className: t } = e,
        r = a.useContext(i.e);
    if (null == r) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: l, caretConfig: o } = r,
        f = (0, u.g)(l),
        { align: p, customOffset: m } = o,
        x =
            "custom" === p && void 0 !== m
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(f) ? `${h(m)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(f) ? `${h(m)}px` : "0px",
                  }
                : void 0,
        g = s()(d.caret, d[`caret--${f}`], d[`caret--${p}`], t);
    return (0, n.jsx)("div", { className: g, style: x, children: (0, n.jsx)(c, {}) });
}

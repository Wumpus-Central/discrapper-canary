n.d(t, { F: () => p });
var a = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    s = n(273875),
    o = n(489387);
function c() {
    return (0, a.jsxs)("svg", {
        width: "22",
        height: "14",
        viewBox: "0 0 22 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: o.caretIcon,
        children: [
            (0, a.jsx)("path", {
                className: o.caretFill,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, a.jsx)("path", {
                className: o.caretGradient,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, a.jsx)("mask", {
                id: "mask0_caret",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "22",
                height: "11",
                children: (0, a.jsx)("path", {
                    d: "M14.0535 9.39126C12.4557 11.2796 9.54425 11.2796 7.94646 9.39126L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39126Z",
                    className: o.caretFill,
                }),
            }),
            (0, a.jsx)("g", {
                mask: "url(#mask0_caret)",
                children: (0, a.jsx)("path", {
                    className: o.caretStroke,
                    d: "M13.6572 9.13184C12.2604 10.761 9.73957 10.761 8.34277 9.13184L1.0869141 0.5Q0.0869141 -0.5 1.0869141 -0.5L20.9131 -0.5Q21.9131 -0.5 20.9131 0.5L13.6572 9.13184Z",
                }),
            }),
        ],
    });
}
var d = n(795127),
    u = n(891100);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        n = t / 2 - 12;
    return Math.max(-n, Math.min(n, e));
}
function p(e) {
    let { className: t } = e,
        n = r.useContext(s.e);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: l, caretConfig: o } = n,
        p = (0, d.g)(l),
        { align: h, customOffset: _ } = o,
        g =
            "custom" === h && void 0 !== _
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(p) ? `${m(_)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(p) ? `${m(_)}px` : "0px",
                  }
                : void 0,
        f = i()(u.caret, u[`caret--${p}`], u[`caret--${h}`], t);
    return (0, a.jsx)("div", { className: f, style: g, children: (0, a.jsx)(c, {}) });
}

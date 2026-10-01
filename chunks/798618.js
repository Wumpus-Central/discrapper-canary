r.d(t, { F: () => p });
var n = r(477900),
    o = r(582128),
    a = r(503698),
    s = r.n(a),
    i = r(273875),
    l = r(489387);
function c() {
    return (0, n.jsxs)("svg", {
        width: "22",
        height: "14",
        viewBox: "0 0 22 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: l.caretIcon,
        children: [
            (0, n.jsx)("path", {
                className: l.caretFill,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, n.jsx)("path", {
                className: l.caretGradient,
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
                    className: l.caretFill,
                }),
            }),
            (0, n.jsx)("g", {
                mask: "url(#mask0_caret)",
                children: (0, n.jsx)("path", {
                    className: l.caretStroke,
                    d: "M13.6572 9.13184C12.2604 10.761 9.73957 10.761 8.34277 9.13184L1.0869141 0.5Q0.0869141 -0.5 1.0869141 -0.5L20.9131 -0.5Q21.9131 -0.5 20.9131 0.5L13.6572 9.13184Z",
                }),
            }),
        ],
    });
}
var u = r(795127),
    d = r(891100);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        r = t / 2 - 12;
    return Math.max(-r, Math.min(r, e));
}
function p(e) {
    let { className: t } = e,
        r = o.useContext(i.e);
    if (null == r) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: a, caretConfig: l } = r,
        p = (0, u.g)(a),
        { align: m, customOffset: h } = l,
        x =
            "custom" === m && void 0 !== h
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(p) ? `${f(h)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(p) ? `${f(h)}px` : "0px",
                  }
                : void 0,
        g = s()(d.caret, d[`caret--${p}`], d[`caret--${m}`], t);
    return (0, n.jsx)("div", { className: g, style: x, children: (0, n.jsx)(c, {}) });
}

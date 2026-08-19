n.d(t, { F: () => S });
var i = n(477900),
    s = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(273875),
    E = n(753094);
function o() {
    return (0, i.jsxs)("svg", {
        width: "22",
        height: "14",
        viewBox: "0 0 22 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: E.caretIcon,
        children: [
            (0, i.jsx)("path", {
                className: E.caretFill,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, i.jsx)("path", {
                className: E.caretGradient,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, i.jsx)("mask", {
                id: "mask0_caret",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "22",
                height: "11",
                children: (0, i.jsx)("path", {
                    d: "M14.0535 9.39126C12.4557 11.2796 9.54425 11.2796 7.94646 9.39126L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39126Z",
                    className: E.caretFill,
                }),
            }),
            (0, i.jsx)("g", {
                mask: "url(#mask0_caret)",
                children: (0, i.jsx)("path", {
                    className: E.caretStroke,
                    d: "M13.6572 9.13184C12.2604 10.761 9.73957 10.761 8.34277 9.13184L1.0869141 0.5Q0.0869141 -0.5 1.0869141 -0.5L20.9131 -0.5Q21.9131 -0.5 20.9131 0.5L13.6572 9.13184Z",
                }),
            }),
        ],
    });
}
var c = n(795127),
    d = n(418647);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        n = t / 2 - 12;
    return Math.max(-n, Math.min(n, e));
}
function S(e) {
    let { className: t } = e,
        n = s.useContext(r.e);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: a, caretConfig: E } = n,
        S = (0, c.g)(a),
        { align: u, customOffset: A } = E,
        I =
            "custom" === u && void 0 !== A
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(S) ? `${_(A)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(S) ? `${_(A)}px` : "0px",
                  }
                : void 0,
        h = l()(d.caret, d[`caret--${S}`], d[`caret--${u}`], t);
    return (0, i.jsx)("div", { className: h, style: I, children: (0, i.jsx)(o, {}) });
}

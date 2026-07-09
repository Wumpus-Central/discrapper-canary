"use strict";
n.d(t, { F: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(312640),
    o = n(77006);
function d() {
    return (0, i.jsxs)("svg", {
        width: "22",
        height: "14",
        viewBox: "0 0 22 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: o.caretIcon,
        children: [
            (0, i.jsx)("path", {
                className: o.caretFill,
                d: "M14.0535 9.39127C12.4557 11.2796 9.54425 11.2796 7.94646 9.39127L1 1Q0 0 1 0L21 0Q22 0 21 1L14.0535 9.39127Z",
            }),
            (0, i.jsx)("path", {
                className: o.caretGradient,
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
                    className: o.caretFill,
                }),
            }),
            (0, i.jsx)("g", {
                mask: "url(#mask0_caret)",
                children: (0, i.jsx)("path", {
                    className: o.caretStroke,
                    d: "M13.6572 9.13184C12.2604 10.761 9.73957 10.761 8.34277 9.13184L1.0869141 0.5Q0.0869141 -0.5 1.0869141 -0.5L20.9131 -0.5Q21.9131 -0.5 20.9131 0.5L13.6572 9.13184Z",
                }),
            }),
        ],
    });
}
var c = n(795127),
    u = n(652303);
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        n = t / 2 - 12;
    return Math.max(-n, Math.min(n, e));
};
function E(e) {
    let { className: t } = e,
        n = r.useContext(l.e);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: a, caretConfig: o } = n,
        E = (0, c.g)(a),
        { align: A, customOffset: h } = o,
        I =
            "custom" === A && void 0 !== h
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(E) ? `${_(h)}px` : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(E) ? `${_(h)}px` : "0px",
                  }
                : void 0,
        f = s()(u.caret, u[`caret--${E}`], u[`caret--${A}`], t);
    return (0, i.jsx)("div", { className: f, style: I, children: (0, i.jsx)(d, {}) });
}

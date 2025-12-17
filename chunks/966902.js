n.d(t, { $: () => p }), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(920155),
    l = n(168179),
    c = n(945909),
    u = n(647623);
let d = 12,
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
            n = t / 2 - d;
        return Math.max(-n, Math.min(n, e));
    };
function p(e) {
    let { className: t } = e,
        n = i.useContext(s.I);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: a, caretConfig: d } = n,
        p = (0, c.z)(a),
        { align: _, customOffset: m } = d,
        h =
            "custom" === _ && void 0 !== m
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(p) ? "".concat(f(m), "px") : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(p) ? "".concat(f(m), "px") : "0px",
                  }
                : void 0,
        g = o()(u.caret, u["caret--".concat(p)], u["caret--".concat(_)], t);
    return (0, r.jsx)("div", {
        className: g,
        style: h,
        children: (0, r.jsx)(l.v, {}),
    });
}

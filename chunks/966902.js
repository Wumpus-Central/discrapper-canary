n.d(t, { $: () => _ }), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(920155),
    l = n(168179),
    c = n(945909),
    u = n(805508);
let d = 12,
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
            n = t / 2 - d;
        return Math.max(-n, Math.min(n, e));
    };
function _(e) {
    let { className: t } = e,
        n = i.useContext(s.I);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let { position: a, caretConfig: d } = n,
        _ = (0, c.z)(a),
        { align: p, customOffset: h } = d,
        m =
            "custom" === p && void 0 !== h
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(_) ? "".concat(f(h), "px") : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(_) ? "".concat(f(h), "px") : "0px",
                  }
                : void 0,
        g = o()(u.caret, u["caret--".concat(_)], u["caret--".concat(p)], t);
    return (0, r.jsx)("div", {
        className: g,
        style: m,
        children: (0, r.jsx)(l.v, {}),
    });
}

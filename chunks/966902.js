n.d(t, { $: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(168179),
    s = n(805508);
let l = 12,
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
            n = t / 2 - l;
        return Math.max(-n, Math.min(n, e));
    };
function u(e) {
    let { caretConfig: t, className: n } = e,
        { position: i, align: l, customOffset: u } = t,
        d =
            "custom" === l && void 0 !== u
                ? {
                      "--custom-caret-offset-x": ["top", "bottom"].includes(i) ? "".concat(c(u), "px") : "0px",
                      "--custom-caret-offset-y": ["left", "right"].includes(i) ? "".concat(c(u), "px") : "0px",
                  }
                : void 0,
        f = a()(s.caret, s["caret--".concat(i)], s["caret--".concat(l)], n);
    return (0, r.jsx)("div", {
        className: f,
        style: d,
        children: (0, r.jsx)(o.v, {}),
    });
}

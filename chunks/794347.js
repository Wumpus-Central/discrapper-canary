n.d(t, {
    Z: () => g,
    _: () => p,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(477690),
    c = n(393238),
    u = n(162168),
    d = n(624138),
    f = n(806390);
let _ = (0, d.Mg)(l.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var p = (function (e) {
    return (e.BLACK = "BLACK"), (e.GRAY = "GRAY"), e;
})({});
let h = {
    BLACK: f.black,
    GRAY: f.gray,
};
function m(e) {
    return Math.round(e / _) * _;
}
function g(e) {
    let {
            notchBackground: t,
            progress: n,
            gradientStart: a = s.Z.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: l = s.Z.unsafe_rawColors.GREEN_360.css,
            className: d,
            notchClassName: _,
            children: p,
        } = e,
        { ref: g, width: E } = (0, c.ZP)(),
        b = i.useMemo(() => (null != E ? m(E) : 0), [E]),
        y = i.useMemo(() => {
            let e = Math.abs(m((b * (100 - Math.max(0, Math.min(100, n)))) / 100) - b);
            return { transform: "translateX(".concat(e, "px)") };
        }, [n, b]),
        O = i.useMemo(
            () => ({
                width: "".concat(b, "px"),
                background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(a, ", ").concat(l, ")"),
            }),
            [l, a, n, b],
        );
    return (0, r.jsxs)("div", {
        className: f.wrapper,
        ref: g,
        children: [
            (0, r.jsxs)("div", {
                className: o()(f.container, d),
                style: O,
                children: [
                    (0, r.jsx)("div", {
                        className: f.progress,
                        style: y,
                    }),
                    0 !== b &&
                        (0, r.jsx)(u.Z, {
                            width: b,
                            className: o()(f.notches, h[t], _),
                        }),
                ],
            }),
            p,
        ],
    });
}

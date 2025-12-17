n.d(t, {
    Z: () => g,
    _: () => _,
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
    f = n(644887);
let p = (0, d.Mg)(l.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var _ = (function (e) {
    return (e.BLACK = "BLACK"), (e.GRAY = "GRAY"), e;
})({});
let m = {
    BLACK: f.black,
    GRAY: f.gray,
};
function h(e) {
    return Math.round(e / p) * p;
}
function g(e) {
    let {
            notchBackground: t,
            progress: n,
            gradientStart: a = s.Z.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: l = s.Z.unsafe_rawColors.GREEN_360.css,
            className: d,
            notchClassName: p,
            children: _,
        } = e,
        { ref: g, width: E } = (0, c.ZP)(),
        b = i.useMemo(() => (null != E ? h(E) : 0), [E]),
        y = i.useMemo(() => {
            let e = Math.abs(h((b * (100 - Math.max(0, Math.min(100, n)))) / 100) - b);
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
                            className: o()(f.notches, m[t], p),
                        }),
                ],
            }),
            _,
        ],
    });
}

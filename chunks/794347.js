n.d(t, {
    Z: () => g,
    _: () => p,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(477690),
    c = n(393238),
    u = n(162168),
    d = n(624138),
    f = n(776421);
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
            children: _,
        } = e,
        { ref: p, width: g } = (0, c.ZP)(),
        E = i.useMemo(() => (null != g ? m(g) : 0), [g]),
        b = i.useMemo(() => {
            let e = Math.abs(m((E * (100 - Math.max(0, Math.min(100, n)))) / 100) - E);
            return { transform: "translateX(".concat(e, "px)") };
        }, [n, E]),
        y = i.useMemo(
            () => ({
                width: "".concat(E, "px"),
                background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(a, ", ").concat(l, ")"),
            }),
            [l, a, n, E],
        );
    return (0, r.jsxs)("div", {
        className: f.wrapper,
        ref: p,
        children: [
            (0, r.jsxs)("div", {
                className: o()(f.container, d),
                style: y,
                children: [
                    (0, r.jsx)("div", {
                        className: f.progress,
                        style: b,
                    }),
                    0 !== E &&
                        (0, r.jsx)(u.Z, {
                            width: E,
                            className: o()(f.notches, h[t]),
                        }),
                ],
            }),
            _,
        ],
    });
}

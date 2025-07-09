n.d(t, {
    Z: () => x,
    _: () => h
});
var i,
    r = n(255367),
    s = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(692547),
    c = n(477690),
    d = n(393238),
    u = n(162168),
    m = n(624138),
    p = n(182323);
let g = (0, m.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var h = (((i = {}).BLACK = 'BLACK'), (i.GRAY = 'GRAY'), i);
let f = {
    BLACK: p.black,
    GRAY: p.gray
};
function b(e) {
    return Math.round(e / g) * g;
}
function x(e) {
    let { notchBackground: t, progress: n, gradientStart: i = o.Z.unsafe_rawColors.YELLOW_260.css, gradientEnd: a = o.Z.unsafe_rawColors.GREEN_360.css, className: c, children: m } = e,
        { ref: g, width: h } = (0, d.ZP)(),
        x = s.useMemo(() => (null != h ? b(h) : 0), [h]),
        _ = s.useMemo(() => {
            let e = Math.abs(b((x * (100 - Math.max(0, Math.min(100, n)))) / 100) - x);
            return { transform: 'translateX('.concat(e, 'px)') };
        }, [n, x]),
        j = s.useMemo(
            () => ({
                width: ''.concat(x, 'px'),
                background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(i, ', ').concat(a, ')')
            }),
            [a, i, n, x]
        );
    return (0, r.jsxs)('div', {
        className: p.wrapper,
        ref: g,
        children: [
            (0, r.jsxs)('div', {
                className: l()(p.container, c),
                style: j,
                children: [
                    (0, r.jsx)('div', {
                        className: p.progress,
                        style: _
                    }),
                    0 !== x &&
                        (0, r.jsx)(u.Z, {
                            width: x,
                            className: l()(p.notches, f[t])
                        })
                ]
            }),
            m
        ]
    });
}

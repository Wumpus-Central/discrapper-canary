n.d(t, {
    Z: () => x,
    _: () => h
});
var i,
    r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(692547),
    c = n(477690),
    d = n(393238),
    u = n(162168),
    m = n(624138),
    g = n(182323);
let p = (0, m.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var h = (((i = {}).BLACK = 'BLACK'), (i.GRAY = 'GRAY'), i);
let f = {
    BLACK: g.black,
    GRAY: g.gray
};
function b(e) {
    return Math.round(e / p) * p;
}
function x(e) {
    let { notchBackground: t, progress: n, gradientStart: i = o.Z.unsafe_rawColors.YELLOW_260.css, gradientEnd: l = o.Z.unsafe_rawColors.GREEN_360.css, className: c, children: m } = e,
        { ref: p, width: h } = (0, d.ZP)(),
        x = s.useMemo(() => (null != h ? b(h) : 0), [h]),
        _ = s.useMemo(() => {
            let e = Math.abs(b((x * (100 - Math.max(0, Math.min(100, n)))) / 100) - x);
            return { transform: 'translateX('.concat(e, 'px)') };
        }, [n, x]),
        E = s.useMemo(
            () => ({
                width: ''.concat(x, 'px'),
                background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(i, ', ').concat(l, ')')
            }),
            [l, i, n, x]
        );
    return (0, r.jsxs)('div', {
        className: g.wrapper,
        ref: p,
        children: [
            (0, r.jsxs)('div', {
                className: a()(g.container, c),
                style: E,
                children: [
                    (0, r.jsx)('div', {
                        className: g.progress,
                        style: _
                    }),
                    0 !== x &&
                        (0, r.jsx)(u.Z, {
                            width: x,
                            className: a()(g.notches, f[t])
                        })
                ]
            }),
            m
        ]
    });
}

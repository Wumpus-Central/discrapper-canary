n.d(t, {
    Z: () => _,
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
    g = n(624138),
    m = n(182323);
let p = (0, g.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var h = (((i = {}).BLACK = 'BLACK'), (i.GRAY = 'GRAY'), i);
let f = {
    BLACK: m.black,
    GRAY: m.gray
};
function b(e) {
    return Math.round(e / p) * p;
}
function _(e) {
    let { notchBackground: t, progress: n, gradientStart: i = o.Z.unsafe_rawColors.YELLOW_260.css, gradientEnd: l = o.Z.unsafe_rawColors.GREEN_360.css, className: c, children: g } = e,
        { ref: p, width: h } = (0, d.ZP)(),
        _ = s.useMemo(() => (null != h ? b(h) : 0), [h]),
        x = s.useMemo(() => {
            let e = Math.abs(b((_ * (100 - Math.max(0, Math.min(100, n)))) / 100) - _);
            return { transform: 'translateX('.concat(e, 'px)') };
        }, [n, _]),
        E = s.useMemo(
            () => ({
                width: ''.concat(_, 'px'),
                background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(i, ', ').concat(l, ')')
            }),
            [l, i, n, _]
        );
    return (0, r.jsxs)('div', {
        className: m.wrapper,
        ref: p,
        children: [
            (0, r.jsxs)('div', {
                className: a()(m.container, c),
                style: E,
                children: [
                    (0, r.jsx)('div', {
                        className: m.progress,
                        style: x
                    }),
                    0 !== _ &&
                        (0, r.jsx)(u.Z, {
                            width: _,
                            className: a()(m.notches, f[t])
                        })
                ]
            }),
            g
        ]
    });
}

n.d(t, {
    Z: () => _,
    _: () => h
});
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(692547),
    c = n(477690),
    d = n(393238),
    u = n(162168),
    m = n(624138),
    g = n(182323);
let p = (0, m.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var h = (((r = {}).BLACK = 'BLACK'), (r.GRAY = 'GRAY'), r);
let f = {
    BLACK: g.black,
    GRAY: g.gray
};
function b(e) {
    return Math.round(e / p) * p;
}
function _(e) {
    let { notchBackground: t, progress: n, gradientStart: r = o.Z.unsafe_rawColors.YELLOW_260.css, gradientEnd: a = o.Z.unsafe_rawColors.GREEN_360.css, className: c, children: m } = e,
        { ref: p, width: h } = (0, d.ZP)(),
        _ = s.useMemo(() => (null != h ? b(h) : 0), [h]),
        N = s.useMemo(() => {
            let e = Math.abs(b((_ * (100 - Math.max(0, Math.min(100, n)))) / 100) - _);
            return { transform: 'translateX('.concat(e, 'px)') };
        }, [n, _]),
        x = s.useMemo(
            () => ({
                width: ''.concat(_, 'px'),
                background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(r, ', ').concat(a, ')')
            }),
            [a, r, n, _]
        );
    return (0, i.jsxs)('div', {
        className: g.wrapper,
        ref: p,
        children: [
            (0, i.jsxs)('div', {
                className: l()(g.container, c),
                style: x,
                children: [
                    (0, i.jsx)('div', {
                        className: g.progress,
                        style: N
                    }),
                    0 !== _ &&
                        (0, i.jsx)(u.Z, {
                            width: _,
                            className: l()(g.notches, f[t])
                        })
                ]
            }),
            m
        ]
    });
}

n.d(t, {
    Z: () => x,
    _: () => p
});
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(692547),
    c = n(477690),
    d = n(393238),
    u = n(162168),
    m = n(624138),
    g = n(539294);
let _ = (0, m.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var p = (((i = {}).BLACK = 'BLACK'), (i.GRAY = 'GRAY'), i);
let f = {
    BLACK: g.black,
    GRAY: g.gray
};
function h(e) {
    return Math.round(e / _) * _;
}
function x(e) {
    let { notchBackground: t, progress: n, gradientStart: i = o.Z.unsafe_rawColors.YELLOW_260.css, gradientEnd: s = o.Z.unsafe_rawColors.GREEN_360.css, className: c, children: m } = e,
        { ref: _, width: p } = (0, d.Z)(),
        x = a.useMemo(() => (null != p ? h(p) : 0), [p]),
        E = a.useMemo(() => {
            let e = Math.abs(h((x * (100 - Math.max(0, Math.min(100, n)))) / 100) - x);
            return { transform: 'translateX('.concat(e, 'px)') };
        }, [n, x]),
        C = a.useMemo(
            () => ({
                width: ''.concat(x, 'px'),
                background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(i, ', ').concat(s, ')')
            }),
            [s, i, n, x]
        );
    return (0, r.jsxs)('div', {
        className: g.wrapper,
        ref: _,
        children: [
            (0, r.jsxs)('div', {
                className: l()(g.container, c),
                style: C,
                children: [
                    (0, r.jsx)('div', {
                        className: g.progress,
                        style: E
                    }),
                    0 !== x &&
                        (0, r.jsx)(u.Z, {
                            width: x,
                            className: l()(g.notches, f[t])
                        })
                ]
            }),
            m
        ]
    });
}

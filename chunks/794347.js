n.d(t, {
    Z: () => E,
    _: () => x
});
var i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(692547),
    c = n(477690),
    d = n(393238),
    u = n(162168),
    m = n(624138),
    h = n(539294);
let g = (0, m.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
var x = (((i = {}).BLACK = 'BLACK'), (i.GRAY = 'GRAY'), i);
let _ = {
    BLACK: h.black,
    GRAY: h.gray
};
function p(e) {
    return Math.round(e / g) * g;
}
function E(e) {
    let { notchBackground: t, progress: n, gradientStart: i = o.Z.unsafe_rawColors.YELLOW_260.css, gradientEnd: l = o.Z.unsafe_rawColors.GREEN_360.css, className: c, children: m } = e,
        { ref: g, width: x } = (0, d.Z)(),
        E = r.useMemo(() => (null != x ? p(x) : 0), [x]),
        C = r.useMemo(() => {
            let e = Math.abs(p((E * (100 - Math.max(0, Math.min(100, n)))) / 100) - E);
            return { transform: 'translateX('.concat(e, 'px)') };
        }, [n, E]),
        f = r.useMemo(
            () => ({
                width: ''.concat(E, 'px'),
                background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(i, ', ').concat(l, ')')
            }),
            [l, i, n, E]
        );
    return (0, s.jsxs)('div', {
        className: h.wrapper,
        ref: g,
        children: [
            (0, s.jsxs)('div', {
                className: a()(h.container, c),
                style: f,
                children: [
                    (0, s.jsx)('div', {
                        className: h.progress,
                        style: C
                    }),
                    0 !== E &&
                        (0, s.jsx)(u.Z, {
                            width: E,
                            className: a()(h.notches, _[t])
                        })
                ]
            }),
            m
        ]
    });
}

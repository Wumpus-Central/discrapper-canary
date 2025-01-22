n.d(t, {
    Z: function () {
        return _;
    },
    _: function () {
        return r;
    }
});
var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(692547),
    d = n(477690),
    u = n(393238),
    m = n(162168),
    g = n(624138),
    h = n(261886);
let p = (0, g.Mg)(d.Z.GRADIENT_PROGRESS_NOTCH_WIDTH);
((i = r || (r = {})).BLACK = 'BLACK'), (i.GRAY = 'GRAY');
let x = {
    BLACK: h.black,
    GRAY: h.gray
};
function f(e) {
    return Math.round(e / p) * p;
}
function _(e) {
    let { notchBackground: t, progress: n, gradientStart: i = c.Z.unsafe_rawColors.YELLOW_260.css, gradientEnd: r = c.Z.unsafe_rawColors.GREEN_360.css, className: l, children: d } = e,
        { ref: g, width: p } = (0, u.Z)(),
        _ = a.useMemo(() => (null != p ? f(p) : 0), [p]),
        E = a.useMemo(() => {
            let e = Math.max(0, Math.min(100, n)),
                t = Math.abs(f((_ * (100 - e)) / 100) - _);
            return { transform: 'translateX('.concat(t, 'px)') };
        }, [n, _]),
        C = a.useMemo(
            () => ({
                width: ''.concat(_, 'px'),
                background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(i, ', ').concat(r, ')')
            }),
            [r, i, n, _]
        );
    return (0, s.jsxs)('div', {
        className: h.wrapper,
        ref: g,
        children: [
            (0, s.jsxs)('div', {
                className: o()(h.container, l),
                style: C,
                children: [
                    (0, s.jsx)('div', {
                        className: h.progress,
                        style: E
                    }),
                    0 !== _ &&
                        (0, s.jsx)(m.Z, {
                            width: _,
                            className: o()(h.notches, x[t])
                        })
                ]
            }),
            d
        ]
    });
}

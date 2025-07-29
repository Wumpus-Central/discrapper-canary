(n.d(t, {
    Z: () => b,
    p: () => g
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(519160),
    l = n(956664),
    c = n(730606),
    u = n(369171),
    d = n(179963);
let _ = 24,
    f = 36,
    p = 76,
    h = 88,
    m = 272;
function g(e, t) {
    let n = window.innerWidth - (e ? p : _) * 2,
        r = window.innerHeight - 2 * h;
    if (!(0, l._H)(t))
        return {
            width: n,
            height: r
        };
    let { width: i, height: a } = t,
        o = window.innerWidth - 2 * m,
        s = window.innerHeight - (e ? h : f) * 2,
        c = (0, l.Tj)({
            width: i,
            height: a,
            maxWidth: n,
            maxHeight: r
        }),
        u = (0, l.Tj)({
            width: i,
            height: a,
            maxWidth: o,
            maxHeight: s
        });
    return c.width >= u.width ? c : u;
}
function E(e) {
    let { items: t, currentIndex: n, children: a } = e,
        l = t[n],
        _ = g(t.length > 1, {
            width: l.width,
            height: l.height
        }),
        [f, p] = i.useState(0);
    return (
        i.useEffect(() => {
            let e = () => p((e) => e + 1);
            return (window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
        }),
        i.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, s.gN)(n - 1, t.length)],
                    r = t[(0, s.gN)(n + 1, t.length)];
                ((0, c.WG)(e, !0), t.length > 2 && (0, c.WG)(r, !0));
            }
        }, [n, t]),
        (0, r.jsx)(u.ZP, {
            mode: u.lx.PINNED,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: o()(d.mediaArea, e),
                        children: _.width > 0 && _.height > 0 && a(_.width, _.height)
                    },
                    l.url
                )
        })
    );
}
let b = i.memo(E);

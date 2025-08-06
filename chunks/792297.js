n.d(t, {
    Z: () => b,
    p: () => g,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(519160),
    l = n(956664),
    c = n(730606),
    u = n(369171),
    d = n(179963);
let f = 24,
    _ = 36,
    p = 76,
    h = 88,
    m = 272;
function g(e, t) {
    let n = window.innerWidth - (e ? p : f) * 2,
        r = window.innerHeight - 2 * h;
    if (!(0, l._H)(t))
        return {
            width: n,
            height: r,
        };
    let { width: i, height: o } = t,
        a = window.innerWidth - 2 * m,
        s = window.innerHeight - (e ? h : _) * 2,
        c = (0, l.Tj)({
            width: i,
            height: o,
            maxWidth: n,
            maxHeight: r,
        }),
        u = (0, l.Tj)({
            width: i,
            height: o,
            maxWidth: a,
            maxHeight: s,
        });
    return c.width >= u.width ? c : u;
}
function E(e) {
    let { items: t, currentIndex: n, children: o } = e,
        l = t[n],
        f = g(t.length > 1, {
            width: l.width,
            height: l.height,
        }),
        [_, p] = i.useState(0);
    return (
        i.useEffect(() => {
            let e = () => p((e) => e + 1);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        i.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, s.gN)(n - 1, t.length)],
                    r = t[(0, s.gN)(n + 1, t.length)];
                (0, c.WG)(e, !0), t.length > 2 && (0, c.WG)(r, !0);
            }
        }, [n, t]),
        (0, r.jsx)(u.ZP, {
            mode: u.lx.PINNED,
            children: (e) =>
                (0, r.jsx)(
                    "div",
                    {
                        className: a()(d.mediaArea, e),
                        children: f.width > 0 && f.height > 0 && o(f.width, f.height),
                    },
                    l.url,
                ),
        })
    );
}
let b = i.memo(E);

n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(452282),
    o = n(967758),
    d = n(369254),
    u = n(358731),
    c = n(710096);
let h = l.memo(function (e) {
    let { items: t, currentIndex: n, children: r } = e,
        h = t[n],
        m = t.length > 1,
        p = (0, o.A)(m, { width: h.width, height: h.height }),
        [g, x] = l.useState(0);
    return (
        l.useEffect(() => {
            let e = () => x((e) => e + 1);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        l.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, s.U3)(n - 1, t.length)],
                    i = t[(0, s.U3)(n + 1, t.length)];
                (0, d.Z)(e, !0), t.length > 2 && (0, d.Z)(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(u.Ay, {
            mode: u.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: a()(c.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: p.width > 0 && p.height > 0 && r(p.width, p.height) },
                        h.url,
                    ),
                }),
        })
    );
});

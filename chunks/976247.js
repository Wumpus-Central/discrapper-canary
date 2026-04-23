n.d(t, { A: () => c });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(452282),
    o = n(967758),
    d = n(369254),
    u = n(358731),
    h = n(158816);
let c = a.memo(function (e) {
    let { items: t, currentIndex: n, children: r } = e,
        c = t[n],
        m = t.length > 1,
        g = (0, o.A)(m, { width: c.width, height: c.height }),
        [p, f] = a.useState(0);
    return (
        a.useEffect(() => {
            let e = () => f((e) => e + 1);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        a.useEffect(() => {
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
                    className: l()(h.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: g.width > 0 && g.height > 0 && r(g.width, g.height) },
                        c.url,
                    ),
                }),
        })
    );
});

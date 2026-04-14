"use strict";
n.d(t, { A: () => A, z: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(452282),
    l = n(515718),
    u = n(369254),
    c = n(358731),
    d = n(710096);
let _ = 24,
    f = 36,
    h = 76,
    p = 88,
    m = 272;
function E(e, t) {
    let n = window.innerWidth - (e ? h : _) * 2,
        r = window.innerHeight - 2 * p;
    if (!(0, l.eJ)(t)) return { width: n, height: r };
    let { width: i, height: s } = t,
        a = window.innerWidth - 2 * m,
        o = window.innerHeight - (e ? p : f) * 2,
        u = (0, l.Uj)({ width: i, height: s, maxWidth: n, maxHeight: r }),
        c = (0, l.Uj)({ width: i, height: s, maxWidth: a, maxHeight: o });
    return u.width >= c.width ? u : c;
}
function g(e) {
    let { items: t, currentIndex: n, children: s } = e,
        l = t[n],
        _ = E(t.length > 1, { width: l.width, height: l.height }),
        [f, h] = i.useState(0);
    return (
        i.useEffect(() => {
            let e = () => h((e) => e + 1);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        i.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, o.U3)(n - 1, t.length)],
                    r = t[(0, o.U3)(n + 1, t.length)];
                (0, u.Z5)(e, !0), t.length > 2 && (0, u.Z5)(r, !0);
            }
        }, [n, t]),
        (0, r.jsx)(c.Ay, {
            mode: c.nY.PINNED,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: a()(d.k4, e),
                    children: (0, r.jsx)(
                        "div",
                        { children: _.width > 0 && _.height > 0 && s(_.width, _.height) },
                        l.url,
                    ),
                }),
        })
    );
}
let A = i.memo(g);

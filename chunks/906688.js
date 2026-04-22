n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(827734),
    a = n(462887),
    l = n(778712),
    s = n(369606),
    o = n(194261),
    d = n(736653),
    u = n(682174),
    c = n(927018),
    A = n(661093);
let h = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    },
    _ = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    };
function E(e) {
    let { achievementId: t, unlocked: n, size: r = l._3.SIZE_40 } = e,
        E = (0, d.Ay)(),
        p = (0, c.vM)(t);
    if (null == p) return null;
    let m = (0, l.Kj)(r),
        { name: g, rarity: I } = p,
        { color: C } = (0, c.ag)(I),
        f = (0, a.M)(E) ? h : _,
        T = (m.size - m.offset - 2 * m.stroke) * 0.8,
        S = m.size - m.stroke,
        N = { width: 0.4 * T, height: 0.4 * T },
        O = { width: N.width + 1, height: N.height + 1, right: m.stroke + 1, bottom: m.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: A.kL,
        style: { width: S, height: S, padding: m.stroke },
        "aria-label": `${g() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: A.r5,
                children: (0, i.jsx)(s.O, { size: "custom", color: n ? C : f.trophy, width: T, height: T }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: A.dq,
                    style: O,
                    children: (0, i.jsx)(o.X, { size: "custom", color: f.locked, ...N }),
                }),
            n &&
                I === c.md.LEGENDARY &&
                (0, i.jsx)("div", { className: A.dq, style: O, children: (0, i.jsx)(u.A, { className: A.ox, ...N }) }),
        ],
    });
}
E.Sizes = l._3;

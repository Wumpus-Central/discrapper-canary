n.d(t, { A: () => g });
var i = n(477900);
n(582128);
var s = n(661531),
    r = n(462887),
    l = n(778712),
    a = n(369606),
    o = n(194261),
    c = n(736653),
    d = n(459793),
    u = n(927018),
    h = n(700696);
let C = {
        trophy: s.A.unsafe_rawColors.PRIMARY_400.css,
        locked: s.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: s.A.unsafe_rawColors.GREEN_330.css,
    },
    A = {
        trophy: s.A.unsafe_rawColors.PRIMARY_400.css,
        locked: s.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: s.A.unsafe_rawColors.GREEN_330.css,
    };
function g(e) {
    let { achievementId: t, unlocked: n, size: s = l._3.SIZE_40 } = e,
        g = (0, c.Ay)(),
        E = (0, u.vM)(t);
    if (null == E) return null;
    let p = (0, l.Kj)(s),
        { name: _, rarity: f } = E,
        { color: m } = (0, u.ag)(f),
        T = (0, r.M)(g) ? C : A,
        v = (p.size - p.offset - 2 * p.stroke) * 0.8,
        N = p.size - p.stroke,
        x = { width: 0.4 * v, height: 0.4 * v },
        I = { width: x.width + 1, height: x.height + 1, right: p.stroke + 1, bottom: p.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: h.kL,
        style: { width: N, height: N, padding: p.stroke },
        "aria-label": `${_() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: h.r5,
                children: (0, i.jsx)(a.TrophyIcon, { size: "custom", color: n ? m : T.trophy, width: v, height: v }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: h.dq,
                    style: I,
                    children: (0, i.jsx)(o.LockIcon, { size: "custom", color: T.locked, ...x }),
                }),
            n &&
                f === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: h.dq, style: I, children: (0, i.jsx)(d.A, { className: h.ox, ...x }) }),
        ],
    });
}
g.Sizes = l._3;

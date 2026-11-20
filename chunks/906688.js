var i = n(477900);
n(582128);
var r = n(646514),
    s = n(462887),
    l = n(778712),
    a = n(369606),
    o = n(194261),
    c = n(736653),
    d = n(459793),
    u = n(927018),
    h = n(700696);
let C = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    },
    A = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    };
function E(e) {
    let { achievementId: t, unlocked: n, size: r = l._3.SIZE_40 } = e,
        E = (0, c.Ay)(),
        _ = (0, u.vM)(t);
    if (null == _) return null;
    let g = (0, l.Kj)(r),
        { name: p, rarity: m } = _,
        { color: T } = (0, u.ag)(m),
        N = (0, s.M)(E) ? C : A,
        f = (g.size - g.offset - 2 * g.stroke) * 0.8,
        I = g.size - g.stroke,
        S = { width: 0.4 * f, height: 0.4 * f },
        x = { width: S.width + 1, height: S.height + 1, right: g.stroke + 1, bottom: g.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: h.kL,
        style: { width: I, height: I, padding: g.stroke },
        "aria-label": `${p() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: h.r5,
                children: (0, i.jsx)(a.TrophyIcon, { size: "custom", color: n ? T : N.trophy, width: f, height: f }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: h.dq,
                    style: x,
                    children: (0, i.jsx)(o.LockIcon, { size: "custom", color: N.locked, ...S }),
                }),
            n &&
                m === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: h.dq, style: x, children: (0, i.jsx)(d.A, { className: h.ox, ...S }) }),
        ],
    });
}
((E.Sizes = l._3), n.d(t, {}, { A: E }));

n.d(t, { A: () => C });
var i = n(477900);
n(582128);
var l = n(661531),
    r = n(462887),
    s = n(778712),
    a = n(369606),
    o = n(194261),
    d = n(736653),
    c = n(459793),
    u = n(927018),
    A = n(700696);
let E = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css,
    },
    h = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css,
    };
function C(e) {
    let { achievementId: t, unlocked: n, size: l = s._3.SIZE_40 } = e,
        C = (0, d.Ay)(),
        _ = (0, u.vM)(t);
    if (null == _) return null;
    let g = (0, s.Kj)(l),
        { name: I, rarity: T } = _,
        { color: p } = (0, u.ag)(T),
        N = (0, r.M)(C) ? E : h,
        S = (g.size - g.offset - 2 * g.stroke) * 0.8,
        O = g.size - g.stroke,
        f = { width: 0.4 * S, height: 0.4 * S },
        L = { width: f.width + 1, height: f.height + 1, right: g.stroke + 1, bottom: g.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: A.kL,
        style: { width: O, height: O, padding: g.stroke },
        "aria-label": `${I() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: A.r5,
                children: (0, i.jsx)(a.TrophyIcon, { size: "custom", color: n ? p : N.trophy, width: S, height: S }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: A.dq,
                    style: L,
                    children: (0, i.jsx)(o.LockIcon, { size: "custom", color: N.locked, ...f }),
                }),
            n &&
                T === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: A.dq, style: L, children: (0, i.jsx)(c.A, { className: A.ox, ...f }) }),
        ],
    });
}
C.Sizes = s._3;

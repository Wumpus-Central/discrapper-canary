n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(661531),
    r = n(462887),
    s = n(778712),
    a = n(369606),
    o = n(194261),
    d = n(736653),
    c = n(459793),
    u = n(927018),
    A = n(918245);
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
        g = (0, u.vM)(t);
    if (null == g) return null;
    let _ = (0, s.Kj)(l),
        { name: I, rarity: T } = g,
        { color: N } = (0, u.ag)(T),
        p = (0, r.M)(C) ? E : h,
        S = (_.size - _.offset - 2 * _.stroke) * 0.8,
        L = _.size - _.stroke,
        m = { width: 0.4 * S, height: 0.4 * S },
        O = { width: m.width + 1, height: m.height + 1, right: _.stroke + 1, bottom: _.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: A.kL,
        style: { width: L, height: L, padding: _.stroke },
        "aria-label": `${I() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: A.r5,
                children: (0, i.jsx)(a.O, { size: "custom", color: n ? N : p.trophy, width: S, height: S }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: A.dq,
                    style: O,
                    children: (0, i.jsx)(o.X, { size: "custom", color: p.locked, ...m }),
                }),
            n &&
                T === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: A.dq, style: O, children: (0, i.jsx)(c.A, { className: A.ox, ...m }) }),
        ],
    });
}
C.Sizes = s._3;

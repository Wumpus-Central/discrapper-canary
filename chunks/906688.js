n.d(t, { A: () => g });
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
    A = n(279149);
let h = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css,
    },
    E = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css,
    };
function g(e) {
    let { achievementId: t, unlocked: n, size: l = s._3.SIZE_40 } = e,
        g = (0, d.Ay)(),
        C = (0, u.vM)(t);
    if (null == C) return null;
    let _ = (0, s.Kj)(l),
        { name: I, rarity: T } = C,
        { color: p } = (0, u.ag)(T),
        N = (0, r.M)(g) ? h : E,
        S = (_.size - _.offset - 2 * _.stroke) * 0.8,
        L = _.size - _.stroke,
        m = { width: 0.4 * S, height: 0.4 * S },
        f = { width: m.width + 1, height: m.height + 1, right: _.stroke + 1, bottom: _.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: A.kL,
        style: { width: L, height: L, padding: _.stroke },
        "aria-label": `${I() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: A.r5,
                children: (0, i.jsx)(a.O, { size: "custom", color: n ? p : N.trophy, width: S, height: S }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: A.dq,
                    style: f,
                    children: (0, i.jsx)(o.X, { size: "custom", color: N.locked, ...m }),
                }),
            n &&
                T === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: A.dq, style: f, children: (0, i.jsx)(c.A, { className: A.ox, ...m }) }),
        ],
    });
}
g.Sizes = s._3;

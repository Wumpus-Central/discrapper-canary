n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(661531),
    s = n(462887),
    r = n(778712),
    o = n(369606),
    a = n(194261),
    d = n(736653),
    c = n(459793),
    u = n(927018),
    h = n(661093);
let A = {
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
    let { achievementId: t, unlocked: n, size: l = r._3.SIZE_40 } = e,
        g = (0, d.Ay)(),
        C = (0, u.vM)(t);
    if (null == C) return null;
    let _ = (0, r.Kj)(l),
        { name: I, rarity: T } = C,
        { color: p } = (0, u.ag)(T),
        S = (0, s.M)(g) ? A : E,
        N = (_.size - _.offset - 2 * _.stroke) * 0.8,
        L = _.size - _.stroke,
        O = { width: 0.4 * N, height: 0.4 * N },
        m = { width: O.width + 1, height: O.height + 1, right: _.stroke + 1, bottom: _.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: h.kL,
        style: { width: L, height: L, padding: _.stroke },
        "aria-label": `${I() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: h.r5,
                children: (0, i.jsx)(o.O, { size: "custom", color: n ? p : S.trophy, width: N, height: N }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: h.dq,
                    style: m,
                    children: (0, i.jsx)(a.X, { size: "custom", color: S.locked, ...O }),
                }),
            n &&
                T === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: h.dq, style: m, children: (0, i.jsx)(c.A, { className: h.ox, ...O }) }),
        ],
    });
}
g.Sizes = r._3;

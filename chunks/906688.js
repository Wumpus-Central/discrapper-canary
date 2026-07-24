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
    h = n(279149);
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
function C(e) {
    let { achievementId: t, unlocked: n, size: l = s._3.SIZE_40 } = e,
        C = (0, d.Ay)(),
        g = (0, u.vM)(t);
    if (null == g) return null;
    let _ = (0, s.Kj)(l),
        { name: I, rarity: T } = g,
        { color: p } = (0, u.ag)(T),
        S = (0, r.M)(C) ? A : E,
        N = (_.size - _.offset - 2 * _.stroke) * 0.8,
        m = _.size - _.stroke,
        L = { width: 0.4 * N, height: 0.4 * N },
        O = { width: L.width + 1, height: L.height + 1, right: _.stroke + 1, bottom: _.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: h.kL,
        style: { width: m, height: m, padding: _.stroke },
        "aria-label": `${I() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: h.r5,
                children: (0, i.jsx)(a.O, { size: "custom", color: n ? p : S.trophy, width: N, height: N }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: h.dq,
                    style: O,
                    children: (0, i.jsx)(o.X, { size: "custom", color: S.locked, ...L }),
                }),
            n &&
                T === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: h.dq, style: O, children: (0, i.jsx)(c.A, { className: h.ox, ...L }) }),
        ],
    });
}
C.Sizes = s._3;

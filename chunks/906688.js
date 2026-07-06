"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(661531),
    s = n(462887),
    a = n(778712),
    o = n(369606),
    l = n(194261),
    u = n(736653),
    c = n(459793),
    d = n(927018),
    _ = n(661093);
let h = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    },
    f = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    };
function E(e) {
    let { achievementId: t, unlocked: n, size: r = a._3.SIZE_40 } = e,
        E = (0, u.Ay)(),
        p = (0, d.vM)(t);
    if (null == p) return null;
    let m = (0, a.Kj)(r),
        { name: g, rarity: A } = p,
        { color: I } = (0, d.ag)(A),
        T = (0, s.M)(E) ? h : f,
        S = (m.size - m.offset - 2 * m.stroke) * 0.8,
        N = m.size - m.stroke,
        C = { width: 0.4 * S, height: 0.4 * S },
        y = { width: C.width + 1, height: C.height + 1, right: m.stroke + 1, bottom: m.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: _.kL,
        style: { width: N, height: N, padding: m.stroke },
        "aria-label": `${g() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: _.r5,
                children: (0, i.jsx)(o.O, { size: "custom", color: n ? I : T.trophy, width: S, height: S }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: _.dq,
                    style: y,
                    children: (0, i.jsx)(l.X, { size: "custom", color: T.locked, ...C }),
                }),
            n &&
                A === d.md.LEGENDARY &&
                (0, i.jsx)("div", { className: _.dq, style: y, children: (0, i.jsx)(c.A, { className: _.ox, ...C }) }),
        ],
    });
}
E.Sizes = a._3;

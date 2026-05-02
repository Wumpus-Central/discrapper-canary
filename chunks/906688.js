"use strict";
n.d(t, { A: () => p });
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
let f = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    },
    h = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    };
function p(e) {
    let { achievementId: t, unlocked: n, size: r = a._3.SIZE_40 } = e,
        p = (0, u.Ay)(),
        E = (0, d.vM)(t);
    if (null == E) return null;
    let m = (0, a.Kj)(r),
        { name: g, rarity: A } = E,
        { color: I } = (0, d.ag)(A),
        T = (0, s.M)(p) ? f : h,
        S = (m.size - m.offset - 2 * m.stroke) * 0.8,
        N = m.size - m.stroke,
        y = { width: 0.4 * S, height: 0.4 * S },
        C = { width: y.width + 1, height: y.height + 1, right: m.stroke + 1, bottom: m.stroke + 1, padding: 0 };
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
                    style: C,
                    children: (0, i.jsx)(l.X, { size: "custom", color: T.locked, ...y }),
                }),
            n &&
                A === d.md.LEGENDARY &&
                (0, i.jsx)("div", { className: _.dq, style: C, children: (0, i.jsx)(c.A, { className: _.ox, ...y }) }),
        ],
    });
}
p.Sizes = a._3;

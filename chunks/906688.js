"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(661531),
    a = n(462887),
    s = n(778712),
    l = n(369606),
    o = n(194261),
    d = n(736653),
    c = n(459793),
    u = n(927018),
    _ = n(661093);
let E = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    },
    A = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    };
function h(e) {
    let { achievementId: t, unlocked: n, size: r = s._3.SIZE_40 } = e,
        h = (0, d.Ay)(),
        I = (0, u.vM)(t);
    if (null == I) return null;
    let f = (0, s.Kj)(r),
        { name: p, rarity: T } = I,
        { color: m } = (0, u.ag)(T),
        g = (0, a.M)(h) ? E : A,
        S = (f.size - f.offset - 2 * f.stroke) * 0.8,
        N = f.size - f.stroke,
        C = { width: 0.4 * S, height: 0.4 * S },
        R = { width: C.width + 1, height: C.height + 1, right: f.stroke + 1, bottom: f.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: _.kL,
        style: { width: N, height: N, padding: f.stroke },
        "aria-label": `${p() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: _.r5,
                children: (0, i.jsx)(l.O, { size: "custom", color: n ? m : g.trophy, width: S, height: S }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: _.dq,
                    style: R,
                    children: (0, i.jsx)(o.X, { size: "custom", color: g.locked, ...C }),
                }),
            n &&
                T === u.md.LEGENDARY &&
                (0, i.jsx)("div", { className: _.dq, style: R, children: (0, i.jsx)(c.A, { className: _.ox, ...C }) }),
        ],
    });
}
h.Sizes = s._3;

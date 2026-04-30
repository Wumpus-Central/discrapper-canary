n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var a = n(661531),
    r = n(462887),
    s = n(778712),
    l = n(369606),
    o = n(194261),
    d = n(736653),
    c = n(459793),
    _ = n(927018),
    E = n(661093);
let u = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css,
    },
    A = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css,
    };
function I(e) {
    let { achievementId: t, unlocked: n, size: a = s._3.SIZE_40 } = e,
        I = (0, d.Ay)(),
        T = (0, _.vM)(t);
    if (null == T) return null;
    let h = (0, s.Kj)(a),
        { name: S, rarity: N } = T,
        { color: f } = (0, _.ag)(N),
        p = (0, r.M)(I) ? u : A,
        m = (h.size - h.offset - 2 * h.stroke) * 0.8,
        O = h.size - h.stroke,
        C = { width: 0.4 * m, height: 0.4 * m },
        R = { width: C.width + 1, height: C.height + 1, right: h.stroke + 1, bottom: h.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: E.kL,
        style: { width: O, height: O, padding: h.stroke },
        "aria-label": `${S() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: E.r5,
                children: (0, i.jsx)(l.O, { size: "custom", color: n ? f : p.trophy, width: m, height: m }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: E.dq,
                    style: R,
                    children: (0, i.jsx)(o.X, { size: "custom", color: p.locked, ...C }),
                }),
            n &&
                N === _.md.LEGENDARY &&
                (0, i.jsx)("div", { className: E.dq, style: R, children: (0, i.jsx)(c.A, { className: E.ox, ...C }) }),
        ],
    });
}
I.Sizes = s._3;

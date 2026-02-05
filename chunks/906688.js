n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(582754),
    a = n(397927),
    r = n(736653),
    o = n(682174),
    d = n(927018),
    c = n(715438);
let u = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css,
    },
    h = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css,
    };
function A(e) {
    let { achievementId: t, unlocked: n, size: l = a._3J.SIZE_40 } = e,
        A = (0, r.Ay)(),
        g = (0, d.vM)(t);
    if (null == g) return null;
    let m = (0, a.KjH)(l),
        { name: p, rarity: _ } = g,
        { color: x } = (0, d.ag)(_),
        f = (0, s.Mw)(A) ? u : h,
        E = (m.size - m.offset - 2 * m.stroke) * 0.8,
        C = m.size - m.stroke,
        I = { width: 0.4 * E, height: 0.4 * E },
        S = { width: I.width + 1, height: I.height + 1, right: m.stroke + 1, bottom: m.stroke + 1, padding: 0 };
    return (0, i.jsxs)("div", {
        className: c.kL,
        style: { width: C, height: C, padding: m.stroke },
        "aria-label": `${p() ?? ""}`,
        children: [
            (0, i.jsx)("div", {
                className: c.r5,
                children: (0, i.jsx)(a.OR, { size: "custom", color: n ? x : f.trophy, width: E, height: E }),
            }),
            !n &&
                (0, i.jsx)("div", {
                    className: c.dq,
                    style: S,
                    children: (0, i.jsx)(a.XAi, { size: "custom", color: f.locked, ...I }),
                }),
            n &&
                _ === d.md.LEGENDARY &&
                (0, i.jsx)("div", { className: c.dq, style: S, children: (0, i.jsx)(o.A, { className: c.ox, ...I }) }),
        ],
    });
}
A.Sizes = a._3J;

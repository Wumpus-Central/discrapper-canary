n.d(t, {
    $0: () => _,
    A5: () => d,
    UZ: () => p,
    Xr: () => S,
    as: () => u,
    cf: () => f,
    eT: () => g,
    gN: () => m,
    kv: () => c,
    mT: () => T,
    nO: () => I,
    xo: () => E,
});
var i = n(310784),
    r = n.n(i),
    a = n(508425),
    s = n(317097),
    l = n(52133),
    o = n(750656);
function d(e, t) {
    if (null == e) return null;
    let { fontId: n, effectId: i, colors: r } = e;
    return { fontId: n, effectId: i, colors: r.length > 0 ? r : t[i] };
}
function c(e, t) {
    return null == e || null == t
        ? null == e && null == t
        : e.fontId === t.fontId && e.effectId === t.effectId && (0, l.v)(e.colors, t.colors);
}
function u(e) {
    switch (e) {
        case a.z.GRADIENT:
            return 2;
        case a.z.GUMMY:
            return 4;
        case a.z.PRISM:
            return 5;
        default:
            return 1;
    }
}
function _(e) {
    let t = r()(e).alpha(1),
        n = t.get("hsl.l"),
        i = Math.min(1, 1.2 * t.get("hsl.s")),
        a = Math.min(0.6, n + 0.1);
    return {
        main: e,
        light1: t.set("hsl.l", Math.min(1, 1.2 * n)).hex(),
        light2: t.set("hsl.l", Math.min(1, 1.6 * n)).hex(),
        dark1: t.set("hsl.l", Math.max(0, 0.6 * n)).hex(),
        dark2: t.set("hsl.l", Math.max(0, 0.2 * n)).hex(),
        toonStroke: t.set("hsl.l", Math.max(0.12, 0.4 * n)).hex(),
        neonStroke: t.set("hsl.s", i).set("hsl.l", a).hex(),
    };
}
function E(e) {
    return ((e % 360) + 360) % 360;
}
(a.z.NEON, a.z.TOON, a.z.POP, a.z.GUMMY);
let A = [
    { hueShift: -18, saturation: 0.54, lightness: 0.72 },
    { hueShift: -5, saturation: 0.66, lightness: 0.6 },
    { hueShift: 9, saturation: 0.56, lightness: 0.68 },
    { hueShift: 22, saturation: 0.6, lightness: 0.63 },
];
function h(e) {
    let [t, n, i] = r()((0, s.Hl)(e)).hsl();
    return [Number.isNaN(t) ? 0 : t, n, i];
}
function f(e) {
    let [t] = h(e);
    return A.map((e) => {
        let { hueShift: n, saturation: i, lightness: a } = e;
        return r()
            .hsl(E(t + n), i, a)
            .num();
    });
}
function I(e) {
    let t = e[0];
    if (null == t) return p(0);
    let [n] = h(t);
    return p(E(n - A[0].hueShift));
}
function p(e) {
    return r().hsl(e, o.kp, o.PS).num();
}
function T(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function m(e, t) {
    let n = t[Math.floor(Math.random() * t.length)],
        i = e.filter((e) => !o.fY.includes(e)),
        r = i.length > 0 ? i : e,
        a = r[Math.floor(Math.random() * r.length)],
        s = (0, o.ii)(n);
    return { fontId: a, effectId: n, colors: [...s[Math.floor(Math.random() * s.length)]] };
}
function g(e, t) {
    return e.effectId === a.z.SOLID && e.colors.length > 0 && e.colors[0] === t ? { ...e, colors: [] } : e;
}
function S(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}

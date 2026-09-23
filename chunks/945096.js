n.d(t, {
    $0: () => u,
    Jq: () => d,
    UZ: () => f,
    Xr: () => g,
    as: () => c,
    cf: () => h,
    gN: () => T,
    mT: () => p,
    nO: () => I,
    sx: () => m,
    xo: () => _,
});
var i = n(310784),
    r = n.n(i),
    a = n(508425),
    s = n(559949),
    l = n(317097),
    o = n(750656);
function d(e, t, n) {
    return e === t || (0, o.ii)(n).some((t) => t[0] === e) ? e : t;
}
function c(e) {
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
function u(e) {
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
function _(e) {
    return ((e % 360) + 360) % 360;
}
(a.z.NEON, a.z.TOON, a.z.POP, a.z.GUMMY);
let E = [
    { hueShift: -18, saturation: 0.54, lightness: 0.72 },
    { hueShift: -5, saturation: 0.66, lightness: 0.6 },
    { hueShift: 9, saturation: 0.56, lightness: 0.68 },
    { hueShift: 22, saturation: 0.6, lightness: 0.63 },
];
function A(e) {
    let [t, n, i] = r()((0, l.Hl)(e)).hsl();
    return [Number.isNaN(t) ? 0 : t, n, i];
}
function h(e) {
    let [t] = A(e);
    return E.map((e) => {
        let { hueShift: n, saturation: i, lightness: a } = e;
        return r()
            .hsl(_(t + n), i, a)
            .num();
    });
}
function I(e) {
    let t = e[0];
    if (null == t) return f(0);
    let [n] = A(t);
    return f(_(n - E[0].hueShift));
}
function f(e) {
    return r().hsl(e, o.kp, o.PS).num();
}
function p(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function T(e, t) {
    let n = t[Math.floor(Math.random() * t.length)],
        i = e[Math.floor(Math.random() * e.length)],
        r = (0, o.ii)(n);
    return { fontId: i, effectId: n, colors: [...r[Math.floor(Math.random() * r.length)]] };
}
function m(e, t) {
    if (t || null == e) return e;
    let n = o._k.includes(e.fontId) ? s.x.DEFAULT : e.fontId,
        i = o.gz.includes(e.effectId) ? a.z.SOLID : e.effectId;
    return n === e.fontId && i === e.effectId ? e : { ...e, fontId: n, effectId: i };
}
function g(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}

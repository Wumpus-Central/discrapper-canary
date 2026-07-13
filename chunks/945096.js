"use strict";
n.d(t, {
    $0: () => c,
    UZ: () => I,
    Xr: () => m,
    as: () => d,
    cf: () => A,
    gN: () => p,
    mT: () => f,
    nO: () => h,
    sx: () => T,
    xo: () => u,
});
var i = n(310784),
    r = n.n(i),
    a = n(508425),
    s = n(559949),
    l = n(317097),
    o = n(750656);
function d(e) {
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
function c(e) {
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
function u(e) {
    return ((e % 360) + 360) % 360;
}
let _ = [
    { hueShift: -18, saturation: 0.54, lightness: 0.72 },
    { hueShift: -5, saturation: 0.66, lightness: 0.6 },
    { hueShift: 9, saturation: 0.56, lightness: 0.68 },
    { hueShift: 22, saturation: 0.6, lightness: 0.63 },
];
function E(e) {
    let [t, n, i] = r()((0, l.Hl)(e)).hsl();
    return [Number.isNaN(t) ? 0 : t, n, i];
}
function A(e) {
    let [t] = E(e);
    return _.map((e) => {
        let { hueShift: n, saturation: i, lightness: a } = e;
        return r()
            .hsl(u(t + n), i, a)
            .num();
    });
}
function h(e) {
    let t = e[0];
    if (null == t) return I(0);
    let [n] = E(t);
    return I(u(n - _[0].hueShift));
}
function I(e) {
    return r().hsl(e, o.kp, o.PS).num();
}
function f(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function p(e, t) {
    let n = t[Math.floor(Math.random() * t.length)],
        i = e[Math.floor(Math.random() * e.length)],
        r = (0, o.ii)(n);
    return { fontId: i, effectId: n, colors: [...r[Math.floor(Math.random() * r.length)]] };
}
function T(e, t) {
    if (t || null == e) return e;
    let n = o._k.includes(e.fontId) ? s.x.DEFAULT : e.fontId,
        i = o.gz.includes(e.effectId) ? a.z.SOLID : e.effectId;
    return n === e.fontId && i === e.effectId ? e : { ...e, fontId: n, effectId: i };
}
function m(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}

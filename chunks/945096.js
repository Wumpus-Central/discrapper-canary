"use strict";
n.d(t, {
    $0: () => c,
    Xr: () => g,
    as: () => u,
    cf: () => h,
    gN: () => E,
    j0: () => f,
    mT: () => p,
    sx: () => m,
    xo: () => d,
});
var i = n(310784),
    r = n.n(i),
    s = n(508425),
    a = n(559949),
    o = n(317097),
    l = n(750656);
function u(e) {
    switch (e) {
        case s.z.GRADIENT:
            return 2;
        case s.z.GUMMY:
            return 4;
        case s.z.PRISM:
            return 5;
        default:
            return 1;
    }
}
function c(e) {
    let t = r()(e).alpha(1),
        n = t.get("hsl.l"),
        i = Math.min(1, 1.2 * t.get("hsl.s")),
        s = Math.min(0.6, n + 0.1);
    return {
        main: e,
        light1: t.set("hsl.l", Math.min(1, 1.2 * n)).hex(),
        light2: t.set("hsl.l", Math.min(1, 1.6 * n)).hex(),
        dark1: t.set("hsl.l", Math.max(0, 0.6 * n)).hex(),
        dark2: t.set("hsl.l", Math.max(0, 0.2 * n)).hex(),
        toonStroke: t.set("hsl.l", Math.max(0.12, 0.4 * n)).hex(),
        neonStroke: t.set("hsl.s", i).set("hsl.l", s).hex(),
    };
}
function d(e) {
    return ((e % 360) + 360) % 360;
}
let _ = [0, 60, 90, 30];
function h(e) {
    let [t, n, i] = (function (e) {
        let [t, n, i] = r()((0, o.Hl)(e)).hsl();
        return [Number.isNaN(t) ? 0 : t, n, i];
    })(e);
    return _.map((e) =>
        r()
            .hsl(d(t + e), n, i)
            .num(),
    );
}
function f(e) {
    return r().hsl(e, 0.78, 0.72).num();
}
function p(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function E(e, t) {
    let n = t[Math.floor(Math.random() * t.length)],
        i = e[Math.floor(Math.random() * e.length)],
        r = (0, l.ii)(n);
    return { fontId: i, effectId: n, colors: [...r[Math.floor(Math.random() * r.length)]] };
}
function m(e, t) {
    if (t || null == e) return e;
    let n = l._k.includes(e.fontId) ? a.x.DEFAULT : e.fontId,
        i = l.gz.includes(e.effectId) ? s.z.SOLID : e.effectId;
    return n === e.fontId && i === e.effectId ? e : { ...e, fontId: n, effectId: i };
}
function g(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}

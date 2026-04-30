"use strict";
n.d(t, { $0: () => o, Xr: () => c, gN: () => u, mT: () => l });
var i = n(310784),
    r = n.n(i),
    s = n(508425),
    a = n(750656);
function o(e) {
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
function l(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function u() {
    let e,
        t = a.re[Math.floor(Math.random() * a.re.length)],
        n = a.rA[Math.floor(Math.random() * a.rA.length)];
    if (t === s.z.GRADIENT) {
        let t = a.Wf[Math.floor(Math.random() * a.Wf.length)];
        e = [t.start, t.end];
    } else e = [a.Jl[Math.floor(Math.random() * a.Jl.length)]];
    return { fontId: n, effectId: t, colors: e };
}
function c(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}

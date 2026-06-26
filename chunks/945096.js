"use strict";
n.d(t, { $0: () => u, Xr: () => h, as: () => l, gN: () => d, mT: () => c, sx: () => _ });
var i = n(310784),
    r = n.n(i),
    s = n(508425),
    a = n(559949),
    o = n(750656);
function l(e) {
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
function u(e) {
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
function c(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = t[Math.floor(Math.random() * t.length)],
        r = n
            ? (function (e) {
                  let t = Math.random() * e.reduce((e, t) => e + (o.sO.get(t) ?? 0), 0);
                  for (let n of e) if ((t -= o.sO.get(n) ?? 0) <= 0) return n;
                  return e[e.length - 1];
              })(e)
            : e[Math.floor(Math.random() * e.length)],
        s = (0, o.ii)(i);
    return { fontId: r, effectId: i, colors: [...s[Math.floor(Math.random() * s.length)]] };
}
function _(e, t) {
    if (t || null == e) return e;
    let n = o._k.includes(e.fontId) ? a.x.DEFAULT : e.fontId,
        i = o.gz.includes(e.effectId) ? s.z.SOLID : e.effectId;
    return n === e.fontId && i === e.effectId ? e : { ...e, fontId: n, effectId: i };
}
function h(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}

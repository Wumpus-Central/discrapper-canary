"use strict";
n.d(t, { $0: () => l, Xr: () => d, as: () => o, gN: () => c, mT: () => u });
var i = n(310784),
    r = n.n(i),
    s = n(508425),
    a = n(750656);
function o(e) {
    switch (e) {
        case s.z.GRADIENT:
        case s.z.GUMMY:
            return 2;
        default:
            return 1;
    }
}
function l(e) {
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
function u(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function c(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = a.re[Math.floor(Math.random() * a.re.length)],
        r = n
            ? (function (e) {
                  let t = Math.random() * e.reduce((e, t) => e + (a.sO.get(t) ?? 0), 0);
                  for (let n of e) if ((t -= a.sO.get(n) ?? 0) <= 0) return n;
                  return e[e.length - 1];
              })(e)
            : e[Math.floor(Math.random() * e.length)];
    if (o(i) > 1) {
        let e = a.Wf[Math.floor(Math.random() * a.Wf.length)];
        t = [e.start, e.end];
    } else t = [a.Jl[Math.floor(Math.random() * a.Jl.length)]];
    return { fontId: r, effectId: i, colors: t };
}
function d(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}

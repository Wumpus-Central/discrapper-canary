n.d(t, {
    $0: () => o,
    Xr: () => u,
    gN: () => c,
    mT: () => l,
}),
    n(747238),
    n(812715),
    n(591487),
    n(727858);
var r = n(310784),
    i = n.n(r),
    a = n(508425),
    s = n(750656);
function o(e) {
    let t = i()(e).alpha(1),
        n = t.get("hsl.l"),
        r = Math.min(1, 1.2 * t.get("hsl.s")),
        a = Math.min(0.6, n + 0.1);
    return {
        main: e,
        light1: t.set("hsl.l", Math.min(1, 1.2 * n)).hex(),
        light2: t.set("hsl.l", Math.min(1, 1.6 * n)).hex(),
        dark1: t.set("hsl.l", Math.max(0, 0.6 * n)).hex(),
        dark2: t.set("hsl.l", Math.max(0, 0.2 * n)).hex(),
        toonStroke: t.set("hsl.l", Math.max(0.12, 0.4 * n)).hex(),
        neonStroke: t.set("hsl.s", r).set("hsl.l", a).hex(),
    };
}
function l(e) {
    return null == e
        ? null
        : {
              fontId: e.font_id,
              effectId: e.effect_id,
              colors: e.colors,
          };
}
function c() {
    let e,
        t = s.re[Math.floor(Math.random() * s.re.length)],
        n = s.rA[Math.floor(Math.random() * s.rA.length)];
    if (t === a.z.GRADIENT) {
        let t = s.Wf[Math.floor(Math.random() * s.Wf.length)];
        e = [t.start, t.end];
    } else e = [s.Jl[Math.floor(Math.random() * s.Jl.length)]];
    return {
        fontId: n,
        effectId: t,
        colors: e,
    };
}
function u(e) {
    if (null == e) return !1;
    let t = e.replace(RegExp("[^\\p{L}]", "gu"), "");
    return RegExp("\\P{Script=Latin}", "u").test(t);
}

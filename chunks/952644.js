(l.d(t, {
    Df: () => i,
    Fl: () => s,
    S3: () => d,
    SF: () => c,
    Wl: () => u,
    Wn: () => o,
    b5: () => f,
    h_: () => r,
    kt: () => h,
    n0: () => m,
}),
    l(321073),
    l(246338));
var n = l(248675),
    a = l(375708);
function i(e, t) {
    return 0 === t.length ? "none" : t.some((t) => t.id === e) ? "skip" : "pick";
}
function r(e, t) {
    if ("none" === t) return ["server"];
    let l = Array.from({ length: Math.max(1, e.length) }, (e, t) => ({ kind: "question", index: t }));
    return "pick" === t ? ["about", "server", ...l] : ["about", ...l];
}
function s(e, t) {
    return null != e && (!0 === e.optional || "" !== (t ?? "").trim());
}
function u(e) {
    return a.intl.formatToPlainString(n.default["/qSx7+"], { templateName: e, locale: a.intl.currentLocale });
}
function o(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let l = e[t];
        if ("assistant" === l.role && null != l.intake) return l.intake;
    }
    return null;
}
function d(e) {
    return null == e
        ? null
        : {
              lead: e.intro.lead,
              points: e.intro.points.map((e) => ({
                  title: e.title,
                  ...(null != e.subtext ? { subtext: e.subtext } : {}),
                  icon: e.icon ?? "shield",
              })),
          };
}
function c(e) {
    return e?.server ?? { title: a.intl.string(n.default.vcxYIA), hint: a.intl.string(n.default.auUHPZ) };
}
function f(e) {
    return e?.questions ?? [];
}
function m(e, t) {
    return e.length > 0 && e.every((e, l) => !0 === e.optional || "" !== (t[l] ?? "").trim());
}
function h(e, t) {
    let l = [];
    return (
        e.forEach((e, n) => {
            let a = (t[n] ?? "").trim();
            ("" !== a || !0 !== e.optional) &&
                (a.includes("\n")
                    ? l.push(`${n + 1}. ${e.title} \u{2192}`, '"""', a, '"""')
                    : l.push(`${n + 1}. ${e.title} \u{2192} ${a}`));
        }),
        l.join("\n")
    );
}

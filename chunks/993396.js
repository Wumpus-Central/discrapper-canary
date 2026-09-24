(a.d(t, {
    Bl: () => l,
    Bp: () => c,
    I6: () => m,
    In: () => o,
    NE: () => u,
    _F: () => p,
    hU: () => h,
    iZ: () => s,
    rL: () => d,
    v8: () => r,
}),
    a(321073),
    a(683180));
var n = a(50617),
    i = a(375708);
function l(e, t) {
    return !t.some((t) => t.id === e);
}
function s(e, t) {
    let a = Array.from({ length: Math.max(1, e.length) }, (e, t) => ({ kind: "question", index: t }));
    return t ? ["about", "server", ...a] : ["about", ...a];
}
function o(e, t) {
    return null != e && (!0 === e.optional || "" !== (t ?? "").trim());
}
function r(e) {
    return i.intl.formatToPlainString(n.default["4lZNuo"], { templateName: e, locale: i.intl.currentLocale });
}
function d(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let a = e[t];
        if ("assistant" === a.role && null != a.intake) return a.intake;
    }
    return null;
}
function u(e) {
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
    return e?.server ?? { title: i.intl.string(n.default.WQCnSf), hint: i.intl.string(n.default.KLTQfQ) };
}
function m(e) {
    return e?.questions ?? [];
}
function p(e, t) {
    return e.length > 0 && e.every((e, a) => !0 === e.optional || "" !== (t[a] ?? "").trim());
}
function h(e, t) {
    let a = [];
    return (
        e.forEach((e, n) => {
            let i = (t[n] ?? "").trim();
            ("" !== i || !0 !== e.optional) &&
                (i.includes("\n")
                    ? a.push(`${n + 1}. ${e.title} \u{2192}`, '"""', i, '"""')
                    : a.push(`${n + 1}. ${e.title} \u{2192} ${i}`));
        }),
        a.join("\n")
    );
}

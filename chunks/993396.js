(a.d(t, {
    Bp: () => u,
    I6: () => c,
    In: () => s,
    NE: () => d,
    _F: () => p,
    hU: () => m,
    iZ: () => i,
    rL: () => r,
    v8: () => o,
}),
    a(321073),
    a(683180));
var n = a(50617),
    l = a(375708);
function i(e) {
    return [
        "about",
        "server",
        ...Array.from({ length: Math.max(1, e.length) }, (e, t) => ({ kind: "question", index: t })),
    ];
}
function s(e, t) {
    return null != e && (!0 === e.optional || "" !== (t ?? "").trim());
}
function o(e) {
    return l.intl.formatToPlainString(n.default["4lZNuo"], { templateName: e, locale: l.intl.currentLocale });
}
function r(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let a = e[t];
        if ("assistant" === a.role && null != a.intake) return a.intake;
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
function u(e) {
    return e?.server ?? { title: l.intl.string(n.default.WQCnSf), hint: l.intl.string(n.default.KLTQfQ) };
}
function c(e) {
    return e?.questions ?? [];
}
function p(e, t) {
    return e.length > 0 && e.every((e, a) => !0 === e.optional || "" !== (t[a] ?? "").trim());
}
function m(e, t) {
    let a = [];
    return (
        e.forEach((e, n) => {
            let l = (t[n] ?? "").trim();
            ("" !== l || !0 !== e.optional) &&
                (l.includes("\n")
                    ? a.push(`${n + 1}. ${e.title} \u{2192}`, '"""', l, '"""')
                    : a.push(`${n + 1}. ${e.title} \u{2192} ${l}`));
        }),
        a.join("\n")
    );
}

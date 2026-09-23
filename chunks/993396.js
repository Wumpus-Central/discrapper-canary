(n.d(t, {
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
    n(321073),
    n(683180));
var a = n(759967),
    l = n(375708);
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
    return l.intl.formatToPlainString(a.default["4lZNuo"], { templateName: e, locale: l.intl.currentLocale });
}
function r(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role && null != n.intake) return n.intake;
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
    return e?.server ?? { title: l.intl.string(a.default.WQCnSf), hint: l.intl.string(a.default.KLTQfQ) };
}
function c(e) {
    return e?.questions ?? [];
}
function p(e, t) {
    return e.length > 0 && e.every((e, n) => !0 === e.optional || "" !== (t[n] ?? "").trim());
}
function m(e, t) {
    let n = [];
    return (
        e.forEach((e, a) => {
            let l = (t[a] ?? "").trim();
            ("" !== l || !0 !== e.optional) &&
                (l.includes("\n")
                    ? n.push(`${a + 1}. ${e.title} \u{2192}`, '"""', l, '"""')
                    : n.push(`${a + 1}. ${e.title} \u{2192} ${l}`));
        }),
        n.join("\n")
    );
}

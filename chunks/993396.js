(n.d(t, { Bp: () => d, I6: () => u, NE: () => r, _F: () => c, hU: () => p, pc: () => i, rL: () => o, v8: () => s }),
    n(683180));
var a = n(50617),
    l = n(375708);
let i = ["about", "server", "questions"];
function s(e) {
    return l.intl.formatToPlainString(a.default["4lZNuo"], { templateName: e, locale: l.intl.currentLocale });
}
function o(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role && null != n.intake) return n.intake;
    }
    return null;
}
function r(e) {
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
function d(e) {
    return e?.server ?? { title: l.intl.string(a.default.WQCnSf), hint: l.intl.string(a.default.KLTQfQ) };
}
function u(e) {
    return e?.questions ?? [];
}
function c(e, t) {
    return e.length > 0 && e.every((e, n) => "" !== (t[n] ?? "").trim());
}
function p(e, t) {
    return e.map((e, n) => `${n + 1}. ${e.title} \u{2192} ${(t[n] ?? "").trim()}`).join("\n");
}

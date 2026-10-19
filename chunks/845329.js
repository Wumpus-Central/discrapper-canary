(n.d(t, {
    SF: () => h,
    b5: () => p,
    Wn: () => m,
    Yn: () => d,
    h_: () => u,
    Fl: () => c,
    kt: () => x,
    S3: () => f,
    n0: () => g,
    Df: () => o,
}),
    n(321073));
var l = n(291815);
n(246338);
var r = n(688954),
    a = n(105292);
async function i(e, t) {
    try {
        let n = await (0, r.h)(e, "/agent/template-intake", { query: { template: t, locale: a.intl.currentLocale } });
        if (!n.ok) return null;
        let l = await n.json();
        return Array.isArray(l.questions) && l.questions.length > 0 ? l : null;
    } catch {
        return null;
    }
}
var s = n(261425);
function o(e, t) {
    return 0 === t.length ? "none" : t.some((t) => t.id === e) ? "skip" : "pick";
}
function u(e, t) {
    if ("none" === t) return ["server"];
    let n = Array.from({ length: Math.max(1, e.length) }, (e, t) => ({ kind: "question", index: t }));
    return "pick" === t ? ["about", "server", ...n] : ["about", ...n];
}
function c(e, t) {
    return null != e && (!0 === e.optional || "" !== (t ?? "").trim());
}
async function d(e, t) {
    let n = await i(e, t.id);
    if (null != n) (0, l.prepareTemplate)(e, t.id);
    else {
        var r;
        (0, l.sendUserMessage)(
            e,
            ((r = t.name),
            a.intl.formatToPlainString(s.default["/qSx7+"], { templateName: r, locale: a.intl.currentLocale })),
        );
    }
    return n;
}
function m(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role && null != n.intake) return n.intake;
    }
    return null;
}
function f(e) {
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
function h(e) {
    return e?.server ?? { title: a.intl.string(s.default.vcxYIA), hint: a.intl.string(s.default.auUHPZ) };
}
function p(e) {
    return e?.questions ?? [];
}
function g(e, t) {
    return e.length > 0 && e.every((e, n) => !0 === e.optional || "" !== (t[n] ?? "").trim());
}
function x(e, t) {
    let n = [];
    return (
        e.forEach((e, l) => {
            let r = (t[l] ?? "").trim();
            ("" !== r || !0 !== e.optional) &&
                (r.includes("\n")
                    ? n.push(`${l + 1}. ${e.title} \u{2192}`, '"""', r, '"""')
                    : n.push(`${l + 1}. ${e.title} \u{2192} ${r}`));
        }),
        n.join("\n")
    );
}

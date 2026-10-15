(n.d(t, {
    Df: () => a,
    Fl: () => s,
    S3: () => c,
    SF: () => d,
    Wl: () => o,
    Wn: () => u,
    b5: () => m,
    h_: () => i,
    kt: () => h,
    n0: () => f,
}),
    n(321073),
    n(246338));
var l = n(248675),
    r = n(105292);
function a(e, t) {
    return 0 === t.length ? "none" : t.some((t) => t.id === e) ? "skip" : "pick";
}
function i(e, t) {
    if ("none" === t) return ["server"];
    let n = Array.from({ length: Math.max(1, e.length) }, (e, t) => ({ kind: "question", index: t }));
    return "pick" === t ? ["about", "server", ...n] : ["about", ...n];
}
function s(e, t) {
    return null != e && (!0 === e.optional || "" !== (t ?? "").trim());
}
function o(e) {
    return r.intl.formatToPlainString(l.default["/qSx7+"], { templateName: e, locale: r.intl.currentLocale });
}
function u(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role && null != n.intake) return n.intake;
    }
    return null;
}
function c(e) {
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
    return e?.server ?? { title: r.intl.string(l.default.vcxYIA), hint: r.intl.string(l.default.auUHPZ) };
}
function m(e) {
    return e?.questions ?? [];
}
function f(e, t) {
    return e.length > 0 && e.every((e, n) => !0 === e.optional || "" !== (t[n] ?? "").trim());
}
function h(e, t) {
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

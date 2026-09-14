n.d(t, { Cl: () => o, EF: () => u, Q0: () => i, ko: () => d, lA: () => s, tg: () => c });
var l = n(313265),
    a = n(50617),
    r = n(375708);
let i = [
    { model: "gpt-5.6-luna", thinking: "high", fast: !0, summary: () => r.intl.string(a.default.Mo0a1m) },
    { model: "gpt-5.6-sol", thinking: "high", summary: () => r.intl.string(a.default.dkt78K) },
    { model: "gpt-6-astra", thinking: "medium", summary: () => r.intl.string(a.default.Ly6zYL) },
];
function s(e) {
    return { model: e.model, thinking: e.thinking, ...(!0 === e.fast ? { fast: !0 } : {}) };
}
let o = d(s(i[1] ?? { model: "gpt-5.6-sol", thinking: "high", summary: () => "" }));
function u(e, t) {
    function n(e, n) {
        return (
            e.model === n.model &&
            e.thinking === n.thinking &&
            (!0 === e.fast) == (!0 === n.fast && (null == t || t.find((e) => e.id === n.model)?.supports_fast === !0))
        );
    }
    return i.findIndex((t) => n(e.main, t) && n(e.subagent, t));
}
function d(e) {
    return { main: { ...e }, subagent: { ...e } };
}
function c(e, t) {
    let { model: n, thinking: i, fast: s } = e.main,
        o = t.find((e) => e.id === n)?.label ?? n,
        u = `${o} \xb7 ${l.h[i] ?? i}`;
    return !0 === s ? `${u} \xb7 ${r.intl.string(a.default.qOoAsd)}` : u;
}

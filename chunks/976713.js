l.d(t, { Cl: () => o, EF: () => u, Q0: () => i, ko: () => d, lA: () => s, tg: () => c });
var n = l(313265),
    a = l(50617),
    r = l(375708);
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
    function l(e, l) {
        return (
            e.model === l.model &&
            e.thinking === l.thinking &&
            (!0 === e.fast) == (!0 === l.fast && (null == t || t.find((e) => e.id === l.model)?.supports_fast === !0))
        );
    }
    return i.findIndex((t) => l(e.main, t) && l(e.subagent, t));
}
function d(e) {
    return { main: { ...e }, subagent: { ...e } };
}
function c(e, t) {
    let { model: l, thinking: i, fast: s } = e.main,
        o = t.find((e) => e.id === l)?.label ?? l,
        u = `${o} \xb7 ${n.h[i] ?? i}`;
    return !0 === s ? `${u} \xb7 ${r.intl.string(a.default.qOoAsd)}` : u;
}

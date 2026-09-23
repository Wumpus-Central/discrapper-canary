l.d(t, { Cl: () => u, EF: () => o, Q0: () => i, ko: () => d, lA: () => s, tg: () => c });
var n = l(313265),
    a = l(50617),
    r = l(375708);
let i = [
    { model: "gpt-6-luna", thinking: "xhigh", summary: () => r.intl.string(a.default.Mo0a1m) },
    { model: "gpt-6-sol", thinking: "high", summary: () => r.intl.string(a.default.dkt78K) },
    { model: "gpt-6-astra", thinking: "medium", summary: () => r.intl.string(a.default.Ly6zYL) },
];
function s(e) {
    return { model: e.model, thinking: e.thinking, ...(!0 === e.fast ? { fast: !0 } : {}) };
}
let u = d(s(i[1] ?? { model: "gpt-6-sol", thinking: "high", summary: () => "" }));
function o(e, t) {
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
        u = t.find((e) => e.id === l)?.label ?? l,
        o = `${u} \xb7 ${n.hW[i] ?? i}`;
    return !0 === s ? `${o} \xb7 ${r.intl.string(a.default.qOoAsd)}` : o;
}

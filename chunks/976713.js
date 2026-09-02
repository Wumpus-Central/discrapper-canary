l.d(t, { Cl: () => o, EF: () => u, Q0: () => i, ko: () => d, tg: () => c });
var n = l(313265),
    a = l(50617),
    r = l(375708);
let i = [
        { model: "gpt-5.6-luna", thinking: "high", summary: () => r.intl.string(a.default.Mo0a1m) },
        { model: "gpt-5.6-sol", thinking: "high", summary: () => r.intl.string(a.default.dkt78K) },
        { model: "claude-fable-5", thinking: "high", summary: () => r.intl.string(a.default.Ly6zYL) },
    ],
    s = i[1] ?? { model: "gpt-5.6-sol", thinking: "high" },
    o = d({ model: s.model, thinking: s.thinking });
function u(e) {
    return i.findIndex(
        (t) =>
            e.main.model === t.model &&
            e.main.thinking === t.thinking &&
            e.subagent.model === t.model &&
            e.subagent.thinking === t.thinking,
    );
}
function d(e) {
    return { main: { ...e }, subagent: { ...e } };
}
function c(e, t) {
    let { model: l, thinking: a } = e.main,
        r = t.find((e) => e.id === l)?.label ?? l;
    return `${r} \xb7 ${n.h[a] ?? a}`;
}

_.d(e, {
    Z: () => o,
    w: () => E,
});
var a = _(622916),
    r = _(255768),
    n = _(696486);
function o(t) {
    if (!r.X) return;
    let { description: e = "< unknown name >", op: _ = "< unknown op >", parent_span_id: o } = (0, n.XU)(t),
        { spanId: E } = t.spanContext(),
        i = (0, n.Tt)(t),
        c = (0, n.Gx)(t),
        s = c === t,
        l = `[Tracing] Starting ${i ? "sampled" : "unsampled"} ${s ? "root " : ""}span`,
        I = [`op: ${_}`, `name: ${e}`, `ID: ${E}`];
    if ((o && I.push(`parent ID: ${o}`), !s)) {
        let { op: t, description: e } = (0, n.XU)(c);
        I.push(`root ID: ${c.spanContext().spanId}`),
            t && I.push(`root op: ${t}`),
            e && I.push(`root description: ${e}`);
    }
    a.kg.log(`${l}
  ${I.join("\n  ")}`);
}
function E(t) {
    if (!r.X) return;
    let { description: e = "< unknown name >", op: _ = "< unknown op >" } = (0, n.XU)(t),
        { spanId: o } = t.spanContext(),
        E = (0, n.Gx)(t) === t,
        i = `[Tracing] Finishing "${_}" ${E ? "root " : ""}span "${e}" with ID ${o}`;
    a.kg.log(i);
}

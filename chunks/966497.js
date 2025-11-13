a.d(e, {
    Z: () => o,
    w: () => i,
});
var r = a(622916),
    _ = a(255768),
    n = a(696486);
function o(t) {
    if (!_.X) return;
    let { description: e = "< unknown name >", op: a = "< unknown op >", parent_span_id: o } = (0, n.XU)(t),
        { spanId: i } = t.spanContext(),
        E = (0, n.Tt)(t),
        c = (0, n.Gx)(t),
        s = c === t,
        l = `[Tracing] Starting ${E ? "sampled" : "unsampled"} ${s ? "root " : ""}span`,
        I = [`op: ${a}`, `name: ${e}`, `ID: ${i}`];
    if ((o && I.push(`parent ID: ${o}`), !s)) {
        let { op: t, description: e } = (0, n.XU)(c);
        I.push(`root ID: ${c.spanContext().spanId}`),
            t && I.push(`root op: ${t}`),
            e && I.push(`root description: ${e}`);
    }
    r.kg.log(`${l}
  ${I.join("\n  ")}`);
}
function i(t) {
    if (!_.X) return;
    let { description: e = "< unknown name >", op: a = "< unknown op >" } = (0, n.XU)(t),
        { spanId: o } = t.spanContext(),
        i = (0, n.Gx)(t) === t,
        E = `[Tracing] Finishing "${a}" ${i ? "root " : ""}span "${e}" with ID ${o}`;
    r.kg.log(E);
}

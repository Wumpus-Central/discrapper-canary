r.d(t, {
    Z: () => o,
    w: () => _,
});
var n = r(622916),
    a = r(255768),
    i = r(696486);
function o(e) {
    if (!a.X) return;
    let { description: t = "< unknown name >", op: r = "< unknown op >", parent_span_id: o } = (0, i.XU)(e),
        { spanId: _ } = e.spanContext(),
        s = (0, i.Tt)(e),
        c = (0, i.Gx)(e),
        E = c === e,
        l = `[Tracing] Starting ${s ? "sampled" : "unsampled"} ${E ? "root " : ""}span`,
        u = [`op: ${r}`, `name: ${t}`, `ID: ${_}`];
    if ((o && u.push(`parent ID: ${o}`), !E)) {
        let { op: e, description: t } = (0, i.XU)(c);
        u.push(`root ID: ${c.spanContext().spanId}`),
            e && u.push(`root op: ${e}`),
            t && u.push(`root description: ${t}`);
    }
    n.kg.log(`${l}
  ${u.join("\n  ")}`);
}
function _(e) {
    if (!a.X) return;
    let { description: t = "< unknown name >", op: r = "< unknown op >" } = (0, i.XU)(e),
        { spanId: o } = e.spanContext(),
        _ = (0, i.Gx)(e) === e,
        s = `[Tracing] Finishing "${r}" ${_ ? "root " : ""}span "${t}" with ID ${o}`;
    n.kg.log(s);
}

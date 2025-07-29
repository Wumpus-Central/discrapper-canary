a.d(e, {
    Z: () => o,
    w: () => i
});
var r = a(622916),
    _ = a(255768),
    n = a(696486);
function o(t) {
    if (!_.X) return;
    let { description: e = '< unknown name >', op: a = '< unknown op >', parent_span_id: o } = (0, n.XU)(t),
        { spanId: i } = t.spanContext(),
        c = (0, n.Tt)(t),
        E = (0, n.Gx)(t),
        s = E === t,
        l = `[Tracing] Starting ${c ? 'sampled' : 'unsampled'} ${s ? 'root ' : ''}span`,
        u = [`op: ${a}`, `name: ${e}`, `ID: ${i}`];
    if ((o && u.push(`parent ID: ${o}`), !s)) {
        let { op: t, description: e } = (0, n.XU)(E);
        (u.push(`root ID: ${E.spanContext().spanId}`), t && u.push(`root op: ${t}`), e && u.push(`root description: ${e}`));
    }
    r.kg.log(`${l}
  ${u.join('\n  ')}`);
}
function i(t) {
    if (!_.X) return;
    let { description: e = '< unknown name >', op: a = '< unknown op >' } = (0, n.XU)(t),
        { spanId: o } = t.spanContext(),
        i = (0, n.Gx)(t) === t,
        c = `[Tracing] Finishing "${a}" ${i ? 'root ' : ''}span "${e}" with ID ${o}`;
    r.kg.log(c);
}

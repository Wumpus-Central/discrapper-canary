a.d(e, {
    Z: () => o,
    w: () => i
});
var r = a(622916),
    n = a(255768),
    _ = a(696486);
function o(t) {
    if (!n.X) return;
    let { description: e = '< unknown name >', op: a = '< unknown op >', parent_span_id: o } = (0, _.XU)(t),
        { spanId: i } = t.spanContext(),
        c = (0, _.Tt)(t),
        s = (0, _.Gx)(t),
        E = s === t,
        l = `[Tracing] Starting ${c ? 'sampled' : 'unsampled'} ${E ? 'root ' : ''}span`,
        u = [`op: ${a}`, `name: ${e}`, `ID: ${i}`];
    if ((o && u.push(`parent ID: ${o}`), !E)) {
        let { op: t, description: e } = (0, _.XU)(s);
        u.push(`root ID: ${s.spanContext().spanId}`), t && u.push(`root op: ${t}`), e && u.push(`root description: ${e}`);
    }
    r.kg.log(`${l}
  ${u.join('\n  ')}`);
}
function i(t) {
    if (!n.X) return;
    let { description: e = '< unknown name >', op: a = '< unknown op >' } = (0, _.XU)(t),
        { spanId: o } = t.spanContext(),
        i = (0, _.Gx)(t) === t,
        c = `[Tracing] Finishing "${a}" ${i ? 'root ' : ''}span "${e}" with ID ${o}`;
    r.kg.log(c);
}

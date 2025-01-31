a.d(e, {
    Z: () => _,
    w: () => i
});
var r = a(622916),
    n = a(255768),
    o = a(696486);
function _(t) {
    if (!n.X) return;
    let { description: e = '< unknown name >', op: a = '< unknown op >', parent_span_id: _ } = (0, o.XU)(t),
        { spanId: i } = t.spanContext(),
        c = (0, o.Tt)(t),
        s = (0, o.Gx)(t),
        E = s === t,
        l = `[Tracing] Starting ${c ? 'sampled' : 'unsampled'} ${E ? 'root ' : ''}span`,
        u = [`op: ${a}`, `name: ${e}`, `ID: ${i}`];
    if ((_ && u.push(`parent ID: ${_}`), !E)) {
        let { op: t, description: e } = (0, o.XU)(s);
        u.push(`root ID: ${s.spanContext().spanId}`), t && u.push(`root op: ${t}`), e && u.push(`root description: ${e}`);
    }
    r.kg.log(`${l}
  ${u.join('\n  ')}`);
}
function i(t) {
    if (!n.X) return;
    let { description: e = '< unknown name >', op: a = '< unknown op >' } = (0, o.XU)(t),
        { spanId: _ } = t.spanContext(),
        i = (0, o.Gx)(t) === t,
        c = `[Tracing] Finishing "${a}" ${i ? 'root ' : ''}span "${e}" with ID ${_}`;
    r.kg.log(c);
}

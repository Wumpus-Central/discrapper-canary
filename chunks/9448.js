n.d(t, { WN: () => a, dy: () => o, k5: () => l, oF: () => _ });
var i = n(734057),
    r = n(988794);
function a(e) {
    let t,
        { entity_type: n, channel_id: a } = e;
    return n in r.om && null != a && (t = i.A.getChannel(e.channel_id) ?? void 0), t;
}
function s(e, t) {
    let n = null;
    return e === r.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n;
}
function _(e) {
    let { entity_type: t, entity_metadata: n } = e;
    return s(t, n);
}
function l(e) {
    let { entityType: t, entityMetadata: n } = e;
    return s(t, n);
}
function o(e) {
    return e === r.Ps.VOICE || e === r.Ps.STAGE_INSTANCE ? r.om[e] : void 0;
}

n.d(t, { WN: () => r, dy: () => d, k5: () => o, oF: () => l });
var i = n(734057),
    a = n(988794);
function r(e) {
    let t,
        { entity_type: n, channel_id: r } = e;
    return n in a.om && null != r && (t = i.A.getChannel(e.channel_id) ?? void 0), t;
}
function s(e, t) {
    let n = null;
    return e === a.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n;
}
function l(e) {
    let { entity_type: t, entity_metadata: n } = e;
    return s(t, n);
}
function o(e) {
    let { entityType: t, entityMetadata: n } = e;
    return s(t, n);
}
function d(e) {
    return e === a.Ps.VOICE || e === a.Ps.STAGE_INSTANCE ? a.om[e] : void 0;
}

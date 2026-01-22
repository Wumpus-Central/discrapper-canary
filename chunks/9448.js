n.d(t, {
    WN: () => a,
    dy: () => c,
    k5: () => l,
    oF: () => o,
});
var r = n(734057),
    i = n(988794);
function a(e) {
    let t,
        { entity_type: n, channel_id: a } = e;
    if (n in i.om && null != a) {
        var s;
        t = null != (s = r.A.getChannel(e.channel_id)) ? s : void 0;
    }
    return t;
}
function s(e, t) {
    let n = null;
    return e === i.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n;
}
function o(e) {
    let { entity_type: t, entity_metadata: n } = e;
    return s(t, n);
}
function l(e) {
    let { entityType: t, entityMetadata: n } = e;
    return s(t, n);
}
function c(e) {
    return e === i.Ps.VOICE || e === i.Ps.STAGE_INSTANCE ? i.om[e] : void 0;
}

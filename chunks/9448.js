"use strict";
n.d(t, { WN: () => s, dy: () => u, k5: () => l, oF: () => o });
var r = n(734057),
    i = n(988794);
function s(e) {
    let t,
        { entity_type: n, channel_id: s } = e;
    return n in i.om && null != s && (t = r.A.getChannel(e.channel_id) ?? void 0), t;
}
function a(e, t) {
    let n = null;
    return e === i.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n;
}
function o(e) {
    let { entity_type: t, entity_metadata: n } = e;
    return a(t, n);
}
function l(e) {
    let { entityType: t, entityMetadata: n } = e;
    return a(t, n);
}
function u(e) {
    return e === i.Ps.VOICE || e === i.Ps.STAGE_INSTANCE ? i.om[e] : void 0;
}

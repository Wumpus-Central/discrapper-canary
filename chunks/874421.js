n.d(t, { S: () => a });
var l = n(935208);
function a(e) {
    let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
    if (null != t && /^\d+$/.test(t)) {
        let e = l.default.extractTimestamp(t);
        if (Number.isFinite(e) && e > 0) return e;
    }
    return e.created_at;
}

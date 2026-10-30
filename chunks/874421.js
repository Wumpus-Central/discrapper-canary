a.d(t, { S: () => i });
var n = a(935208);
function i(e) {
    let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
    return null != t && n.default.isProbablyAValidSnowflake(t) ? n.default.extractTimestamp(t) : e.created_at;
}

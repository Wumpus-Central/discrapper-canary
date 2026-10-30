n.d(t, { S: () => r });
var i = n(935208);
function r(e) {
    let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
    return null != t && i.default.isProbablyAValidSnowflake(t) ? i.default.extractTimestamp(t) : e.created_at;
}

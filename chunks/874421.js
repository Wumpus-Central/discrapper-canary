n.d(e, { S: () => r });
var i = n(935208);
function r(t) {
    let e = t.turn_id ?? t.steps.find((t) => null != t.turn_id)?.turn_id;
    return null != e && i.default.isProbablyAValidSnowflake(e) ? i.default.extractTimestamp(e) : t.created_at;
}

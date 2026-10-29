i.d(e, { S: () => n });
var a = i(935208);
function n(t) {
    let e = t.turn_id ?? t.steps.find((t) => null != t.turn_id)?.turn_id;
    return null != e && a.default.isProbablyAValidSnowflake(e) ? a.default.extractTimestamp(e) : t.created_at;
}

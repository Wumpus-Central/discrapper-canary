n.d(t, { Z: () => l });
var r = n(70956),
    i = n(709054),
    a = n(981631),
    o = n(915553);
let s = 2 * r.Z.Millis.HOUR;
function l(e, t, n) {
    var r, l;
    if (null == e) return !1;
    let c = null != t.activity ? t.activity.party_id : null,
        u = null != c && (null == (r = e.party) ? void 0 : r.id) !== c,
        d = (null == (l = t.activity) ? void 0 : l.type) === a.mFx.STREAM_REQUEST ? o.e : s,
        f = i.default.extractTimestamp(t.id) + d < Date.now(),
        _ = null != e.application_id && e.application_id !== n;
    return !u && !f && !_;
}

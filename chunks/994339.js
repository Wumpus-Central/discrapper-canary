n.d(t, { Z: () => a });
var r = n(70956),
    i = n(709054);
let l = 2 * r.Z.Millis.HOUR;
function a(e, t, n) {
    if (null == e) return !1;
    let r = null != t.activity ? t.activity.party_id : null,
        a = null != r && (null == e.party || e.party.id !== r),
        o = i.default.extractTimestamp(t.id) + l < Date.now(),
        s = null != e.application_id && e.application_id !== n;
    return !a && !o && !s;
}

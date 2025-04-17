n.d(t, { Z: () => l });
var r = n(70956),
    i = n(709054);
let a = 2 * r.Z.Millis.HOUR;
function l(e, t, n) {
    if (null == e) return !1;
    let r = null != t.activity ? t.activity.party_id : null,
        l = null != r && (null == e.party || e.party.id !== r),
        o = i.default.extractTimestamp(t.id) + a < Date.now(),
        s = null != e.application_id && e.application_id !== n;
    return !l && !o && !s;
}

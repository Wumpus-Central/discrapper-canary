n.d(t, { Z: () => r });
var i = n(70956),
    l = n(709054);
let a = 2 * i.Z.Millis.HOUR;
function r(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        r = null != i && (null == e.party || e.party.id !== i),
        s = l.default.extractTimestamp(t.id) + a < Date.now(),
        o = null != e.application_id && e.application_id !== n;
    return !r && !s && !o;
}

n.d(t, { Z: () => o });
var r = n(70956),
    i = n(709054);
let a = 2 * r.Z.Millis.HOUR;
function o(e, t, n) {
    var r;
    if (null == e) return !1;
    let o = null != t.activity ? t.activity.party_id : null,
        s = null != o && (null == (r = e.party) ? void 0 : r.id) !== o,
        l = i.default.extractTimestamp(t.id) + a < Date.now(),
        c = null != e.application_id && e.application_id !== n;
    return !s && !l && !c;
}

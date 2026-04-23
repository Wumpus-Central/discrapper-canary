n.d(t, { AO: () => d, Ee: () => o, nr: () => l });
var i = n(17928),
    r = n(52133),
    a = n(290863),
    s = n(652215);
function _(e) {
    return e.type === s.$pd.PLAYING;
}
function l(e, t) {
    var n;
    return null != e ? ((n = e.ownerId), t.findActivity(n, _)) : null;
}
function o(e, t) {
    if (null == e) return null;
    let n = l(e, t);
    return null == n ? null : { id: n.application_id, name: n.name };
}
function E(e, t) {
    return e === t || (null != e && null != t && (0, r.A)(e, t));
}
function d(e) {
    return (0, i.bG)([a.A], () => o(e, a.A), [e], E);
}

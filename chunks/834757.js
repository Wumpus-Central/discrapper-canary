n.d(t, { AO: () => _, Ee: () => d, nr: () => o });
var i = n(17928),
    a = n(52133),
    r = n(290863),
    s = n(652215);
function l(e) {
    return e.type === s.$pd.PLAYING;
}
function o(e, t) {
    var n;
    return null != e ? ((n = e.ownerId), t.findActivity(n, l)) : null;
}
function d(e, t) {
    if (null == e) return null;
    let n = o(e, t);
    return null == n ? null : { id: n.application_id, name: n.name };
}
function c(e, t) {
    return e === t || (null != e && null != t && (0, a.A)(e, t));
}
function _(e) {
    return (0, i.bG)([r.A], () => d(e, r.A), [e], c);
}

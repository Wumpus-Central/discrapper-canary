n.d(t, { AO: () => _, Ee: () => c, nr: () => d });
var i = n(350835),
    r = n(17928),
    a = n(52133),
    s = n(765379),
    l = n(290863);
function o(e) {
    return e.type === i.$.PLAYING && !(0, s.A)(e);
}
function d(e, t) {
    var n;
    return null != e ? ((n = e.ownerId), t.findActivity(n, o)) : null;
}
function c(e, t) {
    if (null == e) return null;
    let n = d(e, t);
    return null == n ? null : { id: n.application_id, name: n.name };
}
function u(e, t) {
    return e === t || (null != e && null != t && (0, a.A)(e, t));
}
function _(e) {
    return (0, r.bG)([l.A], () => c(e, l.A), [e], u);
}

n.d(t, { A: () => _ });
var i = n(17928),
    r = n(616356),
    a = n(994500),
    s = n(652215);
function _(e) {
    let t = (0, i.bG)([a.A], () => (null != e ? a.A.getRelationshipType(e) : s.eA$.NONE)),
        n = (0, i.bG)([r.A], () => (null == e ? null : r.A.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === s.eA$.BLOCKED ? null : n;
}

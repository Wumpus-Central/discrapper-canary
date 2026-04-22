n.d(t, { A: () => s });
var r = n(311907),
    l = n(616356),
    i = n(994500),
    a = n(652215);
function s(e) {
    let t = (0, r.bG)([i.A], () => (null != e ? i.A.getRelationshipType(e) : a.eA$.NONE)),
        n = (0, r.bG)([l.A], () => (null == e ? null : l.A.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === a.eA$.BLOCKED ? null : n;
}

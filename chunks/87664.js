n.d(t, { A: () => l });
var i = n(17928),
    a = n(616356),
    r = n(994500),
    s = n(652215);
function l(e) {
    let t = (0, i.bG)([r.A], () => (null != e ? r.A.getRelationshipType(e) : s.eA$.NONE)),
        n = (0, i.bG)([a.A], () => (null == e ? null : a.A.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === s.eA$.BLOCKED ? null : n;
}

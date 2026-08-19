n.d(t, { A: () => E, M: () => r });
var i = n(17928),
    s = n(616356),
    a = n(994500),
    l = n(652215);
function r(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, a.A],
        i = null != e ? n.getRelationshipType(e) : l.eA$.NONE,
        r = null != e ? t.getAnyDiscoverableStreamForUser(e) : null;
    return i === l.eA$.BLOCKED || null == e ? null : r;
}
function E(e) {
    return (0, i.bG)([s.A, a.A], () => r(e, [s.A, a.A]), [e]);
}

i.d(t, { A: () => a, M: () => l });
var E = i(17928),
    s = i(616356),
    n = i(994500),
    r = i(652215);
function l(e) {
    let [t, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, n.A],
        E = null != e ? i.getRelationshipType(e) : r.eA$.NONE,
        l = null != e ? t.getAnyDiscoverableStreamForUser(e) : null;
    return E === r.eA$.BLOCKED || null == e ? null : l;
}
function a(e) {
    return (0, E.bG)([s.A, n.A], () => l(e, [s.A, n.A]), [e]);
}

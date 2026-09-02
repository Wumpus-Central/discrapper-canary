i.d(t, { A: () => c, M: () => l });
var s = i(17928),
    n = i(616356),
    r = i(994500),
    a = i(652215);
function l(e) {
    let [t, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.A, r.A],
        s = null != e ? i.getRelationshipType(e) : a.eA$.NONE,
        l = null != e ? t.getAnyDiscoverableStreamForUser(e) : null;
    return s === a.eA$.BLOCKED || null == e ? null : l;
}
function c(e) {
    return (0, s.bG)([n.A, r.A], () => l(e, [n.A, r.A]), [e]);
}

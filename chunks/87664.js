i.d(t, { A: () => c, M: () => a });
var s = i(17928),
    n = i(616356),
    r = i(994500),
    l = i(652215);
function a(e) {
    let [t, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.A, r.A],
        s = null != e ? i.getRelationshipType(e) : l.eA$.NONE,
        a = null != e ? t.getAnyDiscoverableStreamForUser(e) : null;
    return s === l.eA$.BLOCKED || null == e ? null : a;
}
function c(e) {
    return (0, s.bG)([n.A, r.A], () => a(e, [n.A, r.A]), [e]);
}

t.d(i, { A: () => c, M: () => a });
var s = t(17928),
    n = t(616356),
    r = t(994500),
    l = t(652215);
function a(e) {
    let [i, t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.A, r.A],
        s = null != e ? t.getRelationshipType(e) : l.eA$.NONE,
        a = null != e ? i.getAnyDiscoverableStreamForUser(e) : null;
    return s === l.eA$.BLOCKED || null == e ? null : a;
}
function c(e) {
    return (0, s.bG)([n.A, r.A], () => a(e, [n.A, r.A]), [e]);
}

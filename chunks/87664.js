"use strict";
n.d(t, { A: () => l, M: () => o });
var i = n(17928),
    r = n(616356),
    s = n(994500),
    a = n(652215);
function o(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, s.A],
        i = null != e ? n.getRelationshipType(e) : a.eA$.NONE,
        o = null != e ? t.getAnyDiscoverableStreamForUser(e) : null;
    return i === a.eA$.BLOCKED || null == e ? null : o;
}
function l(e) {
    return (0, i.bG)([r.A, s.A], () => o(e, [r.A, s.A]), [e]);
}

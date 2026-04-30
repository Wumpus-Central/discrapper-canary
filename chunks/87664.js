"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(616356),
    s = n(994500),
    a = n(652215);
function o(e) {
    let t = (0, i.bG)([s.A], () => (null != e ? s.A.getRelationshipType(e) : a.eA$.NONE)),
        n = (0, i.bG)([r.A], () => (null == e ? null : r.A.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === a.eA$.BLOCKED ? null : n;
}

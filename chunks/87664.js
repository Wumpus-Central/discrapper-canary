"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(616356),
    a = n(994500),
    s = n(652215);
function o(e) {
    let t = (0, r.bG)([a.A], () => (null != e ? a.A.getRelationshipType(e) : s.eA$.NONE)),
        n = (0, r.bG)([i.A], () => (null == e ? null : i.A.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === s.eA$.BLOCKED ? null : n;
}

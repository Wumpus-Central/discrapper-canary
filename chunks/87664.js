"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(616356),
    s = n(994500),
    a = n(652215);
function o(e) {
    let t = (0, r.bG)([s.A], () => (null != e ? s.A.getRelationshipType(e) : a.eA$.NONE)),
        n = (0, r.bG)([i.A], () => (null == e ? null : i.A.getAnyDiscoverableStreamForUser(e)), [e]);
    return t === a.eA$.BLOCKED ? null : n;
}

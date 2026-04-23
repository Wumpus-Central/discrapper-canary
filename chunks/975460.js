"use strict";
n.d(t, { g: () => l, t: () => o });
var r = n(64700),
    i = n(587895),
    s = n(223273),
    a = n(705751);
function o(e) {
    if (null == e) return null;
    if (e.type !== a.S7.GAME) return e;
    for (let t of e.linkedGames ?? []) {
        let e = i.A.getApplication(t.id);
        if (null != e && t.type === s.Mh.OFFICIAL) return e;
    }
    return null;
}
function l(e) {
    return r.useMemo(() => o(e), [e]);
}

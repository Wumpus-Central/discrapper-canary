t.d(i, { g: () => s, t: () => r });
var n = t(64700),
    l = t(587895),
    a = t(223273),
    o = t(705751);
function r(e) {
    if (null == e) return null;
    if (e.type !== o.S7.GAME) return e;
    for (let i of e.linkedGames ?? []) {
        let e = l.A.getApplication(i.id);
        if (null != e && i.type === a.Mh.OFFICIAL) return e;
    }
    return null;
}
function s(e) {
    return n.useMemo(() => r(e), [e]);
}

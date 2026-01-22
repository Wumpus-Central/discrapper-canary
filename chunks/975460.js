n.d(t, {
    g: () => l,
    t: () => o,
}),
    n(896048);
var r = n(64700),
    i = n(587895),
    a = n(223273),
    s = n(705751);

function o(e) {
    var t;
    if (null == e) return null;
    if (e.type !== s.S7.GAME) return e;
    for (let n of null != (t = e.linkedGames) ? t : []) {
        let e = i.A.getApplication(n.id);
        if (null != e && n.type === a.Mh.OFFICIAL) return e;
    }
    return null;
}

function l(e) {
    return r.useMemo(() => o(e), [e]);
}

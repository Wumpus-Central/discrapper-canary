n.d(t, { RC: () => d, go: () => E, iY: () => c, vU: () => f, wW: () => m });
var i = n(582128),
    r = n(323889),
    s = n(17928),
    o = n(475743),
    a = n(859703),
    l = n(590202),
    u = n(266569);
function d(e) {
    var t, n;
    let s =
            ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
            (n = "adContentId" in e ? e.adContentId : void 0),
            i.useMemo(
                () => (null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : []),
                [t, n],
            )),
        o = "questOrQuests" in e ? r.p.QUEST : e.adCreativeType;
    return i.useMemo(() => {
        let t = (function (e) {
            let { adContentIds: t, questContent: n } = e;
            return `${[...t].sort().join("_")}_${n}`;
        })({ adContentIds: s, questContent: e.questContent });
        return r.p.QUEST, { adContentIds: s, adCreativeType: o, key: t };
    }, [s, e.questContent, o]);
}
function c(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        u = (0, s.bG)([a.A], () => (n !== r.p.QUEST || 1 !== t.length ? null : a.A.getQuest(t[0])), [t, n]),
        d = i.useMemo(() => (null == u ? null : (0, l.NI)(u)), [u]),
        c = (0, o.Ay)(d);
    return d !== c;
}
function C() {
    return i.useContext(u.n0);
}
function f() {
    return C()?.current;
}
function E() {
    return f()?.getId();
}
function m() {
    let e = C();
    return i.useCallback(() => e?.current?.getId(), [e]);
}

n.d(t, { RC: () => c, go: () => E, iY: () => d, vU: () => A, wW: () => _ });
var r = n(582128),
    u = n(323889),
    l = n(17928),
    i = n(475743),
    o = n(859703),
    s = n(590202),
    a = n(653819);
function c(e) {
    var t, n;
    let l =
            ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
            (n = "adContentId" in e ? e.adContentId : void 0),
            r.useMemo(
                () => (null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : []),
                [t, n],
            )),
        i = "questOrQuests" in e ? u.p.QUEST : e.adCreativeType;
    return r.useMemo(() => {
        let t = (function (e) {
            let { adContentIds: t, questContent: n } = e;
            return `${[...t].sort().join("_")}_${n}`;
        })({ adContentIds: l, questContent: e.questContent });
        return (u.p.QUEST, { adContentIds: l, adCreativeType: i, key: t });
    }, [l, e.questContent, i]);
}
function d(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        a = (0, l.bG)([o.A], () => (n !== u.p.QUEST || 1 !== t.length ? null : o.A.getQuest(t[0])), [t, n]),
        c = r.useMemo(() => (null == a ? null : (0, s.NI)(a)), [a]),
        d = (0, i.Ay)(c);
    return c !== d;
}
function f() {
    return r.useContext(a.n);
}
function A() {
    return f()?.current;
}
function E() {
    return A()?.getId();
}
function _() {
    let e = f();
    return r.useCallback(() => e?.current?.getId(), [e]);
}

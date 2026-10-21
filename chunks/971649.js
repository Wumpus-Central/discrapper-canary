n.d(t, { QK: () => C, RC: () => c, go: () => A, iY: () => d, vU: () => f, wW: () => _ });
var r = n(582128),
    u = n(323889),
    i = n(17928),
    o = n(475743),
    l = n(859703),
    s = n(590202),
    a = n(653819);
function c(e) {
    var t, n;
    let i =
            ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
            (n = "adContentId" in e ? e.adContentId : void 0),
            r.useMemo(
                () => (null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : []),
                [t, n],
            )),
        o = "questOrQuests" in e ? u.p.QUEST : e.adCreativeType;
    return r.useMemo(() => {
        let t = (function (e) {
            let { adContentIds: t, questContent: n } = e;
            return `${[...t].sort().join("_")}_${n}`;
        })({ adContentIds: i, questContent: e.questContent });
        return (u.p.QUEST, { adContentIds: i, adCreativeType: o, key: t });
    }, [i, e.questContent, o]);
}
function d(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        a = (0, i.bG)([l.A], () => (n !== u.p.QUEST || 1 !== t.length ? null : l.A.getQuest(t[0])), [t, n]),
        c = r.useMemo(() => (null == a ? null : (0, s.NI)(a)), [a]),
        d = (0, o.Ay)(c);
    return c !== d;
}
function E() {
    return r.useContext(a.n);
}
function f() {
    return E()?.current;
}
function A() {
    return f()?.getId();
}
function _() {
    let e = E();
    return r.useCallback(() => e?.current?.getId(), [e]);
}
function C() {
    let e = r.useContext(a.n);
    return r.useCallback(() => e?.current?.getId(), [e]);
}

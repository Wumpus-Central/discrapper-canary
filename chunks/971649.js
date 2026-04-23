"use strict";
n.d(t, { RC: () => c, go: () => f, iY: () => d, vU: () => _ });
var r = n(64700),
    i = n(323889),
    s = n(311907),
    a = n(475743),
    o = n(859703),
    l = n(590202),
    u = n(266569);
function c(e) {
    var t, n;
    let s =
            ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
            (n = "adContentId" in e ? e.adContentId : void 0),
            r.useMemo(
                () => (null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : []),
                [t, n],
            )),
        a = "questOrQuests" in e ? i.p.QUEST : e.adCreativeType;
    return r.useMemo(() => {
        let t = (function (e) {
            let { adContentIds: t, questContent: n } = e;
            return `${[...t].sort().join("_")}_${n}`;
        })({ adContentIds: s, questContent: e.questContent });
        return i.p.QUEST, { adContentIds: s, adCreativeType: a, key: t };
    }, [s, e.questContent, a]);
}
function d(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        u = (0, s.bG)([o.A], () => (n !== i.p.QUEST || 1 !== t.length ? null : o.A.getQuest(t[0])), [t, n]),
        c = r.useMemo(() => (null == u ? null : (0, l.NI)(u)), [u]),
        d = (0, a.A)(c);
    return c !== d;
}
function _() {
    let e = r.useContext(u.n0);
    return e?.current;
}
function f() {
    return _()?.getId();
}

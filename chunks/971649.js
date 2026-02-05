"use strict";
n.d(t, { RC: () => _, go: () => h, iY: () => f, vU: () => p });
var r = n(64700),
    i = n(323889),
    a = n(311907),
    s = n(475743),
    o = n(859703),
    l = n(590202),
    u = n(266569);
function c(e) {
    let { adContentIds: t, questContent: n } = e;
    return `${[...t].sort().join("_")}_${n}`;
}
function d(e, t) {
    return r.useMemo(
        () => (null != t ? [t] : null != e ? (Array.isArray(e) ? e.map((e) => e.id) : [e.id]) : []),
        [e, t],
    );
}
function _(e) {
    let t = d("questOrQuests" in e ? e.questOrQuests : void 0, "adContentId" in e ? e.adContentId : void 0),
        n = "questOrQuests" in e ? i.p.QUEST : e.adCreativeType;
    return r.useMemo(() => {
        let r = c({ adContentIds: t, questContent: e.questContent });
        return i.p.QUEST, { adContentIds: t, adCreativeType: n, key: r };
    }, [t, e.questContent, n]);
}
function f(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        u = (0, a.bG)([o.A], () => (n !== i.p.QUEST || 1 !== t.length ? null : o.A.getQuest(t[0])), [t, n]),
        c = r.useMemo(() => (null == u ? null : (0, l.NI)(u)), [u]),
        d = (0, s.A)(c);
    return c !== d;
}
function p() {
    let e = r.useContext(u.n0);
    return e?.current;
}
function h() {
    return p()?.getId();
}

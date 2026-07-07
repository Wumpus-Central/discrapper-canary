"use strict";
n.d(t, { RC: () => c, go: () => h, iY: () => d, vU: () => _ });
var i = n(64700),
    r = n(323889),
    s = n(17928),
    a = n(475743),
    o = n(859703),
    l = n(590202),
    u = n(954243);
function c(e) {
    var t, n;
    let s =
            ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
            (n = "adContentId" in e ? e.adContentId : void 0),
            i.useMemo(
                () => (null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : []),
                [t, n],
            )),
        a = "questOrQuests" in e ? r.p.QUEST : e.adCreativeType;
    return i.useMemo(() => {
        let t = (function (e) {
            let { adContentIds: t, questContent: n } = e;
            return `${[...t].sort().join("_")}_${n}`;
        })({ adContentIds: s, questContent: e.questContent });
        return r.p.QUEST, { adContentIds: s, adCreativeType: a, key: t };
    }, [s, e.questContent, a]);
}
function d(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        u = (0, s.bG)([o.A], () => (n !== r.p.QUEST || 1 !== t.length ? null : o.A.getQuest(t[0])), [t, n]),
        c = i.useMemo(() => (null == u ? null : (0, l.NI)(u)), [u]),
        d = (0, a.A)(c);
    return c !== d;
}
function _() {
    return i.useContext(u.n0)?.current;
}
function h() {
    return _()?.getId();
}

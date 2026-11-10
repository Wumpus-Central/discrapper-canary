var r = n(582128),
    u = n(323889),
    i = n(855986),
    l = n(475743),
    o = n(122760),
    a = n(590202),
    s = n(653819);
function c() {
    return r.useContext(s.n);
}
function d() {
    return c()?.current;
}
n.d(
    t,
    {},
    {
        QK: function () {
            let e = r.useContext(s.n);
            return r.useCallback(() => e?.current?.getId(), [e]);
        },
        RC: function (e) {
            var t, n;
            let i =
                    ((t = "questOrQuests" in e ? e.questOrQuests : void 0),
                    (n = "adContentId" in e ? e.adContentId : void 0),
                    r.useMemo(
                        () => (null != n ? [n] : null != t ? (Array.isArray(t) ? t.map((e) => e.id) : [t.id]) : []),
                        [t, n],
                    )),
                l = "questOrQuests" in e ? u.p.QUEST : e.adCreativeType;
            return r.useMemo(() => {
                let t = (function (e) {
                    let { adContentIds: t, questContent: n } = e;
                    return `${[...t].sort().join("_")}_${n}`;
                })({ adContentIds: i, questContent: e.questContent });
                return (u.p.QUEST, { adContentIds: i, adCreativeType: l, key: t });
            }, [i, e.questContent, l]);
        },
        go: function () {
            return d()?.getId();
        },
        iY: function (e) {
            let { adContentIds: t, adCreativeType: n } = e,
                s = (0, i.bG)([o.A], () => (n !== u.p.QUEST || 1 !== t.length ? null : o.A.getQuest(t[0])), [t, n]),
                c = r.useMemo(() => (null == s ? null : (0, a.NI)(s)), [s]),
                d = (0, l.Ay)(c);
            return c !== d;
        },
        vU: d,
        wW: function () {
            let e = c();
            return r.useCallback(() => e?.current?.getId(), [e]);
        },
    },
);

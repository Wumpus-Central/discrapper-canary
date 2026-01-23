n.d(t, {
    RC: () => f,
    go: () => h,
    iY: () => p,
    vU: () => _,
}),
    n(896048),
    n(638769),
    n(65821);
var r = n(64700),
    i = n(323889),
    a = n(311907),
    s = n(475743),
    o = n(859703),
    l = n(590202),
    c = n(266569);

function u(e) {
    let { adContentIds: t, questContent: n } = e;
    return "".concat([...t].sort().join("_"), "_").concat(n);
}

function d(e, t) {
    return r.useMemo(
        () => (null != t ? [t] : null != e ? (Array.isArray(e) ? e.map((e) => e.id) : [e.id]) : []),
        [e, t],
    );
}

function f(e) {
    let t = d("questOrQuests" in e ? e.questOrQuests : void 0, "adContentId" in e ? e.adContentId : void 0),
        n = "questOrQuests" in e ? i.p.QUEST : e.adCreativeType;
    return r.useMemo(() => {
        let r = u({
            adContentIds: t,
            questContent: e.questContent,
        });
        return (
            i.p.QUEST,
            {
                adContentIds: t,
                adCreativeType: n,
                key: r,
            }
        );
    }, [t, e.questContent, n]);
}

function p(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        c = (0, a.bG)([o.A], () => (n !== i.p.QUEST || 1 !== t.length ? null : o.A.getQuest(t[0])), [t, n]),
        u = r.useMemo(() => (null == c ? null : (0, l.NI)(c)), [c]),
        d = (0, s.A)(u);
    return u !== d;
}

function _() {
    let e = r.useContext(c.n0);
    return null == e ? void 0 : e.current;
}

function h() {
    var e;
    return null == (e = _()) ? void 0 : e.getId();
}

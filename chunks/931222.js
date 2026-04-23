a.d(t, { L: () => o }), a(321073), a(667532);
var s = a(64700),
    l = a(311907),
    r = a(499118),
    i = a(351022),
    n = a(282026),
    c = a(324580);
function o() {
    let e = n.A.useField("fetchedQuery"),
        t = n.A.useField("resultsInitialCategoryId"),
        a = n.A.useField("languageCode"),
        o = (0, l.bG)([i.A], () => (null == t ? 0 : (i.A.getTotal({ categoryId: t, query: e, languageCode: a }) ?? 0))),
        d = (0, l.bG)([i.A], () => i.A.getTotal({ categoryId: c.Iq, query: e, languageCode: a }) ?? 0),
        u = (0, l.bG)([r.A], () => r.A.getVisibleTabs());
    return s.useMemo(() => {
        if (null == u) return null;
        if (null == t) return u;
        let e = [],
            a = new Set();
        for (let [t, s] of u) a.add(t), e.push([t, s]);
        let s = !1;
        return (
            a.has(c.Iq) || (a.add(c.Iq), e.unshift([c.Iq, d]), (s = !0)),
            a.has(t) || (a.add(t), e.push([t, o]), (s = !0)),
            s ? e : u
        );
    }, [u, t, d, o]);
}

n.d(t, { L: () => c }), n(896048), n(321073), n(667532);
var r = n(64700),
    i = n(311907),
    l = n(499118),
    a = n(351022),
    s = n(282026),
    o = n(324580);
function c() {
    let e = s.A.useField("fetchedQuery"),
        t = s.A.useField("resultsInitialCategoryId"),
        n = s.A.useField("languageCode"),
        c = (0, i.bG)([a.A], () => {
            if (null == t) return 0;
            let r = a.A.getTotal({
                categoryId: t,
                query: e,
                languageCode: n,
            });
            return null != r ? r : 0;
        }),
        u = (0, i.bG)([a.A], () => {
            let t = a.A.getTotal({
                categoryId: o.Iq,
                query: e,
                languageCode: n,
            });
            return null != t ? t : 0;
        }),
        d = (0, i.bG)([l.A], () => l.A.getVisibleTabs());
    return r.useMemo(() => {
        if (null == d) return null;
        if (null == t) return d;
        let e = [],
            n = new Set();
        for (let [t, r] of d) n.add(t), e.push([t, r]);
        let r = !1;
        return (
            n.has(o.Iq) || (n.add(o.Iq), e.unshift([o.Iq, u]), (r = !0)),
            n.has(t) || (n.add(t), e.push([t, c]), (r = !0)),
            r ? e : d
        );
    }, [d, t, u, c]);
}

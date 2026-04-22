n.d(t, { A: () => c });
var r = n(64700),
    l = n(311907),
    i = n(99066),
    a = n(435738),
    s = n(99753),
    o = n(583846);
let u = new Set();
function c(e) {
    let t = (0, l.bG)([a.A, s.A], () => {
        let e = s.A.getDebugImpressionCappingDisabled();
        return !(0, i.sE)("useFilterImpressionCappedContent") || e ? u : a.A.getImpressionCappedItemIds();
    }, [e]);
    return r.useMemo(() => {
        if (null == e) return { entries: e, filteredIds: u };
        let n = new Set();
        return { entries: e.filter((e) => !!(0, o.JM)(e) || !t.has(e.id) || (n.add(e.id), !1)), filteredIds: n };
    }, [e, t]);
}

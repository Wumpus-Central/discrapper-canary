"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    a = n(99066),
    s = n(435738),
    o = n(99753),
    l = n(583846);
let u = new Set();
function c(e) {
    let t = (0, i.bG)([s.A, o.A], () => {
        let e = o.A.getDebugImpressionCappingDisabled();
        return !(0, a.sE)("useFilterImpressionCappedContent") || e ? u : s.A.getImpressionCappedItemIds();
    }, [e]);
    return r.useMemo(() => {
        if (null == e) return { entries: e, filteredIds: u };
        let n = new Set();
        return { entries: e.filter((e) => !!(0, l.JM)(e) || !t.has(e.id) || (n.add(e.id), !1)), filteredIds: n };
    }, [e, t]);
}

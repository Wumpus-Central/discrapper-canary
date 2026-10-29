s.d(t, { Q: () => r, n: () => u });
var n = s(462180),
    a = s(882035),
    i = s(17928),
    l = s(4227),
    d = s(623373);
let c = (0, a.h)(() => ({ selectionStates: new Map() }), n.x);
function r(e) {
    let t,
        s =
            ((t = (0, i.bG)([l.A], () => l.A.purchases)),
            null != e && (0, d.B1)(e)
                ? Math.max(
                      0,
                      e.variants.findIndex((e) => !t.has(e.skuId)),
                  )
                : 0),
        n = c((t) =>
            null != e && (0, d.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
        );
    return null != n ? Math.max(0, n) : s;
}
function u(e, t) {
    c.setState((s) => {
        let n = s.selectionStates.get(e.storeListingId);
        return n?.selectedVariantIndex === t
            ? s
            : { selectionStates: new Map(s.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
    });
}

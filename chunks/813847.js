n.d(t, { e: () => o });
var l = n(582128),
    i = n(568065),
    s = n(25525),
    r = n(105292);
function o(e, t, n) {
    return l.useMemo(
        () =>
            t.sourceEntitlement?.ends_at != null
                ? { type: "expiring", expiringAt: t.sourceEntitlement.ends_at }
                : n && null != e.storeRemovalDate
                  ? { type: "removing", removingAt: e.storeRemovalDate }
                  : t.type === i.b_.LEVEL_ACTIVATED
                    ? {
                          type: "active",
                          statusText: r.intl.formatToPlainString(s.default.WRRYUT, {
                              perkName: t.sourcePowerup?.title ?? r.intl.string(r.t.BfF6ED),
                          }),
                      }
                    : t.type !== i.b_.INACTIVE
                      ? { type: "active", statusText: r.intl.string(s.default.FFLkmx) }
                      : void 0,
        [t, n, e],
    );
}

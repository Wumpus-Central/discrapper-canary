l.d(t, { e: () => o });
var i = l(582128),
    n = l(568065),
    s = l(25525),
    r = l(105292);
function o(e, t, l) {
    return i.useMemo(
        () =>
            t.sourceEntitlement?.ends_at != null
                ? { type: "expiring", expiringAt: t.sourceEntitlement.ends_at }
                : l && null != e.storeRemovalDate
                  ? { type: "removing", removingAt: e.storeRemovalDate }
                  : t.type === n.b_.LEVEL_ACTIVATED
                    ? {
                          type: "active",
                          statusText: r.intl.formatToPlainString(s.default.WRRYUT, {
                              perkName: t.sourcePowerup?.title ?? r.intl.string(r.t.BfF6ED),
                          }),
                      }
                    : t.type !== n.b_.INACTIVE
                      ? { type: "active", statusText: r.intl.string(s.default.FFLkmx) }
                      : void 0,
        [t, l, e],
    );
}

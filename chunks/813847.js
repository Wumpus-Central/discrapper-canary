n.d(t, { e: () => o });
var r = n(64700),
    l = n(568065),
    i = n(333354),
    s = n(985018);
function o(e, t, n) {
    return r.useMemo(
        () =>
            t.sourceEntitlement?.ends_at != null
                ? { type: "expiring", expiringAt: t.sourceEntitlement.ends_at }
                : n && null != e.storeRemovalDate
                  ? { type: "removing", removingAt: e.storeRemovalDate }
                  : t.type === l.b_.LEVEL_ACTIVATED
                    ? {
                          type: "active",
                          statusText: s.intl.formatToPlainString(i.default.WRRYUT, {
                              perkName: t.sourcePowerup?.title ?? s.intl.string(s.t.BfF6ED),
                          }),
                      }
                    : t.type !== l.b_.INACTIVE
                      ? { type: "active", statusText: s.intl.string(i.default.FFLkmx) }
                      : void 0,
        [t, n, e],
    );
}

l.d(t, { e: () => o });
var n = l(582128),
    i = l(568065),
    r = l(641641),
    s = l(375708);
function o(e, t, l) {
    return n.useMemo(
        () =>
            t.sourceEntitlement?.ends_at != null
                ? { type: "expiring", expiringAt: t.sourceEntitlement.ends_at }
                : l && null != e.storeRemovalDate
                  ? { type: "removing", removingAt: e.storeRemovalDate }
                  : t.type === i.b_.LEVEL_ACTIVATED
                    ? {
                          type: "active",
                          statusText: s.intl.formatToPlainString(r.default.WRRYUT, {
                              perkName: t.sourcePowerup?.title ?? s.intl.string(s.t.BfF6ED),
                          }),
                      }
                    : t.type !== i.b_.INACTIVE
                      ? { type: "active", statusText: s.intl.string(r.default.FFLkmx) }
                      : void 0,
        [t, l, e],
    );
}

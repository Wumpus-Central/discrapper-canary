l.d(t, { e: () => o });
var n = l(582128),
    i = l(568065),
    s = l(794176),
    r = l(375708);
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
                          statusText: r.intl.formatToPlainString(s.default.WRRYUT, {
                              perkName: t.sourcePowerup?.title ?? r.intl.string(r.t.BfF6ED),
                          }),
                      }
                    : t.type !== i.b_.INACTIVE
                      ? { type: "active", statusText: r.intl.string(s.default.FFLkmx) }
                      : void 0,
        [t, l, e],
    );
}

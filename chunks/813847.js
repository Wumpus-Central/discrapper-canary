var l = n(582128),
    s = n(568065),
    i = n(586428),
    r = n(792996);
n.d(
    t,
    {},
    {
        e: function (e, t, n) {
            return l.useMemo(
                () =>
                    t.sourceEntitlement?.ends_at != null
                        ? { type: "expiring", expiringAt: t.sourceEntitlement.ends_at }
                        : n && null != e.storeRemovalDate
                          ? { type: "removing", removingAt: e.storeRemovalDate }
                          : t.type === s.b_.LEVEL_ACTIVATED
                            ? {
                                  type: "active",
                                  statusText: r.intl.formatToPlainString(i.default.WRRYUT, {
                                      perkName: t.sourcePowerup?.title ?? r.intl.string(r.t.BfF6ED),
                                  }),
                              }
                            : t.type !== s.b_.INACTIVE
                              ? { type: "active", statusText: r.intl.string(i.default.FFLkmx) }
                              : void 0,
                [t, n, e],
            );
        },
    },
);

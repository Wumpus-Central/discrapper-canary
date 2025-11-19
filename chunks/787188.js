n.d(t, { _: () => o });
var r = n(535396),
    i = n(18853),
    l = n(388032);
function o(e, t, n) {
    var o, a, s;
    return (null == (o = t.sourceEntitlement) ? void 0 : o.ends_at) != null
        ? {
              type: "expiring",
              expiringAt: t.sourceEntitlement.ends_at,
          }
        : n && null != e.storeRemovalDate
          ? {
                type: "removing",
                removingAt: e.storeRemovalDate,
            }
          : t.type === r.A3.LEVEL_ACTIVATED
            ? {
                  type: "active",
                  statusText: l.intl.formatToPlainString(i.default.WRRYUT, {
                      perkName:
                          null != (s = null == (a = t.sourcePowerup) ? void 0 : a.title)
                              ? s
                              : l.intl.string(l.t.BfF6ED),
                  }),
              }
            : t.type === r.A3.POWERUP_ACTIVATED
              ? {
                    type: "active",
                    statusText: l.intl.string(i.default.FFLkmx),
                }
              : null;
}

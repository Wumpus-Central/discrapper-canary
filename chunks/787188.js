n.d(t, { _: () => l });
var r = n(535396),
    o = n(989308),
    i = n(388032);
function l(e, t, n) {
    var l, s, a;
    return (null == (l = t.sourceEntitlement) ? void 0 : l.ends_at) != null
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
                  statusText: i.intl.formatToPlainString(o.default.WRRYUV, {
                      perkName:
                          null != (a = null == (s = t.sourcePowerup) ? void 0 : s.title)
                              ? a
                              : i.intl.string(i.t.BfF6EB),
                  }),
              }
            : t.type === r.A3.POWERUP_ACTIVATED
              ? {
                    type: "active",
                    statusText: i.intl.string(o.default.FFLkm5),
                }
              : null;
}

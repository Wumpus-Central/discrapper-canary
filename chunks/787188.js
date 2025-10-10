n.d(t, { _: () => l });
var r = n(535396),
    i = n(989308),
    o = n(388032);
function l(e, t, n) {
    var l, a, s;
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
                  statusText: o.intl.formatToPlainString(i.default.WRRYUV, {
                      perkName:
                          null != (s = null == (a = t.sourcePowerup) ? void 0 : a.title)
                              ? s
                              : o.intl.string(o.t.BfF6EB),
                  }),
              }
            : t.type === r.A3.POWERUP_ACTIVATED
              ? {
                    type: "active",
                    statusText: o.intl.string(i.default.FFLkm5),
                }
              : null;
}

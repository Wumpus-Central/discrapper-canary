l.d(t, { e: () => o });
var r = l(64700),
    n = l(568065),
    i = l(333354),
    s = l(985018);
function o(e, t, l) {
    return r.useMemo(() => {
        var r, o, a;
        return (null == (r = t.sourceEntitlement) ? void 0 : r.ends_at) != null
            ? {
                  type: "expiring",
                  expiringAt: t.sourceEntitlement.ends_at,
              }
            : l && null != e.storeRemovalDate
              ? {
                    type: "removing",
                    removingAt: e.storeRemovalDate,
                }
              : t.type === n.b_.LEVEL_ACTIVATED
                ? {
                      type: "active",
                      statusText: s.intl.formatToPlainString(i.default.WRRYUT, {
                          perkName:
                              null != (o = null == (a = t.sourcePowerup) ? void 0 : a.title)
                                  ? o
                                  : s.intl.string(s.t.BfF6ED),
                      }),
                  }
                : t.type !== n.b_.INACTIVE
                  ? {
                        type: "active",
                        statusText: s.intl.string(i.default.FFLkmx),
                    }
                  : void 0;
    }, [t, l, e]);
}

n.d(t, { Z: () => u });
var r = n(473749),
    i = n(442837),
    o = n(60482),
    l = n(447941),
    a = n(556970),
    s = n(388032);
function u(e) {
    let t = (0, i.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getStateForGuild(e)) ? void 0 : t.entitlements;
        }, [e]),
        n = (0, l.Z)(e);
    return r.useMemo(() => {
        if (0 !== Object.values(null != t ? t : {}).length)
            return n.length > 0
                ? {
                      type: "expiring",
                      expiringAt: n[0].ends_at,
                  }
                : {
                      type: "active",
                      statusText: s.intl.string(a.default.FFLkmx),
                  };
    }, [n, t]);
}

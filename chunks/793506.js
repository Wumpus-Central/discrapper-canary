l.d(t, { A: () => u });
var r = l(64700),
    n = l(311907),
    i = l(522055),
    s = l(6316),
    o = l(333354),
    a = l(985018);
function u(e) {
    let t = (0, n.bG)([i.A], () => {
            var t;
            return null == (t = i.A.getStateForGuild(e)) ? void 0 : t.entitlements;
        }, [e]),
        l = (0, s.A)(e);
    return r.useMemo(() => {
        if (0 !== Object.values(null != t ? t : {}).length)
            return l.length > 0
                ? {
                      type: "expiring",
                      expiringAt: l[0].ends_at,
                  }
                : {
                      type: "active",
                      statusText: a.intl.string(o.default.FFLkmx),
                  };
    }, [l, t]);
}

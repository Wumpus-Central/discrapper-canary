n.d(t, { Z: () => l });
var r = n(442837),
    i = n(430824),
    a = n(905128),
    o = n(535396),
    s = n(981631);
function l(e, t) {
    let { isActiveFromLevel: n, levelEntitlement: r, levelPowerup: i } = c(e, t),
        a = u(e, t),
        s = d(e, t),
        l = null != s,
        _ = {
            type: o.A3.INACTIVE,
            sourceEntitlement: void 0,
            sourcePowerup: void 0
        };
    return (
        null == t ||
            (n
                ? (_ = {
                      type: o.A3.LEVEL_ACTIVATED,
                      sourceEntitlement: r,
                      sourcePowerup: i
                  })
                : a
                  ? (_ = {
                        type: o.A3.TIER_OVERRIDE_ACTIVATED,
                        sourceEntitlement: void 0,
                        sourcePowerup: t
                    })
                  : l &&
                    (_ = {
                        type: o.A3.POWERUP_ACTIVATED,
                        sourceEntitlement: s,
                        sourcePowerup: t
                    })),
        _
    );
}
function c(e, t) {
    var n, s;
    let l = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
        c = (0, r.e7)([a.Z], () => a.Z.getStateForGuild(e));
    if (null == t || null == l || null == c)
        return {
            isActiveFromLevel: !1,
            levelEntitlement: void 0,
            levelPowerup: void 0
        };
    let u = o.Rx[t.skuId];
    if (null == u)
        return {
            isActiveFromLevel: !1,
            levelEntitlement: void 0,
            levelPowerup: void 0
        };
    let d = l.premiumTier >= u,
        _ = o.Cp[u];
    return {
        isActiveFromLevel: d,
        levelEntitlement: null != _ ? (null == (n = c.unlockedPowerups) ? void 0 : n[_]) : void 0,
        levelPowerup: null != _ ? (null == (s = c.allPowerups) ? void 0 : s[_]) : void 0
    };
}
function u(e, t) {
    return (0, r.e7)([i.Z], () => {
        var n;
        return null != t && (null == (n = i.Z.getGuild(e)) ? void 0 : n.features.has(s.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0 && o.ad.has(t.skuId);
    });
}
function d(e, t) {
    return (0, r.e7)([a.Z], () => {
        var n, r;
        if (null != t) return null == (r = a.Z.getStateForGuild(e)) || null == (n = r.unlockedPowerups) ? void 0 : n[t.skuId];
    });
}

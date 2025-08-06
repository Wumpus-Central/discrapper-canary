n.d(t, {
    G: () => l,
    Z: () => c
});
var r = n(442837),
    i = n(430824),
    o = n(905128),
    a = n(535396),
    s = n(981631);
function l(e, t) {
    var n, l;
    let c = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
        u = (0, r.e7)([o.Z], () => o.Z.getStateForGuild(e)),
        d = null != (l = null == c || null == (n = c.features) ? void 0 : n.has(s.oNc.PREMIUM_TIER_3_OVERRIDE)) && l;
    function f(e) {
        let { isActiveFromLevel: t, levelEntitlement: n, levelPowerup: r } = _(e),
            i = p(e),
            o = h(e),
            s = null != o,
            l = {
                type: a.A3.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0
            };
        return (
            t
                ? (l = {
                      type: a.A3.LEVEL_ACTIVATED,
                      powerup: e,
                      sourceEntitlement: n,
                      sourcePowerup: r
                  })
                : i
                  ? (l = {
                        type: a.A3.TIER_OVERRIDE_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: void 0,
                        sourcePowerup: e
                    })
                  : s &&
                    (l = {
                        type: a.A3.POWERUP_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: o,
                        sourcePowerup: e
                    }),
            l
        );
    }
    function _(e) {
        var t, n;
        if (null == e || null == c || null == u)
            return {
                isActiveFromLevel: !1,
                levelEntitlement: void 0,
                levelPowerup: void 0
            };
        let r = a.Rx[e.skuId];
        if (null == r)
            return {
                isActiveFromLevel: !1,
                levelEntitlement: void 0,
                levelPowerup: void 0
            };
        let i = c.premiumTier >= r,
            o = a.Cp[r];
        return {
            isActiveFromLevel: i,
            levelEntitlement: null != o ? (null == (t = u.unlockedPowerups) ? void 0 : t[o]) : void 0,
            levelPowerup: null != o ? (null == (n = u.allPowerups) ? void 0 : n[o]) : void 0
        };
    }
    function p(e) {
        return d && a.ad.has(e.skuId);
    }
    function h(e) {
        var t, n;
        return null != (n = null == u || null == (t = u.unlockedPowerups) ? void 0 : t[e.skuId]) ? n : null;
    }
    return t.map((e) => f(e));
}
function c(e, t) {
    let n = l(e, null == t ? [] : [t]);
    return n.length <= 0
        ? {
              type: a.A3.INACTIVE,
              sourceEntitlement: void 0,
              sourcePowerup: void 0
          }
        : n[0];
}

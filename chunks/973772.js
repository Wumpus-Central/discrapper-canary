n.d(t, { Z: () => c });
var r = n(442837),
    i = n(430824),
    a = n(905128),
    o = n(535396),
    s = n(981631);
function l(e, t) {
    var n, l;
    let c = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
        u = (0, r.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        d = null != (l = null == c || null == (n = c.features) ? void 0 : n.has(s.oNc.PREMIUM_TIER_3_OVERRIDE)) && l;
    function f(e) {
        let { isActiveFromLevel: t, levelEntitlement: n, levelPowerup: r } = _(e),
            i = p(e),
            a = h(e),
            s = null != a,
            l = {
                type: o.A3.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0
            };
        return (
            t
                ? (l = {
                      type: o.A3.LEVEL_ACTIVATED,
                      powerup: e,
                      sourceEntitlement: n,
                      sourcePowerup: r
                  })
                : i
                  ? (l = {
                        type: o.A3.TIER_OVERRIDE_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: void 0,
                        sourcePowerup: e
                    })
                  : s &&
                    (l = {
                        type: o.A3.POWERUP_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: a,
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
        let r = o.Rx[e.skuId];
        if (null == r)
            return {
                isActiveFromLevel: !1,
                levelEntitlement: void 0,
                levelPowerup: void 0
            };
        let i = c.premiumTier >= r,
            a = o.Cp[r];
        return {
            isActiveFromLevel: i,
            levelEntitlement: null != a ? (null == (t = u.unlockedPowerups) ? void 0 : t[a]) : void 0,
            levelPowerup: null != a ? (null == (n = u.allPowerups) ? void 0 : n[a]) : void 0
        };
    }
    function p(e) {
        return d && o.ad.has(e.skuId);
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
              type: o.A3.INACTIVE,
              sourceEntitlement: void 0,
              sourcePowerup: void 0
          }
        : n[0];
}

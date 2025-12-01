n.d(t, {
    Gv: () => u,
    UP: () => c,
    ZP: () => d,
});
var r = n(442837),
    i = n(430824),
    a = n(905128),
    o = n(619733),
    s = n(535396),
    l = n(981631);
function c(e) {
    return e.type !== s.A3.INACTIVE;
}
function u(e, t) {
    var n, c;
    let u = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
        d = (0, r.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        f =
            null !=
                (c = null == u || null == (n = u.features) ? void 0 : n.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) &&
            c;
    function p(e) {
        if (e.skuId === o.fj) {
            var t, n;
            return {
                type:
                    null !=
                        (n = null == u || null == (t = u.features) ? void 0 : t.has(l.GuildFeatures.GAME_SERVERS)) && n
                        ? s.A3.POWERUP_ACTIVATED
                        : s.A3.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0,
            };
        }
        let { isActiveFromLevel: r, levelEntitlement: i, levelPowerup: a } = _(e),
            c = m(e),
            d = h(e),
            f = null != d,
            p = {
                type: s.A3.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0,
            };
        return (
            r
                ? (p = {
                      type: s.A3.LEVEL_ACTIVATED,
                      powerup: e,
                      sourceEntitlement: i,
                      sourcePowerup: a,
                  })
                : c
                  ? (p = {
                        type: s.A3.TIER_OVERRIDE_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: void 0,
                        sourcePowerup: e,
                    })
                  : f &&
                    (p = {
                        type: s.A3.POWERUP_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: d,
                        sourcePowerup: e,
                    }),
            p
        );
    }
    function _(e) {
        var t, n;
        if (null == e || null == u || null == d)
            return {
                isActiveFromLevel: !1,
                levelEntitlement: void 0,
                levelPowerup: void 0,
            };
        let r = s.Rx[e.skuId];
        if (null == r)
            return {
                isActiveFromLevel: !1,
                levelEntitlement: void 0,
                levelPowerup: void 0,
            };
        let i = u.premiumTier >= r,
            a = s.Cp[r];
        return {
            isActiveFromLevel: i,
            levelEntitlement: null != a ? (null == (t = d.unlockedPowerups) ? void 0 : t[a]) : void 0,
            levelPowerup: null != a ? (null == (n = d.allPowerups) ? void 0 : n[a]) : void 0,
        };
    }
    function m(e) {
        return f && s.ad.has(e.skuId);
    }
    function h(e) {
        var t, n;
        return null != (n = null == d || null == (t = d.unlockedPowerups) ? void 0 : t[e.skuId]) ? n : null;
    }
    return t.map((e) => p(e));
}
function d(e, t) {
    let n = u(e, null == t ? [] : [t]);
    return n.length <= 0
        ? {
              type: s.A3.INACTIVE,
              sourceEntitlement: void 0,
              sourcePowerup: void 0,
          }
        : n[0];
}

"use strict";
n.d(t, { Ay: () => d, dy: () => u, jJ: () => c });
var r = n(311907),
    i = n(71393),
    a = n(645619),
    s = n(800007),
    o = n(568065),
    l = n(652215);
function u(e) {
    return e.type !== o.b_.INACTIVE;
}
function c(e, t) {
    let n = (0, r.bG)([i.A], () => i.A.getGuild(e)),
        u = (0, r.bG)([a.A], () => a.A.getStateForGuild(e)),
        c = n?.features?.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    function d(e) {
        if (e.skuId === s.W5)
            return {
                type: n?.features?.has(l.GuildFeatures.GAME_SERVERS) ? o.b_.POWERUP_ACTIVATED : o.b_.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0,
            };
        let { isActiveFromLevel: t, levelEntitlement: r, levelPowerup: i } = _(e),
            a = f(e),
            u = p(e),
            c = null != u,
            d = { type: o.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
        return (
            t
                ? (d = { type: o.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: r, sourcePowerup: i })
                : a
                  ? (d = {
                        type: o.b_.TIER_OVERRIDE_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: void 0,
                        sourcePowerup: e,
                    })
                  : c && (d = { type: o.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: u, sourcePowerup: e }),
            d
        );
    }
    function _(e) {
        if (null == e || null == n || null == u)
            return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
        let t = o.wr[e.skuId];
        if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
        let r = n.premiumTier >= t,
            i = o.a8[t];
        return {
            isActiveFromLevel: r,
            levelEntitlement: null != i ? u.unlockedPowerups?.[i] : void 0,
            levelPowerup: null != i ? u.allPowerups?.[i] : void 0,
        };
    }
    function f(e) {
        return c && o.o2.has(e.skuId);
    }
    function p(e) {
        return u?.unlockedPowerups?.[e.skuId] ?? null;
    }
    return t.map((e) => d(e));
}
function d(e, t) {
    let n = c(e, null == t ? [] : [t]);
    return n.length <= 0 ? { type: o.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : n[0];
}

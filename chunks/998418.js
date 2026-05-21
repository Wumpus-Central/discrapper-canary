"use strict";
n.d(t, { Ay: () => d, dy: () => u, jJ: () => c });
var i = n(17928),
    r = n(71393),
    s = n(645619),
    a = n(800007),
    o = n(568065),
    l = n(652215);
function u(e) {
    return e.type !== o.b_.INACTIVE;
}
function c(e, t) {
    let n = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        u = (0, i.bG)([s.A], () => s.A.getStateForGuild(e)),
        c = n?.features?.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
        (function (e) {
            var t, i;
            if (e.skuId === a.W5)
                return {
                    type: n?.features?.has(l.GuildFeatures.GAME_SERVERS) ? o.b_.POWERUP_ACTIVATED : o.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: r,
                    levelEntitlement: s,
                    levelPowerup: d,
                } = (function (e) {
                    if (null == e || null == n || null == u)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let t = o.wr[e.skuId];
                    if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let i = n.premiumTier >= t,
                        r = o.a8[t];
                    return {
                        isActiveFromLevel: i,
                        levelEntitlement: null != r ? u.unlockedPowerups?.[r] : void 0,
                        levelPowerup: null != r ? u.allPowerups?.[r] : void 0,
                    };
                })(e),
                _ = ((t = e), c && o.o2.has(t.skuId)),
                f = ((i = e), u?.unlockedPowerups?.[i.skuId] ?? null),
                h = { type: o.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                r
                    ? (h = { type: o.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: s, sourcePowerup: d })
                    : _
                      ? (h = {
                            type: o.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != f &&
                        (h = { type: o.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: f, sourcePowerup: e }),
                h
            );
        })(e),
    );
}
function d(e, t) {
    let n = c(e, null == t ? [] : [t]);
    return n.length <= 0 ? { type: o.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : n[0];
}

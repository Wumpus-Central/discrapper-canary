n.d(t, { Ay: () => d, dy: () => o, jJ: () => E });
var i = n(17928),
    r = n(71393),
    a = n(645619),
    s = n(800007),
    _ = n(568065),
    l = n(652215);
function o(e) {
    return e.type !== _.b_.INACTIVE;
}
function E(e, t) {
    let n = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        o = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
        E = n?.features?.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
        (function (e) {
            var t, i;
            if (e.skuId === s.W5)
                return {
                    type: n?.features?.has(l.GuildFeatures.GAME_SERVERS) ? _.b_.POWERUP_ACTIVATED : _.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: r,
                    levelEntitlement: a,
                    levelPowerup: d,
                } = (function (e) {
                    if (null == e || null == n || null == o)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let t = _.wr[e.skuId];
                    if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let i = n.premiumTier >= t,
                        r = _.a8[t];
                    return {
                        isActiveFromLevel: i,
                        levelEntitlement: null != r ? o.unlockedPowerups?.[r] : void 0,
                        levelPowerup: null != r ? o.allPowerups?.[r] : void 0,
                    };
                })(e),
                c = ((t = e), E && _.o2.has(t.skuId)),
                u = ((i = e), o?.unlockedPowerups?.[i.skuId] ?? null),
                I = { type: _.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                r
                    ? (I = { type: _.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: a, sourcePowerup: d })
                    : c
                      ? (I = {
                            type: _.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != u &&
                        (I = { type: _.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: u, sourcePowerup: e }),
                I
            );
        })(e),
    );
}
function d(e, t) {
    let n = E(e, null == t ? [] : [t]);
    return n.length <= 0 ? { type: _.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : n[0];
}

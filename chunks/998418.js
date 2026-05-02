r.d(t, { Ay: () => u, dy: () => d, jJ: () => c });
var n = r(17928),
    a = r(71393),
    i = r(645619),
    l = r(800007),
    o = r(568065),
    s = r(652215);
function d(e) {
    return e.type !== o.b_.INACTIVE;
}
function c(e, t) {
    let r = (0, n.bG)([a.A], () => a.A.getGuild(e)),
        d = (0, n.bG)([i.A], () => i.A.getStateForGuild(e)),
        c = r?.features?.has(s.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
        (function (e) {
            var t, n;
            if (e.skuId === l.W5)
                return {
                    type: r?.features?.has(s.GuildFeatures.GAME_SERVERS) ? o.b_.POWERUP_ACTIVATED : o.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: a,
                    levelEntitlement: i,
                    levelPowerup: u,
                } = (function (e) {
                    if (null == e || null == r || null == d)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let t = o.wr[e.skuId];
                    if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let n = r.premiumTier >= t,
                        a = o.a8[t];
                    return {
                        isActiveFromLevel: n,
                        levelEntitlement: null != a ? d.unlockedPowerups?.[a] : void 0,
                        levelPowerup: null != a ? d.allPowerups?.[a] : void 0,
                    };
                })(e),
                m = ((t = e), c && o.o2.has(t.skuId)),
                E = ((n = e), d?.unlockedPowerups?.[n.skuId] ?? null),
                p = { type: o.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                a
                    ? (p = { type: o.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: i, sourcePowerup: u })
                    : m
                      ? (p = {
                            type: o.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != E &&
                        (p = { type: o.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: E, sourcePowerup: e }),
                p
            );
        })(e),
    );
}
function u(e, t) {
    let r = c(e, null == t ? [] : [t]);
    return r.length <= 0 ? { type: o.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : r[0];
}

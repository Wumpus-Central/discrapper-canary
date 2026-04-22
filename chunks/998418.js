n.d(t, { Ay: () => u, dy: () => o, jJ: () => c });
var r = n(311907),
    i = n(71393),
    a = n(645619),
    l = n(800007),
    s = n(568065),
    d = n(652215);
function o(e) {
    return e.type !== s.b_.INACTIVE;
}
function c(e, t) {
    let n = (0, r.bG)([i.A], () => i.A.getGuild(e)),
        o = (0, r.bG)([a.A], () => a.A.getStateForGuild(e)),
        c = n?.features?.has(d.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
        (function (e) {
            var t, r;
            if (e.skuId === l.W5)
                return {
                    type: n?.features?.has(d.GuildFeatures.GAME_SERVERS) ? s.b_.POWERUP_ACTIVATED : s.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: i,
                    levelEntitlement: a,
                    levelPowerup: u,
                } = (function (e) {
                    if (null == e || null == n || null == o)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let t = s.wr[e.skuId];
                    if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let r = n.premiumTier >= t,
                        i = s.a8[t];
                    return {
                        isActiveFromLevel: r,
                        levelEntitlement: null != i ? o.unlockedPowerups?.[i] : void 0,
                        levelPowerup: null != i ? o.allPowerups?.[i] : void 0,
                    };
                })(e),
                h = ((t = e), c && s.o2.has(t.skuId)),
                m = ((r = e), o?.unlockedPowerups?.[r.skuId] ?? null),
                p = { type: s.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                i
                    ? (p = { type: s.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: a, sourcePowerup: u })
                    : h
                      ? (p = {
                            type: s.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != m &&
                        (p = { type: s.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: m, sourcePowerup: e }),
                p
            );
        })(e),
    );
}
function u(e, t) {
    let n = c(e, null == t ? [] : [t]);
    return n.length <= 0 ? { type: s.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : n[0];
}

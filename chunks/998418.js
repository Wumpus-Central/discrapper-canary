i.d(t, { Ay: () => u, dy: () => c, jJ: () => d });
var s = i(17928),
    n = i(71393),
    r = i(645619),
    l = i(568065),
    a = i(652215),
    o = i(628049);
function c(e) {
    return e.type !== l.b_.INACTIVE;
}
function d(e, t) {
    let i = (0, s.bG)([n.A], () => n.A.getGuild(e)),
        c = (0, s.bG)([r.A], () => r.A.getStateForGuild(e)),
        d = i?.features?.has(a.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
        (function (e) {
            var t, s;
            if (e.skuId === o.W5)
                return {
                    type: i?.features?.has(a.GuildFeatures.GAME_SERVERS) ? l.b_.POWERUP_ACTIVATED : l.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: n,
                    levelEntitlement: r,
                    levelPowerup: u,
                } = (function (e) {
                    if (null == e || null == i || null == c)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let t = l.wr[e.skuId];
                    if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let s = i.premiumTier >= t,
                        n = l.a8[t];
                    return {
                        isActiveFromLevel: s,
                        levelEntitlement: null != n ? c.unlockedPowerups?.[n] : void 0,
                        levelPowerup: null != n ? c.allPowerups?.[n] : void 0,
                    };
                })(e),
                m = ((t = e), d && l.o2.has(t.skuId)),
                g = ((s = e), c?.unlockedPowerups?.[s.skuId] ?? null),
                h = { type: l.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                n
                    ? (h = { type: l.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: r, sourcePowerup: u })
                    : m
                      ? (h = {
                            type: l.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != g &&
                        (h = { type: l.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: g, sourcePowerup: e }),
                h
            );
        })(e),
    );
}
function u(e, t) {
    let i = d(e, null == t ? [] : [t]);
    return i.length <= 0 ? { type: l.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : i[0];
}

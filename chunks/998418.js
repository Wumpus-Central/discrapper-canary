r.d(t, { Ay: () => u, dy: () => d, jJ: () => c });
var n = r(17928),
    i = r(71393),
    s = r(645619),
    o = r(800007),
    a = r(568065),
    l = r(652215);
function d(e) {
    return e.type !== a.b_.INACTIVE;
}
function c(e, t) {
    let r = (0, n.bG)([i.A], () => i.A.getGuild(e)),
        d = (0, n.bG)([s.A], () => s.A.getStateForGuild(e)),
        c = r?.features?.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
        (function (e) {
            var t, n;
            if (e.skuId === o.W5)
                return {
                    type: r?.features?.has(l.GuildFeatures.GAME_SERVERS) ? a.b_.POWERUP_ACTIVATED : a.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: i,
                    levelEntitlement: s,
                    levelPowerup: u,
                } = (function (e) {
                    if (null == e || null == r || null == d)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let t = a.wr[e.skuId];
                    if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let n = r.premiumTier >= t,
                        i = a.a8[t];
                    return {
                        isActiveFromLevel: n,
                        levelEntitlement: null != i ? d.unlockedPowerups?.[i] : void 0,
                        levelPowerup: null != i ? d.allPowerups?.[i] : void 0,
                    };
                })(e),
                p = ((t = e), c && a.o2.has(t.skuId)),
                h = ((n = e), d?.unlockedPowerups?.[n.skuId] ?? null),
                m = { type: a.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                i
                    ? (m = { type: a.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: s, sourcePowerup: u })
                    : p
                      ? (m = {
                            type: a.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != h &&
                        (m = { type: a.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: h, sourcePowerup: e }),
                m
            );
        })(e),
    );
}
function u(e, t) {
    let r = c(e, null == t ? [] : [t]);
    return r.length <= 0 ? { type: a.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : r[0];
}

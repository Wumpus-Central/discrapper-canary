r.d(t, { Ay: () => u, dy: () => d, jJ: () => c });
var i = r(17928),
    s = r(71393),
    n = r(645619),
    a = r(800007),
    l = r(568065),
    o = r(652215);
function d(e) {
    return e.type !== l.b_.INACTIVE;
}
function c(e, t) {
    let r = (0, i.bG)([s.A], () => s.A.getGuild(e)),
        d = (0, i.bG)([n.A], () => n.A.getStateForGuild(e)),
        c = r?.features?.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
        (function (e) {
            var t, i;
            if (e.skuId === a.W5)
                return {
                    type: r?.features?.has(o.GuildFeatures.GAME_SERVERS) ? l.b_.POWERUP_ACTIVATED : l.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: s,
                    levelEntitlement: n,
                    levelPowerup: u,
                } = (function (e) {
                    if (null == e || null == r || null == d)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let t = l.wr[e.skuId];
                    if (null == t) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let i = r.premiumTier >= t,
                        s = l.a8[t];
                    return {
                        isActiveFromLevel: i,
                        levelEntitlement: null != s ? d.unlockedPowerups?.[s] : void 0,
                        levelPowerup: null != s ? d.allPowerups?.[s] : void 0,
                    };
                })(e),
                h = ((t = e), c && l.o2.has(t.skuId)),
                p = ((i = e), d?.unlockedPowerups?.[i.skuId] ?? null),
                m = { type: l.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                s
                    ? (m = { type: l.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: n, sourcePowerup: u })
                    : h
                      ? (m = {
                            type: l.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != p &&
                        (m = { type: l.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: p, sourcePowerup: e }),
                m
            );
        })(e),
    );
}
function u(e, t) {
    let r = c(e, null == t ? [] : [t]);
    return r.length <= 0 ? { type: l.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : r[0];
}

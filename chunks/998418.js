t.d(u, { Ay: () => d, dy: () => s, jJ: () => E });
var r = t(17928),
    l = t(71393),
    o = t(645619),
    n = t(568065),
    i = t(652215),
    p = t(628049);
function s(e) {
    return e.type !== n.b_.INACTIVE;
}
function E(e, u) {
    let t = (0, r.bG)([l.A], () => l.A.getGuild(e)),
        s = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)),
        E = t?.features?.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return u.map((e) =>
        (function (e) {
            var u, r;
            if (e.skuId === p.W5)
                return {
                    type: t?.features?.has(i.GuildFeatures.GAME_SERVERS) ? n.b_.POWERUP_ACTIVATED : n.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: l,
                    levelEntitlement: o,
                    levelPowerup: d,
                } = (function (e) {
                    if (null == e || null == t || null == s)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let u = n.wr[e.skuId];
                    if (null == u) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let r = t.premiumTier >= u,
                        l = n.a8[u];
                    return {
                        isActiveFromLevel: r,
                        levelEntitlement: null != l ? s.unlockedPowerups?.[l] : void 0,
                        levelPowerup: null != l ? s.allPowerups?.[l] : void 0,
                    };
                })(e),
                c = ((u = e), E && n.o2.has(u.skuId)),
                v = ((r = e), s?.unlockedPowerups?.[r.skuId] ?? null),
                A = { type: n.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                l
                    ? (A = { type: n.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: o, sourcePowerup: d })
                    : c
                      ? (A = {
                            type: n.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != v &&
                        (A = { type: n.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: v, sourcePowerup: e }),
                A
            );
        })(e),
    );
}
function d(e, u) {
    let t = E(e, null == u ? [] : [u]);
    return t.length <= 0 ? { type: n.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : t[0];
}

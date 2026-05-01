t.d(r, { Ay: () => s, dy: () => _, jJ: () => d });
var u = t(17928),
    o = t(71393),
    n = t(645619),
    E = t(800007),
    i = t(568065),
    l = t(652215);
function _(e) {
    return e.type !== i.b_.INACTIVE;
}
function d(e, r) {
    let t = (0, u.bG)([o.A], () => o.A.getGuild(e)),
        _ = (0, u.bG)([n.A], () => n.A.getStateForGuild(e)),
        d = t?.features?.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return r.map((e) =>
        (function (e) {
            var r, u;
            if (e.skuId === E.W5)
                return {
                    type: t?.features?.has(l.GuildFeatures.GAME_SERVERS) ? i.b_.POWERUP_ACTIVATED : i.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: o,
                    levelEntitlement: n,
                    levelPowerup: s,
                } = (function (e) {
                    if (null == e || null == t || null == _)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let r = i.wr[e.skuId];
                    if (null == r) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let u = t.premiumTier >= r,
                        o = i.a8[r];
                    return {
                        isActiveFromLevel: u,
                        levelEntitlement: null != o ? _.unlockedPowerups?.[o] : void 0,
                        levelPowerup: null != o ? _.allPowerups?.[o] : void 0,
                    };
                })(e),
                c = ((r = e), d && i.o2.has(r.skuId)),
                p = ((u = e), _?.unlockedPowerups?.[u.skuId] ?? null),
                a = { type: i.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                o
                    ? (a = { type: i.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: n, sourcePowerup: s })
                    : c
                      ? (a = {
                            type: i.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != p &&
                        (a = { type: i.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: p, sourcePowerup: e }),
                a
            );
        })(e),
    );
}
function s(e, r) {
    let t = d(e, null == r ? [] : [r]);
    return t.length <= 0 ? { type: i.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : t[0];
}

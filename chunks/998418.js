var r = t(855986),
    l = t(71393),
    o = t(645619),
    n = t(568065),
    i = t(652215);
function p(e, u) {
    let t = (0, r.bG)([l.A], () => l.A.getGuild(e)),
        p = (0, r.bG)([o.A], () => o.A.getStateForGuild(e)),
        s = t?.features?.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return u.map((e) =>
        (function (e) {
            var u, r;
            if ("0" === e.skuId)
                return {
                    type: t?.features?.has(i.GuildFeatures.GAME_SERVERS) ? n.b_.POWERUP_ACTIVATED : n.b_.INACTIVE,
                    powerup: e,
                    sourceEntitlement: void 0,
                    sourcePowerup: void 0,
                };
            let {
                    isActiveFromLevel: l,
                    levelEntitlement: o,
                    levelPowerup: E,
                } = (function (e) {
                    if (null == e || null == t || null == p)
                        return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let u = n.wr[e.skuId];
                    if (null == u) return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
                    let r = t.premiumTier >= u,
                        l = n.a8[u];
                    return {
                        isActiveFromLevel: r,
                        levelEntitlement: null != l ? p.unlockedPowerups?.[l] : void 0,
                        levelPowerup: null != l ? p.allPowerups?.[l] : void 0,
                    };
                })(e),
                d = ((u = e), s && n.o2.has(u.skuId)),
                c = ((r = e), p?.unlockedPowerups?.[r.skuId] ?? null),
                v = { type: n.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
            return (
                l
                    ? (v = { type: n.b_.LEVEL_ACTIVATED, powerup: e, sourceEntitlement: o, sourcePowerup: E })
                    : d
                      ? (v = {
                            type: n.b_.TIER_OVERRIDE_ACTIVATED,
                            powerup: e,
                            sourceEntitlement: void 0,
                            sourcePowerup: e,
                        })
                      : null != c &&
                        (v = { type: n.b_.POWERUP_ACTIVATED, powerup: e, sourceEntitlement: c, sourcePowerup: e }),
                v
            );
        })(e),
    );
}
(t(628049),
    t.d(
        u,
        {},
        {
            Ay: function (e, u) {
                let t = p(e, null == u ? [] : [u]);
                return t.length <= 0 ? { type: n.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 } : t[0];
            },
            dy: function (e) {
                return e.type !== n.b_.INACTIVE;
            },
            jJ: p,
        },
    ));

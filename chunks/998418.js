n.d(t, {
    Ay: () => d,
    dy: () => c,
    jJ: () => u,
});
var r = n(311907),
    i = n(71393),
    a = n(645619),
    s = n(800007),
    o = n(568065),
    l = n(652215);

function c(e) {
    return e.type !== o.b_.INACTIVE;
}

function u(e, t) {
    var n, c;
    let u = (0, r.bG)([i.A], () => i.A.getGuild(e)),
        d = (0, r.bG)([a.A], () => a.A.getStateForGuild(e)),
        f =
            null !=
                (n = null == u || null == (c = u.features) ? void 0 : c.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) &&
            n;

    function p(e) {
        if (e.skuId === s.W5) {
            var t, n;
            return {
                type:
                    null !=
                        (t = null == u || null == (n = u.features) ? void 0 : n.has(l.GuildFeatures.GAME_SERVERS)) && t
                        ? o.b_.POWERUP_ACTIVATED
                        : o.b_.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0,
            };
        }
        let { isActiveFromLevel: r, levelEntitlement: i, levelPowerup: a } = _(e),
            c = h(e),
            d = m(e),
            f = null != d,
            p = {
                type: o.b_.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0,
            };
        return (
            r
                ? (p = {
                      type: o.b_.LEVEL_ACTIVATED,
                      powerup: e,
                      sourceEntitlement: i,
                      sourcePowerup: a,
                  })
                : c
                  ? (p = {
                        type: o.b_.TIER_OVERRIDE_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: void 0,
                        sourcePowerup: e,
                    })
                  : f &&
                    (p = {
                        type: o.b_.POWERUP_ACTIVATED,
                        powerup: e,
                        sourceEntitlement: d,
                        sourcePowerup: e,
                    }),
            p
        );
    }

    function _(e) {
        var t, n;
        if (null == e || null == u || null == d)
            return {
                isActiveFromLevel: !1,
                levelEntitlement: void 0,
                levelPowerup: void 0,
            };
        let r = o.wr[e.skuId];
        if (null == r)
            return {
                isActiveFromLevel: !1,
                levelEntitlement: void 0,
                levelPowerup: void 0,
            };
        let i = u.premiumTier >= r,
            a = o.a8[r];
        return {
            isActiveFromLevel: i,
            levelEntitlement: null != a ? (null == (t = d.unlockedPowerups) ? void 0 : t[a]) : void 0,
            levelPowerup: null != a ? (null == (n = d.allPowerups) ? void 0 : n[a]) : void 0,
        };
    }

    function h(e) {
        return f && o.o2.has(e.skuId);
    }

    function m(e) {
        var t, n;
        return null != (t = null == d || null == (n = d.unlockedPowerups) ? void 0 : n[e.skuId]) ? t : null;
    }
    return t.map((e) => p(e));
}

function d(e, t) {
    let n = u(e, null == t ? [] : [t]);
    return n.length <= 0
        ? {
              type: o.b_.INACTIVE,
              sourceEntitlement: void 0,
              sourcePowerup: void 0,
          }
        : n[0];
}

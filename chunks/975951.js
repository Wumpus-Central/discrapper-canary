t.d(n, { Z: () => s });
var r = t(442837),
    i = t(905128),
    o = t(690786),
    a = t(535396);
function s(e, n) {
    var t, s;
    let l = (0, r.e7)([i.Z], () => i.Z.getStateForGuild(e)),
        c = (0, o.Z)(e, n);
    if (null == l || null == n)
        return {
            activatedEntitlement: void 0,
            activatedLevelPowerup: void 0
        };
    let u = a.Rx[n.skuId],
        d = null != u ? a.Cp[u] : void 0,
        m = null != d ? (null == (t = l.unlockedPowerups) ? void 0 : t[d]) : void 0,
        p = null != m ? (null == (s = l.allPowerups) ? void 0 : s[m.sku_id]) : void 0;
    return {
        activatedEntitlement: null != m ? m : c,
        activatedLevelPowerup: null != m ? p : void 0
    };
}

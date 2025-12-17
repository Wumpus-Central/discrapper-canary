n.d(t, { Z: () => a });
var r = n(973772),
    i = n(535396),
    l = n(556970),
    o = n(388032);
function a(e) {
    var t, n, a;
    let s,
        { guildId: c, powerups: u } = e,
        d = (0, r.Gv)(c, u),
        f = d.some((e) => e.type !== i.A3.INACTIVE);
    if (u.length <= 0) return null;
    let p = d.reduce(
        (e, t) => {
            let { sourceEntitlement: n } = t,
                r = null == n ? void 0 : n.ends_at;
            return null == r ? e : null == e || r < e ? r : e;
        },
        void 0,
    );
    null != p
        ? (s = {
              type: "expiring",
              expiringAt: p,
          })
        : f &&
          (s = {
              type: "active",
              statusText: o.intl.string(l.default.FFLkmx),
          });
    let m = d.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === i.A3.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        g = d.reduce(
            (e, t) => {
                var n, r;
                let { powerup: i } = t;
                return e < (null != (n = null == i ? void 0 : i.cost) ? n : 0)
                    ? e
                    : null != (r = null == i ? void 0 : i.cost)
                      ? r
                      : 0;
            },
            null != (a = null == (n = d[0]) || null == (t = n.powerup) ? void 0 : t.cost) ? a : 0,
        ),
        v = d.reduce((e, t) => {
            var n;
            let { powerup: r } = t;
            return e + (null != (n = null == r ? void 0 : r.cost) ? n : 0);
        }, 0),
        x = f ? m : g;
    return {
        isActive: f,
        status: s,
        cost: x,
        costDecorator: !f && v > x ? "+" : void 0,
        expiringAt: p,
        activeCost: m,
        minCost: g,
        totalCost: v,
    };
}

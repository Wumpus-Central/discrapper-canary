"use strict";
n.d(t, { Ay: () => c, H5: () => a });
var i = n(17928),
    r = n(228366),
    s = n(287809);
function a(e) {
    if (null != e) return (null != e.current_tier ? e.tier_obtained_at?.[e.current_tier] : void 0) ?? e.obtained_at;
}
let o = new Map(),
    l = new Set();
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "BadgeDirectoryStore";
    getBadges(e) {
        let t = e ?? s.default.getCurrentUser()?.id;
        if (null == t) return [];
        let n = o.get(t);
        return null != n ? Array.from(n.values()) : [];
    }
    hasCatalogFor(e) {
        return l.has(e);
    }
    getBadgeById(e, t) {
        let n = t ?? s.default.getCurrentUser()?.id;
        return null != n ? o.get(n)?.get(e) : void 0;
    }
    getSingleRequirementProgress(e, t) {
        let n = this.getBadgeById(e, t)?.progress;
        if (null != n && 0 !== n.length) return n[0];
    }
    getCurrentTier(e, t) {
        let n = this.getBadgeById(e, t);
        if (n?.current_tier != null) return n.tiers.find((e) => e.key === n.current_tier);
    }
    getObtainedAt(e, t) {
        return a(this.getBadgeById(e, t));
    }
    getNextTier(e, t) {
        let n = this.getBadgeById(e, t);
        if (n?.next_tier != null) return n.tiers.find((e) => e.key === n.next_tier);
    }
    getRemainingToNextTier(e, t) {
        let n = this.getNextTier(e, t),
            i = this.getSingleRequirementProgress(e, t);
        return null == n || null == i ? 0 : Math.max(0, (n?.requirements[0]?.threshold ?? 0) - i.current);
    }
}
let c = new u(r.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: n } = e,
            i = new Map(o);
        i.set(t, new Map(n.map((e) => [e.badge_id, e]))), (o = i), (l = new Set(l).add(t));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            i = new Map(o),
            r = new Map(i.get(t) ?? new Map());
        r.set(n.badge_id, n), i.set(t, r), (o = i);
    },
    LOGOUT: function () {
        (o = new Map()), (l = new Set());
    },
});

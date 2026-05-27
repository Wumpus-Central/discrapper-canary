n.d(t, { Ay: () => u, H5: () => a });
var r = n(17928),
    l = n(228366),
    i = n(287809);
function a(e) {
    if (null != e) return (null != e.current_tier ? e.tier_obtained_at?.[e.current_tier] : void 0) ?? e.obtained_at;
}
let s = new Map(),
    o = new Set();
class d extends r.Ay.Store {
    initialize() {
        this.waitFor(i.default);
    }
    static displayName = "BadgeDirectoryStore";
    getBadges(e) {
        let t = e ?? i.default.getCurrentUser()?.id;
        if (null == t) return [];
        let n = s.get(t);
        return null != n ? Array.from(n.values()) : [];
    }
    hasCatalogFor(e) {
        return o.has(e);
    }
    getBadgeById(e, t) {
        let n = t ?? i.default.getCurrentUser()?.id;
        return null != n ? s.get(n)?.get(e) : void 0;
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
            r = this.getSingleRequirementProgress(e, t);
        return null == n || null == r ? 0 : Math.max(0, (n?.requirements[0]?.threshold ?? 0) - r.current);
    }
}
let u = new d(l.h, {
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: n } = e,
            r = new Map(s);
        r.set(t, new Map(n.map((e) => [e.badge_id, e]))), (s = r), (o = new Set(o).add(t));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            r = new Map(s),
            l = new Map(r.get(t) ?? new Map());
        l.set(n.badge_id, n), r.set(t, l), (s = r);
    },
    LOGOUT: function () {
        (s = new Map()), (o = new Set());
    },
});

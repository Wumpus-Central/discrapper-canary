"use strict";
n.d(t, { Ay: () => m, H5: () => u, rL: () => c });
var i = n(158390),
    r = n(17928),
    a = n(228366),
    s = n(287809),
    l = n(927813),
    o = n(682618),
    d = n(609782);
function c(e) {
    return e?.requirements[0]?.threshold ?? 0;
}
function u(e) {
    if (null != e) return (null != e.current_tier ? e.tier_obtained_at?.[e.current_tier] : void 0) ?? e.obtained_at;
}
let _ = l.A.Millis.HOUR,
    E = new Map(),
    A = new Set(),
    h = new Set(),
    I = new Map(),
    f = new Map(),
    p = new Map();
class T extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "BadgeDirectoryStore";
    getBadges(e) {
        let t = e ?? s.default.getCurrentUser()?.id;
        if (null == t) return [];
        let n = E.get(t);
        return null != n ? Array.from(n.values()) : [];
    }
    hasCatalogFor(e) {
        return A.has(e);
    }
    isCatalogStaleFor(e) {
        let t = I.get(e);
        return null == t || Date.now() - t >= _;
    }
    hasCatalogFetchErrorFor(e) {
        let t = e ?? s.default.getCurrentUser()?.id;
        return null != t && h.has(t);
    }
    getBadgeById(e, t) {
        let n = t ?? s.default.getCurrentUser()?.id;
        return null != n ? E.get(n)?.get(e) : void 0;
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
        return u(this.getBadgeById(e, t));
    }
    getNextTier(e, t) {
        let n = this.getBadgeById(e, t);
        if (n?.next_tier != null) return n.tiers.find((e) => e.key === n.next_tier);
    }
    getRemainingToNextTier(e, t) {
        let n = this.getNextTier(e, t),
            i = this.getSingleRequirementProgress(e, t);
        return null == n || null == i ? 0 : Math.max(0, c(n) - i.current);
    }
}
let m = new T(a.h, {
    BADGE_DIRECTORY_FETCH_START: function (e) {
        let { userId: t } = e;
        (h = new Set(h)).delete(t);
    },
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: n } = e,
            i = new Map(E);
        i.set(t, new Map(n.map((e) => [e.badge_id, e]))),
            (E = i),
            (A = new Set(A).add(t)),
            (h = new Set(h)).delete(t),
            (I = new Map(I).set(t, Date.now()));
    },
    BADGE_DIRECTORY_FETCH_FAILURE: function (e) {
        let { userId: t } = e;
        h = new Set(h).add(t);
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            i = new Map(E),
            r = new Map(i.get(t) ?? new Map());
        r.set(n.badge_id, n), i.set(t, r), (E = i);
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            n = t.user.id;
        if (A.has(n)) {
            let e = (t.badges ?? []).filter((e) => null != (0, d.w0)(e.id)).length,
                r = 0;
            for (let e of E.get(n)?.values() ?? []) e.owned && r++;
            if (e !== r) {
                let e = p.get(n) ?? 0;
                if (Date.now() >= e) {
                    let e = f.get(n) ?? new i.A(l.A.Millis.MINUTE, _, !0);
                    f.set(n, e), p.set(n, Date.now() + e.fail()), (0, o.R)(n);
                }
            } else f.get(n)?.succeed(), p.delete(n);
        }
        return !1;
    },
    LOGOUT: function () {
        (E = new Map()), (A = new Set()), (h = new Set()), (I = new Map()), f.clear(), p.clear();
    },
});

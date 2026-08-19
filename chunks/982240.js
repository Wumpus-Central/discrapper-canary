i.d(t, { Ay: () => A, H5: () => f, rL: () => c });
var r = i(635377),
    l = i.n(r),
    n = i(158390),
    u = i(17928),
    o = i(228366),
    s = i(287809),
    a = i(927813),
    d = i(682618),
    _ = i(609782);
function c(e) {
    return e?.requirements[0]?.threshold ?? 0;
}
function f(e) {
    if (null != e) return (null != e.current_tier ? e.tier_obtained_at?.[e.current_tier] : void 0) ?? e.obtained_at;
}
let m = a.A.Millis.HOUR,
    h = new (l())({ max: 50 });
function p() {
    return {
        badges: new Map(),
        catalogFetched: !1,
        fetchError: !1,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
    };
}
class g extends u.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "BadgeDirectoryStore";
    getBadges(e) {
        let t = e ?? s.default.getCurrentUser()?.id;
        if (null == t) return [];
        let i = h.get(t);
        return null != i ? Array.from(i.badges.values()) : [];
    }
    hasCatalogFor(e) {
        return h.peek(e)?.catalogFetched ?? !1;
    }
    isCatalogStaleFor(e) {
        let t = h.peek(e)?.fetchedAt;
        return null == t || Date.now() - t >= m;
    }
    hasCatalogFetchErrorFor(e) {
        let t = e ?? s.default.getCurrentUser()?.id;
        return null != t && (h.peek(t)?.fetchError ?? !1);
    }
    getBadgeById(e, t) {
        let i = t ?? s.default.getCurrentUser()?.id;
        return null != i ? h.get(i)?.badges.get(e) : void 0;
    }
    getSingleRequirementProgress(e, t) {
        let i = this.getBadgeById(e, t)?.progress;
        if (null != i && 0 !== i.length) return i[0];
    }
    getCurrentTier(e, t) {
        let i = this.getBadgeById(e, t);
        if (i?.current_tier != null) return i.tiers.find((e) => e.key === i.current_tier);
    }
    getObtainedAt(e, t) {
        return f(this.getBadgeById(e, t));
    }
    getNextTier(e, t) {
        let i = this.getBadgeById(e, t);
        if (i?.next_tier != null) return i.tiers.find((e) => e.key === i.next_tier);
    }
    getRemainingToNextTier(e, t) {
        let i = this.getSingleRequirementProgress(e, t);
        return i?.threshold == null ? 0 : Math.max(0, i.threshold - i.current);
    }
}
let A = new g(o.h, {
    BADGE_DIRECTORY_FETCH_START: function (e) {
        let { userId: t } = e,
            i = h.get(t);
        null != i && (i.fetchError = !1);
    },
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: i } = e,
            r = h.peek(t) ?? p();
        (r.badges = new Map(i.map((e) => [e.badge_id, e]))),
            (r.catalogFetched = !0),
            (r.fetchError = !1),
            (r.fetchedAt = Date.now()),
            h.set(t, r);
    },
    BADGE_DIRECTORY_FETCH_FAILURE: function (e) {
        let { userId: t } = e,
            i = h.peek(t) ?? p();
        (i.fetchError = !0), h.set(t, i);
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: i } = e,
            r = h.peek(t) ?? p();
        r.badges.set(i.badge_id, i), h.set(t, r);
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            i = t.user.id,
            r = h.get(i);
        if (null != r && r.catalogFetched)
            if (
                (t.badges ?? []).filter((e) => null != (0, _.w0)(e.id)).length !==
                Array.from(r.badges.values()).filter((e) => e.owned).length
            ) {
                let e = r.driftFetchGateUntil ?? 0;
                if (Date.now() >= e) {
                    let e = r.driftBackoff ?? new n.A(a.A.Millis.MINUTE, m, !0);
                    (r.driftBackoff = e), (r.driftFetchGateUntil = Date.now() + e.fail()), (0, d.RS)(i);
                }
            } else r.driftBackoff?.succeed(), (r.driftFetchGateUntil = null);
        return !1;
    },
    LOGOUT: function () {
        h.reset();
    },
});

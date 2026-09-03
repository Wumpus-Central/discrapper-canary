n.d(t, { Ay: () => p, H5: () => E, rL: () => _ });
var i = n(635377),
    r = n.n(i),
    a = n(158390),
    s = n(17928),
    l = n(228366),
    o = n(287809),
    d = n(927813),
    c = n(682618),
    u = n(609782);
function _(e) {
    return e?.requirements[0]?.threshold ?? 0;
}
function E(e) {
    if (null != e) return (null != e.current_tier ? e.tier_obtained_at?.[e.current_tier] : void 0) ?? e.obtained_at;
}
let A = d.A.Millis.HOUR,
    h = new (r())({ max: 50 });
function I() {
    return {
        badges: new Map(),
        catalogFetched: !1,
        fetchError: !1,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
    };
}
class f extends s.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "BadgeDirectoryStore";
    getBadges(e) {
        let t = e ?? o.default.getCurrentUser()?.id;
        if (null == t) return [];
        let n = h.get(t);
        return null != n ? Array.from(n.badges.values()) : [];
    }
    hasCatalogFor(e) {
        return h.peek(e)?.catalogFetched ?? !1;
    }
    isCatalogStaleFor(e) {
        let t = h.peek(e)?.fetchedAt;
        return null == t || Date.now() - t >= A;
    }
    hasCatalogFetchErrorFor(e) {
        let t = e ?? o.default.getCurrentUser()?.id;
        return null != t && (h.peek(t)?.fetchError ?? !1);
    }
    getBadgeById(e, t) {
        let n = t ?? o.default.getCurrentUser()?.id;
        return null != n ? h.get(n)?.badges.get(e) : void 0;
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
        return E(this.getBadgeById(e, t));
    }
    getNextTier(e, t) {
        let n = this.getBadgeById(e, t);
        if (n?.next_tier != null) return n.tiers.find((e) => e.key === n.next_tier);
    }
    getRemainingToNextTier(e, t) {
        let n = this.getSingleRequirementProgress(e, t);
        return n?.threshold == null ? 0 : Math.max(0, n.threshold - n.current);
    }
}
let p = new f(l.h, {
    BADGE_DIRECTORY_FETCH_START: function (e) {
        let { userId: t } = e,
            n = h.get(t);
        null != n && (n.fetchError = !1);
    },
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: n } = e,
            i = h.peek(t) ?? I();
        (i.badges = new Map(n.map((e) => [e.badge_id, e]))),
            (i.catalogFetched = !0),
            (i.fetchError = !1),
            (i.fetchedAt = Date.now()),
            h.set(t, i);
    },
    BADGE_DIRECTORY_FETCH_FAILURE: function (e) {
        let { userId: t } = e,
            n = h.peek(t) ?? I();
        (n.fetchError = !0), h.set(t, n);
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            i = h.peek(t) ?? I();
        i.badges.set(n.badge_id, n), h.set(t, i);
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            n = t.user.id,
            i = h.get(n);
        if (null != i && i.catalogFetched)
            if (
                (t.badges ?? []).filter((e) => null != (0, u.w0)(e.id)).length !==
                Array.from(i.badges.values()).filter((e) => e.owned).length
            ) {
                let e = i.driftFetchGateUntil ?? 0;
                if (Date.now() >= e) {
                    let e = i.driftBackoff ?? new a.A(d.A.Millis.MINUTE, A, !0);
                    (i.driftBackoff = e), (i.driftFetchGateUntil = Date.now() + e.fail()), (0, c.RS)(n);
                }
            } else i.driftBackoff?.succeed(), (i.driftFetchGateUntil = null);
        return !1;
    },
    LOGOUT: function () {
        h.reset();
    },
});

i.d(t, { Ay: () => A, H5: () => f, rL: () => c });
var r = i(635377),
    l = i.n(r),
    n = i(158390),
    a = i(17928),
    u = i(228366),
    o = i(287809),
    _ = i(927813),
    s = i(682618),
    d = i(609782);
function c(e) {
    return e?.requirements[0]?.threshold ?? 0;
}
function f(e) {
    if (null != e) return (null != e.current_tier ? e.tier_obtained_at?.[e.current_tier] : void 0) ?? e.obtained_at;
}
let p = _.A.Millis.HOUR,
    m = new (l())({ max: 50 });
function g() {
    return {
        badges: new Map(),
        catalogFetched: !1,
        fetchError: !1,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
    };
}
class h extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "BadgeDirectoryStore";
    getBadges(e) {
        let t = e ?? o.default.getCurrentUser()?.id;
        if (null == t) return [];
        let i = m.get(t);
        return null != i ? Array.from(i.badges.values()) : [];
    }
    hasCatalogFor(e) {
        return m.peek(e)?.catalogFetched ?? !1;
    }
    isCatalogStaleFor(e) {
        let t = m.peek(e)?.fetchedAt;
        return null == t || Date.now() - t >= p;
    }
    hasCatalogFetchErrorFor(e) {
        let t = e ?? o.default.getCurrentUser()?.id;
        return null != t && (m.peek(t)?.fetchError ?? !1);
    }
    getBadgeById(e, t) {
        let i = t ?? o.default.getCurrentUser()?.id;
        return null != i ? m.get(i)?.badges.get(e) : void 0;
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
let A = new h(u.h, {
    BADGE_DIRECTORY_FETCH_START: function (e) {
        let { userId: t } = e,
            i = m.get(t);
        null != i && (i.fetchError = !1);
    },
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: i } = e,
            r = m.peek(t) ?? g();
        (r.badges = new Map(i.map((e) => [e.badge_id, e]))),
            (r.catalogFetched = !0),
            (r.fetchError = !1),
            (r.fetchedAt = Date.now()),
            m.set(t, r);
    },
    BADGE_DIRECTORY_FETCH_FAILURE: function (e) {
        let { userId: t } = e,
            i = m.peek(t) ?? g();
        (i.fetchError = !0), m.set(t, i);
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: i } = e,
            r = m.peek(t) ?? g();
        r.badges.set(i.badge_id, i), m.set(t, r);
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            i = t.user.id,
            r = m.get(i);
        if (null != r && r.catalogFetched)
            if (
                (t.badges ?? []).filter((e) => null != (0, d.w0)(e.id)).length !==
                Array.from(r.badges.values()).filter((e) => e.owned).length
            ) {
                let e = r.driftFetchGateUntil ?? 0;
                if (Date.now() >= e) {
                    let e = r.driftBackoff ?? new n.A(_.A.Millis.MINUTE, p, !0);
                    (r.driftBackoff = e), (r.driftFetchGateUntil = Date.now() + e.fail()), (0, s.RS)(i);
                }
            } else r.driftBackoff?.succeed(), (r.driftFetchGateUntil = null);
        return !1;
    },
    LOGOUT: function () {
        m.reset();
    },
});

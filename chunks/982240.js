var i = n(635377),
    r = n.n(i),
    a = n(158390),
    s = n(855986),
    l = n(73153),
    o = n(287809),
    d = n(927813),
    c = n(682618),
    u = n(731309);
function _(e) {
    if (null != e) return (null != e.current_tier ? e.tier_obtained_at?.[e.current_tier] : void 0) ?? e.obtained_at;
}
let E = d.A.Millis.HOUR,
    A = new (r())({ max: 50 });
function h() {
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
        let n = A.get(t);
        return null != n ? Array.from(n.badges.values()) : [];
    }
    hasCatalogFor(e) {
        return A.peek(e)?.catalogFetched ?? !1;
    }
    isCatalogStaleFor(e) {
        let t = A.peek(e)?.fetchedAt;
        return null == t || Date.now() - t >= E;
    }
    hasCatalogFetchErrorFor(e) {
        let t = e ?? o.default.getCurrentUser()?.id;
        return null != t && (A.peek(t)?.fetchError ?? !1);
    }
    getUnreadBadges(e) {
        return this.getBadges(e).filter((e) => !0 === e.has_updates);
    }
    getUnreadBadgeCount(e) {
        let t = e ?? o.default.getCurrentUser()?.id;
        return null != t && this.hasCatalogFor(t) ? this.getUnreadBadges(t).length : 0;
    }
    getBadgeById(e, t) {
        let n = t ?? o.default.getCurrentUser()?.id;
        return null != n ? A.get(n)?.badges.get(e) : void 0;
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
        return _(this.getBadgeById(e, t));
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
let I = new f(l.h, {
    BADGE_DIRECTORY_FETCH_START: function (e) {
        let { userId: t } = e,
            n = A.get(t);
        null != n && (n.fetchError = !1);
    },
    BADGE_DIRECTORY_FETCH_SUCCESS: function (e) {
        let { userId: t, badges: n } = e,
            i = A.peek(t) ?? h();
        ((i.badges = new Map(n.map((e) => [e.badge_id, e]))),
            (i.catalogFetched = !0),
            (i.fetchError = !1),
            (i.fetchedAt = Date.now()),
            A.set(t, i));
    },
    BADGE_DIRECTORY_FETCH_FAILURE: function (e) {
        let { userId: t } = e,
            n = A.peek(t) ?? h();
        ((n.fetchError = !0), A.set(t, n));
    },
    BADGE_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            i = A.peek(t) ?? h();
        (i.badges.set(n.badge_id, n), A.set(t, i));
    },
    BADGE_SUMMARY_FETCH_SUCCESS: function (e) {
        let { userId: t, badge: n } = e,
            i = A.peek(t) ?? h(),
            r = i.badges.get(n.badge_id);
        (i.badges.set(n.badge_id, {
            ...n,
            progress: n.progress ?? r?.progress,
            info_label: n.info_label ?? r?.info_label,
        }),
            A.set(t, i));
    },
    BADGE_ACK_SUCCESS: function (e) {
        let { userId: t, badgeId: n } = e,
            i = A.peek(t),
            r = i?.badges.get(n);
        if (null == i || r?.has_updates !== !0) return !1;
        i.badges.set(n, { ...r, has_updates: !1, previous_acked_tier: null });
    },
    USER_PROFILE_FETCH_SUCCESS: function (e) {
        let { userProfile: t } = e,
            n = t.user.id,
            i = A.get(n);
        if (null != i && i.catalogFetched)
            if (
                (t.badges ?? []).filter((e) => null != (0, u.w0)(e.id)).length !==
                Array.from(i.badges.values()).filter((e) => e.owned).length
            ) {
                let e = i.driftFetchGateUntil ?? 0;
                if (Date.now() >= e) {
                    let e = i.driftBackoff ?? new a.A(d.A.Millis.MINUTE, E, !0);
                    ((i.driftBackoff = e), (i.driftFetchGateUntil = Date.now() + e.fail()), (0, c.RS)(n));
                }
            } else (i.driftBackoff?.succeed(), (i.driftFetchGateUntil = null));
        return !1;
    },
    LOGOUT: function () {
        A.reset();
    },
});
n.d(
    t,
    {},
    {
        Ay: I,
        H5: _,
        rL: function (e) {
            return e?.requirements[0]?.threshold ?? 0;
        },
    },
);

t.d(i, {
    Ay: () => d,
});
var n,
    l,
    r = t(311907),
    s = t(73153);
let u = {},
    a = !1;
class o extends (l = r.Ay.Store) {
    isLoading() {
        return a;
    }
    passesChecklist(e) {
        var i;
        return !a && (null == (i = u[e]) ? void 0 : i.sufficient);
    }
    isPendingSuccess(e) {
        let i = u[e];
        return (
            null != i &&
            !a &&
            i.healthScorePending &&
            i.safeEnvironment &&
            0 === Object.keys(i.nsfwProperties).length &&
            i.size &&
            i.protected
        );
    }
    getDiscoveryChecklist(e) {
        return u[e];
    }
}
(n = "displayName") in o
    ? Object.defineProperty(o, n, {
          value: "DiscoverGuildChecklistStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[n] = "DiscoverGuildChecklistStore");
let d = new o(s.h, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        a = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        a = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var i;
        let { checklist: t, guildId: n } = e;
        (a = !1),
            (u[n] = {
                guildId: t.guild_id,
                safeEnvironment: t.safe_environment,
                healthy: t.healthy,
                healthScorePending: t.health_score_pending,
                nsfwProperties: t.nsfw_properties,
                size: t.size,
                protected: t.protected,
                sufficient: t.sufficient,
                sufficientWithoutGracePeriod: t.sufficient_without_grace_period,
                gracePeriodEndDate: null != t.grace_period_end_date ? new Date(t.grace_period_end_date) : null,
                retentionHealthy: t.retention_healthy,
                engagementHealthy: t.engagement_healthy,
                minimumGuildSize: null != t.minimum_size ? t.minimum_size : 1e3,
                healthScore: t.health_score,
                minimumGuildAge: null != (i = t.minimum_age) ? i : 0,
                age: t.age,
            });
    },
});

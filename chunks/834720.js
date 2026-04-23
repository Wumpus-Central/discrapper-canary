t.d(i, { Ay: () => u });
var l = t(17928),
    n = t(228366);
let r = {},
    s = !1;
class a extends l.Ay.Store {
    static displayName = "DiscoverGuildChecklistStore";
    isLoading() {
        return s;
    }
    passesChecklist(e) {
        return !s && r[e]?.sufficient;
    }
    isPendingSuccess(e) {
        let i = r[e];
        return (
            null != i &&
            !s &&
            i.healthScorePending &&
            i.safeEnvironment &&
            0 === Object.keys(i.nsfwProperties).length &&
            i.size &&
            i.protected
        );
    }
    getDiscoveryChecklist(e) {
        return r[e];
    }
}
let u = new a(n.h, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        s = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        s = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        let { checklist: i, guildId: t } = e;
        (s = !1),
            (r[t] = {
                guildId: i.guild_id,
                safeEnvironment: i.safe_environment,
                healthy: i.healthy,
                healthScorePending: i.health_score_pending,
                nsfwProperties: i.nsfw_properties,
                size: i.size,
                protected: i.protected,
                sufficient: i.sufficient,
                sufficientWithoutGracePeriod: i.sufficient_without_grace_period,
                gracePeriodEndDate: null != i.grace_period_end_date ? new Date(i.grace_period_end_date) : null,
                retentionHealthy: i.retention_healthy,
                engagementHealthy: i.engagement_healthy,
                minimumGuildSize: null != i.minimum_size ? i.minimum_size : 1e3,
                healthScore: i.health_score,
                minimumGuildAge: i.minimum_age ?? 0,
                age: i.age,
            });
    },
});

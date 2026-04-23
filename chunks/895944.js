"use strict";
n.d(t, { A: () => m, V: () => f });
var r,
    i = n(410530),
    s = n(582972),
    a = n(311907),
    o = n(73153),
    l = n(431560),
    u = n(287809),
    c = n(927813),
    d = n(649032),
    _ = n(26508),
    f =
        (((r = {}).NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD = "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD"),
        (r.MISSING_NECESSARY_PREMIUM_STATUS = "MISSING_NECESSARY_PREMIUM_STATUS"),
        (r.CACHE_SHOULD_NOT_FETCH = "CACHE_SHOULD_NOT_FETCH"),
        r);
let p = new l.Z({ ttlMs: 864e5 });
function h() {
    let { state: e, msUntilReward: t } = (function () {
        let e = p.getValue();
        if (null == e) return { state: "MORE_THAN_24H_BEFORE_REWARD" };
        let t = new Date();
        for (let n of e.values()) {
            let e = new Date(n.next_reward_date);
            if (!isNaN(e.getTime())) {
                if (t >= e) return { state: "PAST_REWARD_DATE" };
                if (t >= (0, i.default)(e, -1))
                    return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: (0, s.A)(e, t) };
            }
        }
        return { state: "MORE_THAN_24H_BEFORE_REWARD" };
    })();
    p.setTtl("LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? 864e5) : 864e5);
}
class E extends a.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(u.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            p.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        h();
    }
    getState() {
        let e = p.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    getTotalDaysInDuration(e) {
        let t = this.getRewardForProgram(e);
        if (null == t) return null;
        let n = t.total_countdown_duration_ms;
        return null == n || n <= 0 ? null : Math.ceil(n / c.A.Millis.DAY);
    }
    isFetching() {
        return p.isLoading();
    }
    isFetched() {
        return p.isValid();
    }
    hasCachedValue() {
        return null != p.getValue();
    }
    isReady() {
        return (
            !this.isFetching() &&
            (this.hasCachedValue() || !(0, _.g_)("ProgramRewardsStore") || this.isError() || !(0, _.mY)())
        );
    }
    shouldFetch() {
        return (0, _.g_)("ProgramRewardsStore.shouldFetch")
            ? (0, _.mY)()
                ? p.shouldFetch()
                    ? { shouldFetch: !0 }
                    : { shouldFetch: !1, reason: "CACHE_SHOULD_NOT_FETCH" }
                : { shouldFetch: !1, reason: "MISSING_NECESSARY_PREMIUM_STATUS" }
            : { shouldFetch: !1, reason: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD" };
    }
    isError() {
        return p.isError();
    }
    getStatus() {
        return p.getStatus();
    }
    getRewardForProgram(e) {
        return p.getValue()?.get(e);
    }
    forceExpire() {
        p.forceExpire();
    }
    __getLocalVars = () => {
        let e = this.getState(),
            t = e.cache?.value ?? [],
            n = {};
        for (let [e, r] of t) n[e === d.W.NITRO ? "NITRO" : String(e)] = r;
        return {
            status: this.getStatus(),
            isFetching: this.isFetching(),
            isFetched: this.isFetched(),
            hasCachedValue: this.hasCachedValue(),
            isError: this.isError(),
            isReady: this.isReady(),
            shouldFetch: this.shouldFetch(),
            fetchedAt: e.cache?.fetchedAt ?? null,
            rewards: Object.keys(n).length > 0 ? n : null,
        };
    };
    __getLocalVarsEditConfig = () => ({
        preDispatches: [{ type: "PROGRAM_REWARDS_FETCH" }],
        actionType: "PROGRAM_REWARDS_FETCH_SUCCESS",
        buildPayload: (e) => {
            let t = e.rewards ?? null;
            return null == t || 0 === Object.keys(t).length
                ? { programRewards: [] }
                : {
                      programRewards: Object.entries(t).map((e) => {
                          let [t, n] = e;
                          return { ...n, reward_program: "NITRO" === t ? d.W.NITRO : Number(t) };
                      }),
                  };
        },
        getPurgeVars: () => ({ rewards: null }),
    });
}
let m = new E(o.h, {
    LOGOUT: function () {
        p.clear();
    },
    PROGRAM_REWARDS_FETCH: function () {
        p.setLoading();
    },
    PROGRAM_REWARDS_FETCH_SUCCESS: function (e) {
        let { programRewards: t } = e;
        if (!p.isLoading()) return !1;
        let n = new Map();
        t.forEach((e) => {
            n.set(e.reward_program, e);
        }),
            p.setValue(n),
            h();
    },
    PROGRAM_REWARDS_FETCH_FAILURE: function () {
        if (!p.isLoading()) return !1;
        p.setError();
    },
    CURRENT_USER_UPDATE: h,
    CONNECTION_OPEN: h,
});

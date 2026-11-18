var i,
    r = n(855986),
    a = n(73153),
    s = n(431560),
    l = n(287809),
    o = n(927813),
    d = n(921894),
    c = n(26508),
    u =
        (((i = {}).NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD = "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD"),
        (i.CACHE_SHOULD_NOT_FETCH = "CACHE_SHOULD_NOT_FETCH"),
        i);
let _ = new s.Z({ ttlMs: 864e5 });
function E() {
    let { state: e, msUntilReward: t } = (function () {
        let e = _.getValue();
        if (null == e) return { state: "MORE_THAN_24H_BEFORE_REWARD" };
        let t = new Date();
        for (let n of e.values()) {
            let e = new Date(n.next_reward_date);
            if (isNaN(e.getTime())) continue;
            let i = new Date(e.getTime() + 10 * o.A.Millis.MINUTE);
            if (t >= i) return { state: "PAST_REWARD_DATE" };
            if (t >= e) return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: i.getTime() - t.getTime() };
            let r = new Date(e);
            if ((r.setDate(e.getDate() - 1), t >= r))
                return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: i.getTime() - t.getTime() };
        }
        return { state: "MORE_THAN_24H_BEFORE_REWARD" };
    })();
    _.setTtl("LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? 864e5) : 864e5);
}
class A extends r.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(l.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            _.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        E();
    }
    getState() {
        let e = _.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    getTotalDaysInDuration(e) {
        let t = this.getRewardForProgram(e);
        if (null == t) return null;
        let n = t.total_countdown_duration_ms;
        return null == n || n <= 0 ? null : Math.ceil(n / o.A.Millis.DAY);
    }
    isFetching() {
        return _.isLoading();
    }
    isFetched() {
        return _.isValid();
    }
    hasCachedValue() {
        return null != _.getValue();
    }
    isReady() {
        return !this.isFetching() && (this.hasCachedValue() || !(0, c.CZ)() || this.isError());
    }
    shouldFetch() {
        return (0, c.CZ)()
            ? _.shouldFetch()
                ? { shouldFetch: !0 }
                : { shouldFetch: !1, reason: "CACHE_SHOULD_NOT_FETCH" }
            : { shouldFetch: !1, reason: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD" };
    }
    isError() {
        return _.isError();
    }
    getStatus() {
        return _.getStatus();
    }
    getRewardForProgram(e) {
        return _.getValue()?.get(e);
    }
    forceExpire() {
        _.forceExpire();
    }
    __getLocalVars = () => {
        let e = this.getState(),
            t = e.cache?.value ?? [],
            n = {};
        for (let [e, i] of t) n[d.W[e] ?? String(e)] = i;
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
                          return { ...n, reward_program: d.W[t] ?? Number(t) };
                      }),
                  };
        },
        getPurgeVars: () => ({ rewards: null }),
    });
}
let f = new A(a.h, {
    LOGOUT: function () {
        _.clear();
    },
    PROGRAM_REWARDS_FETCH: function () {
        _.setLoading();
    },
    PROGRAM_REWARDS_FETCH_SUCCESS: function (e) {
        let { programRewards: t } = e;
        if (!_.isLoading()) return !1;
        let n = new Map();
        (t.forEach((e) => {
            n.set(e.reward_program, e);
        }),
            _.setValue(n),
            E());
    },
    PROGRAM_REWARDS_FETCH_FAILURE: function () {
        if (!_.isLoading()) return !1;
        _.setError();
    },
    CURRENT_USER_UPDATE: E,
    CONNECTION_OPEN: E,
});
n.d(t, {}, { A: f, V: u });

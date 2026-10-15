n.d(t, { A: () => p, V: () => A });
var i,
    r = n(410530),
    a = n(107678),
    s = n(582972),
    l = n(17928),
    o = n(73153),
    d = n(431560),
    c = n(287809),
    u = n(927813),
    _ = n(636592),
    E = n(26508),
    A =
        (((i = {}).NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD = "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD"),
        (i.CACHE_SHOULD_NOT_FETCH = "CACHE_SHOULD_NOT_FETCH"),
        i);
let h = new d.Z({ ttlMs: 864e5 });
function f() {
    let { state: e, msUntilReward: t } = (function () {
        let e = h.getValue();
        if (null == e) return { state: "MORE_THAN_24H_BEFORE_REWARD" };
        let t = new Date();
        for (let n of e.values()) {
            let e = new Date(n.next_reward_date);
            if (isNaN(e.getTime())) continue;
            let i = (0, a.default)(e, 10);
            if (t >= i) return { state: "PAST_REWARD_DATE" };
            if (t >= e || t >= (0, r.default)(e, -1))
                return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: (0, s.A)(i, t) };
        }
        return { state: "MORE_THAN_24H_BEFORE_REWARD" };
    })();
    h.setTtl("LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? 864e5) : 864e5);
}
class I extends l.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(c.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            h.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        f();
    }
    getState() {
        let e = h.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    getTotalDaysInDuration(e) {
        let t = this.getRewardForProgram(e);
        if (null == t) return null;
        let n = t.total_countdown_duration_ms;
        return null == n || n <= 0 ? null : Math.ceil(n / u.A.Millis.DAY);
    }
    isFetching() {
        return h.isLoading();
    }
    isFetched() {
        return h.isValid();
    }
    hasCachedValue() {
        return null != h.getValue();
    }
    isReady() {
        return !this.isFetching() && (this.hasCachedValue() || !(0, E.CZ)() || this.isError());
    }
    shouldFetch() {
        return (0, E.CZ)()
            ? h.shouldFetch()
                ? { shouldFetch: !0 }
                : { shouldFetch: !1, reason: "CACHE_SHOULD_NOT_FETCH" }
            : { shouldFetch: !1, reason: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD" };
    }
    isError() {
        return h.isError();
    }
    getStatus() {
        return h.getStatus();
    }
    getRewardForProgram(e) {
        return h.getValue()?.get(e);
    }
    forceExpire() {
        h.forceExpire();
    }
    __getLocalVars = () => {
        let e = this.getState(),
            t = e.cache?.value ?? [],
            n = {};
        for (let [e, i] of t) n[_.W[e] ?? String(e)] = i;
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
                          return { ...n, reward_program: _.W[t] ?? Number(t) };
                      }),
                  };
        },
        getPurgeVars: () => ({ rewards: null }),
    });
}
let p = new I(o.h, {
    LOGOUT: function () {
        h.clear();
    },
    PROGRAM_REWARDS_FETCH: function () {
        h.setLoading();
    },
    PROGRAM_REWARDS_FETCH_SUCCESS: function (e) {
        let { programRewards: t } = e;
        if (!h.isLoading()) return !1;
        let n = new Map();
        (t.forEach((e) => {
            n.set(e.reward_program, e);
        }),
            h.setValue(n),
            f());
    },
    PROGRAM_REWARDS_FETCH_FAILURE: function () {
        if (!h.isLoading()) return !1;
        h.setError();
    },
    CURRENT_USER_UPDATE: f,
    CONNECTION_OPEN: f,
});

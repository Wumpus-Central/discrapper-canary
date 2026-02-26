"use strict";
n.d(t, { A: () => S, V: () => d });
var r = n(410530),
    i = n(582972),
    s = n(311907),
    a = n(73153),
    o = n(431560),
    l = n(287809),
    u = n(927813),
    c = n(26508),
    d = (function (e) {
        return (
            (e.NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD = "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD"),
            (e.MISSING_NECESSARY_PREMIUM_STATUS = "MISSING_NECESSARY_PREMIUM_STATUS"),
            (e.CACHE_SHOULD_NOT_FETCH = "CACHE_SHOULD_NOT_FETCH"),
            e
        );
    })({});
let _ = 864e5,
    f = new o.Z({ ttlMs: _ });
function p() {
    let e = f.getValue();
    if (null == e) return { state: "MORE_THAN_24H_BEFORE_REWARD" };
    let t = new Date();
    for (let n of e.values()) {
        let e = new Date(n.next_reward_date);
        if (!isNaN(e.getTime())) {
            if (t >= e) return { state: "PAST_REWARD_DATE" };
            if (t >= (0, r.default)(e, -1))
                return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: (0, i.A)(e, t) };
        }
    }
    return { state: "MORE_THAN_24H_BEFORE_REWARD" };
}
function h(e, t) {
    return "LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? _) : _;
}
function m() {
    let { state: e, msUntilReward: t } = p();
    f.setTtl(h(e, t));
}
function E() {
    f.setLoading();
}
function g(e) {
    let { programRewards: t } = e;
    if (!f.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        f.setValue(n),
        m();
}
function A() {
    if (!f.isLoading()) return !1;
    f.setError();
}
function I() {
    f.clear();
}
class T extends s.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(l.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            f.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        m();
    }
    getState() {
        let e = f.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    getTotalDaysInDuration(e) {
        let t = this.getRewardForProgram(e);
        if (null == t) return null;
        let n = t.total_countdown_duration_ms;
        return null == n || n <= 0 ? null : Math.ceil(n / u.A.Millis.DAY);
    }
    isFetching() {
        return f.isLoading();
    }
    isFetched() {
        return f.isValid();
    }
    hasCachedValue() {
        return null != f.getValue();
    }
    isReady() {
        return (
            !this.isFetching() &&
            (this.hasCachedValue() || !(0, c.g_)("ProgramRewardsStore") || this.isError() || !(0, c.mY)())
        );
    }
    shouldFetch() {
        return (0, c.g_)("ProgramRewardsStore.shouldFetch")
            ? (0, c.mY)()
                ? f.shouldFetch()
                    ? { shouldFetch: !0 }
                    : { shouldFetch: !1, reason: "CACHE_SHOULD_NOT_FETCH" }
                : { shouldFetch: !1, reason: "MISSING_NECESSARY_PREMIUM_STATUS" }
            : { shouldFetch: !1, reason: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD" };
    }
    isError() {
        return f.isError();
    }
    getStatus() {
        return f.getStatus();
    }
    getRewardForProgram(e) {
        return f.getValue()?.get(e);
    }
    forceExpire() {
        f.forceExpire();
    }
}
let S = new T(a.h, {
    LOGOUT: I,
    PROGRAM_REWARDS_FETCH: E,
    PROGRAM_REWARDS_FETCH_SUCCESS: g,
    PROGRAM_REWARDS_FETCH_FAILURE: A,
    CURRENT_USER_UPDATE: m,
    CONNECTION_OPEN: m,
});

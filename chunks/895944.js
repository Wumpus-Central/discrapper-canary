"use strict";
n.d(t, { A: () => y });
var r = n(410530),
    i = n(582972),
    s = n(311907),
    a = n(73153),
    o = n(431560),
    l = n(287809),
    u = n(927813),
    c = n(649032),
    d = n(26508),
    _ = n(880403);
let f = 864e5,
    p = new o.Z({ ttlMs: f });
function h() {
    let e = p.getValue();
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
function m(e, t) {
    return "LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? f) : f;
}
function E() {
    let { state: e, msUntilReward: t } = h();
    p.setTtl(m(e, t));
}
function g() {
    p.setLoading();
}
function A(e) {
    let { programRewards: t } = e;
    if (!p.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        p.setValue(n),
        E();
}
function I() {
    if (!p.isLoading()) return !1;
    p.setError();
}
function T() {
    p.clear();
}
class S extends s.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(l.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            p.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        E();
    }
    getState() {
        let e = p.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    getTotalDaysInDuration(e) {
        let t = this.getRewardForProgram(e);
        if (null == t) return null;
        let n = t.total_countdown_duration_ms;
        return null == n || n <= 0 ? null : Math.ceil(n / u.A.Millis.DAY);
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
            (this.hasCachedValue() || !(0, d.g_)("ProgramRewardsStore") || this.isError() || !(0, d.mY)())
        );
    }
    shouldFetch() {
        return (
            !!(0, d.g_)("ProgramRewardsStore.shouldFetch") &&
            !!(0, d.mY)() &&
            (p.shouldFetch() || (0, _.A)(this.getRewardForProgram(c.W.NITRO)))
        );
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
}
let y = new S(a.h, {
    LOGOUT: T,
    PROGRAM_REWARDS_FETCH: g,
    PROGRAM_REWARDS_FETCH_SUCCESS: A,
    PROGRAM_REWARDS_FETCH_FAILURE: I,
    CURRENT_USER_UPDATE: E,
    CONNECTION_OPEN: E,
});

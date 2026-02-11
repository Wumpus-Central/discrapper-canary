"use strict";
n.d(t, { A: () => C });
var r = n(410530),
    i = n(892227),
    a = n(582972),
    s = n(311907),
    o = n(73153),
    l = n(431560),
    u = n(287809),
    c = n(927813),
    d = n(649032),
    _ = n(26508),
    f = n(880403);
let h = 864e5,
    p = new l.Z({ ttlMs: h });
function g() {
    let e = p.getValue();
    if (null == e) return { state: "MORE_THAN_24H_BEFORE_REWARD" };
    let t = new Date();
    for (let n of e.values()) {
        let e = new Date(n.next_reward_date);
        if (!isNaN(e.getTime())) {
            if (t >= e) return { state: "PAST_REWARD_DATE" };
            if (t >= (0, r.default)(e, -1))
                return { state: "LESS_THAN_24H_BEFORE_REWARD", msUntilReward: (0, a.A)(e, t) };
        }
    }
    return { state: "MORE_THAN_24H_BEFORE_REWARD" };
}
function E(e, t) {
    return "LESS_THAN_24H_BEFORE_REWARD" === e ? (t ?? h) : h;
}
function A() {
    let { state: e, msUntilReward: t } = g();
    p.setTtl(E(e, t));
}
function I() {
    p.setLoading();
}
function T(e) {
    let { programRewards: t } = e;
    if (!p.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        p.setValue(n),
        A();
}
function y() {
    if (!p.isLoading()) return !1;
    p.setError();
}
function S() {
    p.clear();
}
class v extends s.Ay.PersistedStore {
    static displayName = "ProgramRewardsStore";
    static persistKey = "ProgramRewardsStore";
    initialize(e) {
        if ((this.waitFor(u.default), e?.cache != null)) {
            let t = new Map(e.cache.value);
            p.restore({ value: t, fetchedAt: e.cache.fetchedAt });
        }
        A();
    }
    getState() {
        let e = p.serialize();
        return { cache: null != e ? { value: Array.from(e.value.entries()), fetchedAt: e.fetchedAt } : null };
    }
    passesGeneralUIInvariant(e) {
        if (!(0, _.O7)(e, "ProgramRewardsStore.passesGeneralUIInvariant")) return !1;
        if (e === d.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.next_reward_date,
                r = t.program_current_state;
            if (null == r) return !1;
            if (null == n || "" === n) {
                if (![d.L.PAYMENT_PROCESSING, d.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
        }
        return !0;
    }
    passesProgressBarInvariant(e) {
        if (!(0, _.O7)(e, "ProgramRewardsStore.passesProgressBarInvariant")) return !1;
        if (e === d.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = this.getTotalDaysInDuration(e);
            if (null == n) return !1;
            let r = t.next_reward_date;
            if (null == r || "" === r) return !1;
            let a = new Date(r).getTime();
            if (Number.isNaN(a) || a <= Date.now() || (0, i.default)(new Date(r), new Date()) > n) return !1;
        }
        return !0;
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
        return (
            !!(0, _.g_)("ProgramRewardsStore.shouldFetch") &&
            !!(0, _.mY)() &&
            (p.shouldFetch() || (0, f.A)(this.getRewardForProgram(d.W.NITRO)))
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
let C = new v(o.h, {
    LOGOUT: S,
    PROGRAM_REWARDS_FETCH: I,
    PROGRAM_REWARDS_FETCH_SUCCESS: T,
    PROGRAM_REWARDS_FETCH_FAILURE: y,
    CURRENT_USER_UPDATE: A,
    CONNECTION_OPEN: A,
});

n.d(t, {
    A: () => S,
}),
    n(896048);
var r,
    i = n(410530),
    a = n(892227),
    o = n(582972),
    s = n(311907),
    l = n(73153),
    c = n(431560),
    u = n(287809),
    d = n(927813),
    f = n(649032),
    p = n(26508);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = 864e5,
    m = new c.Z({
        ttlMs: h,
    });

function g() {
    let e = m.getValue();
    if (null == e)
        return {
            state: "MORE_THAN_24H_BEFORE_REWARD",
        };
    let t = new Date();
    for (let n of e.values()) {
        let e = new Date(n.next_reward_date);
        if (!isNaN(e.getTime())) {
            if (t >= e)
                return {
                    state: "PAST_REWARD_DATE",
                };
            if (t >= (0, i.default)(e, -1))
                return {
                    state: "LESS_THAN_24H_BEFORE_REWARD",
                    msUntilReward: (0, o.A)(e, t),
                };
        }
    }
    return {
        state: "MORE_THAN_24H_BEFORE_REWARD",
    };
}

function E(e, t) {
    return "LESS_THAN_24H_BEFORE_REWARD" === e && null != t ? t : h;
}

function y() {
    let { state: e, msUntilReward: t } = g();
    m.setTtl(E(e, t));
}

function b() {
    m.setLoading();
}

function O(e) {
    let { programRewards: t } = e;
    if (!m.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        m.setValue(n),
        y();
}

function v() {
    if (!m.isLoading()) return !1;
    m.setError();
}

function A() {
    m.clear();
}
class I extends (r = s.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(u.default), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            m.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
        y();
    }
    getState() {
        let e = m.serialize();
        return {
            cache:
                null != e
                    ? {
                          value: Array.from(e.value.entries()),
                          fetchedAt: e.fetchedAt,
                      }
                    : null,
        };
    }
    passesGeneralUIInvariant(e) {
        if (!(0, p.T0)("ProgramRewardsStore")) return !1;
        if (e === f.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.next_reward_date,
                r = t.program_current_state;
            if (null == r) return !1;
            if (null == n || "" === n) {
                if (![f.L.PAYMENT_PROCESSING, f.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
        }
        return !0;
    }
    passesProgressBarInvariant(e) {
        if (!(0, p.T0)("ProgramRewardsStore")) return !1;
        if (e === f.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.total_countdown_duration_ms;
            if (null == n || n <= 0) return !1;
            let r = t.next_reward_date;
            if (null == r || "" === r) return !1;
            let i = new Date(r).getTime();
            if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date()) > n / d.A.Millis.DAY)
                return !1;
        }
        return !0;
    }
    isFetching() {
        return m.isLoading();
    }
    isFetched() {
        return m.isValid();
    }
    hasCachedValue() {
        return null != m.getValue();
    }
    isReady() {
        return (
            !this.isFetching() &&
            (this.hasCachedValue() || !(0, p.T0)("ProgramRewardsStore") || this.isError() || !(0, p.mY)())
        );
    }
    shouldFetch() {
        return !!(0, p.T0)("ProgramRewardsStore.shouldFetch") && !!(0, p.mY)() && m.shouldFetch();
    }
    isError() {
        return m.isError();
    }
    getStatus() {
        return m.getStatus();
    }
    getRewardForProgram(e) {
        var t;
        return null == (t = m.getValue()) ? void 0 : t.get(e);
    }
    forceExpire() {
        m.forceExpire();
    }
}
_(I, "displayName", "ProgramRewardsStore"), _(I, "persistKey", "ProgramRewardsStore");
let S = new I(l.h, {
    LOGOUT: A,
    PROGRAM_REWARDS_FETCH: b,
    PROGRAM_REWARDS_FETCH_SUCCESS: O,
    PROGRAM_REWARDS_FETCH_FAILURE: v,
    CURRENT_USER_UPDATE: y,
    CONNECTION_OPEN: y,
});

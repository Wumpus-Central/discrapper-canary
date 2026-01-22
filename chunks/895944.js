n.d(t, {
    A: () => R,
}),
    n(896048);
var r,
    i = n(410530),
    a = n(892227),
    s = n(571136),
    o = n(311907),
    l = n(73153),
    c = n(431560),
    u = n(84483),
    d = n(572009),
    f = n(287809),
    p = n(927813),
    _ = n(474090),
    h = n(649032),
    m = n(788868);

function g(e, t, n) {
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
let E = 864e5,
    b = 3e4,
    y = 36e5,
    O = new c.Z({
        ttlMs: E,
    });

function A() {
    let e = O.getValue();
    if (null == e) return !1;
    let t = new Date();
    for (let n of e.values()) {
        let e = new Date(n.next_reward_date),
            r = (0, i.default)(e, 1);
        if (
            (0, s.default)(t, {
                start: e,
                end: r,
            })
        )
            return !0;
    }
    return !1;
}

function v() {
    (0, d.I9)(f.default.getCurrentUser()) ? O.setTtl(b) : A() ? O.setTtl(y) : O.setTtl(E);
}

function S() {
    O.setLoading();
}

function I(e) {
    let { programRewards: t } = e;
    if (!O.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        O.setValue(n),
        v();
}

function T() {
    if (!O.isLoading()) return !1;
    O.setError();
}

function C() {
    O.clear();
}
class N extends (r = o.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(f.default), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            O.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
        v();
    }
    getState() {
        let e = O.serialize();
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
        if (!this.isInProperTreatments()) return !1;
        if (e === h.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.next_reward_date,
                r = t.program_current_state;
            if (null == r) return !1;
            if (null == n || "" === n) {
                if (![h.L.PAYMENT_PROCESSING, h.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
        }
        return !0;
    }
    passesProgressBarInvariant(e) {
        if (!this.isInProperTreatments()) return !1;
        if (e === h.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.total_countdown_duration_ms;
            if (null == n || n <= 0) return !1;
            let r = t.next_reward_date;
            if (null == r || "" === r) return !1;
            let i = new Date(r).getTime();
            if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date()) > n / p.A.Millis.DAY)
                return !1;
        }
        return !0;
    }
    hasNecessaryPremiumSubscriptionStatus() {
        return (0, _.YE)(f.default.getCurrentUser(), m.PremiumTypes.TIER_2);
    }
    isInProperTreatments() {
        let { isInTreatment: e } = (0, u.v9)("ProgramRewardsStore");
        return e;
    }
    isFetching() {
        return O.isLoading();
    }
    isFetched() {
        return O.isValid();
    }
    hasCachedValue() {
        return null != O.getValue();
    }
    isReady() {
        return (
            !this.isFetching() &&
            (this.hasCachedValue() ||
                !this.isInProperTreatments() ||
                this.isError() ||
                !this.hasNecessaryPremiumSubscriptionStatus())
        );
    }
    shouldFetch() {
        return !!this.isInProperTreatments() && !!this.hasNecessaryPremiumSubscriptionStatus() && O.shouldFetch();
    }
    isError() {
        return O.isError();
    }
    getStatus() {
        return O.getStatus();
    }
    getRewardForProgram(e) {
        var t;
        return null == (t = O.getValue()) ? void 0 : t.get(e);
    }
    forceExpire() {
        O.forceExpire();
    }
}
g(N, "displayName", "ProgramRewardsStore"), g(N, "persistKey", "ProgramRewardsStore");
let R = new N(l.h, {
    LOGOUT: C,
    PROGRAM_REWARDS_FETCH: S,
    PROGRAM_REWARDS_FETCH_SUCCESS: I,
    PROGRAM_REWARDS_FETCH_FAILURE: T,
    CURRENT_USER_UPDATE: v,
    CONNECTION_OPEN: v,
});

n.d(t, {
    A: () => w,
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
    p = n(166403),
    _ = n(927813),
    h = n(474090),
    m = n(649032),
    g = n(788868);

function E(e, t, n) {
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
let y = 864e5,
    b = 3e4,
    O = 36e5,
    v = new c.Z({
        ttlMs: y,
    });

function A() {
    let e = v.getValue();
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

function I() {
    (0, d.I9)(f.default.getCurrentUser()) ? v.setTtl(b) : A() ? v.setTtl(O) : v.setTtl(y);
}

function S() {
    v.setLoading();
}

function T(e) {
    let { programRewards: t } = e;
    if (!v.isLoading()) return !1;
    let n = new Map();
    t.forEach((e) => {
        n.set(e.reward_program, e);
    }),
        v.setValue(n),
        I();
}

function C() {
    if (!v.isLoading()) return !1;
    v.setError();
}

function N() {
    v.clear();
}
class R extends (r = o.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(p.A, f.default), this.syncWith([p.A], () => {}), (null == e ? void 0 : e.cache) != null)) {
            let t = new Map(e.cache.value);
            v.restore({
                value: t,
                fetchedAt: e.cache.fetchedAt,
            });
        }
        I();
    }
    getState() {
        let e = v.serialize();
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
        if (e === m.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.next_reward_date,
                r = t.program_current_state;
            if (null == r) return !1;
            if (null == n || "" === n) {
                if (![m.L.PAYMENT_PROCESSING, m.L.PAYMENT_ERROR].includes(r)) return !1;
            } else {
                let e = new Date(n).getTime();
                if (Number.isNaN(e) || e < Date.now()) return !1;
            }
        }
        return !0;
    }
    passesProgressBarInvariant(e) {
        if (!this.isInProperTreatments()) return !1;
        if (e === m.W.NITRO) {
            let t = this.getRewardForProgram(e);
            if (null == t) return !1;
            let n = t.total_countdown_duration_ms;
            if (null == n || n <= 0) return !1;
            let r = t.next_reward_date;
            if (null == r || "" === r) return !1;
            let i = new Date(r).getTime();
            if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date()) > n / _.A.Millis.DAY)
                return !1;
        }
        return !0;
    }
    hasNecessaryPremiumSubscriptionStatus() {
        let e = p.A.getMostRecentPremiumTypeSubscription();
        return (0, h.YE)(f.default.getCurrentUser(), g.PremiumTypes.TIER_2) && null != e && !e.isPurchasedExternally;
    }
    isInProperTreatments() {
        let { isInTreatment: e } = (0, u.v9)("ProgramRewardsStore");
        return e;
    }
    isFetching() {
        return v.isLoading();
    }
    isFetched() {
        return v.isValid();
    }
    hasCachedValue() {
        return null != v.getValue();
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
        return !!this.isInProperTreatments() && !!this.hasNecessaryPremiumSubscriptionStatus() && v.shouldFetch();
    }
    isError() {
        return v.isError();
    }
    getStatus() {
        return v.getStatus();
    }
    getRewardForProgram(e) {
        var t;
        return null == (t = v.getValue()) ? void 0 : t.get(e);
    }
    forceExpire() {
        v.forceExpire();
    }
}
E(R, "displayName", "ProgramRewardsStore"), E(R, "persistKey", "ProgramRewardsStore");
let w = new R(l.h, {
    LOGOUT: N,
    PROGRAM_REWARDS_FETCH: S,
    PROGRAM_REWARDS_FETCH_SUCCESS: T,
    PROGRAM_REWARDS_FETCH_FAILURE: C,
    CURRENT_USER_UPDATE: I,
    CONNECTION_OPEN: I,
});

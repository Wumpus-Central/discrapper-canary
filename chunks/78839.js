n.d(t, { Z: () => B }), n(539854), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(301766),
    s = n(255078),
    l = n(314897),
    c = n(981631),
    u = n(474936);
function d(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = null,
    h = null,
    g = null,
    E = null,
    b = null,
    y = !1,
    O = null,
    v = !1,
    S = !1,
    I = null,
    T = !1,
    A = null;
function C(e) {
    let { subscriptions: t, lastLazyPerkSync: n } = e,
        r = {},
        i = {},
        a = [],
        o = [],
        u = l.default.getId();
    t.forEach((e) => {
        if (e.user_id !== u) return;
        let t = s.Q.createFromServer(e);
        (r[t.id] = t),
            U(t) &&
                ((i[t.id] = t),
                t.type === c.NYc.GUILD && t.status !== c.O0b.ENDED && a.push(t),
                t.type === c.NYc.APPLICATION && t.status !== c.O0b.ENDED && o.push(t));
    }),
        (m = r),
        (h = i),
        (E = a),
        (b = o),
        (A = n);
}
function N(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return U(n) && n.status !== c.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function P(e) {
    let { subscription: t } = e;
    if (t.user_id !== l.default.getId()) return;
    let n = s.Q.createFromServer(t);
    (m = _(f({}, m), { [n.id]: n })),
        U(n) && (h = _(f({}, h), { [n.id]: n })),
        null != E &&
            n.type === c.NYc.GUILD &&
            (E = N({
                activeSubscriptions: E,
                record: n,
            })),
        null != b &&
            n.type === c.NYc.APPLICATION &&
            (E = N({
                activeSubscriptions: b,
                record: n,
            }));
}
function R(e) {
    let { subscription: t } = e;
    if (((y = !0), (T = !1), null != t)) {
        if (t.user_id !== l.default.getId()) {
            y = !1;
            return;
        }
        g = s.Q.createFromServer(t);
    }
}
function D() {
    T = !1;
}
function w(e) {
    let { subscription: t } = e;
    if (((v = !0), null != t)) {
        if (t.user_id !== l.default.getId()) {
            v = !1;
            return;
        }
        O = s.Q.createFromServer(t);
    }
}
function x() {
    S = !0;
}
function L() {
    T = !0;
}
function j(e) {
    let { eligible: t } = e;
    (I = t), (S = !1);
}
function M(e) {
    let {} = e;
    (I = !1), (S = !1);
}
function k() {
    (m = null),
        (h = null),
        (g = null),
        (E = null),
        (b = null),
        (y = !1),
        (O = null),
        (v = !1),
        (S = !1),
        (T = !1),
        (A = null);
}
function U(e) {
    return e.status !== c.O0b.UNPAID;
}
function G(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? h : m;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (i.userId !== l.default.getId()) break;
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class Z extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    hasFetchedSubscriptions() {
        return null != m;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return y;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return v;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return G(c.NYc.PREMIUM, (e) => !(0, o.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return G(c.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = G(c.NYc.PREMIUM, void 0, !0);
        return null != e && null != e.trialId && !!u.h8.includes(e.trialId) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? h : m;
    }
    getSubscriptionById(e) {
        var t;
        return null != (t = null == m ? void 0 : m[e]) ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return E;
    }
    getActiveApplicationSubscriptions() {
        return b;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? h : m;
        return null == i
            ? null
            : null != (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId))))
              ? t
              : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return g;
    }
    getPreviousPremiumTypeSubscription() {
        return O;
    }
    getIsSubscriptionEligibleForReward() {
        return I;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return S;
    }
    getIsFetchingMostRecentSubscription() {
        return T;
    }
    getLastLazyPerkSync() {
        return A;
    }
    getPremiumGroupSubscription() {
        return G(c.NYc.PREMIUM, (e) => e.hasAnyPremiumGroup, !0);
    }
}
d(Z, "displayName", "SubscriptionStore");
let B = new Z(a.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: C,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: P,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: L,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: R,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: D,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: w,
    BILLING_SUBSCRIPTION_RESET: k,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: x,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: j,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: M,
    LOGOUT: k,
});

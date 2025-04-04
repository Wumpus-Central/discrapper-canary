n.d(t, {
    ZP: () => V,
    sE: () => G
}),
    n(653041),
    n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(710845),
    s = n(301766),
    l = n(255078),
    c = n(314897),
    u = n(122289),
    d = n(981631),
    f = n(474936);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = null,
    E = null,
    b = null,
    y = null,
    v = null,
    O = !1,
    I = !1,
    S = null,
    T = !1,
    N = !1,
    A = null,
    C = new a.Z('SubscriptionStore');
function R(e) {
    let { subscriptions: t } = e,
        n = {},
        r = {},
        i = [],
        o = [],
        a = c.default.getId();
    t.forEach((e) => {
        if (e.user_id !== a && !I) {
            C.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: a,
                        subscriptionId: e.id,
                        subscriptionUserId: e.user_id
                    }
                }),
                (I = !0);
            return;
        }
        let t = l.Q.createFromServer(e);
        (n[t.id] = t), U(t) && ((r[t.id] = t), t.type === d.NYc.GUILD && t.status !== d.O0b.ENDED && i.push(t), t.type === d.NYc.APPLICATION && t.status !== d.O0b.ENDED && o.push(t));
    }),
        (g = n),
        (E = r),
        (y = i),
        (v = o);
}
function P(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return U(n) && n.status !== d.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function w(e) {
    let { subscription: t } = e,
        n = l.Q.createFromServer(t);
    (g = m(p({}, g), { [n.id]: n })),
        U(n) && (E = m(p({}, E), { [n.id]: n })),
        null != y &&
            n.type === d.NYc.GUILD &&
            (y = P({
                activeSubscriptions: y,
                record: n
            })),
        null != v &&
            n.type === d.NYc.APPLICATION &&
            (y = P({
                activeSubscriptions: v,
                record: n
            }));
}
function D(e) {
    let { subscription: t } = e;
    if (((O = !0), null != t)) {
        let e = c.default.getId();
        if (t.user_id !== e && !I) {
            C.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (O = !1),
                (I = !0);
            return;
        }
        b = l.Q.createFromServer(t);
    }
}
function L(e) {
    let { subscription: t } = e;
    if (((T = !0), null != t)) {
        let e = c.default.getId();
        if (t.user_id !== e && !I) {
            C.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, u.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (T = !1),
                (I = !0);
            return;
        }
        S = l.Q.createFromServer(t);
    }
}
function x() {
    N = !0;
}
function M(e) {
    let { eligible: t } = e;
    (A = t), (N = !1);
}
function k(e) {
    let {} = e;
    (A = !1), (N = !1);
}
function j() {
    (g = null), (E = null), (b = null), (y = null), (v = null), (O = !1), (I = !1), (S = null), (T = !1), (N = !1);
}
function U(e) {
    return e.status !== d.O0b.UNPAID;
}
function G(e) {
    let t = c.default.getId();
    return e.userId === t;
}
function B(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? E : g;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (!G(i)) {
            if (!I) {
                let e = c.default.getId();
                C.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, u.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                        extra: {
                            authUserId: e,
                            subscriptionId: i.id,
                            subscriptionUserId: i.userId
                        }
                    }),
                    (I = !0);
            }
            break;
        }
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class F extends (r = i.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != g;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return O;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return T;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return B(d.NYc.PREMIUM, (e) => !(0, s.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return B(d.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = B(d.NYc.PREMIUM, void 0, !0);
        return null != e && null != e.trialId && !!f.h8.includes(e.trialId) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? E : g;
    }
    getSubscriptionById(e) {
        var t;
        return null != (t = null == g ? void 0 : g[e]) ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return y;
    }
    getActiveApplicationSubscriptions() {
        return v;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? E : g;
        return null == i ? null : null != (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId)))) ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return b;
    }
    getPreviousPremiumTypeSubscription() {
        return S;
    }
    getIsSubscriptionEligibleForReward() {
        return A;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return N;
    }
}
_(F, 'displayName', 'SubscriptionStore');
let V = new F(o.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: R,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: w,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: D,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: L,
    BILLING_SUBSCRIPTION_RESET: j,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: x,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: M,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: k,
    LOGOUT: j
});

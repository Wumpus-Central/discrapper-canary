(n.d(t, { Z: () => V }), n(539854), n(388685));
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = null,
    m = null,
    g = null,
    E = null,
    b = null,
    y = !1,
    O = null,
    v = !1,
    I = !1,
    T = null,
    S = !1,
    A = null;
function N(e) {
    let { subscriptions: t, lastLazyPerkSync: n } = e,
        r = {},
        i = {},
        a = [],
        o = [],
        u = l.default.getId();
    (t.forEach((e) => {
        if (e.user_id !== u) return;
        let t = s.Q.createFromServer(e);
        ((r[t.id] = t), U(t) && ((i[t.id] = t), t.type === c.NYc.GUILD && t.status !== c.O0b.ENDED && a.push(t), t.type === c.NYc.APPLICATION && t.status !== c.O0b.ENDED && o.push(t)));
    }),
        (h = r),
        (m = i),
        (E = a),
        (b = o),
        (A = n));
}
function C(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return (U(n) && n.status !== c.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e);
    }
}
function R(e) {
    let { subscription: t } = e;
    if (t.user_id !== l.default.getId()) return;
    let n = s.Q.createFromServer(t);
    ((h = p(f({}, h), { [n.id]: n })),
        U(n) && (m = p(f({}, m), { [n.id]: n })),
        null != E &&
            n.type === c.NYc.GUILD &&
            (E = C({
                activeSubscriptions: E,
                record: n
            })),
        null != b &&
            n.type === c.NYc.APPLICATION &&
            (E = C({
                activeSubscriptions: b,
                record: n
            })));
}
function P(e) {
    let { subscription: t } = e;
    if (((y = !0), (S = !1), null != t)) {
        if (t.user_id !== l.default.getId()) {
            y = !1;
            return;
        }
        g = s.Q.createFromServer(t);
    }
}
function w() {
    S = !1;
}
function D(e) {
    let { subscription: t } = e;
    if (((v = !0), null != t)) {
        if (t.user_id !== l.default.getId()) {
            v = !1;
            return;
        }
        O = s.Q.createFromServer(t);
    }
}
function L() {
    I = !0;
}
function x() {
    S = !0;
}
function M(e) {
    let { eligible: t } = e;
    ((T = t), (I = !1));
}
function k(e) {
    let {} = e;
    ((T = !1), (I = !1));
}
function j() {
    ((h = null), (m = null), (g = null), (E = null), (b = null), (y = !1), (O = null), (v = !1), (I = !1), (S = !1), (A = null));
}
function U(e) {
    return e.status !== c.O0b.UNPAID;
}
function G(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? m : h;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (i.userId !== l.default.getId()) break;
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class B extends (r = i.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != h;
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
        return e ? m : h;
    }
    getSubscriptionById(e) {
        var t;
        return null != (t = null == h ? void 0 : h[e]) ? t : void 0;
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
            i = n ? m : h;
        return null == i ? null : null != (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId)))) ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return g;
    }
    getPreviousPremiumTypeSubscription() {
        return O;
    }
    getIsSubscriptionEligibleForReward() {
        return T;
    }
    getIsFetchingSubscriptionRewardEligibility() {
        return I;
    }
    getIsFetchingMostRecentSubscription() {
        return S;
    }
    getLastLazyPerkSync() {
        return A;
    }
}
d(B, 'displayName', 'SubscriptionStore');
let V = new B(a.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: N,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: R,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: x,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: P,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: w,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: D,
    BILLING_SUBSCRIPTION_RESET: j,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: L,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: M,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: k,
    LOGOUT: j
});

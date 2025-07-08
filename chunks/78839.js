(n.d(t, { Z: () => U }), n(539854), n(388685));
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
    S = null;
function A(e) {
    let { subscriptions: t, lastLazyPerkSync: n } = e,
        r = {},
        i = {},
        a = [],
        o = [],
        u = l.default.getId();
    (t.forEach((e) => {
        if (e.user_id !== u) return;
        let t = s.Q.createFromServer(e);
        ((r[t.id] = t), M(t) && ((i[t.id] = t), t.type === c.NYc.GUILD && t.status !== c.O0b.ENDED && a.push(t), t.type === c.NYc.APPLICATION && t.status !== c.O0b.ENDED && o.push(t)));
    }),
        (h = r),
        (m = i),
        (E = a),
        (b = o),
        (S = n));
}
function N(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return (M(n) && n.status !== c.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e);
    }
}
function C(e) {
    let { subscription: t } = e;
    if (t.user_id !== l.default.getId()) return;
    let n = s.Q.createFromServer(t);
    ((h = p(f({}, h), { [n.id]: n })),
        M(n) && (m = p(f({}, m), { [n.id]: n })),
        null != E &&
            n.type === c.NYc.GUILD &&
            (E = N({
                activeSubscriptions: E,
                record: n
            })),
        null != b &&
            n.type === c.NYc.APPLICATION &&
            (E = N({
                activeSubscriptions: b,
                record: n
            })));
}
function R(e) {
    let { subscription: t } = e;
    if (((y = !0), null != t)) {
        if (t.user_id !== l.default.getId()) {
            y = !1;
            return;
        }
        g = s.Q.createFromServer(t);
    }
}
function P(e) {
    let { subscription: t } = e;
    if (((v = !0), null != t)) {
        if (t.user_id !== l.default.getId()) {
            v = !1;
            return;
        }
        O = s.Q.createFromServer(t);
    }
}
function w() {
    I = !0;
}
function D(e) {
    let { eligible: t } = e;
    ((T = t), (I = !1));
}
function L(e) {
    let {} = e;
    ((T = !1), (I = !1));
}
function x() {
    ((h = null), (m = null), (g = null), (E = null), (b = null), (y = !1), (O = null), (v = !1), (I = !1), (S = null));
}
function M(e) {
    return e.status !== c.O0b.UNPAID;
}
function k(e, t) {
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
class j extends (r = i.ZP.Store) {
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
        return k(c.NYc.PREMIUM, (e) => !(0, o.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return k(c.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = k(c.NYc.PREMIUM, void 0, !0);
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
    getLastLazyPerkSync() {
        return S;
    }
}
d(j, 'displayName', 'SubscriptionStore');
let U = new j(a.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: A,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: C,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: R,
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: P,
    BILLING_SUBSCRIPTION_RESET: x,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: w,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: D,
    BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: L,
    LOGOUT: x
});
